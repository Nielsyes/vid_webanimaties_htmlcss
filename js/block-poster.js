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

function setAndRemoveClass(clickElement, animationClass, undoAnimationClass){
    let element = document.getElementById(clickElement);
    let clicked = false;
    element.onclick = function() {
        if (clicked == false) {
            element.classList.add(animationClass);
        }
        else {
            element.classList.add(undoAnimationClass);
        }
    }
}

setAndRemoveClass('P', 'fillLetter', 'unfillLetter');
