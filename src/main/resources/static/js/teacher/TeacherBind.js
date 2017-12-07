/**
 * 
 */
window.onload = function(){
	getSchool();
	getProvincelist();
	getCitylist();
}

//绑定，返回一个学生对象
function bind(){
    var phone = document.getElementById("phoneNum").value;
    var password = document.getElementById("password").value;
    var name = document.getElementById("name").value;
    var province = document.getElementById("province").value;
    var city = document.getElementById("city").value;
    var school = document.getElementById("school").value;
    var stuffnum = document.getElementById("stuffNum").value;
    var email = document.getElementById("email").value;
    var gender = judgesex();
 
    
    var d = { "name":"张三",
            "phone":"15959236782",
            "number":"23320152202333",
            "email":"23320152202333@stu.xmu.edu.cn",
            "gender":"female",
            "title":"",
            "avatar":"/avatar/3486.png"};
    var t;    //用来接收从controller传回来的数据
    console.log(JSON.stringify(d));
    $.ajax({
        url : "/me",
        type : "PUT",
        contentType:"application/json",
        data:JSON.stringify(d),   
        async:false,
        success:function(data){
            alert("绑定成功！" + data);
            window.location.href="/TeacherHomePage";
        },
        error:function(){
            alert("绑定失败！");
        }
    });

}

//检查输入是否正确
function checkright(){
    var warn = "";
    var password = document.getElementById("password").value;
    var name = document.getElementById("name").value;
    var school = document.getElementById("school").value;
    var stuffnum = document.getElementById("stuffNum").value;
    var email = document.getElementById("email").value;

    warn = checktel();
    if(warn == null || warn.length == 0){
        if(password == ""){
            warn = "密码不能为空！";
        }else if(name == ""){
            warn = "姓名不能为空！";
        }else if(stuffnum == ""){
            warn = "学号不能为空！";
        }else if(email == ""){
            warn = "邮箱不能为空！";
        }
    }
    if(warn !=null && warn.length !=0)
        alert(warn);
    else{
       bind();
    }
    
    return false;
}

//检查手机号输入是否正确
function checktel(){
    var username = $("#phoneNum").val();
    var mes = "";
    if (username.length == 0 || username==null) {
        mes = "用户名不能为空！";
    }
    else if (username.length != 11) {
        mes = "请输入11位手机号作为用户名！";
        $("#phoneNum").html="";
    }
    else{
        var PATTERN_CHINAMOBILE = /^1(3[4-9]|5[012789]|8[23478]|4[7]|7[8])\d{8}$/; //移动号
        var PATTERN_CHINAUNICOM = /^1(3[0-2]|5[56]|8[56]|4[5]|7[6])\d{8}$/; //联通号
        var PATTERN_CHINATELECOM = /^1(3[3])|(8[019])\d{8}$/; //电信号
        if (PATTERN_CHINAUNICOM.test(username) || PATTERN_CHINAMOBILE.test(username) || PATTERN_CHINATELECOM.test(username)) {
            return mes;
        }else {
            mes = "请输入正确的手机号";
        }
    }
    return mes;

}

//判断性别
function judgesex() {
    var x = document.getElementById("man");
    var gender;

    if (x.checked) {
        gender = "male";
    }
    else {
        gender = "femala";
    }
    return gender;
}


//获取学校列表
function getSchool(){
	var schoollist;
	
	$.ajax({
		url:"/school",
		type:"GET",
		success:function(data){
			schoollist = data;
			$("#school").html="";
			for(var i in schoollist){
				var item = schoollist[i];
				$("#school").append("<option value=\""
						+ item.name + "\">"
						+ item.name + "</option>");
			}//end for
		},
		error:function(){
			alert("获取学校列表失败！");
		}
	});
}

//获取省份列表
function getProvincelist(){
	var provincelist;
	$.ajax({
		url:"/school/province",
		type:"GET",
		success:function(data){
			provincelist = data;
			$("province").html="";
			for(var i in provincelist){
				var item = provincelist[i];
				$("#province").append("<option value=\""
						+ item + "\">"
						+ item + "</option>")
			}//end for
		},
		error:function(){
			alert("获取省份列表失败！");
		}
	});
}

//获取市列表
function getCitylist(){
	var citylist;
	$.ajax({
		url:"/school/city",
		type:"GET",
		success:function(data){
			provincelist = data;
			$("#city").html="";
			for(var i in provincelist){
				var item = provincelist[i];
				$("#city").append("<option value=\""
						+ item + "\">"
						+ item + "</option>")
			}//end for
		},
		error:function(){
			alert("获取城市列表失败！");
		}
	});
}