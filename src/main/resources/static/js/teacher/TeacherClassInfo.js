/**
 * Created by lenovo on 2017/12/6.
 */
var courseId;
var classId = 23;
var url;
//����ҳ��ʱ����ȡ�༶��Ϣ
window.onload = getClassInfo;

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

//��ȡ�༶�ľ�����Ϣ
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
        },
        error:function(){
            alert("��ȡ�༶��Ϣʧ�ܣ�");
        }
    })
}

//������һҳ
function goback(){
    window.history.go(-1);  //������һҳ
}

//����ѧ������
function downloadfile(){
   alert("���سɹ�");
}

//ɾ���༶
function deleteclass(){
    $.ajax({
        url:"/class/{classId}",
        type:"DELETE",
        success:function(data){
            alert("ɾ���༶�ɹ���");
        },
        error:function(){
            alert("ɾ���༶ʧ�ܣ�");
        }
    });
}