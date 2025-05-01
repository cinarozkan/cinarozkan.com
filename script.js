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
    document.getElementById("tahminiZaman").innerText = "Estimated Time To Finish: N/A";
} else {
    document.getElementById("tahminiZaman").innerText = "";
}