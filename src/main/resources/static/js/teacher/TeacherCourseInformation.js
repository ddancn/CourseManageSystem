/**
 * Created by lenovo on 2017/12/6.
 */
    //各个块的页面跳转还没有写
var courseId = 12;


var courseId;
//页面加载时获取课程信息，已创建的班级信息和讨论课信息
window.onload = function(){
	getCourseInfo();
	getClassInfo();
	getSeminarsInfo();
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
            $("#courseName").html(course.name);
            $("#courseIntroduction").html(course.description);
            alert("获取课程信息成功！");
        },
        error: function () {
            alert("获取课程信息失败！");
        }
    });
}

//获取已创建的班级信息
function getClassInfo() {
    var classlist;
    $.ajax({
        url: "/course/{courseId}/class",
        type: "GET",
        success: function (data) {
            classlist = data;
            $("#classlist").html("");
            for (var i in classlist) {
                var item = classlist[i];
                $("#classlist").append("<div class=\"block\"><div class=\"blockFont\" id=\"class"
                    + item.id + "\"><a href=\"/TeacherClassInfo\">"
                    + item.name + "</a></div></div>");
            }//end for
            $("#classlist").append(" <div class=\"block\">"
                +"<a href='/TeacherCreateClass' ><img class=\"addImg\" src=\"../../Img/smalladd.png\" alt=\"添加\" ></a></div>");    //页面跳转！！
            alert("获取班级信息成功！");
        },
        error: function () {
            alert("获取班级信息失败!");
        }
    });
}

//获取已创建的讨论课列表
function getSeminarsInfo() {
    var seminarlist;

    $.ajax({
        url: "/course/{courseId}/seminar",
        type: "GET",
        success: function (data) {
            seminarlist = data;
            $("#seminarlist").html("");
            for (var i in seminarlist) {
                var item = seminarlist[i];
                $("#seminarlist").append("<div class=\"block\"><div class=\"blockFont\" id=\"seminar"
                    + item.id + "\"><a href=\"/TeacherSeminarInfo\">"
                    + item.name + "</a></div></div>");
            }//end for
            $("#seminarlist").append(" <div class=\"block\">"
            +"<a href='/TeacherCreateSeminar' ><img class=\"addImg\" src=\"../../Img/smalladd.png\" alt=\"添加\" ></a></div>");      //页面跳转！！！
            alert("获取讨论课列表成功！");
        },
        error: function () {
            alert("获取讨论课列表失败！");
        }
    })
}

function hello(){
    alert("hello!");
}

function goback(){
	window.history.go(-1);  //返回上一页
}

