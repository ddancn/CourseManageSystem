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
	//获取讨论课信息
	$.ajax({			
		url: "/seminar/"+id,
		type: "GET",
		data: {},
		async: false,
		success: function(data)
		{
			var seminarInfo=data;
			$("div#name").append( "<input type='text' id='seminarName' class='bigInput' value='"+seminarInfo.name+"'>");
			$("div#description").append("  <textarea class='textStyle' id='description'>"+seminarInfo.description+"</textarea>");
			$("input#seminarGrade").attr("value",seminarInfo.proportions.presentation);
			$("input#reportGrade").attr("value",seminarInfo.proportions.report);
			$("input#seminarGrade5").attr("value",seminarInfo.proportions.c);
			$("input#seminarGrade4").attr("value",seminarInfo.proportions.b);
			$("input#seminarGrade3").attr("value",seminarInfo.proportions.a);
		},
		error:function()
		{
			alert("获取讨论信息失败");
		}
		});
	
}

//提交
function submit()
{
	var id;
	var startTime="",endTime="";	
	var proportions={
			report : $("#reportGrade").val(),
			presentation : $("#seminarGrade").val(),
			c : $("#seminarGrade3").val(),
			b : $("#seminarGrade4").val(),
			a : $("#seminarGrade5").val()		
	};
	var newSeminar={
			name : $("#seminarName").val(),
			description:$("#description").val(),
			startTime: startTime,
			endTime:endTime,
			proportions : proportions
	};
	//alert(JSON.stringify(newClass));
	$.ajax({			
		url:  "/seminar/"+id,
		type: "PUT",
		//dataType : "JSON",
		contentType: "application/json;charest=utf-8",
		data: JSON.stringify(newSeminar),
		success: function(data)
		{
				alert("修改成功"+data);
				window.location.href='/TeacherSeminarInfo';
		},
		error:function()
		{
			alert("修改失败");
		}
		});	
}
//重置
function reload()
{
	window.location.reload()
}
