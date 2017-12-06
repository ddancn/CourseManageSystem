window.onload=init;
var grouplist;	

function init(){
	var id=1;
	$.ajax({
		url: "/seminar/"+id+"/group",
		type: "GET",
		data: {gradeable:"true",classId:1},
		async: false,
		success:function(data){
			grouplist=data;	
			for(var i in grouplist){
				getGroupInfo(i.id);
			}
		},
		error:function(){
			alert("获取小组列表失败");
		}
	});
}

function getGroupInfo(id){
	$.ajax({
		url: "/group/"+id,
		type: "GET",
		data: {},
		async: false,
		success:function(data){
			var groupinfo=data;	
			$("#grouplist tbody").append(
					"<tr><td>"+groupinfo.topics[0].name+"</td>"+
					"<td>"+groupinfo.name+"</td>"+
					"<td>"+groupinfo.leader.name+"</td>"+
					"<td>"+groupinfo.grade.presentationGrades[0].grade+"</td>"+
					"<td>"+"已提交"+"</td>"+
					"<td>"+groupinfo.grade.reportGrade+"</td>"+
					"<td>"+groupinfo.grade.grade+"</td>"+
					"<td>" +
						"<img src='../../Img/view.png' alt='预览' onclick='report("+groupinfo.report+")' style='cursor:pointer'>"+
                        "<img src='../../Img/download.png' alt='下载'>"+
                    "</td></tr>"
			);
		},
		error:function(){
			alert("获取小组详情失败");
		}
	});	
}

function report(report){
	window.location.href="/TeacherScoreReportPage";
}