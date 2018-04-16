(function(){
	$('.door').on('click', function(e){
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
		}else if(open){
			$(this).removeClass('o open');
			$(this).addClass('c');
			$(this).addClass('close');
		}
		if(id == 'door1'){
			if(id === 'door1' && closed && door2){
				$('#door2').removeClass('o open');
				$('#door2').addClass('c close');
				$(this).removeClass('c close')
				$(this).addClass('o open')
			}
			if(id === 'door1' && closed && door3){
				$('#door3').removeClass('o open');
				$('#door3').addClass('c close');
				$(this).removeClass('c close')
				$(this).addClass('o open')
			}
		}

		if(id == 'door2'){
			if(id === 'door2' && closed && door1){
				$('#door1').removeClass('o open');
				$('#door1').addClass('c close');
				$(this).removeClass('c close')
				$(this).addClass('o open')
			}
			if(id === 'door2' && closed && door3){
				$('#door3').removeClass('o open');
				$('#door3').addClass('c close');
				$(this).removeClass('c close')
				$(this).addClass('o open')
			}
		}

		if(id == 'door3'){
			if(id === 'door3' && closed && door1){
				$('#door1').removeClass('o open');
				$('#door1').addClass('c close');
				$(this).removeClass('c close')
				$(this).addClass('o open')
			}
			if(id === 'door3' && closed && door2){
				$('#door2').removeClass('o open');
				$('#door2').addClass('c close');
				$(this).removeClass('c close')
				$(this).addClass('o open')
			}
		}
		console.log('this',this.id)
		console.log('e',e)
	})
})();