function createSeminar(){

	if(!checkinput())
		return ;
	var id;

	var proportions={
			report : $("#reportGrade").val(),
			presentation : $("#seminarGrade").val(),
			c : $("#seminarGrade3").val(),
			b : $("#seminarGrade4").val(),
			a : $("#seminarGrade5").val()		
	};
	var newSeminar={
			name : $("#seminarName").val(),
			description : $("#description").val(),
			groupingMethod : $("#groupingMethod").find("option:selected").text(),
			startTime : $("#startTime").val(),
			endTime : $("#endTime").val(),
			proportions : proportions
	};
	//alert(JSON.stringify(newSeminar));
	$.ajax({			
		url:  "/course/"+id+"/seminar",
		type: "POST",
		contentType: "application/json;charest=utf-8",
		data: JSON.stringify(newSeminar),
		success: function(data)
		{
				alert("创建成功"+data);
				window.location.href="/TeacherCourseInformation";
		},
		error:function()
		{
			alert("创建失败");
		}
		});	
	
}
//检查输入是否有空
function checkinput(){
    var warn = "";
    var name =$("#seminarName").val();
    var description = $("#seminarDescription").val();
    var begintime = $("#startTime").val();
    var endtime = $("#endTime").val();
    var report = $("#reportGrade").val();
	var presentation= $("#seminarGrade").val();
	var c = $("#seminarGrade3").val();
	var b = $("#seminarGrade4").val();
	var a = $("#seminarGrade5").val();
    if(warn == null || warn.length == 0){
        if(name == ""){
            warn = "名称不能为空。";
        }else if(description == ""){
            warn = "说明不能为空。";
        }else if(begintime == null){
            warn = "请选择开始时间。";
        }else if( endtime  == null){
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