google.load("jquery", "1.4.2");
google.setOnLoadCallback(function()
{
	// Variable to store if the records are spinning
	var playing = false;
	//var audioDj = audioObject;
	// Variable to store if the mouse is down (to enable scratching)
	var mousedown = false;
	
	// Function to be called when the play button is clicked.
	// It changes from "play" to "pause" when records are spinning
	// and starts both the vinyls.
<<<<<<< HEAD
  
  
  
  
  
	$("#playbutton").click(function() {
=======
  	$("#playbutton").click(function() {
>>>>>>> development
		//checkButtons();
		if(playing) {
			// Pause
          audioDj.pause();
			$("#playbtn").attr("src", "images/btn-play.png");
			playing = false;
          //Primer Disco
          $("#vinyl1").each(function() {
				// Clear the interval from the vinyl
				// to stop spinning
				var intervalHandle = $(this).data('intervalHandle');
				clearInterval(intervalHandle);
				$(this)
					.css({ 'cursor' : 'default' })
					.stop()
					.animate({rotate: '+=40deg'}, 800, 'easeOutCubic');				
			});
          
		} else {
          console.log(audioDj);
           audioDj.play();
          audioDj.setAttribute("loop","loop");
       
  
            
			// Play
			$("#playbtn").attr("src", "images/btn-pause.png");
			playing = true;
			$("#vinyl1").each(function() {
				$(this)
					.css({ 'cursor' : 'move' })
					.data('rotationAngle', 10);
				startSpinning($(this));
			});
		}
	});

	// Handle the "mouseDown" to enable scratching
	// We can't combine "mouseDown" with "mouseMove", so we'll need
	// to set a boolean (mousedown).
	// We're also clearing the intervals to prevent spinning
	$("#vinyl1").mousedown(function(e) {
		var intervalHandle = $(this).data('intervalHandle');
		clearInterval(intervalHandle);
		mousedown = true;
	}).mouseup(function() {
		mousedown = false;
		if(playing) {
			startSpinning($(this));
		}
	});
	
	// When mousedown is true and the records are playing,
	// we can scratch the vinyls. This is where the code can be improved,
	// since we only register X-movement
	$("#vinyl1").mousemove(function(e){
		if(mousedown && playing) {
			var intervalHandle = $(this).data('intervalHandle');
			clearInterval(intervalHandle);
			$(this).rotate(e.pageX % 360);
		}
	});
	
	// Handlers for each speed button (slow or faster)
	$("#speedbutton1").click(function() {
		if($(this).data('isEnabled')) {
			$("#vinyl1").data('rotationAngle', $("#vinyl1").data('rotationAngle') + 10);
		}
        rewindAudio();
		checkButtons();
	});
	
	$("#slowbutton1").click(function() {
		if($(this).data('isEnabled')) {
			$("#vinyl1").data('rotationAngle', $("#vinyl1").data('rotationAngle') - 10);
		}
      forwardAudio();
		checkButtons();
	});
	
	$("#speedbutton2").click(function() {
		if($(this).data('isEnabled')) {
			$("#vinyl2").data('rotationAngle', $("#vinyl2").data('rotationAngle') + 10);
		}
      disminVelocAudio();
		checkButtons();
	});
	
	$("#slowbutton2").click(function() {
		if($(this).data('isEnabled')) {
			$("#vinyl2").data('rotationAngle', $("#vinyl2").data('rotationAngle') - 10);
		}
      aumentVelocforwardAudio();
		checkButtons();
	});
	
	/**
	* Start spinning those vinyls by the given element. Set an interval to keep the vinyl spinning
	* and attach it to the element to keep a reference for clearing later.
	**/
	function startSpinning(element) {
		element.stop().animate({rotate: '+=40deg'}, 800, 'easeInCubic', function() {
			var intervalHandle = setInterval(
		 	   function () {
		  	      element.animate({rotate: '+=' + element.data('rotationAngle') + 'deg'}, 0);
		  	  },
		  	  25
			);
			element.data('intervalHandle', intervalHandle);
		});
	}
	
	/**
	* Check if the buttons needs to be changed
	**/
	function checkButtons() {
		if($("#vinyl1").data('rotationAngle') == 0) {
			$("#slowbutton1")
				.data('isEnabled', false)
				.children().attr("src", "images/btn-slow-dis.png");
		} else {
			$("#slowbutton1")
				.data('isEnabled', true)
				.children().attr("src", "images/btn-slow.png");
		}
		
		if($("#vinyl1").data('rotationAngle') == 50) {
			$("#speedbutton1")
				.data('isEnabled', false)
				.children().attr("src", "images/btn-fast-dis.png");
		} else {
			$("#speedbutton1")
				.data('isEnabled', true)
				.children().attr("src", "images/btn-fast.png");
		}
		
		if($("#vinyl2").data('rotationAngle') == 0) {
			$("#slowbutton2")
				.data('isEnabled', false)
				.children().attr("src", "images/btn-slow-dis.png");
		} else {
			$("#slowbutton2")
				.data('isEnabled', true)
				.children().attr("src", "images/btn-slow.png");
		}
		
		if($("#vinyl2").data('rotationAngle') == 50) {
			$("#speedbutton2")
				.data('isEnabled', false)
				.children().attr("src", "images/btn-fast-dis.png");
		} else {
			$("#speedbutton2")
				.data('isEnabled', true)
				.children().attr("src", "images/btn-fast.png");
		}
	}
	
  
             // Rewinds the audio file by 30 seconds.

        function rewindAudio() {
             // Check for audio element support.
            if (window.HTMLAudioElement) {
                try {
                    //var oAudio = document.getElementById('myaudio');
                  //audioObject.currentTime -= 50;
                    audioDj.currentTime -= 10;
                }
                catch (e) {
                    // Fail silently but show in F12 developer tools console
                     if(window.console && console.error("Error:" + e));
                }
            }
        }

             // Fast forwards the audio file by 30 seconds.

        function forwardAudio() {

             // Check for audio element support.
            if (window.HTMLAudioElement) {
                try {
                    //var oAudio = document.getElementById('myaudio');
                    audioDj.currentTime  += 10;
                 
                }
                catch (e) {
                    // Fail silently but show in F12 developer tools console
                     if(window.console && console.error("Error:" + e));
                }
            }
        }
        function aumentVelocforwardAudio() {
             // Check for audio element support.
            if (window.HTMLAudioElement) {
                try {
                    //var oAudio = document.getElementById('myaudio');
                    audioDj.playbackRate -= 0.1;
                }
                catch (e) {
                    // Fail silently but show in F12 developer tools console
                     if(window.console && console.error("Error:" + e));
                }
            }
        }
        function disminVelocAudio() {
                 // Check for audio element support.
                if (window.HTMLAudioElement) {
                    try {
                        //var oAudio = document.getElementById('myaudio');
                        audioDj.playbackRate += 0.2;
                    }
                    catch (e) {
                        // Fail silently but show in F12 developer tools console
                         if(window.console && console.error("Error:" + e));
                    }
                }
            }
});

