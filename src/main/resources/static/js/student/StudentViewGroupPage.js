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
	 $.ajax({			
			url: " http://rap2api.taobao.org/app/mock/933/GET/group/28?embedTopics=true ",
			type: "GET",
			data: {},
			async: false,
			success: function(data)
			{
				var leader=data.leader;
				var members=data.members;                
				//获取队长信息
				$("tr#leader").append(
						"<td>队长</td>"+"<td>"+leader.id+"</td>"+"<td>"+leader.name+"</td>");
				//获取队员信息
				for(var i in members)
					{
					$("table#studenttable").append(
							"<tr class='alt'><td>队员</td>"+
							"<td>"+members[i].id+"</td>"+
                            "<td>"+members[i].name+"</td></tr>");
					}					   					
			},
			error:function()
			{
				alert("获取课程信息失败");
			}
			});
}