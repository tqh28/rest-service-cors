var url;
url = "http://scrs.apps.evizi.com/api/scrs-records/partial";
//url = "http://scrs.apps.evizi.com/api/users/current";

$(document).ready(function() {
    document.getElementById("url").innerHTML = url;

    $.ajax({
        url: url,
        beforeSend: function (xhr) {
            // xhr.setRequestHeader ("Authorization", "Basic " + btoa("huytran:Qwerty@123"));
            xhr.setRequestHeader ("Authorization", "Bearer token");
        },
    }).then(function(data, status, jqxhr) {
        document.getElementById("status").innerHTML = status;
        document.getElementById("content").innerHTML = JSON.stringify(data);
    });
});
