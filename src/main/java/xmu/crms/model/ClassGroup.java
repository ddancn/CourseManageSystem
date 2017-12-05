package xmu.crms.model;

import java.util.Arrays;

public class ClassGroup {
    private Student leader;
    private Student[] members;

    public ClassGroup() {

    }
    public ClassGroup(Student leader, Student[] members) {
        this.leader = leader;
        this.members = members;
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

    @Override
    public String toString() {
        return "ClassGroup{" +
                "leader=" + leader +
                ", members=" + Arrays.toString(members) +
                '}';
    }
}
