(function(){
	//random Bg generator
	// function randGen(){
	// 	var index = Math.floor(Math.random() * arguments.length);
	// 	return arguments[index];
	// }
	// var goodDoor = randGen('#doorbg1', '#doorbg2', '#doorbg3');
	// $(goodDoor).css({'background-image':'url(moneygirl.jpeg)'});
	// var winningDoor = goodDoor.slice(goodDoor.length - 1);
	// var turn = 1;
	//default door clicks
	// var doorClick = $('.door').on('click', function(e){
	// 	var doorYouPicked = this.id.slice(this.id.length - 1);
	// 	var door1 = $('#door1').hasClass('open');
	// 	var door2 = $('#door2').hasClass('open');
	// 	var door3 = $('#door3').hasClass('open');
	// 	var id = this.id;
	// 	var closed = $(this).hasClass('c');
	// 	var open = $(this).hasClass('o');
		// if(closed){
		// 	$(this).removeClass('c close');
		// 	$(this).addClass('o');
		// 	$(this).addClass('open');
		// }
		// if(id === 'door1'){
		// 	if(closed && door2){
		// 		$('#door2').removeClass('o open');
		// 		$('#door2').addClass('c close');
		// 		$(this).removeClass('c close')
		// 		$(this).addClass('o open')
		// 	}
		// 	if(closed && door3){
		// 		$('#door3').removeClass('o open');
		// 		$('#door3').addClass('c close');
		// 		$(this).removeClass('c close')
		// 		$(this).addClass('o open')
		// 	}
		// }
		// if(id === 'door2'){
		// 	if(closed && door1){
		// 		$('#door1').removeClass('o open');
		// 		$('#door1').addClass('c close');
		// 		$(this).removeClass('c close')
		// 		$(this).addClass('o open')
		// 	}
		// 	if(closed && door3){
		// 		$('#door3').removeClass('o open');
		// 		$('#door3').addClass('c close');
		// 		$(this).removeClass('c close')
		// 		$(this).addClass('o open')
		// 	}
		// }
		// if(id === 'door3'){
		// 	if(closed && door1){
		// 		$('#door1').removeClass('o open');
		// 		$('#door1').addClass('c close');
		// 		$(this).removeClass('c close')
		// 		$(this).addClass('o open')
		// 	}
		// 	if(closed && door2){
		// 		$('#door2').removeClass('o open');
		// 		$('#door2').addClass('c close');
		// 		$(this).removeClass('c close')
		// 		$(this).addClass('o open')
		// 	}
		// }
		//checks if you open the right door
		// if(doorYouPicked === winningDoor){
		// 	$('#message').text('YOU WON!!! You pick the right door on your first try...Lucky You!!');
		// 	$('.door').off('click');
			
		// }else if(doorYouPicked !== winningDoor){
	// 	$('#message').text('So you think that"s the right door huh? I"ll tell you what... One of the wrong doors will open.... You can change your pick if like..MooooAAaaaahahahahah');
	// 	var doorsLeft = [];
	// 	var doors = [1, 2, 3];
	// 	var idx = doors.indexOf(doorYouPicked);
	// 	doors = doors.splice(idx, 1);
	// 	for (var i = 0; i < doors.length; i++) {
	// 		doorsLeft.push('#door' + doors[i]);
	// 	};
	// 	var ran = randGen(doorsLeft[0], doorsLeft[1]);
	// 	console.log('ran',ran)
	// 	setTimeout(function(){
	// 		$(ran).addClass('open');
	// 	},2000);	
	// })
	function randGen(){
		var index = Math.floor(Math.random() * arguments.length);
		return arguments[index];
	}
	var goodDoor = randGen('#doorbg1', '#doorbg2', '#doorbg3');
	$(goodDoor).css({'background-image':'url(moneygirl.jpeg)'});	

	var doorClick = $('.door').on('click', function(e){
		$('#message').text('So you think that"s the right door huh? I"ll tell you what... One of the wrong doors will open.... You can change your pick if like..MooooAAaaaahahahahah');
		var clickedDoor = this.id.slice(this.id.length - 1);;
		var winningDoor = goodDoor.slice(goodDoor.length - 1);;
		var doors = ['1', '2', '3'];
		//getting index of the clicked door
		var idx = doors.indexOf(clickedDoor);
		console.log('door i clicked-',idx,clickedDoor,doors);
		//removing the clicked door
		doors.splice(idx, 1);
		//was the clicked door the winnig door
		if(doors.indexOf(winningDoor) !== -1){
			console.log('winning door is in the array')
			//getting index of the winning door
			let idx = doors.indexOf(winningDoor);
			//removing the winning door
			doors.splice(idx, 1);
			console.log('winning door should be removed from the array')
		}
		//check if there is only one item left 
		if(doors.length === 1){
			console.log('the length of the array was one')
			setTimeout(function(){
				$('#door'+doors[0]).addClass('open');
			},2000);
		}else{
			var ran = randGen(doors[0], doors[1]);
			setTimeout(function(){
				$('#door'+ran).addClass('open');
			},2000);	
		}
	});

})();


/*
make a click handler
	know what door was clicked on and what  door is the winner
	make an array of the doors
	remove the picked door
	remove the winner door if it's still there
	then if the array is bigger than one 
		use the random func to pick one of the doors thats left
	
	function randGen(){
		var index = Math.floor(Math.random() * arguments.length);
		return arguments[index];
	}

	var doorClick = $('.door').on('click', function(e){
		var goodDoor = randGen('#doorbg1', '#doorbg2', '#doorbg3');
		$(goodDoor).css({'background-image':'url(moneygirl.jpeg)'});
		
		var clickedDoor = this.id.slice(this.id.length - 1);;
		var winningDoor = goodDoor.slice(goodDoor.length - 1);;
		var doors = [1, 2, 3];
		var idx = doors.indexOf(clickedDoor);
		doors = doors.splice(idx, 1);
		if(doors.indexOf(winningDoor) !== -1){
			let idx = doors.indexOf(winningDoor);
			doors = doors.splice(idx, 1);
		}
		if(doors.length === 1){
			setTimeout(function(){
				$('#door'+doors[0]).addClass('open');
			},2000);
		}else{
			var ran = randGen(doors[0], doors[1]);
			setTimeout(function(){
				$(ran).addClass('open');
			},2000);	
		}
	});


*/
















