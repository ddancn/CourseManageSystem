(function ($) {
	init();

}(jQuery));

function init(){
	$.ajax({			
		//url:  "/course",
		url: "http://rap2api.taobao.org/app/mock/933/GET/course ",
		type: "GET",
		data: {},
		//dataType: 'json',  
		async: false,
		success: function(data)
		{
			var courselist=data;//要写成数组
			$("#form").prepend(
					"<form class='itemName'>" + 
						"课程名称*：<input type='text' id='coursename' value= '"+courselist.name+"'/> <br /> <br />" +
						"开始时间*：<input type='date' id='begintime' value= '"+courselist.startTime+"'/> "+
						"结束时间*：<input type='date' id='endtime'  value='"+courselist.endTime+"'/> <br /> <br />" +
						"课程介绍：<br /> <textarea id='courseinfo' cols='80' rows='5' ></textarea>"+
						"<br /> 评分规则*： <br />"+
						"<div class='scorerule'><p>讨论课分数占比:<input type='text' name='seminarscore'>" +
						"报告分数占比：<input type='text' name='reportscore'></p><p>五分占比:<input type='text' name='five'>" +
						"四分占比：<input type='text' name='four'>三分占比：<input type='text' name='three'></p></div><br />"+
					   "</form>"	
						
			)	;
			
		},
		error:function()
		{
			alert("获取课程信息失败");
		}
		});
}

function exit()
{
	if 
	(confirm("您确定要关闭本页吗？")){
	window.opener=null;
	window.open('','_self');
	window.close();
	}
	else{}
}

function submit()
{
	var modifyInfo={
			"name":$("#coursename").val(),
			"startTime":$("#begintime").val(),
			"endTime":$("#endtime").val(),
			"description":$("#courseinfo").val()
	};
//	var newCourse={"id": 1,"name":"test"};
	$.ajax({			
		url:  "/course",
		type: "POST",
		//dataType : "JSON",
		contentType: "application/json",
		data: JSON.stringify(modifyInfo),
		success: function(data)
		{
				alert("修改成功"+data);
		},
		error:function()
		{
			alert("修改失败");
		}
		});	

	

}