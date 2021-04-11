import java.util.ArrayList;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        var konishi = new Worker("konishi");
        System.out.println(konishi.getName());

        var newName = "arisa";
        konishi.setName(newName);
        System.out.println(newName);

        var newNames = new ArrayList<>(Arrays.asList("konishi", "hirakoba"));
        konishi.setArrayName(newNames);
        System.out.println(newNames);

        System.out.println(Worker.getJobName());
    }
}
