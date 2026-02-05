const music = document.getElementById("bgMusic");
const clickStart = document.getElementById("clickStart");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const ring = document.querySelector(".ring");

clickStart.addEventListener("click", () => {
    music.play();
    clickStart.style.display = "none";
});

yesBtn.addEventListener("click", () => {
    ring.style.display = "block";

    setTimeout(() => {
        document.body.innerHTML = `
            <div class="final">
                <h1>She Said YES 💖</h1>
                <p>Now my forever has a name 💍</p>
            </div>
        `;
    }, 2000);
});

noBtn.addEventListener("mouseover", () => {
    noBtn.style.transform =
        `translate(-${Math.random()*300}px, ${Math.random()*150}px)`;
});
