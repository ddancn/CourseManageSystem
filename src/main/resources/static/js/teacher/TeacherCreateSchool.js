/**
 * Created by lenovo on 2017/12/5.
 */
//window.onload = getProvince,getCity;

//��ȡʡ���б�
function getProvince(){
    var provincelist;
    $.ajax({
        url:"/province",
        type:"GET",
        success:function(data){
            provincelist = data;
            for(var i in provincelist){
                var item = provincelist[i];
                $("#province").append("<option value='"
                + item +"'>" + item +"</option>");
            }//end for
        },
        error:function(){
            alert("��ȡʡ���б�ʧ�ܣ�");
        }
    });
}

//��ȡ�����б�
function getCity(){
    var citylist;
    var province = document.getElementById("province").value;
    alert(province);
    $.ajax({
        url:"/city",
        type:"GET",
        data:{province:province},
        success:function(data){
            citylist = data;
            for(var i in citylist){
                var item = city[i];
                $("#city").append("<option value='"
                    + i +"'>" + item +"</option>");
            }//end for
        },
        error:function(){
            alert("��ȡ�����б�ʧ�ܣ�");
        }
    });
}

//���ѧУ
function createschool(){
    var data = {"name":$("#school").val(),"province":$("#province").val(),"city":$("#city")};

    $.ajax({
        url:"/school",
        type:"POST",
        contentType:"application/json",
        data:JSON.stringify(data),
        success:function(data){
            alert("����ѧУ�ɹ���" + data);
        },
        error:function(){
            alert("����ѧУʧ�ܣ�");
        }
    })

}