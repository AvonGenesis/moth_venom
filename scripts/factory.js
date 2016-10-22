// Each factory creates an entity then returns it. The entity can
// then have components added or removed - this is just like a helper
// factory to create objects which can still be modified
ECS.Factory = {
  FireBall: function() {
    var entity = new ECS.Entity();
    // entity.addComponent(new ECS.Components.Movement());
    entity.addComponent(new ECS.Components.Sprite('images/meteor.png'));
    spriteData = entity.components.sprite.data;
    spriteData.anchor.set(0.5);
    spriteData.position.x = 10;
    spriteData.position.y = 20;
    spriteData.direction = 100;
    spriteData.turningSpeed = Math.random() - 0.8;
    spriteData.speed = 2 + Math.random() * 2;
    ECS.container.addChild(spriteData);
    return entity;
  },
  Player: function() {
    var entity = new ECS.Entity();
    // entity.addComponent(new ECS.Components.Movement());
    entity.addComponent(new ECS.Components.Player('images/ship.png'));
    spriteData = entity.components.player.data;
    spriteData.anchor.set(0.5);
    spriteData.position.x = 20;
    spriteData.position.y = 20;
    spriteData.vy = 0;
    spriteData.vx = 0;
    // spriteData.direction = 100;
    // spriteData.turningSpeed = Math.random() - 0.8;
    // spriteData.speed = 2 + Math.random() * 2;
    ECS.container.addChild(spriteData);
    ECS.player = entity;
    return entity;
  }
};
