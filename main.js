Webcam.set({
    width: 350,
    height: 300,
    image_format: 'jpg',
    jpg_quality: 90
})

var Predict1="";
var Predict2="";

var Camara = document.getElementById("camera");

Webcam.attach('#camera');

function take(){
    Webcam.snap(function (datauri){
        document.getElementById("result").innerHTML = '<img id="imagen" src="' + datauri + '"/>'; 
    });
}
console.log("ml5 version "+ ml5.version);

var Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/V8vukYtjh/model.json", modelLoaded);

function modelLoaded(){
    console.log("ModelLoaded");
}
function speak(){
    var speech=window.speechSynthesis;
    var speech1="La 1ra prediccion es: "+ Predict1;
    var speech2="La 2da prediccion es: "+ Predict2;
    var texto=new SpeechSynthesisUtterance(speech1 + speech2);
    speech.speak(texto);
}
