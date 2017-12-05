package xmu.crms.view;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import xmu.crms.model.School;

@RestController
@RequestMapping("/school")
public class SchoolController {
	
	//获取学校列表（按照城市查找学校
	@RequestMapping(value="", method=RequestMethod.GET)
	@ResponseStatus(HttpStatus.OK)
	public List<School> getSchoolList(String city){
		List<School> schoollist=new ArrayList<School>();//假的
		return schoollist;
	}
	
	//添加学校
	@RequestMapping(value="", method=RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public int createSchool(@RequestBody School school){	
		return school.getId();
	}
	
	//获取省份列表
    @RequestMapping(value="/province", method=RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public List<String> getProvinceList(){
        List<String> provincelist=new ArrayList<String>();//假的
        return provincelist;
    }
    
	//获取城市列表
    @RequestMapping(value="/city", method=RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public List<String> getCityList(String province){
        List<String> citylist=new ArrayList<String>();//假的
        return citylist;
    }
}
