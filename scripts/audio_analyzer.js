/* Analysis audio file inputed by user
 * And Generetes entities accrodingly
*/
var analyser;
audio_file.onchange = function(){
  var files = this.files;
  var file = URL.createObjectURL(files[0]);
  audio_player.src = file;

  $("canvas").show();
  $("#song-button").hide()

  var ctx = new AudioContext();
  var audio = document.getElementById('audio_player');
  var audioSrc = ctx.createMediaElementSource(audio);
  analyser = ctx.createAnalyser();

  audioSrc.connect(analyser);

  var frequencyData = new Uint8Array(2);
  audio_player.play();
  audioSrc.connect(ctx.destination);

  setInterval(function() {
    if(audioSrc.context.currentTime <= audio_player.duration) {
      analyser.getByteFrequencyData(frequencyData);

	  for(i = 0; i < frequencyData.length; ++i){
	  	if(frequencyData[i] === 440){
			  console.log('A4');
	  	}
	  }

      dataSum = frequencyData[0] + frequencyData[1];
      ECS.meteorSpeed = dataSum / 50;
      console.log("MEATOR SPEED:  " + ECS.meteorSpeed);
      for (var i = 0; i < (Math.random() * 20); i++) {
        ECS.Factory.FireBall();
      }
    }
}, 2000)
}
