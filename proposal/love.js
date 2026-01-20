const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const music = document.getElementById("bgMusic");
const overlay = document.getElementById("clickStart");
overlay.addEventListener("click", () => {
    music.play().catch(err => {
        console.log("Music error:", err);
    });
    overlay.style.display = "none";
});




yesBtn.addEventListener("click", () => {
    document.body.innerHTML = `
        <div class="final">
            <h1>Yayyy! 🎉❤️</h1>
            <p>
                You just made me the happiest person alive.<br>
                I promise to love you forever 💖
            </p>
        </div>
    `;
});

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 250;
    const y = Math.random() * 120;

    noBtn.style.transform = `translate(-${x}px, ${y}px)`;
});
