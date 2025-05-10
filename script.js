const randomTitleSentence = [
    "🚧Under construction.",
    "🍳Something cooking here..",
    "👷‍♂️You came early. Still working on it.",
    "🌐The website will be done soon.",
    "⏰Good things take time, under construction!",
    "🫡Still working on this website.",
    "😉Sadly we need some more time to finish this.",
    "🧑‍💻Please give us some time to complete this website.",
];

function randomTextGenerate() {
    const randomIndex = Math.floor(Math.random() * randomTitleSentence.length);
    document.getElementById("randomTitle").textContent = randomTitleSentence[randomIndex];
}
randomTextGenerate();

let estimatedFinishTime = 0;
if (estimatedFinishTime === 0) {
    document.getElementById("estimatedFinishTime").innerText = "🕒Estimated Time To Finish: N/A";
} else {
    document.getElementById("estimatedFinishTime").innerText = "🕒Estimated Time To Finish: ";
}

let liveWork = 0; // 0 = No, 1 = Yes
const lastWorkDateTime = "10.05.2025 22.37" // Input last work time and date. Only visible if LiveWork = 0. Format: DD.MM.YYYY HH:MM (UTC+3.00)
if (liveWork === 0) {
    document.getElementById("liveWork").innerHTML = '🔴Am I Working on the Website <span class="Underline">Right Now?</span> --> No.🚫';
    document.getElementById("lastWorkTime").innerHTML = "☕The Last Time I Was Working: " + lastWorkDateTime + " (UTC+3.00)";
} else {
    document.getElementById("liveWork").innerHTML = '🔴Am I Working on the Website <span class="Underline">Right Now?</span> --> Yes.🧑‍💻✅';
}