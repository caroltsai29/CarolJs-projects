const lightBlubImage = document.getElementById("lightBulb")
const onOffButton = document.getElementById("btnOnOff")

function light(value) {
    var picSrc;
    if (value == 0) {
        picSrc = "off.png"
    } else {
        picSrc = "on.png"
    }

    lightBlubImage.src = pic;
}


funtion onOffButton() {
    onOffButton.addEventListener('click', function {
        console.log('hi');
    })
}

onOffButton()