const chatBox = document.getElementById("chatBox");

function addMessage(text, sender) {
    const msg = document.createElement("div");
    msg.classList.add("message", sender);
    msg.innerText = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById("userInput");
    const text = input.value.toLowerCase();

    if (text === "") return;

    addMessage(input.value, "user");

    const reply = getBotResponse(text);
    setTimeout(() => addMessage(reply, "bot"), 500);

    input.value = "";
}

/* ====== DATABASE INTENT + KEYWORDS ====== */
const intents = [
    {
        keywords: ["hai fins", "hai", "halo", "p", "hello", "hi"],
        responses: [
            "Halo! Ada yang bisa saya bantu?",
            "Hai! Mau tanya soal apa?",
            "Halo, saya siap membantu kamu."
        ]
    },
    {
        keywords: ["bmi", "body mass index", "berat ideal", "hitung bmi", "nilai bmi", "angka bmi", "cara hitung bmi"],
        responses: [
            "BMI adalah indikator untuk mengetahui apakah berat badan kamu ideal berdasarkan tinggi badan.",
            "Rumus BMI: berat badan (kg) dibagi tinggi badan (m) kuadrat.",
            "BMI membantu mengklasifikasikan apakah kamu underweight, normal, overweight, atau obesitas."
        ]
    },
    {
        keywords: ["hasil bmi", "kategori bmi", "bmi normal", "bmi ideal"],
        responses: [
            "Kategori BMI: <18.5 kurus, 18.5–24.9 normal, 25–29.9 overweight, >30 obesitas.",
            "BMI normal ada di rentang 18.5 sampai 24.9.",
            "Kalau BMI kamu di atas normal, risiko penyakit meningkat."
        ]
    },
    {
        keywords: ["olahraga", "workout", "latihan", "gym", "fitness", "kardio", "lari", "push up", "sit up"],
        responses: [
            "Olahraga rutin membantu menjaga kesehatan jantung dan meningkatkan stamina.",
            "Kombinasi kardio dan latihan kekuatan adalah yang paling efektif.",
            "Minimal olahraga 3-5 kali seminggu untuk hasil optimal."
        ]
    },
    {
        keywords: ["olahraga pemula", "mulai olahraga", "latihan pemula"],
        responses: [
            "Untuk pemula, mulai dari jalan kaki, skipping, atau latihan ringan seperti push up.",
            "Jangan langsung berat, fokus konsistensi dulu.",
            "Mulai 15-20 menit per hari sudah cukup untuk pemula."
        ]
    },
    {
        keywords: ["diet", "menurunkan berat badan", "kurus", "defisit kalori", "diet sehat"],
        responses: [
            "Diet efektif adalah defisit kalori dengan tetap menjaga nutrisi.",
            "Hindari diet ekstrem, fokus pada pola makan seimbang.",
            "Turun berat badan yang sehat itu bertahap, bukan instan."
        ]
    },
    {
        keywords: ["makan sehat", "nutrisi", "gizi", "protein", "karbohidrat", "lemak sehat"],
        responses: [
            "Pola makan sehat terdiri dari protein, karbohidrat kompleks, dan lemak sehat.",
            "Jangan lupa konsumsi sayur dan buah setiap hari.",
            "Nutrisi seimbang penting untuk energi dan metabolisme."
        ]
    },
    {
        keywords: ["air putih", "hidrasi", "minum air", "kurang minum"],
        responses: [
            "Minum minimal 2 liter air per hari penting untuk tubuh.",
            "Kurang minum bisa menyebabkan dehidrasi dan lemas.",
            "Air membantu metabolisme dan menjaga fungsi organ."
        ]
    },
    {
        keywords: ["tidur", "istirahat", "begadang", "kurang tidur"],
        responses: [
            "Tidur 7-9 jam sangat penting untuk pemulihan tubuh.",
            "Kurang tidur bisa mengganggu metabolisme dan fokus.",
            "Hindari begadang jika ingin kesehatan optimal."
        ]
    },
    {
        keywords: ["stres", "stress", "cemas", "mental"],
        responses: [
            "Stres bisa mempengaruhi kesehatan fisik dan mental.",
            "Coba olahraga ringan atau relaksasi untuk mengurangi stres.",
            "Jangan ragu untuk cerita ke orang terpercaya."
        ]
    }
];

/* ====== LOGIC ====== */
function getBotResponse(input) {
    for (let intent of intents) {
        for (let keyword of intent.keywords) {
            if (input.includes(keyword)) {
               const responses = intent.responses;
               return responses[Math.floor(Math.random() * responses.length)];
            }
        }
    }

    return "Maaf saya hanya bisa menjawab pertanyaan seputar kesehatan.";
}