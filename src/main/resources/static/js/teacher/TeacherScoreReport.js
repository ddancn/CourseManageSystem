window.onload=getGroupInfo;

function score(){
	var id=1;
	if(!checkinput())
		return;
	var score=$("#score").val();
	$.ajax({
		url: "/group/"+id + "/grade/report",
		type: "PUT",
		data: {reportGrade:score},
		async: false,
		success:function(data,status){
			alert(data+status);
			window.location.href="/TeacherScoreHome";
		},
		error:function(){
			alert("打分失败");
		}
	});		
}
function checkinput(){
	var score=$("#score").val();
	if(score==""){
		alert("请对报告进行打分。");
		return false;
	}
	if(score<3||score>5){
		alert("分数应在3到5之间。");
		return false;		
	}
	return true;
}
function getGroupInfo(){
	var id;
	$.ajax({
		url: "/group/"+id,
		type: "GET",
		data: {},
		async: false,
		success:function(data){
			var groupinfo=data;	
			$("#groupinfo").append(
					"<label class='itemName'>"+groupinfo.topics[0].name+"</label>"+
					"<label class='itemName'>"+groupinfo.name+"</label>"+
					"<label class='itemName'>"+groupinfo.leader.name+"</label>"
			);
		},
		error:function(){
			alert("获取小组详情失败");
		}
	});	
}