document.addEventListener("DOMContentLoaded", function () {

    let selectedGender = null;

    const male = document.getElementById("male");
    const female = document.getElementById("female");

    male.addEventListener("click", function () {
        selectedGender = "male";
        console.log(selectedGender);
    });

    female.addEventListener("click", function () {
        selectedGender = "female";
        console.log(selectedGender);
    });

    const btn = document.getElementById("calculateBtn");

    btn.addEventListener("click", function () {

        let height = document.getElementById("height").value;
        let weight = document.getElementById("weight").value;
        let result = document.getElementById("bmiValue");

        if (!height || !weight) {
            alert("Masukkan data dulu!");
            return;
        }

        if (!selectedGender) {
            alert("Pilih gender dulu!");
            return;
        }

        height = height / 100;
        let bmi = weight / (height * height);

        result.className = "";

        if (selectedGender === "female") {

            if (bmi < 18) {
                result.classList.add("kurus");
                result.innerText = bmi.toFixed(1) + " (Kurus)";
            } else if (bmi < 23) {
                result.classList.add("normal");
                result.innerText = bmi.toFixed(1) + " (Normal)";
            } else if (bmi < 27) {
                result.classList.add("gemuk");
                result.innerText = bmi.toFixed(1) + " (Gemuk)";
            } else {
                result.classList.add("obesitas");
                result.innerText = bmi.toFixed(1) + " (Obesitas)";
            }

        } else {

            if (bmi < 18.5) {
                result.classList.add("kurus");
                result.innerText = bmi.toFixed(1) + " (Kurus)";
            } else if (bmi < 23) {
                result.classList.add("normal");
                result.innerText = bmi.toFixed(1) + " (Normal)";
            } else if (bmi < 25) {
                result.classList.add("gemuk");
                result.innerText = bmi.toFixed(1) + " (Gemuk)";
            } else {
                result.classList.add("obesitas");
                result.innerText = bmi.toFixed(1) + " (Obesitas)";
            }
        }

        const infoBox = document.getElementById("infoBox");

let status = "";
let desc = "";
let risk = "";
let btnText = "Mulai Konsultasi FINS";

if (bmi < 18.5) {
    status = "Berat Rendah";
    desc = "Pola makan kurang seimbang dapat menyebabkan tubuh kekurangan energi.";
    risk = "Dalam 60% kasus, kondisi ini berisiko gangguan metabolisme.";
} else if (bmi < 23) {
    status = "Normal";
    desc = "Kondisi tubuh kamu ideal. Pertahankan pola hidup sehat.";
    risk = "Risiko penyakit tergolong rendah.";
} else if (bmi < 25) {
    status = "Berat Berlebih";
    desc = "Mulai ada kelebihan lemak tubuh.";
    risk = "Berisiko diabetes jika tidak dikontrol.";
} else {
    status = "Obesitas";
    desc = "Kelebihan berat badan yang signifikan.";
    risk = "Risiko tinggi penyakit jantung dan diabetes.";
}

infoBox.innerHTML = `
    <h3>BMI Kamu : ${bmi.toFixed(1)}, ${status}</h3>
    <p>${desc}</p>
    <p>${risk}</p>
    <a href="tanyaAI.html" class="consult-btn">Mulai Konsultasi</a>
`;

    });

});