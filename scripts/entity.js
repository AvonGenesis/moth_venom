// Definition of our "Entity". Abstractly, an entity is basically an ID.

ECS.Entity = function Entity() {
  // Generate a random ID
  this.id = (+new Date()).toString(16) +
    (Math.random() * 100000000 | 0).toString(16) + ECS.Entity.prototype._count;

  // Entity counter
  ECS.Entity.prototype._count++;

  // The component data will live in this object
  this.components = {};
  ECS.entities[this.id] = this;
  return this;
};

// Keep track of entities created
ECS.Entity.prototype._count = 0;

// Destroy an entity and remove it from global entities
ECS.Entity.prototype.destroy = function() {
  // Iterate through components and run their destroy function if it exists
  for (var componentKey in this.components) {
    var component = this.components[componentKey];
    if (typeof component.destroy === 'function') { component.destroy(); }
  }
  delete ECS.entities[this.id];
  return this;
};

// Add a component to the entity
ECS.Entity.prototype.addComponent = function addComponent(component) {
  this.components[component.name] = component;
  return this;
};

// Remove a component from an entity
ECS.Entity.prototype.removeComponent = function removeComponent(componentName) {
  // Remove component data by removing the reference to it.
  // Allows either a component function or a string of a component name to be
  // passed in
  var name = componentName; // assume a string was passed in

  if (typeof componentName === 'function') {
    // get the name from the prototype of the passed component function
    name = componentName.prototype.name;
  }

  delete this.components[name];
  return this;
};

// Function to print / log information about the entity
ECS.Entity.prototype.print = function print() {
  console.log(JSON.stringify(this, null, 4));
  return this;
};
