/**
 * Created by lenovo on 2017/12/4.
 */
window.onload = function(){
	getClassInformation();
	$( $("div").children().bind('click',function(){
		window.location.href="/StudentCourseInformation";

	}));
}
var studentId = 1;

//获取班级信息列表
function getClassInformation(){
    var classlist;
    $.ajax({
        url:"/class",
        type:"GET",
        success:function(data){
            classlist = data;
            $("#content").html("");
            if(classlist.length==0)
                $("#content").html("课程列表为空");
            for(var i in classlist)
            {
                var item = classlist[i];
                $("#content").append(
                "<div class=\"main_box_right_content\" id=\"class" + item.id + "\"> "+
                "<h3 class=\"classtitle\">" +
                "<span>" + item.courseName + "</span>" +
                "<button onclick='cancelcourse(" + item.id + "," + studentId + ")'>退选课程</button>" +
                "</h3>" +
                "<div class=\"divideline\"></div>" +
                "<div  class=\"classinfo\">" +
                "<table class=\"table\">" +
                "<tr>" +
                "<td class=\"tabletext\">班级：<span>" + item.name + "</span></td>  <td class=\"tabletext\">课程地点：" + item.site + "</td>" +
            "</tr>" +
            "<tr>" +
            "<td class=\"tabletext\">教师：" + item.courseTeacher + "/td>  <td class=\"tabletext\"></td>" +
            "</tr> </table> </div> </div>"
                );
            }
            alert("获取班级信息成功！" + data);
        },
        error:function(){
            alert("获取班级信息失败！");
        }
    });

}

//退课
function cancelcourse(classId,studentid){


	var  t= "class" +classId;
    $.ajax({
        url:"/course/{classId}",
        type:"DELETE",
        success:function(data){
        	$("#class" + classId).remove();
            alert("退选课程成功！");
//            window.location.href="/StudentCourseHome";
        },
        error: function () {
            alert("退选课程失败！");
        }
    })
}

