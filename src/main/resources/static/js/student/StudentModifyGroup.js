/**
 * Created by lenovo on 2017/12/4.
 */
//课程ID
var classId;

//设置classId
function setClssId(n){
    classId = n;
}

//页面加载时，获取固定分组名单
window.onload = getStudentList;

//获取固定分组名单
function getStudentList() {
    var studentlist;
    $.ajax({
        url: "/class/" + classId + "/classgroup",
        type: "GET",
        success: function (data) {
            studentlist = data;
            $("#Fixed_group").html("");
            if (studentlist.length == 0)
                $("#Fixed_group").html("可选课程列表为空");
            for (var i in studentlist) {
                var item = studentlist[i];
                //如果是队长
                if (i == 0) {
                    $("#Fixed_group").append(
                        "<tr> <th>角色</th> <th>学号</th> <th>姓名</th> <th>操作</th> </tr>" +
                        "<tr>" +
                        "<td>队长</td>" +
                        "<td>" + item.id + "</td>" +
                        "<td>" + item.name + "</td>" +
                        "<td></td> </tr>"
                    )
                }
                else if (i % 2 == 1) {
                    $("#Fixed_group").append(
                        "<tr class=\"alt\">" +
                        "<td>队员</td>" +
                        "<td>" + item.id + "</td>" +
                        "<td>" + item.name + "</td>" +
                        "<td><img src=\".\home.png\"></td>" +
                        "</tr>"
                    );
                }
                else {
                    $("#Fixed_group").append(
                        "<tr>" +
                        "<td>队员</td>" +
                        "<td>" + item.id + "</td>" +
                        "<td>" + item.name + "</td>" +
                        "<td><img src=\".\home.png\"></td>" +
                        "</tr>"
                    )
                }
            }
        },
        error: function () {
            alert("获取固定分组名单失败！");
        }
    })
}

//查询按钮响应函数
function search(){
    var num = document.getElementById("num").value;
    var nameBegin = document.getElementById("name").value;
    var studentlist;

    $.ajax({
        url:"/class/" + classId + "/student",
        type:"GET",
        data:{classId:classId,
            numBeginWith:num,
            nameBeginWith:nameBegin},
        success:function(data){
            studentlist = data;
            $("#addmember").html("");
            $("#addmember").append("<tr> <th>学号</th> <th>姓名</th> <th>操作</th> </tr>");
            if (studentlist.length == 0)
                $("#addmember").html("搜索结果为空");
            for (var i in studentlist) {
                var item = studentlist[i];
                if (i % 2 == 1) {
                    $("#addmember").append(
                        "<tr class=\"alt\">" +
                    "<td>" + item.id +"</td>" +
                    "<td>" + item.name + "</td>" +
                    "<td><img src=\".\home.png\"></td> </tr>"
                    );
                }
                else {
                    $("#addmember").append(
                        "<tr>" +
                        "<td>" + item.id + "</td>" +
                    "<td>" + item.name + "</td>" +
                    "<td><img src=\".\home.png\"></td> </tr>"
                    );
                }
            }//end for
        },
        error:function(){
            alert("查询符合条件的学生失败！");
        }
    })
}