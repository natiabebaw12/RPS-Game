
//contains all function call, starting function
function rpsGame(yourChoice) {

    let humanChoice, botChoice, result;

    humanChoice = yourChoice.id;
    botChoice = numToChoice(randRps());
    result = decideWiner(humanChoice, botChoice);
    message = finalMessage(result);
    rpsFrontEnd(humanChoice, botChoice, message);
}

function randRps() {

    return Math.floor(Math.random() * 3);
}

function numToChoice(num) {

    return ['rock', 'paper', 'scissors'][num];
}


function decideWiner(yourChoice, computerChoice) {

    let rpsDatabase = {
        'rock': {
            'scissors': 1,
            'rock': 0.5,
            'paper': 0
        },
        'paper': {
            'rock': 1,
            'paper': 0.5,
            'scissors': 0
        },
        'scissors': {
            'paper': 1,
            'scissors': 0.5,
            'rock': 0
        }

    };

    let yourScore = rpsDatabase[yourChoice][computerChoice];
    return [yourScore];
}

function finalMessage([yourScore]) {

    if (yourScore === 0) {
        return {
            'message': 'You Lost',
            'color': 'red'
        };
    } else if (yourScore === 0.5) {
        return {
            'message': 'You Tied',
            'color': 'yellow'
        };
    } else {
        return {
            'message': 'You Won!',
            'color': 'green'
        };
    }
}

/// FINAL REASULT DISPLAY
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {

    let imageDatabase = {

        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    //remove the previous
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow:0px 10px 50px rgb(59, 147, 206);' >"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage.color + "; font-size: 60px; padding:30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow:0px 10px 50px rgba(243, 38, 24, 1);' >"

    document.getElementById('flex-container').appendChild(humanDiv);
    document.getElementById('flex-container').appendChild(messageDiv)
    document.getElementById('flex-container').appendChild(botDiv);

    let repeatDiv = document.getElementById('repeat');
    repeatDiv.innerHTML = "<button class='btn btn-success' onClick='repeat()'> repeat </button>";

}

//reload after play
function repeat() {

    location.reload();

}