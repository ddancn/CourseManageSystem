/**
 * 
 */

window.onload=init;

function init(){
	var personinfo;
	$.ajax({			
		url:  "/me",
		type: "GET",
		data: {},
		async: false,
		success: function(data)
		{
			personinfo=data;
			var gender=personinfo.gender=="male"?"男":"女";
			$("#personinfomodify").empty();
			$("#personinfomodify").append(
			        "<tr class='itemName'>" + 
			        "<td>用户名：<span>" + personinfo.phone + "</span></td>" +
			        "<td>教工号：<input type='text' id='number' value='" + personinfo.number + "'/></td>" +
			        "</tr>" +
			        "<tr class='itemName'>" + 
			        "<td>姓名：<input type='text' id='name' value='" + personinfo.name + "'/></td>" +
			        "<td>性别：<input type='text' id='sex' value='" + gender + "'/></td>" +
			        "</tr>" +
			        "<tr class='itemName'>" + 
			        "<td>学校：<input type='text' id='school' value='" + personinfo.school.name + "'/></td>" +
			        "<td>职称：<input type='text' id='title' value='" + personinfo.title + "'/></td>" +
			        "</tr>" +
			        "<tr class='itemName'>" + 
			        "<td>E-mail：<input type='text' id='e-mail' value='" + personinfo.email + "'/></td>" +
			        "<td>联系方式：<input type='text' id='phone' value='" + personinfo.phone + "'/></td>" +
			        "</tr>" 

			)	
			
		},
		error:function()
		{
			alert("获取用户信息失败");
		}
		});
}

function changePersonInfo(){

	if(!checkinput())
		return ;
	var modifyinfo={
			"number":$("#idnum").val(),
			"name":$("#name").val(),
			"gender":transfersex($("#sex").val()),
			"school":$("#school").val(),
			"title":$("#sex").val(),
			"email":$("#email").val(),
			"phone":$("#phone").val()
	};
	var modifyinfo={"name": $("#name").val(), "phone": $("#phone").val()};

	$.ajax({			
		url:  "/me",
		type: "PUT",
		contentType: "application/json",
		data: JSON.stringify(modifyinfo),
		async: false,
		success: function(data,status)
		{						
			alert("修改成功"+status);
			window.location.href="/StudentHomePage";
		},
		error:function()
		{
			alert("修改失败");
		}
		});	
}
//检查输入是否有空
function checkinput(){
    var warn = "";
    var name = document.getElementById("name").value;
    var school = document.getElementById("school").value;
    var number = document.getElementById("number").value;
    if(warn == null || warn.length == 0){
        if(name == ""){
            warn = "姓名不能为空。";
        }else if(number == ""){
            warn = "学号不能为空。";
        }else if( school  == ""){
            warn = "学校不能为空。";
        }
        if(warn !=null && warn.length !=0){
            alert(warn);
            return false;
    }
        else
           return true;
    }
}

//转换性别
function  transfersex() {
    var sex = document.getElementById("sex").value;
    var gender;
    if (sex=="男") {
        gender = "male";
    }
    else if(sex=="女"){
        gender = "femala";
    }
    else {
    	alert("性别请输男或女。");
    	return false;
    }
    return gender;
}