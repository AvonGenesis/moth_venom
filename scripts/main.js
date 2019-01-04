  var systems = [
    ECS.systems.player,
    ECS.systems.test,
    ECS.systems.meteor,
	ECS.systems.collision
  ];
  
  // HERE
  var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, { backgroundColor : 0x1099bb });
  
 // console.log( "Inner Width " + window.innerWidth );
  //console.log( "Inner Height " + window.innerHeight ) ;
  
  
  
  
  
  document.body.appendChild(renderer.view);
  //Music beat in hz i hope xdlolz
  var musicBeat = 10;
  //===================
  // create the root of the scene graph
  var stage = new PIXI.Container();


  //HERE
  var background = new PIXI.Sprite.fromImage('images/spacebg.jpg');
 
  stage.addChild(background);




  var container = new PIXI.Container();

  stage.addChild(ECS.container);

  var totalMeteors = musicBeat*100;

  var brt = new PIXI.BaseRenderTexture(300, 200, PIXI.SCALE_MODES.LINEAR, 1);
  var rt = new PIXI.RenderTexture(brt);

  ECS.Factory.Player();

  animate();



  function animate() {
    for (var i=0,len=systems.length; i < len; i++) {
	  ECS.systems.collision;
      systems[i](ECS.entities);
    }
      
	  renderer.render(container, rt)


      // render the root container
      renderer.render(stage);

      //request another animation frame ...
      requestAnimationFrame(animate);
  }