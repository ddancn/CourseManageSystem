(function ($) {
	init();

}(jQuery));

function init(){
	var id;
	//获取左侧课程基本信息	
	$.ajax({			
		url: "/course/"+id,
		type: "GET",
		data: {},
		async: false,
		success: function(data)
		{
			var courseInfo=data;
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
	//获取话题信息
	$.ajax({			
		url: "/topic/"+id,
		type: "GET",
		data: {},
		async: false,
		success: function(data)
		{
			var topicInfo=data;
			$("label#name").append(topicInfo.name);
			$("label#description").append(topicInfo.description);
			$("label#groupLimit").append(topicInfo.groupLimit);
			$("label#groupMemberLimit").append(topicInfo.groupMemberLimit);
			$("label#groupLeft").append(topicInfo.groupLeft);
		},
		error:function()
		{
			alert("获取课程信息失败");
		}
		});
	
}

//删除话题
function deleteTopic()
{
	var id;
	if 
	(confirm("您确定要删除该话题吗？")){		
	$.ajax({			
		url: "/topic/"+id,
		type: "DELETE",
		data: {},
		async: false,
		success: function(data)
		{
			alert("删除成功"+data);
			window.location.href='/TeacherSeminarInfo';
		},
		error:function()
		{
			alert("删除失败");
		}
		});
	}
	else{}
}
//修改话题
function updateTopic()
{
	window.location.href='TeacherUpdateTopic.html'
}