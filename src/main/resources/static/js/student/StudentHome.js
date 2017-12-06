/**
 * 
 */
//页面加载时调用函数获取学生基本信息
window.onload = getInformation;

//获取学生基本信息,头像还没！！！！
function getInformation()
{
	var t;
	$.ajax({
		url:"/me",
		type:"GET",
		success:function(data){
			t = data;
			$("#username").html(t.phone);
			$("#stuffNum").html(t.number);
			$("#name").html(t.name);
			judgesex(t.gender);
			$("#school").html(t.school.name);
			$("#email").html(t.email);
			$("#tel").html(t.phone);
//			$("#img").src(t.avatar);
		},
		error:function(){
			alert("获取信息失败！");
		}
	});

}

//判断性别
function judgesex(g){
	if(g=="female")
		$("#gender").html("女");
	else
		$("#gender").html("男");
}


