```javascript
const openBtn = document.getElementById("openBtn");

const intro = document.getElementById("intro");

const surprise = document.getElementById("surprise");

const typedMessage = document.getElementById("typedMessage");

const hearts = document.getElementById("hearts");

const music = document.getElementById("music");

const musicBtn = document.getElementById("musicBtn");

const musicText = document.getElementById("musicText");


/* پیام اصلی */

const message =
  "شاید همیشه بهت نگم، ولی بودنت توی زندگی من باعث میشه حتی روزهای معمولی هم یه جور خاص قشنگ بشن. این سورپرایز کوچیک فقط یه یادآوریه که بدونی چقدر برام خاصی. ❤️";


/* باز کردن سورپرایز */

openBtn.addEventListener("click", () => {

  openBtn.classList.add("opening");

  setTimeout(() => {

    intro.classList.add("hide");

    surprise.classList.add("show");

    createHearts(40);

    typeMessage();

  }, 650);

});


/* افکت تایپ متن */

function typeMessage() {

  let index = 0;

  const typing = setInterval(() => {

    typedMessage.textContent += message[index];

    index++;

    if (index >= message.length) {

      clearInterval(typing);

    }

  }, 35);

}


/* ساخت قلب ها */

function createHearts(amount) {

  const symbols = [
    "♥",
    "♡",
    "✦",
    "✧"
  ];

  for (let i = 0; i < amount; i++) {

    const heart = document.createElement("span");

    heart.className = "heart";

    heart.textContent =
      symbols[
        Math.floor(
          Math.random() * symbols.length
        )
      ];

    heart.style.left =
      Math.random() * 100 + "%";

    heart.style.animationDuration =
      3 + Math.random() * 4 + "s";

    heart.style.animationDelay =
      Math.random() * 1.5 + "s";

    heart.style.fontSize =
      10 + Math.random() * 18 + "px";

    hearts.appendChild(heart);

    setTimeout(() => {

      heart.remove();

    }, 8000);

  }

}


/* موزیک */

musicBtn.addEventListener("click", async () => {

  try {

    if (music.paused) {

      await music.play();

      musicBtn.classList.add("playing");

      musicText.textContent =
        "PAUSE OUR SONG";

    } else {

      music.pause();

      musicBtn.classList.remove("playing");

      musicText.textContent =
        "PLAY OUR SONG";

    }

  } catch (error) {

    musicText.textContent =
      "ADD YOUR SONG";

  }

});


/* پایان موزیک */

music.addEventListener("ended", () => {

  musicBtn.classList.remove("playing");

  musicText.textContent =
    "PLAY OUR SONG";

});
```
