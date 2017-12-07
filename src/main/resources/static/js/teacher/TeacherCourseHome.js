window.onload=init;

function init(){
	$.ajax({			
		url:  "/course",
		type: "GET",
		data: {},
		async: false,
		success: function(data)
		{
			var courselist=data;
			for(var i in courselist){
			var course=courselist[i];
			$("#courselist").append(
					"<div id='class"+course.id+"'class='main_box_right_content'>" + 
					"<h3 class='classtitle'>" +
						"<a href='/TeacherCourseInformation'>"+course.name +"</a>"+ 
						"<button onclick='deleteCourse("+course.id+")' style='cursor:pointer'>删除课程</button>" +
						"<button onclick='updateCourse("+course.id+")' style='cursor:pointer'>修改课程</button>" +
					"</h3><hr />"+
					"<div class='classinfo'>" +
						"<table class='table'>" +
							"<tr>" +
								"<td class='tabletext'>班级数：" + course.numClass + "</td>" +
								"<td class='tabletext'>学生人数：" + course.numStudent + "</td>" +
							"</tr>" +
							"<tr>" +
								"<td class='tabletext'>开始时间：" + course.startTime + "</td>" +
								"<td class='tabletext'>结束时间：" + course.endTime + "</td>" +
							"</tr>" +
						"</table>" +
						"</div><br/>"+
					"</div><br/>"
			)	
			}
			
		},
		error:function()
		{
			alert("获取课程信息失败");
		}
		});
}

function updateCourse(id){
	window.location.href="/TeacherUpdateCourse";
}

function deleteCourse(id){
	$.ajax({			
		url:  "/course/"+id,
		type: "DELETE",
		data: {},
		success: function(data,status)
		{
			alert("删除成功"+status+id);
			$("#class"+id).remove();
		},
		error:function()
		{
			alert("删除失败");
		}
		});
}
