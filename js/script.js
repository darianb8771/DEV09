$(function (){
	$("btnId").on("click", function (e){
		e.preventDefault();
		
		var getInput = $("textInputId").val();
		$('someOtherDivId').append('<p>'+getInput+'</p>'); 
		$('textInputId').val('');
	
		if(getInput){
			$("someOtherDivId").html('<button class = "btn-secondary"' + getInput + "</button>");
		}else{
			//window.alert("type in window box please")
		}

$('#clear').on('click', function (e) {
  e.preventDefault();
  $('someOtherDivId').text(''); 
  $('textInputId').val('');
});
		
		
	});
});