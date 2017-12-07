(function ($) {
	init();

}(jQuery));

function init(){
	//获取左侧课程基本信息	
	var id;
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
	//获取话题信息
	$.ajax({			
		url: "/topic/"+id,
		type: "GET",
		data: {},
		async: false,
		success: function(data)
		{
			var topicInfo=data;
			$("div#name").append( "<input type='text' id='topicName' class='bigInput' value='"+topicInfo.name+"'>");
			$("div#description").append("<textarea class='textStyle' id='description'>"+topicInfo.description+"</textarea>")
			$("div#groupLimit").append( "<input type='text' id='groupLimit' class='middleInput' value='"+topicInfo.groupLimit+"'>");
			$("div#number").append( "<input type='text' id='groupLimit' class='middleInput' value='"+topicInfo.groupLimit+"'>");
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
	var id;
	var serial="A";	
	var newTopic={
			serial:serial,
			name : $("#topicName").val(),
			description:$("#description").val(),
			groupLimit:$("#groupLimit").val(),
			groupMemberLimit:$("#groupMemberLimit").val()
	};
	//alert(JSON.stringify(newClass));
	$.ajax({			
		url:  "/topic/"+id,
		type: "PUT",
		//dataType : "JSON",
		contentType: "application/json;charest=utf-8",
		data: JSON.stringify(newTopic),
		success: function(data)
		{
				alert("修改成功"+data);
				window.location.href="/TeacherTopicCheckBefore";
		},
		error:function()
		{
			alert("添加失败");
		}
		});	
}
//重置
function reload()
{
	window.location.reload()
}