/**
 * Created by athim on 07/02/2017.
 */
$(document).ready(function() {
    $("canvas").mousemove(function(e){
        $("canvas").css('background-position',(e.pageX-125)+'px '+(e.pageY-125)+'px');
    });
});