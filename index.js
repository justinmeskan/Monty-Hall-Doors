(function(){
	//random Bg generator
	function randGen(){
		var index = Math.floor(Math.random() * arguments.length);
		return arguments[index];
	}
	var goodDoor = randGen('#doorbg1', '#doorbg2', '#doorbg3');
	$(goodDoor).css({'background-image':'url(moneygirl.jpeg)'});
	var winningDoor = goodDoor.slice(goodDoor.length - 1);
	//default door clicks
	$('.door').on('click', function(e){
		var doorYouPicked = this.id.slice(this.id.length - 1);
		var door1 = $('#door1').hasClass('open');
		var door2 = $('#door2').hasClass('open');
		var door3 = $('#door3').hasClass('open');
		var id = this.id;
		var closed = $(this).hasClass('c');
		var open = $(this).hasClass('o');
		if(closed){
			$(this).removeClass('c close');
			$(this).addClass('o');
			$(this).addClass('open');
		}
		if(id === 'door1'){
			if(closed && door2){
				$('#door2').removeClass('o open');
				$('#door2').addClass('c close');
				$(this).removeClass('c close')
				$(this).addClass('o open')
			}
			if(closed && door3){
				$('#door3').removeClass('o open');
				$('#door3').addClass('c close');
				$(this).removeClass('c close')
				$(this).addClass('o open')
			}
		}
		if(id === 'door2'){
			if(closed && door1){
				$('#door1').removeClass('o open');
				$('#door1').addClass('c close');
				$(this).removeClass('c close')
				$(this).addClass('o open')
			}
			if(closed && door3){
				$('#door3').removeClass('o open');
				$('#door3').addClass('c close');
				$(this).removeClass('c close')
				$(this).addClass('o open')
			}
		}
		if(id === 'door3'){
			if(closed && door1){
				$('#door1').removeClass('o open');
				$('#door1').addClass('c close');
				$(this).removeClass('c close')
				$(this).addClass('o open')
			}
			if(closed && door2){
				$('#door2').removeClass('o open');
				$('#door2').addClass('c close');
				$(this).removeClass('c close')
				$(this).addClass('o open')
			}
		}
		if(doorYouPicked === winningDoor){
			$('#message').text('YOU WON!!! You Pick the right door...Lucky You!!');
			$('.door').off('click')
		}
	})
})();



















