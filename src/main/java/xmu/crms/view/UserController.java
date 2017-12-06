package xmu.crms.view;

import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import xmu.crms.model.School;
import xmu.crms.model.User;

@RestController
public class UserController {

    //获得当前用户
	@RequestMapping(value="/me", method=RequestMethod.GET)
	public User getUser() {
		User me=new User(  3486,"student","23320152202333","张三","18911114514",	
			"23320152202333@stu.xmu.edu.cn","male",new School(32, "厦门大学"),"", null, null,"/avatar/3486.png");
		return me;
	}
	
	//修改当前用户
	@RequestMapping(value="/me", method=RequestMethod.PUT)
	@ResponseStatus(value=HttpStatus.NO_CONTENT)
	public void updateUser(@RequestBody User user) {

	}
	
	//微信登录，返回用户基本信息
	@RequestMapping(value="/signin", method=RequestMethod.GET)
	public User signin(String code, String state, String success_url, HttpServletResponse response){
        User me=new User(  3486,"student","23320152202333","张三","18911114514",  
                "23320152202333@stu.xmu.edu.cn","male",new School(32, "厦门大学"),"", null, null,"/avatar/3486.png");
        response.setStatus(200);
        return me;
	}
}
