(function ($) {
	
	init();

}(jQuery));

function init(){
	var courseId,seminarId=1;
	//获取左侧课程基本信息	
	$.ajax({			
		url: "/course/"+courseId,
		type: "GET",
		data: {},
		async: false,
		success: function(data)
		{
			var courseDetail=data;
			//获取线上的课程名字
			$("div.courseName").append(courseDetail.name);
			//获取线下的课程介绍
			$("div.navigation").append(
				   "<div class='courseIntroduction'>"+courseDetail.description+"</div>"			
			);
		},
		error:function()
		{
			alert("获取课程信息失败");
		}
		});
	//获取讨论课信息
	$.ajax({			
		url: "/seminar/"+seminarId,
		type: "GET",
		data: {},
		async: false,
		success: function(data)
		{
			var seminarInfo=data;
			$("label#name").append(seminarInfo.name);
			$("label#description").append(seminarInfo.description);
			$("label#groupingMethod").append(seminarInfo.groupingMethod);
			$("label#startTime").append(seminarInfo.startTime);
			$("label#endTime").append(seminarInfo.endTime);
		},
		error:function()
		{
			alert("获取课程信息失败");
		}
		});
	//根据讨论课ID获取该讨论课话题数组，根据话题数组长度生成话题元素
	$.ajax({			
		url: "/seminar/"+seminarId,
		type: "GET",
		data: {},
		async: false,
		success: function(data)
		{
			var number=data.topics.length;
			var i =number;
			for(i;i>0;i--)
			{
				$("div.topicBlockBody").prepend("<div class='topicBlock'><div class='topicBlockFont' onclick='concreteTopic()' style='cursor:pointer'>话题"+(i)+"</div></div>")
			}
		},
		error:function()
		{
			alert("获取课程信息失败");
		}
		});
}

//删除讨论课
function deleteSeminar()
{
	var id=1;
	if 
	(confirm("您确定要删除该讨论课吗？")){		
	//删除讨论课
	$.ajax({			
		url: "/seminar/"+id,
		type: "DELETE",
		data: {},
		async: false,
		success: function(data)
		{
			alert("删除成功");
			window.location.href='TeacherCourseInformation.html';
		},
		error:function()
		{
			alert("删除失败");
		}
		});
	}
	else{}
}
//返回上一层
function back()
{
	window.location.href='/TeacherCourseInformation';
}
//跳转评分界面
function score()
{
	window.location.href='/TeacherScoreHome';
}
//修改
function modifySeminar()
{
		window.location.href='/TeacherUpdateSeminar';
}

//点击话题
function concreteTopic()
{
	window.location.href='/TeacherTopicCheckBefore';
}
//添加话题
function addTopic()
{
	window.location.href='/TeacherCreateTopic';
}



