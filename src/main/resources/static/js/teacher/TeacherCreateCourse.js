function createCourse(){

	if(!checkinput())
		return ;
	var proportions={
			report : $("#reportGrade").val(),
			presentation : $("#seminarGrade").val(),
			c : $("#seminarGrade3").val(),
			b : $("#seminarGrade4").val(),
			a : $("#seminarGrade5").val()		
	};
	var newCourse={
			name:$("#coursename").val(),
			startTime:$("#begintime").val(),
			endTime:$("#endtime").val(),
			description:$("#courseinfo").val(),
			proportions:proportions
	};
	$.ajax({			
		url:  "/course",
		type: "POST",
		contentType: "application/json",
		data: JSON.stringify(newCourse),
		success: function(data,status)
		{
				alert("添加成功"+data);
		},
		error:function()
		{
			alert("添加失败");
		}
		});	
	
}
//检查输入是否有空
function checkinput(){
    var warn = "";
    var name =$("#coursename").val();
    var begintime = $("#begintime").val();
    var endtime = $("#endtime").val();
    var report = $("#reportGrade").val();
	var presentation= $("#seminarGrade").val();
	var c = $("#seminarGrade3").val();
	var b = $("#seminarGrade4").val();
	var a = $("#seminarGrade5").val();
    if(warn == null || warn.length == 0){
        if(name == ""){
            warn = "名称不能为空。";
        }else if(begintime == ""){
            warn = "请选择开始时间。";
        }else if( endtime  == ""){
            warn = "请选择结束时间。";
        }
        else if(report==""||presentation==""||a==""||b==""||c==""){
        	warn = "请输入评分规则。"
        }
        if(warn !=null && warn.length !=0){
            alert(warn);
            return false;
    }
        else
           return true;
    }
}

function reset(){
	window.location.reload();
}