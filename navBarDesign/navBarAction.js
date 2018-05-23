$(document).ready(()=>{

	$('.menu2').hide()
	$('.icon').click(()=>{
		$('.menu2').fadeToggle();
	})
	$('a').hover(
		function(){
			$(this).css("color","black")
		},
		function(){
			$(this).css("color","#fff")
		})
	$('body:not(.customNavbar)').css("background-color","rgba(204, 204, 204, 0.47)");
})