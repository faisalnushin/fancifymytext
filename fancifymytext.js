window.onload = function() {
    document.getElementById("biggerButton").onclick = function() {
        alert("Hello, world!");
        makeTextBigger();
    };
    document.getElementById("mooButton").onclick = mooText;
};

function makeTextBigger() {
    document.getElementById("textArea").style.fontSize = "24pt";
}

function changeStyle() {
    var textArea = document.getElementById("textArea");
    if (document.getElementById("fancyShmancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (document.getElementById("boringBetty").checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooText() {
    var textArea = document.getElementById("textArea");
    var text = textArea.value.toUpperCase();
    text = text.split('.').map(function(sentence) {
        if (sentence.trim().length > 0) {
            return sentence.trim() + '-MOO';
        }
        return sentence;
    }).join('. ').trim();
    textArea.value = text;
}
