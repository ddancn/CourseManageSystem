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
					"<div class='main_box_right_content'>" + 
					"<h3 class='classtitle'>" +
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
	var modifyCourse={"name":"test"
			
	};
	//修改好像居然还要自己写弹出框但是我还没写
	$.ajax({			
		url:  "/course/"+id,
		type: "PUT",
		contentType: "application/json",
		data: JSON.stringify(modifyCourse),
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

function deleteCourse(id){
	$.ajax({			
		url:  "/course/"+id,
		type: "DELETE",
		data: {},
		//dataType: 'json',  
		success: function(data)
		{
			alert("删除成功"+data);
		},
		error:function()
		{
			alert("删除失败");
		}
		});
}