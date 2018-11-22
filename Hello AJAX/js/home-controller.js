function sendRequestWithVanillaJS() {
    // Initialize XMLHttp Request
    var http = new XMLHttpRequest();

    // We set an anonymous call back function to on ready state change
    http.onreadystatechange = function () {
        if (http.readyState === 4 && http.status === 200){
            var response = (http.responseText);
            $("#txtArea").val(response);
        }
    };

    // Open the request
    http.open("GET", "just-a-text-file.txt", true);

    // Send
    http.send();
}

function sendRequest(){

    // var ajaxConfig = {
    //     method: "GET",
    //     url:"ust-a-text-file.txt",
    //     async: true
    // };

    $.ajax({
        method: "GET",
        url:"ust-a-text-file.txt",
        async: true
    }).done(function(response){
       $("#txtArea").val(response);
    }).fail(function(xmlHttp, status, error){
       console.log(xmlHttp);
       console.log(status);
       console.log(error);
    });

}

$("#btnRead").click(sendRequest);

