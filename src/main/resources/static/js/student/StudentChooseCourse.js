/**
 * Created by lenovo on 2017/12/4.
 */
// 页面加载时调用的函数，获取已经选择的课程（具体到班级）
window.onload = getAllClass;

// 测试是否进入
function hello() {
	alert("hello!");
}

// 获取所有的班级信息
function getAllClass() {
	var classlist;
	var data = {
		"courseName" : $("#course").val(),
		"courseTeacher" : $("#teacher").val()
	};

	$.ajax({
		url : "/class",
		type : "GET",
		success : function(data) {
			classlist = data;
			$("#classlist").html("");
			if (classlist.length == 0)
				$("#classlist").html("可选课程列表为空");
			else
				for ( var i in classlist) {
					var item = classlist[i];
					$("#classlist").append(
							"<div class=\"main_box_right_content\" + id='" + item.id + "'>" 
									+ "<h3 class=\"classtitle\">"
									+ item.courseName
									+ "<button onclick='chooseCourse("
									+ item.id + ")'>选课</button></h3><hr/>"
									+ "<div class=\"classinfo\">"
									+ "<table class=\"table\">" + "<tr>"
									+ "<td class=\"tabletext\">班级数："
									+ item.name + "</td>"
									+ "<td class=\"tabletext\">学生人数："
									+ item.numStudent + "</td>" + "</tr>"
									+ "<tr>" + "<td class=\"tabletext\">开始时间："
									+ item.time + "</td>"
									+ "<td class=\"tabletext\">结束时间:XXXX</td>"
									+ "</tr></table></div></div>");
				}
			alert("获取已选班级信息成功！" + data);
		},
		error : function() {
			alert("获取班级信息失败！");
		}
	})
}

// 获取符合查询条件的班级信息 ，目前没有用到
function getClassListWithOption() {
	var classlist;
	var coursename = document.getElementById("course").value;
	var teacher = document.getElementById("teacher").value;
	var data = {
		"courseName" : $("#course").val(),
		"courseTeacher" : $("#teacher").val()
	};

	$.ajax({
		url : "/classwithoption",
		type : "GET",
		contentType : "application/json",
		data : JSON.stringify(data),
		success : function(data) {
			alert("查询！");
			classlist = data;
			$("#classlist").html("");
			if (classlist.length == 0)
				$("#classlist").html("可选课程列表为空");
			else
				for ( var i in classlist) {
					var item = classlist[i];
					$("#classlist").append(
							"<div class=\"main_box_right_content\">"
									+ "<h3 class=\"classtitle\">"
									+ item.courseName
									+ "<button onclick='chooseCourse("
									+ item.id + ")'>选课</button></h3><hr/>"
									+ "<div class=\"classinfo\">"
									+ "<table class=\"table\">" + "<tr>"
									+ "<td class=\"tabletext\">班级数："
									+ item.name + "</td>"
									+ "<td class=\"tabletext\">学生人数："
									+ item.numStudent + "</td>" + "</tr>"
									+ "<tr>" + "<td class=\"tabletext\">开始时间："
									+ item.time + "</td>"
									+ "<td class=\"tabletext\">结束时间:XXXX</td>"
									+ "</tr></table></div></div>");
				}
		},
		error : function() {
			alert("获取班级信息失败！");
		}
	})
}

//选课
function chooseCourse(classid) {
	
	$.ajax({
		url : "/class/" + classid + "/student",//"http://rap2api.taobao.org/app/mock/933/POST/class/34/student", 
		type : "POST",
		data : {studentId:2757},
		success : function(data) {
			window.location.href="/StudentChooseCoursePage";
			alert("选课成功！" + data);
		},
		error : function() {
			alert("选课失败！");
		}
	})
}