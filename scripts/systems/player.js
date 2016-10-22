ECS.systems.player = function(x) {
  var left = keyboard(37),
    up = keyboard(38),
    right = keyboard(39),
    down = keyboard(40);

  if (ECS.player == null) { return; }
  // console.log("Checking players");
  spriteData = ECS.player.components.player.data;
  //Left arrow key `press` method
  left.press = function() {
    //Change the explorer's velocity when the key is pressed
    spriteData.vx = -5;
    spriteData.vy = 0;
  };

  //Left arrow key `release` method
  left.release = function() {

    //If the left arrow has been released, and the right arrow isn't down,
    //and the spriteData isn't moving vertically:
    //Stop the spriteData
    if (!right.isDown && spriteData.vy === 0) {
      spriteData.vx = 0;
    }
  };

  //Up
  up.press = function() {
    spriteData.vy = -5;
    spriteData.vx = 0;
  };
  up.release = function() {
    if (!down.isDown && spriteData.vx === 0) {
      spriteData.vy = 0;
    }
  };

  //Right
  right.press = function() {
    spriteData.vx = 5;
    spriteData.vy = 0;
  };
  right.release = function() {
    if (!left.isDown && spriteData.vy === 0) {
      spriteData.vx = 0;
    }
  };

  //Down
  down.press = function() {
    spriteData.vy = 5;
    spriteData.vx = 0;
  };
  down.release = function() {
    if (!up.isDown && spriteData.vx === 0) {
      spriteData.vy = 0;
    }
  };

  spriteData.position.x += spriteData.vx;
  spriteData.position.y += spriteData.vy;
  // console.log("Velocity: " + spriteData.vx + " - " + spriteData.vy);
  // console.log("X, Y" + spriteData.position.x + ", " + spriteData.position.y);
}
