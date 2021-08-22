package korosuke613.callApi;

import org.json.JSONObject;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class GitHub {
    private JSONObject getCommit(String owner, String repo, String ref) {
        var client = HttpClient.newHttpClient();
        var request = HttpRequest.newBuilder()
                .uri(URI.create("https://api.github.com/repos/" + owner + "/" + repo + "/commits/" + ref))
                .header("Accept", "application/vnd.github.v3+json")
                .build();

        HttpResponse<String> response = null;
        try {
            response = client.send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }

        return new JSONObject(response.body());
    }

    public String getMailAddressFromCommit(String owner, String repo, String ref) {
        var commit = getCommit(owner, repo, ref);
        return commit
                .getJSONObject("commit")
                .getJSONObject("author")
                .getString("email");
    }
}
