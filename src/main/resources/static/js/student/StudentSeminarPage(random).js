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
			alert("获取课程信息失败");
		}
		});
	//获取选取该话题的小组信息
	$.ajax({			
		url: "/group/"+id,
		type: "GET",
		data: {},
		async: false,
		success: function(data)
		{
			var groupInfo=data;//要写成数组
			//获取选择主题名字
			for(var i in groupInfo.topics)
			$("label#topic").append(groupInfo.topics[0].name);
			//获取组号
			$("label#id").append(groupInfo.id);
			//获取组长
			$("label#leader").append(groupInfo.leader.name);
			//获取组员
			for(var j in groupInfo.members)
			$("label#members").append("<label class='itemName'>"+groupInfo.members[j].name+"</label>&nbsp;");
			for(var i in groupInfo.topics)
			{
				$("div.blockBody").append("<div class='smallblock'><div class='blockFont' style='cursor:pointer' onclick='concreteTopic()'>话题"+(i+1)+"</div></div>")
			}
		},
		error:function()
		{
			alert("获取小组信息失败");
		}
		});
}

//点击话题
function concreteTopic()
{
	window.location.href='StudentViewTopicPage(fixed).html';
}
//点击查看分数
function viewGrade()
{
	window.location.href='StudentViewGradePage.html';
}