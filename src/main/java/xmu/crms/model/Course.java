package xmu.crms.model;

public class Course {

	private int id;				//课程id
	private Teacher teacher;		//该课老师
	private String name;			//课程名称
	private int numClass;			//班号
	private int numStudent;		//学生人数
	private String startTime;		//上课时间
	private String endTime;			//下课时间
	private String description;	//课程描述
	private Proportions proportions;	//评分规则

    public Course() {

    }
	public Course(int id, Teacher teacher, String name, int numClass,
				  int numStudent, String startTime, String endTime, String description, Proportions proportions) {
		this.id = id;
		this.teacher = teacher;
		this.name = name;
		this.numClass = numClass;
		this.numStudent = numStudent;
		this.startTime = startTime;
		this.endTime = endTime;
		this.description = description;
		this.proportions = proportions;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Teacher getTeacher() {
		return teacher;
	}

	public void setTeacher(Teacher teacher) {
		this.teacher = teacher;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getNumClass() {
		return numClass;
	}

	public void setNumClass(int numClass) {
		this.numClass = numClass;
	}

	public int getNumStudent() {
		return numStudent;
	}

	public void setNumStudent(int numStudent) {
		this.numStudent = numStudent;
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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Proportions getProportions() {
		return proportions;
	}

	public void setProportions(Proportions proportions) {
		this.proportions = proportions;
	}

	@Override
	public String toString() {
		return "Course{" +
				"id='" + id + '\'' +
				", teacher=" + teacher +
				", name='" + name + '\'' +
				", numClass=" + numClass +
				", numStudent=" + numStudent +
				", startTime='" + startTime + '\'' +
				", endTime='" + endTime + '\'' +
				", description='" + description + '\'' +
				", proportions=" + proportions +
				'}';
	}
}
