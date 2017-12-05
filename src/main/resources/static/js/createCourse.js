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
//点击基本信息、首页
function Skip1()
{
	window.location.href="TeacherHomePage.html";
}
//点击课程信息
function Skip2()
{
	window.location.href="TeacherCourseHomePage.html";
}
//点击新建课程
function Skip3()
{
	window.location.href="TeacherCreateCoursePage.html";
}
//点击退出
function Skip4()
{
	window.location.href="../common/WechatLoginPage.html";
}