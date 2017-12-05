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
	//获取讨论课信息
	$.ajax({			
		url: "http://rap2api.taobao.org/app/mock/933/GET/seminar/32",
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
	//获取话题元素
	$.ajax({			
		url: "http://rap2api.taobao.org/app/mock/933/GET/seminar/32",
		type: "GET",
		data: {},
		async: false,
		success: function(data)
		{
			var number=2;
			var i =number;
			for(i;i>0;i--)
			{
				$("div.topicBlockBody").prepend("<div class='topicBlock'><div class='topicBlockFont'>话题"+(i)+"</div></div>")
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
			alert();
		},
		error:function()
		{
			alert("删除失败");
		}
		});
	}
	else{}
}

//跳转评分界面
function score()
{
	openWindow("TeacherScoreHome.html",100,100);}

//修改
function modifySeminar()
{
	openWindow("TeacherCreateSeminar.html",100,100);
}

//添加话题
function addTopic()
{
	openWindow("TeacherCreateTopic.html",100,100);
}

//弹窗
function openWindow(url,w, h)
{
	 var iTop2 = (window.screen.availHeight - 20 - h) / 2;
	 var iLeft2 = (window.screen.availWidth - 10 - w) / 2;
	 var params = 'menubar:no;dialogHeight=' + h + 'px;dialogWidth=' + w + 'px;dialogLeft=' + iLeft2 + 'px;dialogTop=' + iTop2 + 'px;resizable=yes;scrollbars=0;resizeable=0;center=yes;location:no;status:no'
	 var addDiv = $("<div id = 'tempDiv' style='left:0px;top:0px;position:absolute;width:100%;height:100%;background:rgba(0,0,0,0.4)!important;filter:alpha(opacity = 40);background:#000;z-index:1000;'></div>");
	 window.open(url, addDiv, params);
	
}

