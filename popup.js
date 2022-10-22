if (document.querySelector(".popup")) {
    const button = document.querySelector(".button");
    const circle = document.querySelector(".circle")
    let buttonOn = false;
    function invert() {
        alert("hi")
        document.body.style.filter = "invert(1) hue-rotate(180deg)";
        let media = document.querySelectorAll("img, picture, video");
        media.forEach((mediaItem) => {
            mediaItem.style.filter = "invert(1) hue-rotate(180deg)"
        })
    }
    button.addEventListener("click", () => {
        if (!buttonOn) {
            buttonOn = true;

            button.style.animation = "transformToBlue 1s ease-in-out 0s forwards"
            circle.style.animation = "moveCircleRight 1s ease-in-out 0s forwards"
            chrome.tabs.executeScript({
                file: 'appOn.js'
            })
        }
        else {
            buttonOn = false;
            button.style.animation = "transformToYellow 1s ease-in-out 0s forwards"
            circle.style.animation = "moveCircleLeft 1s ease-in-out 0s forwards"
            chrome.tabs.executeScript({
                file: 'appOff.js'
            })
        }
    })

}

if (document.querySelector(".popup")) {
    const button2 = document.querySelector(".button2");
    const circle2 = document.querySelector(".circle2")
    let buttonOn2 = false;
    function invert() {
        alert("hi")
        document.body.style.filter = "invert(1) hue-rotate(180deg)";
        let media = document.querySelectorAll("img, picture, video");
        media.forEach((mediaItem) => {
            mediaItem.style.filter = "invert(1) hue-rotate(180deg)"
        })
    }
    button.addEventListener("click", () => {
        if (!buttonOn2) {
            buttonOn2 = true;

            button2.style.animation = "transformToBlue 1s ease-in-out 0s forwards"
            circle2.style.animation = "moveCircleRight 1s ease-in-out 0s forwards"
            chrome.tabs.executeScript({
                file: 'appOn.js'
            })
        }
        else {
            buttonOn2 = false;
            button2.style.animation = "transformToYellow 1s ease-in-out 0s forwards"
            circle2.style.animation = "moveCircleLeft 1s ease-in-out 0s forwards"
            chrome.tabs.executeScript({
                file: 'appOff.js'
            })
        }
    })

}

if (document.querySelector(".popup")) {
    const button3 = document.querySelector(".button3");
    const circle3 = document.querySelector(".circle3")
    let buttonOn3 = false;
    function invert() {
        alert("hi")
        document.body.style.filter = "invert(1) hue-rotate(180deg)";
        let media = document.querySelectorAll("img, picture, video");
        media.forEach((mediaItem) => {
            mediaItem.style.filter = "invert(1) hue-rotate(180deg)"
        })
    }
    button.addEventListener("click", () => {
        if (!buttonOn3) {
            buttonOn3 = true;

            button3.style.animation = "transformToBlue 1s ease-in-out 0s forwards"
            circle3.style.animation = "moveCircleRight 1s ease-in-out 0s forwards"
            chrome.tabs.executeScript({
                file: 'appOn.js'
            })
        }
        else {
            buttonOn3 = false;
            button3.style.animation = "transformToYellow 1s ease-in-out 0s forwards"
            circle3.style.animation = "moveCircleLeft 1s ease-in-out 0s forwards"
            chrome.tabs.executeScript({
                file: 'appOff.js'
            })
        }
    })

}


