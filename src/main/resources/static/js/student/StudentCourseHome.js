/**
 * Created by lenovo on 2017/12/4.
 */
window.onload = getClassInformation;
var studentId;

//获取班级信息列表
function getClassInformation(){
    var classlist;
    $.ajax({
        url:"http://rap.taobao.org/mockjsdata/29816/get/class",  //"/class",
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
                "<div class=\"main_box_right_content\" > "+
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
function cancelcourse(classid,studentid){
	var data = {"courseId":classid,"studentId":studentid};
	
    $.ajax({
        url:"classdel",//"/course/" + classid,
        type:"DELETE",
        contentType:"application/json",
        data:JSON.stringify(data),
        success:function(data){
            alert("退选课程成功！");
        },
        error: function () {
            alert("退选课程失败！");
        }
    })
}