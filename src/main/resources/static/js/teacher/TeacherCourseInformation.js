/**
 * Created by lenovo on 2017/12/6.
 */
    //�������ҳ����ת��û��д

var courseId;
//ҳ�����ʱ��ȡ�γ���Ϣ���Ѵ����İ༶��Ϣ�����ۿ���Ϣ
window.onload = getCourseInfo;

//��ȡ�γ̵ľ�����Ϣ
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
            alert("��ȡ�γ���Ϣʧ�ܣ�");
        }
    });
}

//��ȡ�Ѵ����İ༶��Ϣ
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
                +"<a href='###' ><img class=\"addImg\" src=\"../../Img/smalladd.png\" alt=\"���\" ></a></div>");    //ҳ����ת������
        },
        error: function () {
            alert("��ȡ�༶��Ϣʧ��!");
        }
    });
}

//��ȡ�Ѵ��������ۿ��б�
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
            +"<a href='###' ><img class=\"addImg\" src=\"../../Img/smalladd.png\" alt=\"���\" ></a></div>");      //ҳ����ת������
        },
        error: function () {
            alert("��ȡ���ۿ��б�ʧ�ܣ�");
        }
    })
}

function hello(){
    alert("hello!");
}

