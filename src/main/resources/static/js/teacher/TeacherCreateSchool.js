/**
 * Created by lenovo on 2017/12/5.
 */
window.onload = function(){
	getProvince();
	getCity();
}

//获取省份列表
function getProvince(){
    var provincelist;
    $.ajax({
        url:"/school/province",
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
            alert("获取省份列表失败！");
        }
    });
}

//获取城市列表
function getCity(){
    var citylist;
    var province = document.getElementById("province").value;
  //  alert(province);
    $.ajax({
        url:"/school/city",
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
            alert("获取城市列表失败！");
        }
    });
}

//添加学校
function createschool(){
    var data = {"name":$("#school").val(),"province":$("#province").val(),"city":$("#city")};

    $.ajax({
        url:"/school",
        type:"POST",
        contentType:"application/json",
        data:JSON.stringify(data),
        success:function(data){
            alert("创建学校成功！" + data);
            window.location.href="/TeacherBindPage";
        },
        error:function(){
            alert("创建学校失败！");
        }
    })

}