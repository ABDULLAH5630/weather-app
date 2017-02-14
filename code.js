

$(document).ready(function(){


	$("#btn").click(function(){
		var city = $("#get-city").val();
		getValue(city);
	});

	
	

	 function getValue(city){
	 	$.ajax({
	 	  dataType: 'json',
	 	  url: 'https://api.apixu.com/v1/current.json?key=fd48aae7884d4ddcbf192605171202&q='+city,
	 	  data: '',
	 	  success: function(data){
		  			  		
	 	  		if(data.error)
	 	  		{
	 	  			alert(data.error.message);
	 	  		}
	 	  		else
	 	  		{
	 	  			$("#city").text(data.location.name).append("<sub id='country'></sub>");
	 	  			$("#country").text(data.location.country);
	 	  			$("#temp").text(data.current.temp_c);
	 	  		}


		  		
	 	  },
	 	  error: function(data){
	 	  		console.log(data.error);
	 	  }
	 	});
	 }
});

//                    $("#city").text(data.location.name + "<sub id="country"></sub"");