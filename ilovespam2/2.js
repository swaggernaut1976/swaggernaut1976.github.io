$(function() {
$( ".resizable" ).resizable({
animate: true, animateEasing: 'swing', animateDuration: 500
});
});

var forceOff = false;
var manToggle = false;
var togOff = false;

function chatPopout() {
if (document.getElementById("chatlink").innerHTML.indexOf("HTML5") > -1) {
 window.chatDuck = window.open("flash.html","ChatD","resizable=yes,toolbar=no,scrollbars=no,menubar=no,status=no,directories=no,width=500,height=600");
} else {
 window.chatDuck = window.open("html5.html","ChatD","resizable=yes,toolbar=no,scrollbars=no,menubar=no,status=no,directories=no,width=500,height=600");
}
}
function shite() {
	window.poppedDuck = window.open("stream2.html","BoxD","resizable=yes,toolbar=no,scrollbars=no,menubar=no,status=no,directories=no,width=960,height=540");
}

function changeLink(){
     if (document.getElementById("chatlink").innerHTML.indexOf("HTML5") > -1) {
         setTimeout(function() {
             var link = document.getElementById("chatlink");
             link.setAttribute('href', "flash.html");
             document.getElementById("chatlink").innerHTML = "Flash Chat";
         }, 100);
     } else {
         setTimeout(function() {
             var link = document.getElementById("chatlink");
             link.setAttribute('href', "html5.html");
             document.getElementById("chatlink").innerHTML = "HTML5 Chat";
         }, 100);
     }
}

function hidechat() {
    if (document.getElementById("sbox").style.display == 'inline-block') {
        window.manToggle = true;
        document.getElementById("sbox").style.display = "none"
        document.getElementById("chatlink2").innerHTML = "<b>Show Chat</b>"
    } else {
        if (forceOff != 1) {
            window.manToggle = false;
            document.getElementById("sbox").style.display = "inline-block"
            document.getElementById("chatlink2").innerHTML = "Hide Chat"
        } else {
            alert("Chat has been forcibly disabled.")
        }
    }
}
