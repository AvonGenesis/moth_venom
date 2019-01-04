ECS.systems.test = function(entities) {
  for (var entityKey in entities) {
    var entity = entities[entityKey];
    if (entity.components.test) {
    }
  }
}
