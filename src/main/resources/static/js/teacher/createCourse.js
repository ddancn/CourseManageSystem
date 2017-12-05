(function ($) {

}(jQuery));


function createCourse(){

	var newCourse={
			"name":$("#coursename").val(),
			"startTime":$("#begintime").val(),
			"endTime":$("#endtime").val(),
			"description":$("#courseinfo").val()
	};
//	var newCourse={"id": 1,"name":"test"};
	$.ajax({			
		url:  "/course",
		type: "POST",
		//dataType : "JSON",
		contentType: "application/json",
		data: JSON.stringify(newCourse),
		success: function(data)
		{
				alert("添加成功"+data);
		},
		error:function()
		{
			alert("添加失败");
		}
		});	
	
}

function reset(){
	//alert("reset");
	window.location.reload();
}