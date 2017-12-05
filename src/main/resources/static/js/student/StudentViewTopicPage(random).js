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
			$("div.courseName").prepend(courseInfo.name);
			//获取线下的课程介绍
			$("div.navigation").append("   <div class='courseIntroduction'>OOAD is XXX</div>");
		},
		error:function()
		{
			alert("获取课程信息失败");
		}
		});
	//获取话题信息
	$.ajax({			
		url: " http://rap2api.taobao.org/app/mock/933/GET/topic/257",
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
	if 
	(confirm("您确定要选择该话题吗？")){	
	alert("选择成功");
	}
	else{alert("选择失败");}
}