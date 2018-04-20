(function(){
	function randGen(){
		var index = Math.floor(Math.random() * arguments.length);
		return arguments[index];
	}
	window.addEventListener('load', function(event){
		$('body').css({'height':window.innerHeight+'px'});
	});
	window.addEventListener('load resize', function(event){
		$('body').css({'height':window.innerHeight+'px'});
	});
	var goodDoor = randGen('#doorbg1', '#doorbg2', '#doorbg3');
	$(goodDoor).css({'background-image':'url(moneygirl.jpeg)'});	
	var turn = 1;
	var doors = ['1', '2', '3'];
	var ran;
	var winningDoor;
	var doorClick = $('.door').on('click', function(e){
		if(turn === 1){
			$('#message').text(`So you think that"s the right door huh? I"ll tell you
								what...One of the wrong doors will open.... You can 
								change your pick if like..MooooAAaaaahahahahah`);
			var clickedDoor = this.id.slice(this.id.length - 1);;
			winningDoor = goodDoor.slice(goodDoor.length - 1);;
			var idx = doors.indexOf(clickedDoor);
			doors.splice(idx, 1);
			if(doors.indexOf(winningDoor) !== -1){
				let idx = doors.indexOf(winningDoor);
				doors.splice(idx, 1);
			}
			if(doors.length === 1){
				setTimeout(function(){
					$('#door'+doors[0]).addClass('open');
					console.log('doors',doors);
					turn++;
				},2000);
			}else{
				ran = randGen(doors[0], doors[1]);
				setTimeout(function(){
					$('#door'+ran).addClass('open');
					console.log('ran',ran);
					turn++;
				},2000);	
			}
		}else{
			var openDoor;
			if(ran === undefined){
				openDoor = doors[0];
			}else{
				openDoor = ran;
			}
			if(this.id.slice(this.id.length - 1) === String(winningDoor)){
				$('#message').text('YOU WIN!!!!!! You picked the right door...Go get your prize!!!')
				$('#'+this.id).addClass('open');
			}else{
				$('#message').text('OOOOHHH NOOOOOOO!!!! NOT THAT DOOR!!!!! REAP THE CONSEQUENCES!!!! MooooAAaaaahahahahah!!!!')
				$('#'+this.id).addClass('open');
			}
			$('.door').off('click');
		}
	});
})();














