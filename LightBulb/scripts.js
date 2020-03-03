const lightBlubImage = document.getElementById("lightBulb")
const onOffButton = document.getElementById("btnOnOff")


// function light(value) {
//     var picSrc;
//     if (value == 0) {
//         picSrc = "img/off.png"
//     } else {
//         picSrc = "img/on.png"
//     }

//     lightBlubImage.src = pic;
// }


// funtion def_onOffButton() {
//     onOffButton.addEventListener('click', function {
//         console.log('hi');
//     })
// }

function btnSwitch(value) {
    var value;
    var picSrc;
    onOffButton.addEventListener('click', function() {
        if (value == 0) {
            value = 1;
            picSrc = "img/off.png";

        } else {
            value = 0;
            picSrc = "img/on.png";
        }

        lightBlubImage.src = picSrc;
    })
}

btnSwitch(0);