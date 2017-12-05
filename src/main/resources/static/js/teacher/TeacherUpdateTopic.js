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
	//获取话题信息
	$.ajax({			
		url: "http://rap2api.taobao.org/app/mock/933/GET/seminar/32",
		type: "GET",
		data: {},
		async: false,
		success: function(data)
		{
			var topicInfo=data;
			$("div#name").append( "<input type='text' name='seminarName' class='bigInput' value='"+topicInfo.name+"'>");
			$("div#description").append("<textarea class='textStyle'>"+topicInfo.description+"</textarea>")
			$("div#groupLimit").append( "<input type='text' name='groupLimit' class='middleInput' value='"+topicInfo.groupLimit+"'>");
			$("div#number").append( "<input type='text' name='groupLimit' class='middleInput' value='"+topicInfo.groupLimit+"'>");
		},
		error:function()
		{
			alert("获取课程信息失败");
		}
		});
	
}



//提交
function submit()
{
	
}
//重置
function reload()
{
	window.location.reload()
}