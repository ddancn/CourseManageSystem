package xmu.crms.view;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import org.springframework.web.bind.annotation.RestController;

import xmu.crms.model.School;

@RestController
@RequestMapping("/school")
public class SchoolController {
	
	//获取学校列表（按照城市查找学校
	@RequestMapping(value="", method=RequestMethod.GET)//TODO
	public List<School> getSchoolList(String city){
		List<School> schoollist=new ArrayList<School>();//假的
		schoollist.add(new School(32,"厦门大学","福建","厦门"));
		schoollist.add(new School(37,"厦门软件学院","福建","厦门"));
		return schoollist;
	}
	
	//添加学校
	@RequestMapping(value="", method=RequestMethod.POST)//TODO
	public int createSchool(@RequestBody School school, HttpServletResponse response){
		school.setId(38);
		response.setStatus(201);
		return school.getId();
	}
	
	//获取省份列表
    @RequestMapping(value="/province", method=RequestMethod.GET)
    public List<String> getProvinceList(){
        List<String> provincelist=new ArrayList<String>();//假的
        provincelist.add("北京");
        provincelist.add("天津");
        provincelist.add("河北省");
        provincelist.add("……");
        provincelist.add("澳门特别行政区");
        return provincelist;
    }
    
	//获取城市列表
    @RequestMapping(value="/city", method=RequestMethod.GET)
    public List<String> getCityList(String province){
        List<String> citylist=new ArrayList<String>();//假的
        citylist.add("北京");
        citylist.add("天津");
        citylist.add("河北省");
        citylist.add("……");
        citylist.add("澳门特别行政区");
        return citylist;
    }
}
