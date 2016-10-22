// $(function() {
  var systems = [
    ECS.systems.player,
    ECS.systems.test,
    ECS.systems.meteor
  ];
  var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, { backgroundColor : 0x1099bb });
  document.body.appendChild(renderer.view);
  //Music beat in hz i hope xdlolz
  var musicBeat = 10;
  //===================
  // create the root of the scene graph
  var stage = new PIXI.Container();

  var background = new PIXI.Sprite.fromImage('images/spacebg.jpg');
  stage.addChild(background);

  var container = new PIXI.Container();

  stage.addChild(ECS.container);

  // var anime = PIXI.Sprite.fromImage('images/heart.png');
  // anime.x = (Math.random()*110)+ (Math.random()*100);
  // anime.y = (Math.random()*110)+ (Math.random()*100);
  //
  // ECS.container.addChild(anime);

  var totalMeteors = musicBeat*100;

  var brt = new PIXI.BaseRenderTexture(300, 200, PIXI.SCALE_MODES.LINEAR, 1);
  var rt = new PIXI.RenderTexture(brt);

  ECS.Factory.Player();

  animate();



  function animate() {
    for (var i=0,len=systems.length; i < len; i++) {
      systems[i](ECS.entities);
    }
      renderer.render(container, rt)



      //increment the ticker
      // tick += 0.1;

      // render the root container
      renderer.render(stage);

      //request another animation frame ...
      requestAnimationFrame(animate);
  }


  // setInterval(function(){
  //   console.log("Running through game loop");
  //   for (var i=0,len=systems.length; i < len; i++) {
  //     systems[i](ECS.entities);
  //   }
  // }, 3000);
// });
