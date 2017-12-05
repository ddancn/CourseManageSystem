/**
 * 
 */
//页面加载时调用函数获取学生基本信息
window.onload = getInformation;

//获取学生基本信息
function getInformation()
{
	var t;
	$.ajax({
		url:"me",
		type:"GET",
		success:function(data){
			t = data;
		},
		error:function(){
			alert("获取信息失败！");
		}
	})
	alert(t);

}


//修改个人信息
function modify(){
	var t;
//	alert("yes");
	$.ajax({
		url:"/me",
		type:"GET",
		success:function(data){
			t=data;
			alert(t);
		},
		error:function(){
			alert("读取学生信息错误");
		}
	});
	document.getElementById("username").value=t.phone;
	document.getElementById("stuffNum").value=t.number;
	document.getElementById("name").value=t.name;
	judgesex(t.gender);
	document.getElementById("school").value=t.school.name;
	document.getElementById("education").value=t.education;
	document.getElementById("email").value=t.email;
	document.getElementById("tel").value=t.phone;
	//头像还没设置
}

function judgesex(gender){
	if(gender == "female")
	document.getElementById("woman").checked = true;
	else
	doucument.getElementById("man").checked = true;
}