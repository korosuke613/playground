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

        var futa = new Teacher("futa");
        futa.lesson();
        System.out.println(getWorkerName(futa));

        String[] students = {"konishi", "futa"};
        countArray(students);
    }

    public static String getWorkerName(Worker worker){
        return worker.getName();
    }

    static void countArray(String[] array){
        var count = Arrays.stream(array).count();
        System.out.printf("配列の要素数は%sです。最初の要素は%sです。%n", count, array[0]);
    }
}
