ECS.systems.meteor = function(entities) {
  for (var entityKey in entities) {
    var entity = entities[entityKey];
    if (entity.components.sprite) {
      var meteor = entity.components.sprite.data;
      meteor.direction += meteor.turningSpeed * 0.05;
      meteor.position.x += (Math.cos(meteor.direction)-0.5) * meteor.speed;
      meteor.position.y += musicBeat * meteor.speed;
    }
  }
}
