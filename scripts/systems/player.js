var left = keyboard(37),
  up = keyboard(38),
  right = keyboard(39),
  down = keyboard(40);
  left2 = keyboard(65); //a
  up2 = keyboard(87); //w
  right2 = keyboard(68); //d
  down2 = keyboard(83); //s

//Left arrow key `press` method
left.press = function() {
  console.log("Left sprite");
  //Change the explorer's velocity when the key is pressed
  spriteData.vx = -ECS.player.components.player.velocity;
};

left2.press = function() {
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

left2.release = function() {
  //If the left arrow has been released, and the right arrow isn't down,
  //and the spriteData isn't moving vertically:
  //Stop the spriteData
  if (!right2.isDown) {
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

up2.press = function() {
  spriteData.vy = -ECS.player.components.player.velocity;
};
up2.release = function() {
  if (!down2.isDown) {
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

right2.press = function() {
  spriteData.vx = ECS.player.components.player.velocity;
};
right2.release = function() {
  if (!left2.isDown) {
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

down2.press = function() {
  spriteData.vy = ECS.player.components.player.velocity;
};
down2.release = function() {
  if (!up2.isDown) {
    spriteData.vy = 0;
  }
};

ECS.systems.player = function(x) {
  if (ECS.player == null) { return; }
  var spriteData = ECS.player.components.player.data;

  // console.log("Updating player movement");
  // Update X and Y data with velocity
  // console.log("VX: " + spriteData.vx);
  // console.log("VY: " + spriteData.vy);
  // console.log("X-POS: " + spriteData.position.x);
  // console.log("Y-POS: " + spriteData.position.y);
  spriteData.position.x += spriteData.vx;
  spriteData.position.y += spriteData.vy;
};
