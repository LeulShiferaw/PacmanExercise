var pos = 0;
const pacArray = [
    ['images/PacMan1.png', 'images/PacMan2.png'],
    ['images/PacMan3.png', 'images/PacMan4.png']
];
var direction = 0;
var focus = 0;

function Run() {
    let img = document.getElementById("PacMan");
    let imgWidth = img.width;
    let curr_img = 1
    focus = (focus + 1) % 2;
    direction = checkPageBounds(direction, img);
    img.src = pacArray[direction][focus];
    if (direction) {
        pos -= 20;
        img.style.left = pos + "px";
        
    } else {
        pos += 20;
        img.style.left = pos + 'px';
    }
    // Use setTimeout to call Run every 200 millesecs
    setTimeout(Run, 200);
}

function checkPageBounds(direction, img) {
    //
    // Complete this to reverse direction on hitting page bounds
    //
    if(parseInt(img.style.left, 10) + parseInt(img.width, 10) >= parseInt(window.innerWidth, 10))
    {
        direction = 1;
    }
    else if(parseInt(img.style.left, 10) <= 0)
        direction = 0;

    return direction;
}