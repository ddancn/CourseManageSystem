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


import xmu.crms.model.Student;

@RestController
@RequestMapping("/Student")
public class StudentController {
	//学生绑定
    @RequestMapping(value="/StudentBindPage", method=RequestMethod.GET)
    void StudentBindPage(HttpServletResponse response) throws IOException {
    	response.sendRedirect("StudentBindPage.html");
	}
  //学生选课
    @RequestMapping(value="/StudentChooseCoursePage", method=RequestMethod.GET)
    void StudentChooseCoursePage(HttpServletResponse response) throws IOException {
    	response.sendRedirect("StudentChooseCoursePage.html");
	}
  //学生课程首页
    @RequestMapping(value="/StudentCourseHome", method=RequestMethod.GET)
    void StudentCourseHome(HttpServletResponse response) throws IOException {
    	response.sendRedirect("StudentCourseHome.html");
	}
  //学生课程信息
    @RequestMapping(value="/StudentCourseInformation", method=RequestMethod.GET)
    void StudentCourseInformation(HttpServletResponse response) throws IOException {
    	response.sendRedirect("StudentCourseInformation.html");
	}
    //学生固定分组讨论课
    @RequestMapping(value="/StudentSeminarPage(fixed)", method=RequestMethod.GET)
    void StudentFixedSemunarPage(HttpServletResponse response) throws IOException {
    	response.sendRedirect("StudentFixedSeminarPage(fixed).html");
	}
  //学生个人信息首页
    @RequestMapping(value="/StudentHomePage", method=RequestMethod.GET)
    void StudentHomePage(HttpServletResponse response) throws IOException {
    	response.sendRedirect("StudentHomePage.html");
	}
    //学生个人信息修改
    @RequestMapping(value="/StudentInfoModifyPage", method=RequestMethod.GET)
    void StudentInfoModifyPage(HttpServletResponse response) throws IOException {
    	response.sendRedirect("StudentInfoModifyPage.html");
	}
    //学生管理分组
    @RequestMapping(value="/StudentManageGroupPage", method=RequestMethod.GET)
    void StudentManageGroupPage(HttpServletResponse response) throws IOException {
    	response.sendRedirect("StudentManageGroupPage.html");
	}
    //学生修改分组
    @RequestMapping(value="/StudentModifyGroupPage", method=RequestMethod.GET)
    void StudentModifyGroupPage(HttpServletResponse response) throws IOException {
    	response.sendRedirect("StudentModifyGroupPage.html");
	}
    //学生随机讨论课
    @RequestMapping(value="/StudentSeminarPage(random)", method=RequestMethod.GET)
    void StudentRandomSeminarPage(HttpServletResponse response) throws IOException {
    	response.sendRedirect("StudenSeminarPage(random).html");
	}
  //学生查看分数
    @RequestMapping(value="/StudentViewGradePage", method=RequestMethod.GET)
    void StudentViewGradePage(HttpServletResponse response) throws IOException {
    	response.sendRedirect("StudenViewGradePage.html");
	}
  //学生查看分组
    @RequestMapping(value="/StudentViewGroupPage", method=RequestMethod.GET)
    void StudentViewGroupPage(HttpServletResponse response) throws IOException {
    	response.sendRedirect("StudenViewGroupPage.html");
	}
    //学生查看话题（固定）
    @RequestMapping(value="/StudentViewTopicPage(fixed)", method=RequestMethod.GET)
    void StudentViewFixedTopicPage(HttpServletResponse response) throws IOException {
    	response.sendRedirect("StudenViewTopicPage(fixed).html");
	}
    //学生查看话题（随机）
    @RequestMapping(value="/StudentViewTopicPage(random)", method=RequestMethod.GET)
    void StudentViewRandomTopicPage(HttpServletResponse response) throws IOException {
    	response.sendRedirect("StudenViewTopicPage(random).html");
	}
}
