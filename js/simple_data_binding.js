$(document).ready(function() {
  $('#textArea').on('keyup',function(event){
  	var str = $(this).val();
    var char = str.slice(-1);
  	 if (event.keyCode != 8){
  		$('#myDiv').append(char);
  	}else{
  		var div_str = $('#myDiv').text();
      $('#myDiv').text(div_str.slice(0,-1));
  	}
  });
});
