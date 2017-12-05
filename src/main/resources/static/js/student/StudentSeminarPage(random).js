(function ($) {
	init();

}(jQuery));

function init(){
	//获取左侧课程基本信息	
	$.ajax({			
		url: "http://rap2api.taobao.org/app/mock/933/GET/course ",
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
				   "<div class='courseIntroduction'>ooad is xxx</div>"			
			);
		},
		error:function()
		{
			alert("获取课程信息失败");
		}
		});
	
	//获取讨论课基本信息	
	$.ajax({			
		url: " http://rap2api.taobao.org/app/mock/933/GET/course/222/seminar",
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
	//获取话题和小组信息
	$.ajax({			
		url: "http://rap2api.taobao.org/app/mock/933/GET/group/28?embedTopics=true",
		type: "GET",
		data: {},
		async: false,
		success: function(data)
		{
			var info=data;//要写成数组
			//获取选择主题名字
			for(var i in info.topics)
			$("label#topic").append(info.topics[0].name);
			//获取组号
			$("label#id").append(info.id);
			//获取组长
			$("label#leader").append(info.leader.name);
			//获取组员
			for(var j in info.members)
			$("label#members").append("<label class='itemName'>"+info.members[j].name+"</label>&nbsp;");
			for(var i in info.topics)
			{
				$("div.blockBody").append("<div class='smallblock'><div class='blockFont'>话题"+(i+1)+"</div></div>")
			}
		},
		error:function()
		{
			alert("获取课程信息失败");
		}
		});
}