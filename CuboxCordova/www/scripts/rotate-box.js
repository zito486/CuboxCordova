var init = function () {
    var box = document.querySelector('.container').children[0],
        panelClassName = 'show-top';
    var scoreValue = 0;
    
    document.getElementById("cube").addEventListener('click', function (event) {
        scoreValue += 1; 
        if (panelClassName.trim() === 'show-front') {
            scoreValue = 0;  
        }
        document.getElementById("scoreNum").innerText = scoreValue;
        if (document.getElementById("highscoreNum").innerText < scoreValue) {
            document.getElementById("highscoreNum").innerText = scoreValue;
        }
        box.removeClassName(panelClassName);
        panelClassName = changeClass(panelClassName); 
        box.addClassName(panelClassName);
        var lastClass = panelClassName;
        setTimeout(function () {
            if (panelClassName === lastClass) { //Si es el que traias hace 2 segundos 
                if (panelClassName.trim() !== 'show-front') {    //y no es rojo, pierdes
                    scoreValue = 0;
                    document.getElementById("scoreNum").innerText = scoreValue;
                    if (document.getElementById("highscoreNum").innerText < scoreValue) {
                        document.getElementById("highscoreNum").innerText = scoreValue;
                    }
                }
                box.removeClassName(panelClassName);
                panelClassName = changeClass(panelClassName);
                box.addClassName(panelClassName);
            }
        }, 1500);
    });  
};



function changeClass(oldClass) {
    var rnd = Math.floor(Math.random() * 6) + 1;
    var newClass;
    switch (rnd) {
        case 1:
            newClass = "show-front";
            break;
        case 2:
            newClass = "show-back";
            break;
        case 3:
            newClass = "show-right";
            break;
        case 4:
            newClass = "show-left";
            break;
        case 5:
            newClass = "show-top";
            break;
        case 6:
            newClass = "show-bottom";
            break;
        default:
    }
    if (newClass === oldClass) {
        newClass = changeClass(oldClass);
    }
    return newClass;
}
    //<button id="toggle-backface-visibility">Toggle Backface Visibility</button>

window.addEventListener( 'DOMContentLoaded', init, false);