const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const chatBox = document.getElementById("chatBox");
const messages = document.getElementById("messages");
const music = document.getElementById("bgMusic");

const actions = document.getElementById("actions");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const photoScreen = document.getElementById("photoScreen");
const response = document.getElementById("response");

const chatMessages = [
    "Hey my love ❤️",
    "I want to say something honestly from my heart…",
    "Being with you feels safe, warm, and real 🤍",
    "But before I ask anything…",
    "I want to know what YOU truly feel 💭",
    "Do you see a future with me? 💍"
];

// STEP 1: START
startBtn.addEventListener("click", () => {
    startScreen.style.display = "none";
    chatBox.classList.remove("hidden");
    music.play().catch(() => {});
    showMessages();
});

// STEP 2: CHAT FLOW
function showMessages() {
    let index = 0;
    messages.innerHTML = ""; // reset safety

    const interval = setInterval(() => {
        if (index < chatMessages.length) {
            const msg = document.createElement("div");
            msg.className = "msg " + (index === chatMessages.length - 1 ? "right" : "left");
            msg.innerText = chatMessages[index];
            messages.appendChild(msg);
            messages.scrollTop = messages.scrollHeight;
            index++;
        } else {
            clearInterval(interval);

            // STEP 3: SHOW ACTIONS AFTER CHAT ENDS
            setTimeout(() => {
                actions.classList.remove("hidden");
            }, 500);
        }
    }, 1500);
}

// STEP 4: YES
yesBtn.addEventListener("click", () => {
    chatBox.classList.add("hidden");
    actions.classList.add("hidden");
    photoScreen.classList.remove("hidden");
});

// STEP 5: NOT YET
noBtn.addEventListener("click", () => {
    chatBox.classList.add("hidden");
    actions.classList.add("hidden");
    response.classList.remove("hidden");
});
