(function ($) {
	init();

}(jQuery));

function init(){
	$.ajax({			
		//url:  "/course",
		url: "http://rap2api.taobao.org/app/mock/933/GET/course ",
		type: "GET",
		data: {},
		//dataType: 'json',  
		async: false,
		success: function(data)
		{
			var courselist=data;//要写成数组
			//alert(courselist.id);
			$("#courselist").append(
					"<div class='main_box_right_content' id='main_box_right_content1'>" + 
					"<h3 class='classtitle' onclick='Skip5()' style='cursor: pointer;'>" +
						courselist.name + 
						"<button onclick='deleteCourse(courselist.id)' style='cursor:pointer'>删除课程</button>" +
						"<button onclick='updateCourse(courselist.id)' style='cursor:pointer'>修改课程</button>" +
					"</h3><hr />"+
					"<div class='classinfo'>" +
						"<table class='table'>" +
							"<tr>" +
								"<td class='tabletext'>班级数：" + courselist.numClass + "</td>" +
								"<td class='tabletext'>学生人数：" + courselist.numStudent + "</td>" +
							"</tr>" +
							"<tr>" +
								"<td class='tabletext'>开始时间：" + courselist.startTime + "</td>" +
								"<td class='tabletext'>结束时间：" + courselist.endTime + "</td>" +
							"</tr>" +
						"</table>" +
					"</div>"+
				"</div>"
			)	
			
		},
		error:function()
		{
			alert("获取课程信息失败");
		}
		});
}

function updateCourse(id){
	OpenDialog("../windows/ModifyCourseWindow.html",200,200);
}

function deleteCourse(id){
	$.ajax({			
		url:  "/course/"+id,
		type: "DELETE",
		data: {},
		//dataType: 'json',  
		success: function(data)
		{
			alert("删除成功"+data);
			$("#main_box_right_content1").remove();
		},
		error:function()
		{
			alert("删除失败");
		}
		});
}

function OpenDialog(url,w, h) {
	 var iTop2 = (window.screen.availHeight - 20 - h) / 2;
	 var iLeft2 = (window.screen.availWidth - 10 - w) / 2;
	 var params = 'menubar:no;dialogHeight=' + h + 'px;dialogWidth=' + w + 'px;dialogLeft=' + iLeft2 + 'px;dialogTop=' + iTop2 + 'px;resizable=yes;scrollbars=0;resizeable=0;center=yes;location:no;status:no'
	 var addDiv = $("<div id = 'tempDiv' style='left:0px;top:0px;position:absolute;width:100%;height:100%;background:rgba(0,0,0,0.4)!important;filter:alpha(opacity = 40);background:#000;z-index:1000;'></div>");
	 window.open(url, addDiv, params);
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
//点击具体课程
function Skip5()
{
	window.location.href="TeacherCourseInformation.html"
}