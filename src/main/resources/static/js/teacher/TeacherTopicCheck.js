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
		url: "  http://rap.taobao.org/mockjsdata/29816/seminar/32/topic",
		type: "GET",
		data: {},
		async: false,
		success: function(data)
		{
			var topicInfo=data;
			$("label#name").append(topicInfo[0].name);
			$("label#description").append(topicInfo[0].description);
			$("label#groupLimit").append(topicInfo[0].groupLimit);
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
	if 
	(confirm("您确定要删除该话题吗？")){		
	$.ajax({			
		url: "/topic/"+id,
		type: "DELETE",
		data: {},
		async: false,
		success: function(data)
		{
			alert(data);
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
}