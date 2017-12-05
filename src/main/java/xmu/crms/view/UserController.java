package xmu.crms.view;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import xmu.crms.model.User;

@RestController
public class UserController {

    //获得当前用户
	@RequestMapping(value="/me", method=RequestMethod.GET)
	public User getUser() {
		User me=new User();
		return me;
	}
	
	//修改当前用户
	@RequestMapping(value="/me", method=RequestMethod.PUT)
	public String updateUser(@RequestBody User user) {
		String retCode="test";
		return user.getName();
	}
	
	//微信登录，返回用户基本信息，TODO
	@RequestMapping(value="/signin", method=RequestMethod.GET)
	public String signin(String code, String state, String success_url){
		String retCode=null;
		return retCode;	
	}
}
