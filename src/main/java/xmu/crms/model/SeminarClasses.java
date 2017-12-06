package xmu.crms.model;

import java.util.Arrays;

public class SeminarClasses {
    private int id;
    private String name;
    private String courseName;
    private String groupingMethod;
    private String startTime;
    private String endTime;
    private Class[] classes;

    public SeminarClasses(int id, String name, String courseName, String groupingMethod, String startTime,
			String endTime, Class[] classes) {
		super();
		this.id = id;
		this.name = name;
		this.courseName = courseName;
		this.setGroupingMethod(groupingMethod);
		this.startTime = startTime;
		this.endTime = endTime;
		this.classes = classes;
	}
	public SeminarClasses() {

    }
    public SeminarClasses(int id, String name, String courseName,
                          String startTime, String endTime, Class[] classes) {
        this.id = id;
        this.name = name;
        this.courseName = courseName;
        this.startTime = startTime;
        this.endTime = endTime;
        this.classes = classes;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public Class[] getClasses() {
        return classes;
    }

    public void setClasses(Class[] classes) {
        this.classes = classes;
    }

    @Override
    public String toString() {
        return "SeminarClasses{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", courseName='" + courseName + '\'' +
                ", startTime='" + startTime + '\'' +
                ", endTime='" + endTime + '\'' +
                ", classes=" + Arrays.toString(classes) +
                '}';
    }
	public String getGroupingMethod() {
		return groupingMethod;
	}
	public void setGroupingMethod(String groupingMethod) {
		this.groupingMethod = groupingMethod;
	}
}
