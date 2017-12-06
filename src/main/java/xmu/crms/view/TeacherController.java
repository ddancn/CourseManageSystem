package xmu.crms.view;
import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping
public class TeacherController {

    //微信登陆
    @RequestMapping(value="/WechatLoginPage", method=RequestMethod.GET)
    void Wechat(HttpServletResponse response) throws IOException {
        response.sendRedirect("html/common/WechatLoginPage.html");
    }
   //账号密码登录
    @RequestMapping(value="/AccountLoginPage", method=RequestMethod.GET)
    void Account(HttpServletResponse response) throws IOException {
        response.sendRedirect("html/common/AccountLoginPage.html");
    }
    //注册
    @RequestMapping(value="/RegisterPage", method=RequestMethod.GET)
    void Register(HttpServletResponse response) throws IOException {
    	response.sendRedirect("html/common/RegisterPage.html");
	}
    //老师绑定
    @RequestMapping(value="/TeacherBindPage", method=RequestMethod.GET)
    void TeacherBind(HttpServletResponse response) throws IOException {
    	response.sendRedirect("html/teacher/TeacherBindPage.html");
	}
    //老师班级信息
    @RequestMapping(value="/TeacherClassInfo", method=RequestMethod.GET)
    void TeacherClassInfo(HttpServletResponse response) throws IOException {
    	response.sendRedirect("html/teacher/TeacherClassInfo.html");
	}
  //老师课程首页
    @RequestMapping(value="/TeacherCourseHomePage", method=RequestMethod.GET)
    void TeacherCourseHome(HttpServletResponse response) throws IOException {
    	response.sendRedirect("html/teacher/TeacherCourseHomePage.html");
	}
    //老师课程信息
    @RequestMapping(value="/TeacherCourseInformation", method=RequestMethod.GET)
    void TeacherCourseInformation(HttpServletResponse response) throws IOException {
    	response.sendRedirect("html/teacher/TeacherCourseInformation.html");
	}
    //老师创建班级
    @RequestMapping(value="/TeacherCreateClass", method=RequestMethod.GET)
    void TeacherCreateClass(HttpServletResponse response) throws IOException {
    	response.sendRedirect("html/teacher/TeacherCreateClass.html");
	}
  //老师创建课程
    @RequestMapping(value="/TeacherCreateCoursePage", method=RequestMethod.GET)
    void TeacherCreateCourse(HttpServletResponse response) throws IOException {
    	response.sendRedirect("html/teacher/TeacherCreateCoursePage.html");
	}
    //老师创建学校
    @RequestMapping(value="/TeacherCreateSchool", method=RequestMethod.GET)
    void TeacherCreateSchool(HttpServletResponse response) throws IOException {
    	response.sendRedirect("html/teacher/TeacherCreateSchool.html");
	}
  //老师创建讨论课
    @RequestMapping(value="/TeacherCreateSeminar", method=RequestMethod.GET)
    void TeacherCreateSeminar(HttpServletResponse response) throws IOException {
    	response.sendRedirect("html/teacher/TeacherCreateSeminar.html");
	}
    //老师创建课题
    @RequestMapping(value="/TeacherCreateTopic", method=RequestMethod.GET)
    void TeacherCreateTopic(HttpServletResponse response) throws IOException {
    	response.sendRedirect("html/teacher/TeacherCreateTopic.html");
	}
  //老师个人信息主页
    @RequestMapping(value="/TeacherHomePage", method=RequestMethod.GET)
    void TeacherHomePage(HttpServletResponse response) throws IOException {
    	response.sendRedirect("html/teacher/TeacherHomePage.html");
	}
    //老师个人信息修改
    @RequestMapping(value="/TeacherInfoModifyPage", method=RequestMethod.GET)
    void TeacherInfoModifyPage(HttpServletResponse response) throws IOException {
    	response.sendRedirect("html/teacher/TeacherInfoModifyPage.html");
	}
  //老师打分首页
    @RequestMapping(value="/TeacherScoreHome", method=RequestMethod.GET)
    void TeacherScoreHome(HttpServletResponse response) throws IOException {
    	response.sendRedirect("html/teacher/TeacherScoreHome.html");
	}
    //老师审阅打分首页
    @RequestMapping(value="/TeacherScoreReportPage", method=RequestMethod.GET)
    void TeacherScoreReportPage(HttpServletResponse response) throws IOException {
    	response.sendRedirect("html/teacher/TeacherScoreReportPage.html");
	}
    //老师讨论课信息
    @RequestMapping(value="/TeacherSeminarInfo", method=RequestMethod.GET)
    void TeacherSeminarInfo(HttpServletResponse response) throws IOException {
    	response.sendRedirect("html/teacher/TeacherSeminarInfo.html");
	}
    //老师讨论课课后查询话题
    @RequestMapping(value="/TeacherTopicCheckAfter", method=RequestMethod.GET)
    void TeacherTopicCheckAfter(HttpServletResponse response) throws IOException {
    	response.sendRedirect("html/teacher/TeacherTopicCheckAfter.html");
	}
    //老师讨论课课前查询话题
    @RequestMapping(value="/TeacherTopicCheckBefore", method=RequestMethod.GET)
    void TeacherTopicCheckBefore(HttpServletResponse response) throws IOException {
    	response.sendRedirect("html/teacher/TeacherTopicCheckBefore.html");
	}
  //老师修改班级
    @RequestMapping(value="/TeacherUpdateClass", method=RequestMethod.GET)
    void TeacherUpdateClass(HttpServletResponse response) throws IOException {
    	response.sendRedirect("html/teacher/TeacherUpdateClass.html");
	}
  //老师修改讨论课
    @RequestMapping(value="/TeacherUpdateSeminar", method=RequestMethod.GET)
    void TeacherUpdateSeminar(HttpServletResponse response) throws IOException {
    	response.sendRedirect("html/teacher/TeacherUpdateSeminar.html");
	}
  //老师修改课题
    @RequestMapping(value="/TeacherUpdateTopic", method=RequestMethod.GET)
    void TeacherUpdateTopic(HttpServletResponse response) throws IOException {
    	response.sendRedirect("html/teacher/TeacherUpdateTopic.html");
	}
    //老师修改课课程
    @RequestMapping(value="/TeacherUpdateCourse", method=RequestMethod.GET)
    void TeacherUpdateCourse(HttpServletResponse response) throws IOException {
        response.sendRedirect("html/teacher/TeacherUpdateCourse.html");
    }
}