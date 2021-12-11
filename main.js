Webcam.set({
width:300,
height:250,
image_format:'png',
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot() {
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
});
}
console.log("Ml5", ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/F621HfItY/model.json',modelLoaded);
function modelLoaded() {
console.log("ModelLoaded");   
}
function check(){
image=document.getElementById("captured_image");
classifier.classify(image,gotResult);
}
 function identify(error, results){
if (error) {
    console.error(error);
}
else{
console.log(results);
document.getElementById("mem").innerHTML=results[0].label;
document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);
}
}