package xmu.crms.view;

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

import xmu.crms.model.Class;
import xmu.crms.model.ClassGroup;
import xmu.crms.model.CourseClass;
import xmu.crms.model.Proportions;
import xmu.crms.model.Student;
import xmu.crms.model.Teacher;
import xmu.crms.model.Url;
import xmu.crms.model.User;

@RestController
@RequestMapping("/class")
public class ClassController {

	//获取与当前用户相关联的或符合条件的班级列表
	@RequestMapping(value="", method=RequestMethod.GET)
	public List<CourseClass> getClassList(String courseName, String teacherName){
		ArrayList<CourseClass> list=new ArrayList<CourseClass>();
		Teacher tea1=new Teacher ();
		tea1.setName("邱明");
		Teacher tea2=new Teacher ();
		tea2.setName("杨律青");
		list.add(new CourseClass( 23,"周三1-2节",60,"周三1-2、周五1-2","公寓405","OOAD","邱明"));
		list.add(new CourseClass( 42,"一班",60,"周三34节 周五12节","海韵202",".Net 平台开发","杨律青"));
		return list;
	}

	//按ID获取班级，传入班级id，返回班级对象
	@RequestMapping(value="/{classId}", method=RequestMethod.GET)
	public Class getClassById(@PathParam("classId") Integer classId){
		Class clas=new Class( 23,"周三1-2节",120,"周三一二节","海韵201",-1,"/roster/周三12班.xlsx",new  Proportions (50,50, 20,60,20));//假的1
		return clas;
	}
	
	//按ID修改班级，传入班级id和json
	@RequestMapping(value="/{classId}", method=RequestMethod.PUT)
	@ResponseStatus(value=HttpStatus.NO_CONTENT)
	public void updateClassById(@PathParam("classId") Integer classId, @RequestBody Class clas){
	}
	
	//按ID删除班级，传入班级id
	@RequestMapping(value="/{classId}", method=RequestMethod.DELETE)
	@ResponseStatus(value=HttpStatus.NO_CONTENT)
	public void deleteClassById(@PathParam("classId") Integer classId){
	}
		
	//班级按ID查找学生列表（查询学号、姓名开头）
	@RequestMapping(value="/{classId}/student", method=RequestMethod.GET)
	public List<User> getStudentList(@PathParam("classId") Integer classId, String numBeginWith, String nameBeginWith){
		List<User> studentList=new ArrayList<User>();
		User user1=new User();
		user1.setId(233);
		user1.setName("张三");
		user1.setNumber("24320152202333");
		studentList.add(user1);
		
		User user2=new User();
		user2.setId(245);
		user2.setName("张八");
		user2.setNumber(" 24320152202334");
		studentList.add(user2);
		return studentList;//是否要分student和teacher
	}
	
	//学生按ID选择班级
	@RequestMapping(value="/{classId}/student", method=RequestMethod.POST)
	public Url chooseClass(@PathParam("classId") Integer classId,@RequestBody Student student, HttpServletResponse response){
	    Url url2=new Url("/class/34/student/2757");
	    response.setStatus(201);
	     return url2;
	}

	//学生按ID取消选择班级
	@RequestMapping(value="/{classId}/student/{studentId}", method=RequestMethod.DELETE)
	@ResponseStatus(value=HttpStatus.NO_CONTENT)
	public void chooseClass(@PathParam("classId") Integer classId, @PathParam("studentId") Integer studentId){
	}
	
	//按ID获取自身所在班级小组
	@RequestMapping(value="/{classId}/classgroup", method=RequestMethod.GET)
	public ClassGroup getGroupByClassId(@PathParam("classId") Integer classId){
		Student stu[]=new Student[2];
		stu[0]=new Student( 2756,"李四","23320152202443");
		stu[1]=new Student(  2777,"王五","23320152202433");
		return new ClassGroup(new Student(  2757,"张三","23320152202333"),stu);	
	}
		
	//班级小组组长辞职
	@RequestMapping(value="/{classId}/classgroup/resign", method=RequestMethod.PUT)
	@ResponseStatus(value=HttpStatus.NO_CONTENT)
	public void resign(@PathParam("classId") Integer classId, @RequestBody Student student){
	}
	
	 //成为班级小组组长
    @RequestMapping(value="/{classId}/classgroup/assign", method=RequestMethod.PUT)
    @ResponseStatus(value=HttpStatus.NO_CONTENT)
    public void assign(@PathParam("classId") Integer classId, @RequestBody Student student){
    }
    
    //添加班级小组成员
    @RequestMapping(value="/{classId}/classgroup/add", method=RequestMethod.PUT)
    @ResponseStatus(value=HttpStatus.NO_CONTENT)
    public void add(@PathParam("classId") Integer classId, @RequestBody Student student){
    }
    
    //移除班级小组成员
    @RequestMapping(value="/{classId}/classgroup/remove", method=RequestMethod.PUT)
    @ResponseStatus(value=HttpStatus.NO_CONTENT)
    public void remove(@PathParam("classId") Integer classId, @RequestBody Student student){
    }
}
