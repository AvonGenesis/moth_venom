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
    spriteData.vx = -ECS.player.components.player.velocity;
  };

  //Left arrow key `release` method
  left.release = function() {
    //If the left arrow has been released, and the right arrow isn't down,
    //and the spriteData isn't moving vertically:
    //Stop the spriteData
    if (!right.isDown) {
      spriteData.vx = 0;
    }
  };

  //Up
  up.press = function() {
    spriteData.vy = -ECS.player.components.player.velocity;
  };
  up.release = function() {
    if (!down.isDown) {
      spriteData.vy = 0;
    }
  };

  //Right
  right.press = function() {
    spriteData.vx = ECS.player.components.player.velocity;
  };
  right.release = function() {
    if (!left.isDown) {
      spriteData.vx = 0;
    }
  };

  //Down
  down.press = function() {
    spriteData.vy = ECS.player.components.player.velocity;
  };
  down.release = function() {
    if (!up.isDown) {
      spriteData.vy = 0;
    }
  };

  // Update X and Y data
  spriteData.position.x += spriteData.vx;
  spriteData.position.y += spriteData.vy;
}
