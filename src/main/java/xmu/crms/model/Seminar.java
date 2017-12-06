package xmu.crms.model;

import java.util.Arrays;

public class Seminar {
    private int id;
    private String name;
    private String description;
    private String groupingMethod;
    private String startTime;
    public Seminar(int id, String name, String description, String groupingMethod, String startTime, String endTime,
			int grade, Topic[] topics, Proportions proportions) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.groupingMethod = groupingMethod;
		this.startTime = startTime;
		this.endTime = endTime;
		this.grade = grade;
		this.topics = topics;
		this.proportions = proportions;
	}
	private String endTime;
    private int grade;
    private Topic[] topics;
    private Proportions proportions;

    public Seminar() {

    }
    public Seminar(int id, String name, String description, String groupingMethod,
                   String startTime, String endTime, Topic[] topics, Proportions proportions) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.groupingMethod = groupingMethod;
        this.startTime = startTime;
        this.endTime = endTime;
        this.topics = topics;
        this.proportions = proportions;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getGroupingMethod() {
        return groupingMethod;
    }

    public void setGroupingMethod(String groupingMethod) {
        this.groupingMethod = groupingMethod;
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

    public Topic[] getTopics() {
        return topics;
    }

    public void setTopics(Topic[] topics) {
        this.topics = topics;
    }

    public Proportions getProportions() {
        return proportions;
    }

    public void setProportions(Proportions proportions) {
        this.proportions = proportions;
    }

    @Override
    public String toString() {
        return "Seminar{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", groupingMethod='" + groupingMethod + '\'' +
                ", startTime='" + startTime + '\'' +
                ", endTime='" + endTime + '\'' +
                ", topic=" + Arrays.toString(topics) +
                ", proportions=" + proportions +
                '}';
    }
	public int getGrade() {
		return grade;
	}
	public void setGrade(int grade) {
		this.grade = grade;
	}
}
