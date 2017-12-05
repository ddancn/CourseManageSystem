var personinfo;
(function ($) {
	init();

}(jQuery));

function init(){
	$.ajax({			
		//url:  "/me",
		url: "http://rap2api.taobao.org/app/mock/933/GET/me",
		type: "GET",
		data: {},
		//dataType: 'json',  
		async: false,
		success: function(data)
		{
			personinfo=data;
			$("#personinfomodify").empty();
			$("#personinfomodify").append(
			        "<tr class='itemName'>" + 
			        "<td>用户名：<span>" + personinfo.phone + "</span></td>" +
			        "<td>教工号：<input type='text' id='idnum' value='" + personinfo.number + "'/></td>" +
			        "</tr>" +
			        "<tr class='itemName'>" + 
			        "<td>姓名：<input type='text' id='name' value='" + personinfo.name + "'/></td>" +
			        "<td>性别：<input type='text' id='sex' value='" + personinfo.gender + "'/></td>" +
			        "</tr>" +
			        "<tr class='itemName'>" + 
			        "<td>学校：<input type='text' id='school' value='" + personinfo.school.name + "'/></td>" +
			        "<td>职称：<input type='text' id='title' value='" + personinfo.title + "'/></td>" +
			        "</tr>" +
			        "<tr class='itemName'>" + 
			        "<td>E-mail：<input type='text' id='e-mail' value='" + personinfo.email + "'/></td>" +
			        "<td>联系方式：<input type='text' id='phone' value='" + personinfo.phone + "'/></td>" +
			        "</tr>" 

			)	
			
		},
		error:function()
		{
			alert("获取用户信息失败");
		}
		});
}

function changePersonInfo(){

//	var modifyinfo={
//			"number":$("#idnum").val(),
//			"name":$("#name").val(),
//			"gender":$("#sex").val(),
//			"school":$("#school").val(),
//			"title":$("#sex").val(),
//			"email":$("#email").val(),
//			"phone":$("#phone").val()
//	};buok
	var modifyinfo={"name": $("#name").val(), "phone": $("#phone").val()};

	$.ajax({			
		url:  "/me",
		type: "PUT",
		//dataType : "JSON",
		contentType: "application/json",
		data: JSON.stringify(modifyinfo),
		async: false,
		success: function(data)
		{
				alert("修改成功"+data);
		},
		error:function()
		{
			alert("修改失败");
		}
		});	
	
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