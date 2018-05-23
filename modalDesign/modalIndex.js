
$(document).ready(()=>{
	$('.customModal').hide();

	$('#modalButton').click(()=>{
		$('.customModal').toggle();

	})
	$('#close').click(()=>{
		$('.customModal').hide();

	})

	$('#modalButton').hover(function(){
		$(this).css("background-color","#1480e2")
	},
	function(){
		$(this).css("background-color","transparent")
	})

	$('.clickButtons').hover(function(){
		$(this).css("background-color","#bf2227d4")
	},function(){
		$(this).css("background-color","transparent")
	}
	)


	$('body').click((e)=>{
		if($(e.target).closest('#modalButton').length==0 && $(e.target).closest('.customModal').length==0) {
			$('.customModal').hide();

		}

	})

})