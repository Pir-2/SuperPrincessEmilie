var errorCallback = function(e) { console.log('erreur!', e); };
var video = document.querySelector('video');
var canvas = document.querySelector('canvas');
var canvas2 = document.getElementById('inputCanvas2');
var input = document.getElementById('photo');
var dl = document.getElementById('download');
canvas2.style.position = "absolute";
canvas2.style.top = '0px';
canvas2.style.left = '800px';
canvas2.style.zIndex = '100001';
canvas2.style.display = 'block';
var img = new Image();
img.src = "img/peruque.png";
var ctx = canvas.getContext('2d');
var localMediaStream = null;

function snapshot() {
    if (localMediaStream) {
        var ctx1 = canvas2.getContext('2d');
        ctx1.drawImage(video, 0, 0, 320, 250);
        ctx1.drawImage(canvas, 0, 0, 320, 250);
        ctx1.font = "40pt Calibri,Geneva,Arial";
        ctx1.fillStyle = "rgb(0,20,180)";
        ctx1.fillText("Winner !!!", 50, 50);
    }
}

function download() {
    dl.href = canvas2.toDataURL('image/png');
}

dl.addEventListener('click', download, false);
input.addEventListener('click', snapshot, false);
    navigator.getUserMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;
    navigator.getUserMedia({video: true}, function(stream) {
        video.src = window.URL.createObjectURL(stream);
        localMediaStream = stream; }, errorCallback);
        var ctx = canvas.getContext('2d');
        canvas.style.position = "absolute";
        canvas.style.top = '0px';
        canvas.style.zIndex = '100001';
        canvas.style.display = 'block';
var htracker = new headtrackr.Tracker( );
htracker.init(video, canvas);
htracker.start();

document.addEventListener("facetrackingEvent", function( event ) {
    ctx.clearRect(0,0,320,240);
    ctx.drawImage(img,event.x-50-((event.width)/2),event.y  -((event.height+30)/2), event.width+100, event.height+100);
});
