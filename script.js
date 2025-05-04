const yazilar = [
    "🚧Under construction.",
    "🍳Something cooking here..",
    "👷‍♂️You came early. Still working on it.",
    "🌐The website will be done soon.",
    "⏰Good things take time, under construction!",
    "🫡Still working on this website.",
    "😉Sadly we need some more time to finish this.",
    "🧑‍💻Please give us some time to complete this website.",
];

function yaziYenile() {
    const randomIndex = Math.floor(Math.random() * yazilar.length);
    document.getElementById("randomYazi").textContent = yazilar[randomIndex];
}
yaziYenile();

let tahminiZaman = 0;
if (tahminiZaman === 0) {
    document.getElementById("tahminiZaman").innerText = "🕒Estimated Time To Finish: N/A";
} else {
    document.getElementById("tahminiZaman").innerText = "🕒Estimated Time To Finish: ";
}

let LiveWork = 0; // 0 = No, 1 = Yes
const lastWorkDateTime = "04.05.2025 12.59" // Input last work time and date. Only visible if LiveWork = 0. Format: DD.MM.YYYY HH:MM (UTC+3.00)
if (LiveWork === 0) {
    document.getElementById("LiveWork").innerHTML = '🔴Am I Working on the Website <span class="Underline">Right Now?</span> --> No.🚫';
    document.getElementById("lastWorkTime").innerHTML = "☕The Last Time I Was Working: " + lastWorkDateTime + " (UTC+3.00)";
} else {
    document.getElementById("LiveWork").innerHTML = '🔴Am I Working on the Website <span class="Underline">Right Now?</span> --> Yes.🧑‍💻✅';
}