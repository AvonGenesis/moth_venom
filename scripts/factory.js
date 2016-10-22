/* Each factory creates an entity then returns it. The entity can
 * then have components added or removed - this is just like a helper
 * factory to create objects which can still be modified
 */
ECS.Factory = {
	/* Entitiy */
  FireBall: function() {
	/* Creates new entity */
    var entity = new ECS.Entity();
    entity.addComponent(new ECS.Components.Sprite('images/meteor.png'));
    var spriteData = entity.components.sprite.data;
    spriteData.anchor.set(0.5);
	/* Sets Postion of Entity */
    spriteData.position.x = Math.random() * (window.innerWidth - 1) + 1;
    spriteData.position.y = Math.random() * (100 - 20) + 20;
    spriteData.direction = 100;
    spriteData.turningSpeed = Math.random() - 0.8;
    ECS.container.addChild(spriteData);
    return entity;
  },
  Player: function() {
	/* Creates new Player */
    var entity = new ECS.Entity();
    entity.addComponent(new ECS.Components.Player('images/ship.png'));
    spriteData = entity.components.player.data;
    spriteData.anchor.set(0.5);
	/* Sets Position of Player */
    spriteData.position.x = window.innerWidth/2;
    spriteData.position.y = (window.innerHeight/2) + window.innerHeight*.4;
    spriteData.vy = 0;
    spriteData.vx = 0;
    ECS.container.addChild(spriteData);
    ECS.player = entity;
    return entity;
  }
};
