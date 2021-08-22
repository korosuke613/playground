package korosuke613.callApi;

public class Main {
    public static void main(String[] args){
        var github = new GitHub();
        var email = github.getMailAddressFromCommit("korosuke613", "playground", "1fa589e339ee3b8a2cc3488fdb764f0b5b227101");
        System.out.println(email);
    }
}
