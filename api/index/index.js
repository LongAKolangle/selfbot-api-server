function generateRandomAlphabet() {
    var alphabets = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789|||||?><!@)(&$#(*$^@#))';
    var randomIndex = Math.floor(Math.random() * alphabets.length);
    return alphabets[randomIndex];
}

function createFallingAlphabet() {
    var alphabet = generateRandomAlphabet();
    var fontSize = Math.floor(Math.random() * 30) + 10;
    var x = Math.floor(Math.random() * window.innerWidth);
    var duration = Math.floor(Math.random() * 5) + 5;

    var element = document.createElement('div');
    element.className = 'falling-alphabet';
    element.textContent = alphabet;
    element.style.left = x + 'px';
    element.style.fontSize = fontSize + 'px';
    element.style.animationDuration = duration + 's';

    document.body.appendChild(element);

    setTimeout(function() {
        element.remove();
    }, duration * 1000);
}

function animateTextContent(text) {
    var characters = text.split('');
    var index = 0;

    var typingInterval = setInterval(function() {
        if (index >= characters.length) {
            clearInterval(typingInterval);
            return;
        }

        title.textContent += characters[index];
        index++;
    }, 100);
}

function adjustImageSize() {
    var mountain = document.getElementById('mountain');
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    mountain.style.width = screenWidth + 'px';
    mountain.style.height = screenHeight + 'px';
}

var title = document.querySelector('.title');
var nameInput = document.getElementById('name-input');
var submitButton = document.getElementById('submit-button');

window.addEventListener('resize', adjustImageSize);
submitButton.addEventListener('click', function() {
    var name = nameInput.value;
    if (name) {
        var typedName = 'Hello ' + name + ", Welcome to our Website!";
        title.textContent = ""
        animateTextContent(typedName);
    }
});

adjustImageSize();
setInterval(createFallingAlphabet, 180);
