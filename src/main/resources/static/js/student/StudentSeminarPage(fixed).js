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
	//获取话题元素
	$.ajax({			
		url: "/number",
		type: "GET",
		data: {},
		async: false,
		success: function(data)
		{
			var number=data.id;//要写成数组
			var i = 0;
			for(i;i<number;i++)
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