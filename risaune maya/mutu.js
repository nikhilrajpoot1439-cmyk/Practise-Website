const music = document.getElementById("bgMusic");
const start = document.getElementById("start");
const forgive = document.getElementById("forgive");
const ignore = document.getElementById("ignore");
const msg = document.getElementById("msg");
const hearts = document.querySelector(".hearts");
const petals = document.querySelector(".petals");

start.onclick = () => {
    music.play();
    start.style.display = "none";
    petalRain();
};

forgive.onclick = () => {
    msg.innerHTML = `
        Thank you baby 😍❤️  
        aba ris nagara na 🥹  
        **timro smile nai mero duniya ho** 🌍💖  
        I love you so much 😘
        you are always my special person
    `;
    heartRain();
};

ignore.onclick = () => {
    ignore.style.position = "absolute";
    ignore.style.left = Math.random() * 250 + "px";
    ignore.style.top = Math.random() * 200 + "px";
};

/* Hearts */
function heartRain() {
    setInterval(() => {
        const h = document.createElement("span");
        h.innerHTML = "❤️";
        h.style.left = Math.random() * window.innerWidth + "px";
        h.style.bottom = "0";
        hearts.appendChild(h);
        setTimeout(() => h.remove(), 6000);
    }, 250);
}

/* Rose petals */
function petalRain() {
    setInterval(() => {
        const p = document.createElement("span");
        p.innerHTML = "🌹";
        p.style.left = Math.random() * window.innerWidth + "px";
        p.style.top = "-30px";
        petals.appendChild(p);
        setTimeout(() => p.remove(), 7000);
    }, 300);
}
