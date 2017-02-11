/**
 * Created by athim on 09/02/2017.
 */
function microphoneSound(){
    var contexteAudio = new (window.AudioContext || window.webkitAudioContext)();
    var source;
    setTimeout(function(){
        navigator.mediaDevices.getUserMedia ({audio: true, video: false})
            .then(function(stream) {
                source = contexteAudio.createMediaStreamSource(stream);
                var analyser = contexteAudio.createAnalyser();
                source.connect(analyser);
                var bol = true;
                while(bol){
                    var bufferLength = analyser.frequencyBinCount;
                    var dataArray = new Uint8Array(bufferLength);
                    analyser.getByteFrequencyData(dataArray);
                    for(var i = 0; i < bufferLength; i++){
                        var volume = dataArray[i];
                        if(volume > 240) {
                            console.log(dataArray);
                            bol = false;
                            $("#torche").hide();
                            $("#torche2").show();
                            setTimeout(function(){
                                $("#divLightDown").hide();
                                $("#myCanvas").show();
                                showText("","Bravo ! Tu peux continuer. /",0);
                            },1000);
                            break;
                        }
                    }
                }
                var bufferLength = analyser.frequencyBinCount;
                var dataArray = new Uint8Array(bufferLength);
            });
    },800);

}