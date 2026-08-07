const openBtn = document.getElementById("openBtn");
const surprise = document.getElementById("surprise");
const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("music");
const hearts = document.getElementById("hearts");

openBtn.addEventListener("click", function () {

    openBtn.disabled = true;

    document.querySelector(".container").style.animation =
        "reveal 0.8s ease reverse forwards";

    setTimeout(function () {

        document.querySelector(".container").style.display = "none";

        surprise.classList.remove("hidden");

        createHearts();

    }, 700);
});


musicBtn.addEventListener("click", function () {

    if (music.paused) {

        music.play()
            .then(function () {
                musicBtn.innerHTML = "♫ PAUSE OUR SONG";
            })
            .catch(function () {
                musicBtn.innerHTML = "♫ MUSIC NOT FOUND";
            });

    } else {

        music.pause();

        musicBtn.innerHTML = "♫ PLAY OUR SONG";
    }
});


function createHearts() {

    for (let i = 0; i < 25; i++) {

        setTimeout(function () {

            const heart = document.createElement("div");

            heart.className = "floating-heart";

            heart.innerHTML = "♥";

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.fontSize =
                (15 + Math.random() * 25) + "px";

            heart.style.animationDuration =
                (3 + Math.random() * 3) + "s";

            hearts.appendChild(heart);

            setTimeout(function () {
                heart.remove();
            }, 6000);

        }, i * 120);
    }
}
