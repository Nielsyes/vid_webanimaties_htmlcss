setInterval(function calculateSvgViewbox(){
    var svg = document.getElementsByTagName("svg");
    for (i=0; i < svg.length; i++) {
        var bbox = svg[i].getBBox();
        svg[i].setAttribute("viewBox", (bbox.x)+" "+(bbox.y)+" "+(bbox.width)+" "+(bbox.height));
    }
}, 1)

function scaleEars(earID) {
    let wing = document.getElementById(earID);
    let clicked = false;
    wing.onclick = function(){
        if (clicked == true) {
            wing.style.transform = 'scale(1)';
            clicked = false;
        }
        else {
            wing.style.transform = 'scale(2)';
            clicked = true;
        }
    }

}

scaleEars('left_top_wing');
scaleEars('right_top_wing');

function setClassTimeout(clickElement, timeOut, animationClass) {
    let element = document.getElementById(clickElement);
    element.onclick = function(){
        element.classList.add(animationClass);
        setTimeout(function(){element.classList.remove(animationClass)}, timeOut);
    }
}

setClassTimeout('big_shape_left_bottom_wing', 1000, 'tickleWing');
setClassTimeout('big_shape_right_bottom_wing', 1000, 'tickleWing');

function setDismantleClasses(){
    let smallShape = document.getElementById('small_shape-svg');
    smallShape.onclick = function() {
        /*remove these classes because of itching problem when these wings move when the animation is running*/
        document.getElementById('small_shape_left_bottom_wing').classList.remove('smallFlyingWingsLeft');
        document.getElementById('small_shape_right_bottom_wing').classList.remove('smallFlyingWingsRight');

        document.getElementById('small_shape_right_middle_square').classList.add('dismantleRightSquare');
        document.getElementById('small_shape_left_middle_square').classList.add('dismantleLeftSquare');
        document.getElementById('small_shape_top_rectangle').classList.add('dismantleTopRectangle');
        document.getElementById('small_shape_left_bottom_wing').classList.add('dismantleLeftWing');
        document.getElementById('small_shape_right_bottom_wing').classList.add('dismantleRightWing');


        setTimeout(function(){
            document.getElementById('small_shape_right_middle_square').classList.remove('dismantleRightSquare');
            document.getElementById('small_shape_left_middle_square').classList.remove('dismantleLeftSquare');
            document.getElementById('small_shape_top_rectangle').classList.remove('dismantleTopRectangle');
            document.getElementById('small_shape_left_bottom_wing').classList.remove('dismantleLeftWing');
            document.getElementById('small_shape_right_bottom_wing').classList.remove('dismantleRightWing');

            document.getElementById('small_shape_left_bottom_wing').classList.add('smallFlyingWingsLeft');
            document.getElementById('small_shape_right_bottom_wing').classList.add('smallFlyingWingsRight');
        }, 3000);
    }
}

setDismantleClasses();


/*nog kijken voor verbeteringen als er tijd is*/
function setAndRemoveClassPath(animationClass, undoAnimationClass, letter, key){
    let clicked = false;

    let clickElement = document.getElementById(letter);
    let letterElement = document.getElementById(letter);
    let letterPaths = letterElement.getElementsByTagName("path");


    clickElement.onclick = function() {
        if (clicked == false) {
            letterPaths[1].classList.remove(undoAnimationClass);
            letterPaths[1].classList.add(animationClass);

            clicked = true;
        }
        else {
            letterPaths[1].classList.remove(animationClass);
            letterPaths[1].classList.add(undoAnimationClass);

            clicked = false;
        }
    }

    document.addEventListener("keydown", event => {
        if (event.key == key) {
            if (clicked == false) {
                letterPaths[1].classList.remove(undoAnimationClass);
                letterPaths[1].classList.add(animationClass);

                clicked = true;
            }
            else {
                letterPaths[1].classList.remove(animationClass);
                letterPaths[1].classList.add(undoAnimationClass);

                clicked = false;
            }
        }
    });
}

setAndRemoveClassPath('fillLetter', 'unfillLetter', 'P', 'p');
setAndRemoveClassPath('fillLetter', 'unfillLetter', 'O', 'o');
setAndRemoveClassPath('fillLetter', 'unfillLetter', 'R', 'r');
setAndRemoveClassPath('fillLetter', 'unfillLetter', 'T', 't');
setAndRemoveClassPath('fillLetter', 'unfillLetter', 'F', 'f');
setAndRemoveClassPath('fillLetter', 'unfillLetter', 'O2', 'o');
setAndRemoveClassPath('fillLetter', 'unfillLetter', 'L', 'l');
setAndRemoveClassPath('fillLetter', 'unfillLetter', 'I', 'i');
setAndRemoveClassPath('fillLetter', 'unfillLetter', 'O3', 'o');


function pauseFlying(){
    let clicked = false;
    document.addEventListener("keydown", event => {
        if (event.code == 'Space') {
            if (clicked == false) {
                document.getElementById('small_shape_left_bottom_wing').classList.add('smallFlyingWingsLeft');
                document.getElementById('small_shape_right_bottom_wing').classList.add('smallFlyingWingsRight');

                clicked = true;

            } else {
                document.getElementById('small_shape_left_bottom_wing').classList.remove('smallFlyingWingsLeft');
                document.getElementById('small_shape_right_bottom_wing').classList.remove('smallFlyingWingsRight');

                clicked = false;
            }
        }
    });
}

pauseFlying();