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
	//获取成绩信息	
	
	
}