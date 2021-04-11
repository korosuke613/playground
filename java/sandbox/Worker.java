import java.util.ArrayList;
import java.util.Arrays;

class Worker {
    private String name;
    static String JOB_NAME = "Worker";

    public Worker(String name){
        this.name = name;
    }

    public void setName(String name) {
        this.name = name;
        name = "333";
    }

    public String getName(){
        return this.name;
    }

    public void setArrayName(ArrayList<String> names){
        names.add("fff");
        names = new ArrayList<>(Arrays.asList("ff", "jjjj"));
    }

    public static String getJobName(){
        return JOB_NAME;
    }

}
