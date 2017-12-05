package xmu.crms.view;

import javax.websocket.server.PathParam;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import xmu.crms.model.Group;
import xmu.crms.model.SeminarGrade;

@RestController
@RequestMapping("/group")
public class GroupController {
	
	//按ID获取小组详情，传入小组id，返回小组对象
    //是否包含小组选择的话题、是否包含小组的成绩
	@RequestMapping(value="/{groupId}", method=RequestMethod.GET)
	@ResponseStatus(value=HttpStatus.OK)
	public Group getTopicrById(@PathParam("groupId") Integer groupId, boolean embedTopics, boolean embedGrade){
		Group group=new Group(1);//假的
		return group;
	}

	 //组长辞职
    @RequestMapping(value="/{groupId}/resign", method=RequestMethod.PUT)
    @ResponseStatus(value=HttpStatus.NO_CONTENT)
    public String resign(@PathParam("classId") Integer classId, int studentId){
        return "辞职成功";
    }
    
     //成为组长
    @RequestMapping(value="/{groupId}/assign", method=RequestMethod.PUT)
    @ResponseStatus(value=HttpStatus.NO_CONTENT)
    public String assign(@PathParam("classId") Integer classId, int studentId){
        return "成为组长";
    }
    
    //添加成员
    @RequestMapping(value="/{groupId}/add", method=RequestMethod.PUT)
    @ResponseStatus(value=HttpStatus.NO_CONTENT)
    public String add(@PathParam("classId") Integer classId, int studentId){
        return "添加成员成功";
    }
    
    //移除成员
    @RequestMapping(value="/{groupId}/remove", method=RequestMethod.PUT)
    @ResponseStatus(value=HttpStatus.NO_CONTENT)
    public String remvoe(@PathParam("classId") Integer classId, int studentId){
        return "移除成员成功";
    }
    
    //小组按ID选择话题
    @RequestMapping(value="/{groupId}/topic", method=RequestMethod.POST)
    @ResponseStatus(value=HttpStatus.CREATED)
    public String chooseTopic(@PathParam("groupId") Integer groupId, int topicId){
        return "选择话题成功";     
    }
    
    //小组按ID取消选择话题
    @RequestMapping(value="/{groupId}/topic/{topicId}", method=RequestMethod.DELETE)
    @ResponseStatus(value=HttpStatus.NO_CONTENT)
    public String cancelTopic(@PathParam("groupId") Integer groupId, @PathParam("topicId") Integer  topicId){
        return "取消选择成功";     
    }

	//按ID获取小组的讨论课成绩
	@RequestMapping(value="/{groupId}/grade", method=RequestMethod.GET)
	@ResponseStatus(value=HttpStatus.OK)
	public SeminarGrade getGradeByGroupId(@PathParam("groupId") Integer groupId){
		return new SeminarGrade();		
	}
	
	//按ID设置小组的报告分
	@RequestMapping(value="/{groupId}/grade", method=RequestMethod.PUT)
	@ResponseStatus(value=HttpStatus.OK)
	public String gradeByGroupId(@PathParam("groupId") Integer groupId, int reportGrade){
		return "设置成功";		
	}
	
	//提交对其他小组的打分是小程序端的
}
