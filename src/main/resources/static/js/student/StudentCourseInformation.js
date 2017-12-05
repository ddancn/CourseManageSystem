/**
 * Created by lenovo on 2017/12/4.
 */
window.onload = getSeminar();
	//getCourse();
var courseID = 12;

//获取课程信息
function getCourse(){
	alert("yes!");
    var t;
    var data = {"courseId":courseID};
    $.ajax({
        url:"/course/{courseId}" ,
        type:"GET",
        contentType:"appication/json",
        data:JSON.stringify(data),
        success:function(data){
            alert("获取课程信息成功！" + data);
            t=data;
            courseID = t.id;
        },
        error:function(){
            alert("获取课程信息失败！");
        }
    });
    
    getSeminar();
}

//获取讨论课信息
function getSeminar(){
    var seminarlist;
    var data = {"courseId":courseID};

    $.ajax({
        url:" http://rap2api.taobao.org/app/mock/933/GET/course/222/seminar",//"/course/{courseId}/seminar",
        type:"GET",
        contentType:"application/json",
        data:JSON.stringify(data),
        success:function(data){
            alert("获取讨论课列表成功！" + data);
            seminarlist = data;
            $("#content").html("");
            if(seminarlist.length==0)
                $("#content").html("讨论课列表为空");
            for(var i in seminarlist) {
                var item = seminarlist[i];
                $("#content").append(
                "<div class=\"block\"><div class=\"blockFont\">" + item.name + "</div>"
                + item.id, + item.description + item.groupingMethod + item.startTime + item.endTime, + item.grade
                + "</div>"
                );
            }//end for
        },
        error:function(){
            alert("获取讨论课列表失败！");
        }
    });
}
