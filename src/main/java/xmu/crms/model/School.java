package xmu.crms.model;

public class School {
    private int id;
    private String name;
    private String province;
    private String city;

    public School() {

    }
    public School(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public School(int id, String name, String province, String city) {
        this.id = id;
        this.name = name;
        this.province = province;
        this.city = city;
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

    @Override
    public String toString() {
        return "School{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", province='" + province + '\'' +
                ", city='" + city + '\'' +
                '}';
    }
}
