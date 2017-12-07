(function ($) {
	init();

}(jQuery));

function init(){
	var id;
	var groupInfo;
	//获取左侧课程基本信息	
	$.ajax({			
		url: "/course/"+id,
		type: "GET",
		data: {},
		async: false,
		success: function(data)
		{
			var courseInfo=data;//要写成数组
			//获取线上的课程名字
			$("div.courseName").prepend(
					courseInfo.name
			);
			//获取线下的课程介绍
			$("div.navigation").append(
					"<div class='courseIntroduction'>"+courseInfo.description+"</div>"						
			);
		},
		error:function()
		{
			alert("获取课程信息失败");
		}
		});
	//获取小组前三列信息
	$.ajax({			
		url: "/group/"+id,
		type: "GET",
		data: {},
		async: false,
		success: function(data)
		{
			groupInfo=data;
			$("table#studenttable").append(
					"<tr id='"+groupInfo.seminarName+"'>"+
					"<td>"+groupInfo.seminarName+"</td>"+
					"<td>"+groupInfo.groupName+"</td>"+
					"<td>"+groupInfo.leaderName+"</td>" +
					"<td>"+groupInfo.presentationGrade+"</td>" +
					"<td>"+groupInfo.reportGrade+"</td>" +
					"<td>"+groupInfo.grade+"</td>" +
					"</tr>");
		
			
		},
		error:function()
		{
			alert("获取小组信息失败");
		}
		});
	
	
}

