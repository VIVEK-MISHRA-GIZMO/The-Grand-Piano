const btn = document.getElementsByClassName('btn')

Array.from(btn).forEach(function (element) {
    element.addEventListener('click', () => {
        // alert(element.innerText)
        const audioElement = new Audio(`./${element.innerText}.mp3`)
        audioElement.play();
    })
});

Array.from(btn).forEach(function (element) {
    document.addEventListener('keypress', (e) => {
        if (e.code =='KeyA') {
            const audioElement = new Audio("./SA.mp3")
            audioElement.play()
        }
        else if (e.code == 'KeyS') {
            const audioElement = new Audio("./RE.mp3")
            audioElement.play()
        }
        else if (e.code == 'KeyD') {
            const audioElement = new Audio("./GA.mp3")
            audioElement.play()
        }
        else if (e.code == 'KeyF') {
            const audioElement = new Audio("./MA.mp3")
            audioElement.play()
        }
        else if (e.code == 'KeyG') {
            const audioElement = new Audio("./PA.mp3")
            audioElement.play()
        }
        else if (e.code == 'KeyH') {
            const audioElement = new Audio("./DHA.mp3")
            audioElement.play()
        }
        else if (e.code == 'KeyJ') {
            const audioElement = new Audio("./NI.mp3")
            audioElement.play()
        }
        else if (e.code == 'KeyK') {
            const audioElement = new Audio("./SA.mp3")
            audioElement.play()
        }
    })
})