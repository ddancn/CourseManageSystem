package xmu.crms.view;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.websocket.server.PathParam;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import xmu.crms.model.Seminar;
import xmu.crms.model.Teacher;

@RestController
@RequestMapping("/Teacher")
public class TeacherController {

	//点击微信登陆跳转到扫码界面
    @RequestMapping(value="/AccountLoginPage", method=RequestMethod.GET)
    void AccountTOWechat(HttpServletResponse response) throws IOException {
    	response.sendRedirect("WechatLoginPage.html");
	}
   
}