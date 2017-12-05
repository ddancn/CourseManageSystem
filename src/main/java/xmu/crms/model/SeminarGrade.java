package xmu.crms.model;

import java.util.Arrays;

public class SeminarGrade {
    private PresentationGrade[] presentationGrades;
    private int reportGrade;
    private int grade;

    public SeminarGrade() {

    }
    public SeminarGrade(PresentationGrade[] presentationGrades, int reportGrade, int grade) {
        this.presentationGrades = presentationGrades;
        this.reportGrade = reportGrade;
        this.grade = grade;
    }

    public PresentationGrade[] getPresentationGrades() {
        return presentationGrades;
    }

    public void setPresentationGrades(PresentationGrade[] presentationGrades) {
        this.presentationGrades = presentationGrades;
    }

    public int getReportGrade() {
        return reportGrade;
    }

    public void setReportGrade(int reportGrade) {
        this.reportGrade = reportGrade;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    @Override
    public String toString() {
        return "SeminarGrade{" +
                "presentationGrades=" + Arrays.toString(presentationGrades) +
                ", reportGrade=" + reportGrade +
                ", grade=" + grade +
                '}';
    }
}
