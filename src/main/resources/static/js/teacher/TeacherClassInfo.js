/**
 * Created by lenovo on 2017/12/6.
 */
var courseId;
var classId = 23;
var url;
//加载页面时，获取班级信息
window.onload = function(){
	getCourseInfo();
	getClassInfo();
}

//获取课程的具体信息
function getCourseInfo() {
    var course;
    $.ajax({
        url: "/course/{courseId}",
        type: "GET",
        success: function (data) {
            course = data;
            courseId = course.id;
            $("#courseName").html(course.name) ;
            $("#courseIntroduction").html(course.description);
            alert("获取课程信息成功！");
        },
        error: function () {
            alert("获取课程信息失败！");
        }
    });
}

//获取班级的具体信息
function getClassInfo(){
    var classInfo;
    $.ajax({
        url:"/class/{classId}",
        type:"GET",
        success:function(data){
            classInfo = data;
            $("#className").html=classInfo.name;
            $("#name").html=classInfo.name;
            $("#address").html=classInfo.site;
            $("#time").html=classInfo.time;
            $("#presentation").html=classInfo.proportions.presentation;
            $("#report").html=classInfo.proportions.report;
            $("agrade").html=classInfo.proportions.a;
            $("bgrade").html=classInfo.proportions.b;
            $("cgrade").html=classInfo.proportions.c;
            url=classInfo.rester;
            alert("获取班级信息成功！");
        },
        error:function(){
            alert("获取班级信息失败！");
        }
    })
}

//返回上一页
function goback(){
    window.history.go(-1);  //返回上一页
}

//下载学生名单
function downloadfile(){
   alert("下载成功");
}

//删除班级
function deleteclass(){
    $.ajax({
        url:"/class/{classId}",
        type:"DELETE",
        success:function(data){
            alert("删除班级成功！");
        },
        error:function(){
            alert("删除班级失败！");
        }
    });
}