(function ($) {
	init();

}(jQuery));

function init(){
	var id;
	var groupinfo;
	// 获取左侧课程基本信息
	$.ajax({			
		url: "/course/"+id,
		type: "GET",
		data: {},
		async: false,
		success: function(data)
		{
			var courseInfo=data;// 要写成数组
			// 获取线上的课程名字
			$("div.courseName").prepend(
					courseInfo.name
			);
			// 获取线下的课程介绍
			$("div.navigation").append(
					"<div class='courseIntroduction'>"+courseInfo.description+"</div>"						
			);
		},
		error:function()
		{
			alert("获取课程信息失败");
		}
		});
	// 获取小组前三列信息
	$.ajax({			
		url: "/group/"+id,
		type: "GET",
		data: {},
		async: false,
		success: function(data)
		{
			groupinfo=data;
			$("table#studenttable").append(
					"<tr><td>"+groupinfo.topics[0].name+"</td>"+
					"<td>"+groupinfo.name 
					+"</td>"+
					"<td>"+groupinfo.leader.name 

+"</td>"+
					"<td>"+groupinfo.grade.presentationGrades[0].grade+"</td>"+

					"<td>"+groupinfo.grade.reportGrade+"</td>"+
					"<td>"+groupinfo.grade.grade+"</td>"+
					"<td>" );

		
			
		},
		error:function()
		{
			alert("获取小组信息失败");
		}
		});
	
	
}

