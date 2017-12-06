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
			$("#personinfo table").empty();
			$("#personinfo table").append(
					"<tr class='itemName'>" + 
					"<td>用户名：<span>" + personinfo.phone + "</span></td>" + 
					"<td>教工号：<span>" + personinfo.number + "</span></td>" + 
					"</tr>" +
					"<tr class='itemName'>" + 
					"<td>姓名：<span>" + personinfo.name + "</span></td>" + 
					"<td>性别：<span>" + gender+ "</span></td>" + 
					"</tr>" +
					"<tr class='itemName'>" + 
					"<td>学校：<span>" + personinfo.school.name + "</span></td>" + 
					"<td>职称：<span>" + personinfo.title + "</span></td>" + 
					"</tr>" +
					"<tr class='itemName'>" + 
					"<td>E-mail：<span>" + personinfo.email + "</span></td>" + 
					"<td>联系方式：<span>" + personinfo.phone + "</span></td>" + 
					"</tr>" 		
			)	
			
		},
		error:function()
		{
			alert("获取用户信息失败");
		}
		});
}
