/**
 * Created by lenovo on 2017/12/6.
 */
    //各个块的页面跳转还没有写

var courseId;
//页面加载时获取课程信息，已创建的班级信息和讨论课信息
window.onload = getCourseInfo;

//获取课程的具体信息
function getCourseInfo() {
    var course;
    $.ajax({
        url: "/course/{courseId}",
        type: "GET",
        success: function (data) {
            course = data;
            courseId = course.id;
            $("#courseName").html = course.name;
            $("#courseIntroduction").html = course.description;
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
        url: "/course/{courseId}/seminars",
        type: "GET",
        success: function (data) {
            classlist = data;
            $("#classlist").html = "";
            for (var i in classlist) {
                var item = classlist[i];
                $("#classlist").append("<div class=\"block\"><div class=\"blockFont\" id=\"class"
                    + item.id + "\">"
                    + item.name + "</div></div>");
            }//end for
            $("#classlist").append(" <div class=\"block\">"
                +"<a href='###' ><img class=\"addImg\" src=\"../../Img/smalladd.png\" alt=\"添加\" ></a></div>");    //页面跳转！！！
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
        url: "/course/{courseId}/seminars",
        type: "GET",
        success: function (data) {
            seminarlist = data;
            $("#seminarlist").html = "";
            for (var i in seminarlist) {
                var item = seminarlist[i];
                $("#seminarlist").append("<div class=\"block\"><div class=\"blockFont\" id=\"seminar"
                    + item.id + "\">"
                    + item.name + "</div></div>");
            }//end for
            $("#seminarlist").append(" <div class=\"block\">"
            +"<a href='###' ><img class=\"addImg\" src=\"../../Img/smalladd.png\" alt=\"添加\" ></a></div>");      //页面跳转！！！
        },
        error: function () {
            alert("获取讨论课列表失败！");
        }
    })
}

function hello(){
    alert("hello!");
}

