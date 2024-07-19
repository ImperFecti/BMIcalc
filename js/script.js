// Event listener untuk form submit
document.getElementById("bmiForm").addEventListener("submit", function (e) {
  // Mencegah form dari submit default
  e.preventDefault();

  // Mendapatkan nilai input dari form
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100;
  const gender = document.getElementById("gender").value;

  // Memeriksa apakah input valid
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0 || !gender) {
    alert(
      "Masukkan nilai yang valid untuk berat dan tinggi badan serta pilih jenis kelamin."
    );
    return;
  }

  // Menyembunyikan paragraf di bawah h1 ketika menekan tombol hitung BMI
  const paragraphs = document.querySelectorAll("h1 + p, h1 + p + p");
  paragraphs.forEach((paragraph) => (paragraph.style.display = "none"));

  // Menghitung BMI
  const bmi = (weight / (height * height)).toFixed(2);
  let category = "";
  let explanation = "";

  // Menentukan kategori BMI dan penjelasannya
  if (bmi < 18.5) {
    category = "Lack of Weight";
    explanation =
      "Your BMI indicates that you are underweight. Consider consulting with a healthcare provider to determine possible causes and strategies for healthy weight gain.";
  } else if (bmi < 24.9) {
    category = "Normal Weight";
    explanation =
      "Your BMI is within the normal range. Maintain a balanced diet and regular physical activity to keep your BMI within this range.";
  } else if (bmi < 29.9) {
    category = "Excess Weight";
    explanation =
      "Your BMI indicates that you are overweight. Consider adopting a healthier diet and increasing physical activity to reduce your weight.";
  } else {
    category = "Obesity";
    explanation =
      "Your BMI indicates obesity. It is important to consult with a healthcare provider to address potential health risks and develop a weight management plan.";
  }

  // Print out hasil BMI
  document.getElementById("result").innerHTML = `
        <hr>
        <h2>${category}</h2>
        <p>Your <b>BMI</b> results are ${bmi}</p>
        <p>${explanation}</p>
        <p>Gender: ${gender}</p>
    `;
});

// Event listener untuk tombol reset
document.getElementById("resetButton").addEventListener("click", function () {
  // Mengosongkan hasil BMI
  document.getElementById("result").innerHTML = "";

  // Menampilkan kembali paragraf di bawah h1
  const paragraphs = document.querySelectorAll("h1 + p, h1 + p + p");
  paragraphs.forEach((paragraph) => (paragraph.style.display = "block"));
});
