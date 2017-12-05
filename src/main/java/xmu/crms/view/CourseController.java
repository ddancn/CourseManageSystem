package xmu.crms.view;

import java.util.ArrayList;
import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import xmu.crms.model.Class;
import xmu.crms.model.Course;
import xmu.crms.model.CourseDetail;
import xmu.crms.model.Seminar;
import xmu.crms.model.SeminarClasses;
import xmu.crms.model.SeminarGradeDetail;

@RestController
@RequestMapping("/course")
public class CourseController {

	//获取与当前用户相关联的课程列表
	@RequestMapping(value="", method=RequestMethod.GET)
	@ResponseStatus(value=HttpStatus.OK)
	public List<Course> getCourseList(){
		List<Course> courselist=new ArrayList<Course>();//假的
		return courselist;
	}
	
	//创建课程，传入json，返回课程id
	@RequestMapping(value="", method=RequestMethod.POST)
	@ResponseStatus(value=HttpStatus.CREATED)
	public int createCourse(@RequestBody Course course){	
		return course.getId();
	}
	
	//按ID获取课程，传入课程id，返回课程对象
	@RequestMapping(value="/{courseId}", method=RequestMethod.GET)
	@ResponseStatus(value=HttpStatus.OK)
	public CourseDetail getCourseById(@PathParam("courseId") Integer courseId){
		return new CourseDetail();
	}
	
	//按ID修改课程，传入课程id和json
	@RequestMapping(value="/{courseId}", method=RequestMethod.PUT)
	@ResponseStatus(value=HttpStatus.NO_CONTENT)
	public String updateCourseById(@PathParam("courseId") Integer courseId, @RequestBody Course course){
		return "修改成功";
	}
	
	//按ID删除课程，传入课程id
	@RequestMapping(value="/{courseId}", method=RequestMethod.DELETE)
	@ResponseStatus(value=HttpStatus.NO_CONTENT)
	public String deleteCourseById(@PathParam("courseId") Integer courseId){
	    return "删除成功";
	}
		
	//按ID获取课程的班级列表
	@RequestMapping(value="/{courseId}/class", method=RequestMethod.GET)
	@ResponseStatus(value=HttpStatus.OK)
	public List<Class> getClassListByCourseId(@PathParam("courseId") Integer courseId){
		List<Class> classList=new ArrayList<Class>();
		return classList;
	}
	
	//在指定ID的课程创建班级
	@RequestMapping(value="/{courseId}/class", method=RequestMethod.POST)
	@ResponseStatus(value=HttpStatus.CREATED)
	public int createTopic(@PathParam("courseId") Integer courseId, @RequestBody Class clas){	
		return clas.getId();
	}
	
	//按ID获取课程的讨论课列表
	@RequestMapping(value="/{courseId}/seminar", method=RequestMethod.GET)
	@ResponseStatus(value=HttpStatus.OK)
	public List<Seminar> getSeminarList(@PathParam("courseId") Integer courseId, boolean embedGrade){
		List<Seminar> seminarlist=new ArrayList<Seminar>();//假的
		return seminarlist;
	}
	
	//在指定ID的课程创建讨论课
	@RequestMapping(value="/{courseId}/seminar", method=RequestMethod.POST)
	@ResponseStatus(value=HttpStatus.CREATED)
	public int createSeminar(@PathParam("courseId") Integer courseId, @RequestBody Seminar seminar){	
		return seminar.getId();
	}
	
	 //获取课程正在进行的讨论课
    @RequestMapping(value="/{courseId}/seminar/current", method=RequestMethod.GET)
    @ResponseStatus(value=HttpStatus.OK)
    public SeminarClasses getCurrentSeminar(@PathParam("courseId") Integer courseId){ 
        return new SeminarClasses();
    }
    
    //按课程ID获取学生的所有讨论课成绩
   @RequestMapping(value="/{courseId}/grade", method=RequestMethod.GET)
   @ResponseStatus(value=HttpStatus.OK)
   public List<SeminarGradeDetail> getGradeListByCourseId(@PathParam("courseId") Integer courseId){ 
       return new ArrayList<SeminarGradeDetail>();
   }
}
