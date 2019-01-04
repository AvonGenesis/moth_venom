/* Definition of our "Entity". Abstractly, an entity is basically an ID.
 * A.K.A Enemy Ships
 */

ECS.Entity = function Entity() {
  
  /* Generates Radnom Id for each indivdual Entity */ 
  this.id = (+new Date()).toString(16) + (Math.random() * 100000000 | 0).toString(16) + ECS.Entity.prototype._count;

  /* Counts How many Entities have been created since start of game */
  ECS.Entity.prototype._count++;

  /* The component data will live in this object */
  this.components = {};
  
  /* Array of Entities */
  ECS.entities[this.id] = this;
  
  /* Return array */
  return this;
};


/* Keeps track of Number of Entities created */
ECS.Entity.prototype._count = 0;

/* Destroy an entity and remove it from global entities 
 * NOT CALLED ANYWHERE IN CODE
 */
ECS.Entity.prototype.destroy = function() {
  /* Iterate through components and run their destroy function if it exists */
  for (var componentKey in this.components) 
  {
  	var component = this.components[componentKey];
    
	if (typeof component.destroy === 'function') { component.destroy(); }
	
  }
  
  delete ECS.entities[this.id];
  
  return this;
};

/* Add a component to the entity */
ECS.Entity.prototype.addComponent = function addComponent(component) {
  this.components[component.name] = component;
  
  return this;
};

/* Remove a component from an entity */
ECS.Entity.prototype.removeComponent = function removeComponent(componentName) {
  /* Remove component data by removing the reference to it.
   * Allows either a component function or a string of a component name to be
   * passed in
   */
  
  /* Assume string passed in */
  var name = componentName;


  if (typeof componentName === 'function') {
    /*  get the name from the prototype of the passed component function */
    name = componentName.prototype.name;
  }

  delete this.components[name];
  return this;
};

/* Function to print / log information about the entity */
ECS.Entity.prototype.print = function print() {
  //console.log(JSON.stringify(this, null, 4));
  return this;
};
