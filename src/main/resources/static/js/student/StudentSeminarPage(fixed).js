(function ($) {
	init();

}(jQuery));

function init(){
	var id=1;
	//获取左侧课程基本信息	
	$.ajax({			
		url: "/course/" + id,
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
	//获取讨论课基本信息	
	$.ajax({			
		url: "/seminar/"+id,
		type: "GET",
		data: {},
		async: false,
		success: function(data)
		{
			var seminarInfo=data;//要写成数组
			//获取讨论课名字
			$("label#name").append(seminarInfo.name);
			//获取讨论课简介
			$("label#description").append(seminarInfo.description);
			//获取分组模式
			$("label#groupingMethod").append(seminarInfo.groupingMethod);
			//获取开始结束时间
			$("label#startTime").append(seminarInfo.startTime);
			$("label#endTime").append(seminarInfo.endTime);
		},
		error:function()
		{
			alert("获取讨论课信息失败");
		}
		});
	//获取话题元素
	$.ajax({			
		url: "/seminar/"+id,
		type: "GET",
		data: {},
		async: false,
		success: function(data)
		{
			var number=data.topics.length;
			var i =number;
			for(i;i>0;i--)
			{
				$("div.blockBody").prepend("<div class='topicBlock'><div class='topicBlockFont' onclick='concreteTopic()' style='cursor:pointer'>话题"+(i)+"</div></div>")
			}
		},
		error:function()
		{
			alert("获取课程信息失败");
		}
		});

}

//点击话题
function concreteTopic()
{
	window.location.href="/StudentViewTopicPage(fixed)";
}
//点击查看分数
function viewGrade()
{
	window.location.href="/StudentViewGradePage";
}