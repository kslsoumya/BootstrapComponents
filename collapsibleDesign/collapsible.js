$(document).ready(()=>{
	$('#firstCollapse').hide()
	$('#secondCollapse').hide()
	$('#button1').click(()=>{
		$('#firstCollapse').fadeToggle();

	})
	$('#button2').click(()=>{
		$('#secondCollapse').fadeToggle();

	})
})