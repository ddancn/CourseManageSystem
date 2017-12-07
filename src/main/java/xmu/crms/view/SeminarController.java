package xmu.crms.view;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.websocket.server.PathParam;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
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
	public Seminar getSeminarById(@PathParam("seminarId") Integer seminarId){
		Topic topic[]=new Topic[1];
		topic[0]=new Topic( 257,null,"领域模型与模块",  null, 1, 1, 1);
		Seminar seminar=new Seminar(32,"概要设计","模型层与数据库设计","fixed","2017-10-10","2017-10-24",topic,null);//假的
		return seminar;
	}
	
	//按ID修改讨论课，传入讨论课id和json
	@RequestMapping(value="/{seminarId}", method=RequestMethod.PUT)
	@ResponseStatus(value=HttpStatus.NO_CONTENT)
	public void updateSeminarById(@PathParam("seminarId") Integer seminarId, @RequestBody Seminar seminar){
	}
	
	//按ID删除讨论课，传入讨论课id
	@RequestMapping(value="/{seminarId}", method=RequestMethod.DELETE)
	@ResponseStatus(value=HttpStatus.NO_CONTENT)
	public void deleteSeminarById(@PathParam("seminarId") Integer seminarId){
	}
	
	//按ID获取与学生有关的讨论课信息
	@RequestMapping(value="/{seminarId}/my", method=RequestMethod.GET)
    public StudentSeminar getStudentSeminarById(@PathParam("seminarId") Integer seminarId){
	    StudentSeminar seminar=new StudentSeminar(32,"概要设计","random","OOAD","2017-10-11","2017-10-24",23,true,true);//假的
        return seminar;
    }	
	
	 //按ID获取讨论课详情
    @RequestMapping(value="/{seminarId}/detail", method=RequestMethod.GET)
    public SeminarDetail getSeminarDetailById(@PathParam("seminarId") Integer seminarId){
        SeminarDetail seminar=new SeminarDetail(32,"概要设计","2017-10-10","2017-10-24","海韵201","邱明","mingqiu@xmu.edu.cn");//假的
        return seminar;
    }   
    
	//按ID获取讨论课的话题
	@RequestMapping(value="/{seminarId}/topic", method=RequestMethod.GET)
	public List<Topic> getTopicList(@PathParam("seminarId") Integer seminarId){
		List<Topic> topiclist=new ArrayList<Topic>();//假的
		topiclist.add(new Topic(257,"A","领域模型与模块","Domain model与模块划分",5,6,2));//测试
		return topiclist;
	}
	
	//在指定ID的讨论课创建话题
	@RequestMapping(value="/{seminarId}/topic", method=RequestMethod.POST)
	public int createTopic(@PathParam("seminarId") Integer seminarId, @RequestBody Topic topic, HttpServletResponse response){	
		topic.setId(257);
		response.setStatus(201);
		return topic.getId();
	}
	
	//按讨论课ID查找小组
	//可选参数Boolean gradeable可打分的、int classId此班级的
	@RequestMapping(value="/{seminarId}/group", method=RequestMethod.GET)
	public List<Group> getGroupListBySeminarId(
			@PathParam("seminarId") Integer seminarId){//,boolean gradeable, int classId){	
		List<Group> groupList=new ArrayList<Group>();
		Topic[] topic=new Topic[1];
		topic[0]=new Topic( 257,null,"领域模型与模块",  null, 1, 1, 1);
		groupList.add(new Group(28,"1A1",null, null, topic, null, null));
		groupList.add(new Group(29,"1A2",null, null, topic, null, null));
		return groupList;
	}
	
	//接下来的应该都是小程序的。。。
}
