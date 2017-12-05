package xmu.crms.model;

public class Student {
    private int id;
    private String type;
    private String number;
    private String name;
    private String phone;
    private String email;
    private String gender;
    private School school;
    private String title;
    private String password;
    private String unionID;
    private String avatar;

    public Student() {

    }
    public Student(int id, String type, String number, String name,
                   String phone, String email, String gender, School school,
                   String title, String password, String unionID, String avatar) {
        this.id = id;
        this.type = type;
        this.number = number;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.gender = gender;
        this.school = school;
        this.title = title;
        this.password = password;
        this.unionID = unionID;
        this.avatar = avatar;
    }
    ////////////////////
    public Student(int id, String name,String number) {
 this.id = id;
 this.number = number;
 this.name = name;

}
    //////////////////////

	public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public School getSchool() {
        return school;
    }

    public void setSchool(School school) {
        this.school = school;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUnionID() {
        return unionID;
    }

    public void setUnionID(String unionID) {
        this.unionID = unionID;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", type='" + type + '\'' +
                ", number='" + number + '\'' +
                ", name='" + name + '\'' +
                ", phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                ", gender='" + gender + '\'' +
                ", school=" + school +
                ", title='" + title + '\'' +
                ", password='" + password + '\'' +
                ", unionID='" + unionID + '\'' +
                ", avatar='" + avatar + '\'' +
                '}';
    }
}
