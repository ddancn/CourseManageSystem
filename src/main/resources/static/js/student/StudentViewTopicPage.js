(function ($) {
	init();

}(jQuery));

function init(){
	var id;
	//获取左侧课程基本信息	
	$.ajax({			
		url: "/course/ "+id,
		type: "GET",
		data: {},
		async: false,
		success: function(data)
		{
			var courseInfo=data;//要写成数组
			//获取线上的课程名字
			$("div.courseName").prepend(courseInfo.name);
			//获取线下的课程介绍
			$("div.navigation").append("<div class='courseIntroduction'>"+courseInfo.description+"</div>");
		},
		error:function()
		{
			alert("获取课程信息失败");
		}
		});
	//获取话题信息
	$.ajax({			
		url: "/topic/"+id,
		type: "GET",
		data: {},
		async: false,
		success: function(data)
		{
			var topicInfo=data;//要写成数组
			//获取话题名字
			$("label#name").prepend(topicInfo.name);
			$("label#description").prepend(topicInfo.description);
			$("label#groupLimit").prepend(topicInfo.groupLimit);
			$("label#groupMemberLimit").prepend(topicInfo.groupMemberLimit);
		},
		error:function()
		{
			alert("获取课程信息失败");
		}
		});
}
function chooseTopic()
{
	var topicId=1,groupId=1;
	if 
	(confirm("您确定要选择该话题吗？")){	
	
	$.ajax({			
		url: "/group/1/topic",
		type: "POST",
		dataType:'json',
		data:{"topicId":topicId},
		async: false,
		success: function(data)
		{
			alert("选择成功"+data);
			window.location.href="StudentSeminarPage(fixed).html";
		},
		error:function()
		{
			alert("选择话题失败");
		}
		});
	}
	else{alert("选择失败");}
}