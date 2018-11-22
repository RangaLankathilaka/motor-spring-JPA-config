$("#btnReadXML").click(sendXMLRequest);


function sendXMLRequest(){

    var ajaxConfig = {
        method: "GET",
        url:"database.xml",
        async: true
    };

    $.ajax(ajaxConfig).done(function(response){
       console.log($(response).find("deppek:nth-child(2)").attr("id"));
       console.log($(response).find("deppek:nth-child(1)").text());
    });

}