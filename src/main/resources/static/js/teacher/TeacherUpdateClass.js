var count=1;


(function ($) {
init();

}(jQuery));

function init(){
var id;
//获取左侧课程基本信息	
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
//获取班级信息
$.ajax({			
url: "/class/1",
type: "GET",
data: {},
async: false,
success: function(data)
{
var classInfo=data;
$("div#name").append( "<input type='text' name='className' class='bigInput' value='"+classInfo.name+"'>");
$("div#site").append("<input type='text' name='classNickName' class='bigInput' value='"+classInfo.site+"'>");
$("input#seminarGrade").attr("value",classInfo.proportions.presentation);
$("input#reportGrade").attr("value",classInfo.proportions.report);
$("input#seminarGrade5").attr("value",classInfo.proportions.c);
$("input#seminarGrade4").attr("value",classInfo.proportions.b);
$("input#seminarGrade3").attr("value",classInfo.proportions.a);




},
error:function()
{
alert("获取课程信息失败");
}
});

}



function createClass(){

	var id;
	var time="";
	for(var i=1;i<=count;i++){
		time+=$("#week"+count).find("option:selected").text()+
			$("#day"+count).find("option:selected").text()+
			$("#lesson"+count).find("option:selected").text()+"  ";
	}
	var proportions={
			report : $("#reportGrade").val(),
			presentation : $("#seminarGrade").val(),
			c : $("#seminarGrade3").val(),
			b : $("#seminarGrade4").val(),
			a : $("#seminarGrade5").val()		
	};
	var newClass={
			name : $("#className").val(),
			time: time,
			proportions : proportions
	};
	//alert(JSON.stringify(newClass));
	$.ajax({			
		url:  "/course/"+id+"/class",
		type: "POST",
		//dataType : "JSON",
		contentType: "application/json;charest=utf-8",
		data: JSON.stringify(newClass),
		success: function(data)
		{
				alert("修改成功"+data);
				window.location.href="/TeacherClassInfo";
		},
		error:function()
		{
			alert("修改失败");
		}
		});	
	
}

//添加
function add(){
	count++;
	$("div#add").after(
			"<div class='item'>"+
            "<label class='itemName'>上课时间:</label>"+
            "<select id='week" + count + "' class='bigSelect'>"+
               "<option value ='单周'>单周</option>"+
               "<option value ='双周'>双周</option>"+
               "<option value ='每周' selected='selected'>每周</option>"+
            "</select>"+
            "<select id='day"  + count + "' class='smallSelect'>"+
               "<option value ='周一'>周一</option>"+
               "<option value ='周二'>周二</option>"+
               "<option value ='周三' >周三</option>"+
               "<option value ='周四'>周四</option>"+
               "<option value ='周五'>周五</option>"+
               "<option value ='周六' >周六</option>"+
               "<option value ='周日' >周日</option>"+
            "</select>"+
            "<select id='lesson" + count + "' class='smallSelect'>"+
               "<option value ='一二节'>一二节</option>"+
               "<option value ='三四节'>三四节</option>"+
               "<option value ='五六节' >五六节</option>"+
               "<option value ='七八节'>七八节</option>"+
               "<option value ='九十节'>九十节</option>"+                  
            "</select></div>"
			);
}

function reset(){
	window.location.reload();
}