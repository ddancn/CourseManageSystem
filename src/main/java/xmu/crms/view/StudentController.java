package xmu.crms.view;
import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping
public class StudentController {
	//学生绑定
    @RequestMapping(value="/StudentBindPage", method=RequestMethod.GET)
    void StudentBindPage(HttpServletResponse response) throws IOException {
    	response.sendRedirect("html/student/StudentBindPage.html");
	}
  //学生选课
    @RequestMapping(value="/StudentChooseCoursePage", method=RequestMethod.GET)
    void StudentChooseCoursePage(HttpServletResponse response) throws IOException {
    	response.sendRedirect("html/student/StudentChooseCoursePage.html");
	}
  //学生课程首页
    @RequestMapping(value="/StudentCourseHome", method=RequestMethod.GET)
    void StudentCourseHome(HttpServletResponse response) throws IOException {
    	response.sendRedirect("html/student/StudentCourseHome.html");
	}
  //学生课程信息
    @RequestMapping(value="/StudentCourseInformation", method=RequestMethod.GET)
    void StudentCourseInformation(HttpServletResponse response) throws IOException {
    	response.sendRedirect("html/student/StudentCourseInformation.html");
	}
    //学生固定分组讨论课
    @RequestMapping(value="/StudentSeminarPage(fixed)", method=RequestMethod.GET)
    void StudentFixedSemunarPage(HttpServletResponse response) throws IOException {
    	response.sendRedirect("html/student/StudentFixedSeminarPage(fixed).html");
	}
  //学生个人信息首页
    @RequestMapping(value="/StudentHomePage", method=RequestMethod.GET)
    void StudentHomePage(HttpServletResponse response) throws IOException {
    	response.sendRedirect("html/student/StudentHomePage.html");
	}
    //学生个人信息修改
    @RequestMapping(value="/StudentInfoModifyPage", method=RequestMethod.GET)
    void StudentInfoModifyPage(HttpServletResponse response) throws IOException {
    	response.sendRedirect("html/student/StudentInfoModifyPage.html");
	}
    //学生管理分组
    @RequestMapping(value="/StudentManageGroupPage", method=RequestMethod.GET)
    void StudentManageGroupPage(HttpServletResponse response) throws IOException {
    	response.sendRedirect("html/student/StudentManageGroupPage.html");
	}
    //学生修改分组
    @RequestMapping(value="/StudentModifyGroupPage", method=RequestMethod.GET)
    void StudentModifyGroupPage(HttpServletResponse response) throws IOException {
    	response.sendRedirect("html/student/StudentModifyGroupPage.html");
	}
    //学生随机讨论课
    @RequestMapping(value="/StudentSeminarPage(random)", method=RequestMethod.GET)
    void StudentRandomSeminarPage(HttpServletResponse response) throws IOException {
    	response.sendRedirect("html/student/StudenSeminarPage(random).html");
	}
  //学生查看分数
    @RequestMapping(value="/StudentViewGradePage", method=RequestMethod.GET)
    void StudentViewGradePage(HttpServletResponse response) throws IOException {
    	response.sendRedirect("html/student/StudenViewGradePage.html");
	}
  //学生查看分组
    @RequestMapping(value="/StudentViewGroupPage", method=RequestMethod.GET)
    void StudentViewGroupPage(HttpServletResponse response) throws IOException {
    	response.sendRedirect("html/student/StudenViewGroupPage.html");
	}
    //学生查看话题（固定）
    @RequestMapping(value="/StudentViewTopicPage(fixed)", method=RequestMethod.GET)
    void StudentViewFixedTopicPage(HttpServletResponse response) throws IOException {
    	response.sendRedirect("html/student/StudenViewTopicPage(fixed).html");
	}
    //学生查看话题（随机）
    @RequestMapping(value="/StudentViewTopicPage(random)", method=RequestMethod.GET)
    void StudentViewRandomTopicPage(HttpServletResponse response) throws IOException {
    	response.sendRedirect("html/student/StudenViewTopicPage(random).html");
	}
}
