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
 //Change the explorer's velocity when the key is pressed
 //console.log("x: " + spriteData.position.x);
 if(spriteData.position.x > 0)
   spriteData.vx = -ECS.player.components.player.velocity;
};

left2.press = function() {
 //Change the explorer's velocity when the key is pressed
 //console.log("x: " + spriteData.position.x);
 if(spriteData.position.x > 0)
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
// console.log("y: " + spriteData.position.y);
 if(spriteData.position.y > 0)
   spriteData.vy = -ECS.player.components.player.velocity;
};
up.release = function() {
 if (!down.isDown) {
   spriteData.vy = 0;
 }
};

up2.press = function() {
 //console.log("y: " + spriteData.position.y);
 if(spriteData.position.y > 0)
   spriteData.vy = -ECS.player.components.player.velocity;
};
up2.release = function() {
 if (!down2.isDown) {
   spriteData.vy = 0;
 }
};

//Right
right.press = function() {
 if(spriteData.position.x < window.screen.width)
   spriteData.vx = ECS.player.components.player.velocity;
};
right.release = function() {
 if (!left.isDown) {
   spriteData.vx = 0;
 }
};

right2.press = function() {
 if(spriteData.position.x < window.screen.width)
   spriteData.vx = ECS.player.components.player.velocity;
};
right2.release = function() {
 if (!left2.isDown) {
   spriteData.vx = 0;
 }
};

//Down
down.press = function() {
 //console.log("y: " + spriteData.position.y);
 if(spriteData.position.y < window.screen.height)
   spriteData.vy = ECS.player.components.player.velocity;
};
down.release = function() {
 if (!up.isDown) {
   spriteData.vy = 0;
 }
};

down2.press = function() {
 //console.log("y: " + spriteData.position.y);
 if(spriteData.position.y < window.screen.height)
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

 // Update X and Y data with velocity
 if(spriteData.position.x < window.screen.width + 10 && spriteData.position.x > -14)
   spriteData.position.x += spriteData.vx;
 else{
      if((spriteData.position.x < window.screen.width && spriteData.vx > 0) || 
         (spriteData.position.x > window.screen.width && spriteData.vx < 0))
          spriteData.position.x += spriteData.vx;
 }
 if(spriteData.position.y < window.screen.height + 10 && spriteData.position.y > -14)
   spriteData.position.y += spriteData.vy;
 else{
      if((spriteData.position.y < window.screen.height && spriteData.vy > 0) || 
         (spriteData.position.y > window.screen.height && spriteData.vy < 0))
          spriteData.position.y += spriteData.vy;
 }
};

function endGame(){
	//console.log("Game over");
	
	window.location.href = "game_over.html";
	
	return;
}

ECS.systems.collision = function(entities) {
	if(ECS.player == null) {return;}
	
	var playerData = ECS.player.components.player.data;
	var playerHealth = ECS.player.components.health;
	//var entityData = ECS.entities.meteor;
	
	console.log(playerHealth);
	
	//for(var i = 0; i < ECS.Entity.prototype._count; ++i){
		//console.log(entityData[1]);
	
	console.log(playerData.health);
	var rec1 = {x : playerData.position.x, y: playerData.position.y, width: 5, height: 5}
	
	/*console.log("Player 1 x-axis " + rec1.x);
	console.log("Player 1 y-axis " + rec1.y);
	console.log("Player 1 width " + rec1.width);
	console.log("Player 1 height " + rec1.height + "\n------------------------\n"); */
	//console.log("Entity info " + rec2 );
	
	for(var entityKey in entities){
		var entity = entities[entityKey];
		if (entity.components.sprite) {
      		var meteor = entity.components.sprite.data;
			
			var rec2 = {x : meteor.position.x, y: meteor.position.y, width: 5 , height: 5}
			
			if( rec1.x < rec2.x + rec2.width && rec1.x + rec1.width > rec2.x && 
				rec1.y < rec2.y + rec2.height && rec1.height + rec1.y > rec2.y){
					console.log("Collision");
					endGame();
				}
				
		}
	}
}
	
	
	
	
	
	
	
	
	
