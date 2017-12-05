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

import xmu.crms.model.Group;
import xmu.crms.model.Seminar;
import xmu.crms.model.SeminarDetail;
import xmu.crms.model.StudentSeminar;
import xmu.crms.model.Topic;

@RestController
@RequestMapping("/seminar")
public class SeminarController {

	//按ID获取讨论课，传入讨论课id，返回讨论课对象
	@RequestMapping(value="/{seminarId}", method=RequestMethod.GET)
	@ResponseStatus(value=HttpStatus.OK)
	public Seminar getSeminarById(@PathParam("seminarId") Integer seminarId){
		Seminar seminar=new Seminar();//假的
		return seminar;
	}
	
	//按ID修改讨论课，传入讨论课id和json
	@RequestMapping(value="/{seminarId}", method=RequestMethod.PUT)
	@ResponseStatus(value=HttpStatus.NO_CONTENT)
	public String updateSeminarById(@PathParam("seminarId") Integer seminarId, @RequestBody Seminar seminar){
		return "修改成功";
	}
	
	//按ID删除讨论课，传入讨论课id
	@RequestMapping(value="/{seminarId}", method=RequestMethod.DELETE)
	@ResponseStatus(value=HttpStatus.NO_CONTENT)
	public String deleteSeminarById(@PathParam("seminarId") Integer seminarId){
	    return "删除成功";
	}
	
	//按ID获取与学生有关的讨论课信息
	@RequestMapping(value="/{seminarId}/my", method=RequestMethod.GET)
	@ResponseStatus(value=HttpStatus.OK)
    public StudentSeminar getStudentSeminarById(@PathParam("seminarId") Integer seminarId){
	    StudentSeminar seminar=new StudentSeminar();//假的
        return seminar;
    }	
	
	 //按ID获取讨论课详情
    @RequestMapping(value="/{seminarId}/detail", method=RequestMethod.GET)
    @ResponseStatus(value=HttpStatus.OK)
    public SeminarDetail getSeminarDetailById(@PathParam("seminarId") Integer seminarId){
        SeminarDetail seminar=new SeminarDetail();//假的
        return seminar;
    }   
    
	//按ID获取讨论课的话题
	@RequestMapping(value="/{seminarId}/topic", method=RequestMethod.GET)
	@ResponseStatus(value=HttpStatus.OK)
	public List<Topic> getTopicList(@PathParam("seminarId") Integer seminarId){
		List<Topic> topiclist=new ArrayList<Topic>();//假的
		topiclist.add(new Topic());//测试
		return topiclist;
	}
	
	//在指定ID的讨论课创建话题
	@RequestMapping(value="/{seminarId}/topic", method=RequestMethod.POST)
	@ResponseStatus(value=HttpStatus.CREATED)
	public int createTopic(@PathParam("seminarId") Integer seminarId, @RequestBody Topic topic){	
		return topic.getId();
	}
	
	//按讨论课ID查找小组
	//可选参数Boolean gradeable可打分的、int classId此班级的
	@RequestMapping(value="/{seminarId}/group", method=RequestMethod.GET)
	@ResponseStatus(value=HttpStatus.OK)
	public List<Group> getGroupListBySeminarId(
			@PathParam("seminarId") Integer seminarId,boolean gradeable, int classId){	
		List<Group> groupList=new ArrayList<Group>();
		return groupList;
	}
	
	//接下来的应该都是小程序的。。。
}
