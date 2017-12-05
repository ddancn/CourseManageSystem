package xmu.crms.model;

public class PresentationGrade {
    private int topicID;
    private int grade;

    public PresentationGrade() {
    }
    
    public PresentationGrade(int topicID, int grade) {
        this.topicID = topicID;
        this.grade = grade;
    }

    public int getTopicID() {
        return topicID;
    }

    public void setTopicID(int topicID) {
        this.topicID = topicID;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    @Override
    public String toString() {
        return "PresentationGrade{" +
                "topicID=" + topicID +
                ", grade=" + grade +
                '}';
    }
}
