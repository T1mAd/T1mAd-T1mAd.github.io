field.width = window.innerWidth;
field.height = window.innerHeight;
let ctx = field.getContext("2d"); // ctx рисование на canvas
let player = {
    sprite : new Image(100,100),
    x : 0,
    y : 0,
};
function draw () {
    let bg = new Image();
    bg.src = "img/background.jpg";
    bg.onload = () => {
        ctx.drawImage(bg,0,0)
    };
    player.sprite = new Image(100,100);
    player.sprite.src = "img/player.png";
    player.sprite.onload = () =>
        ctx.drawImage(player.sprite, player.x, player.y);
    }
$(field).on("mousemove", function (e) {
    player.X=e.offsetX;
    player.Y=e.offsetY;
    draw();
});
draw();