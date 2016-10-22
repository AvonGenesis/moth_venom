/* Contains components that entities are able to add
 * Components should contain purely data
 * Logic that acts on these components are contained in systems
 */
 
/* Entities that require health value */
ECS.Components.Health = function(value) {
  value = value || 20;
  this.value = value;
  return this;
};
ECS.Components.Health.prototype.name = 'health';

/* Entities that require movement */
ECS.Components.Position = function(x, y) {
  x = x || 0;
  y = y || 0;
  this.x = x;
  this.y = y;
  return this;
};
ECS.Components.Position.prototype.name = 'position';

/* Entities that are drawn on screen */
ECS.Components.Sprite = function(imagePath) {
  this.data = PIXI.Sprite.fromImage(imagePath);
  return this;
};
ECS.Components.Sprite.prototype.name = 'sprite';

// Entities that are drawn on screen
ECS.Components.Player = function(imagePath) {
  this.data = PIXI.Sprite.fromImage(imagePath);
  this.velocity = 5;
  return this;
};
ECS.Components.Player.prototype.name = 'player';

/* Test Component */
ECS.Components.Test = function() {
  this.randomData = (Math.random() * 100000000 | 0);
};

/* Add a destroy method to have this run on entity destruction */
ECS.Components.Test.prototype.destroy = function() {
 // console.log("Running destroy function");
  //console.log("This was the random data: " + this.randomData)
};
ECS.Components.Test.prototype.name = 'test';
