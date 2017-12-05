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
	//获取班级信息
	$.ajax({			
		url: "http://rap2api.taobao.org/app/mock/933/GET/seminar/32",
		type: "GET",
		data: {},
		async: false,
		success: function(data)
		{
			var classInfo=data;
			$("div#name").append( "<input type='text' name='className' class='bigInput' value='"+classInfo.name+"'>");
			$("div#place").append("<input type='text' name='classNickName' class='bigInput' value='"+classInfo.name+"'>");
		},
		error:function()
		{
			alert("获取课程信息失败");
		}
		});
	
}

//添加
function add()
{
	$("div#add").after("<div class='item'>"+
			" <label class='itemName' id='time'>上课时间:</label>"+
			"<select class='bigSelect'></select>"+
			"<select class='smallSelect'></select>"+
			"<select class='smallSelect'></select>"+
			"</div>"
			);
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