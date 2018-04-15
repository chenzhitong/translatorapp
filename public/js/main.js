$(document).ready(function(){
	$('#choose_language').change(function(){
		var val = $(this).val();
		if(val == 'add_language'){
			$("#add_language").modal('show');
		}
	});

	// filter 
	 $("#search").on("keyup", function() {
	    var value = $(this).val().toLowerCase();
	    $(".table1 tr").filter(function() {
	      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
	    });
	  });
});