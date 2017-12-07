/**
 * Created by lenovo on 2017/12/4.
 */
var courseId = 12;
var groupId = 2;


window.onload = function(){
	getCourse();
	getSeminar();
}
	

//获取课程信息
function getCourse(){
//	alert("yes!");
    var t;

    $.ajax({
        url:"/course/{courseId}" ,
        type:"GET",
        success:function(data){ 
            t = data;
            $("#courseName").html("");
            $("#courseIntroduction").html("");
            courseId = t.id;
            $("#courseName").append(t.name);
            $("#courseIntroduction").append(t.description);
            alert("获取课程信息成功！" + data.description);
        },
        error:function(){
            alert("获取课程信息失败！");
        }
    });
}

//获取讨论课信息
function getSeminar(){
    var seminarlist;

    $.ajax({
        url:"/course/{courseId}/seminar",
        type:"GET",
        success:function(data){
            alert("获取讨论课列表成功！" + data);
            seminarlist = data;
            $("#content").html("");
            if(seminarlist.length==0)
                $("#content").html("讨论课列表为空");
            for(var i in seminarlist) {
                var item = seminarlist[i];
                $("#content").append(
                "<div class=\"block\"><div class=\"blockFont\" id=\"seminar_" 
                + item.id + "\"><a href=\"/StudentSeminarPage(fixed)\">"
                + item.name + "</a></div>"             
                + "</div>"
                );
            }//end for   "
        },
        error:function(){
            alert("获取讨论课列表失败！");
        }
    });
}

//返回上一页按钮响应函数
function goback(){
	window.history.go(-1);  //返回上一页
}

function gotoseminar(seminarId){
	window.location.href="/StudentSeminarPage(fixed)";
	
}


