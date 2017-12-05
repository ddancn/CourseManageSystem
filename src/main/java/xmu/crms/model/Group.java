package xmu.crms.model;

import java.util.Arrays;

public class Group {
    private int id;
    private String name;
    private Student leader;
    private Student[] members;
    private Topic[] topics;
    private String report;
    private SeminarGrade grade;

    public Group() {

    }
    public Group(int id, String name, Student leader, Student[] members,
                 Topic[] topics, String report, SeminarGrade grade) {
        this.id = id;
        this.name = name;
        this.leader = leader;
        this.members = members;
        this.topics = topics;
        this.report = report;
        this.grade = grade;
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

    public Student getLeader() {
        return leader;
    }

    public void setLeader(Student leader) {
        this.leader = leader;
    }

    public Student[] getMembers() {
        return members;
    }

    public void setMembers(Student[] members) {
        this.members = members;
    }

    public Topic[] getTopics() {
        return topics;
    }

    public void setTopics(Topic[] topics) {
        this.topics = topics;
    }

    public String getReport() {
        return report;
    }

    public void setReport(String report) {
        this.report = report;
    }

    public SeminarGrade getGrade() {
        return grade;
    }

    public void setGrade(SeminarGrade grade) {
        this.grade = grade;
    }

    @Override
    public String toString() {
        return "Group{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", leader=" + leader +
                ", members=" + Arrays.toString(members) +
                ", topics=" + Arrays.toString(topics) +
                ", report='" + report + '\'' +
                ", grade=" + grade +
                '}';
    }
}
