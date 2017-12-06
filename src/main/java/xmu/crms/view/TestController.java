package xmu.crms.view;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import xmu.crms.model.User;

@RestController
public class TestController {

	//以URL请求返回静态资源
    @RequestMapping(value="/hello", method=RequestMethod.GET)
    void hello(HttpServletResponse response) throws IOException {
    	response.sendRedirect("html/hellospring.html");
	}
	 
    //以URL请求返回字符串
	@RequestMapping(value="/hh", method=RequestMethod.GET)
	public String helloWorld() {
		return "hello";
	}
	
	//以URL请求返回对象，即json数据
	@RequestMapping(value="/user", method=RequestMethod.GET)
	public User getUser() {
		return new User();
	}
	
}
	
