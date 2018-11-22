$("#btnSendSomeData").click(function(){

    var data = {
        id: "C001",
        name:"Kulla",
        location: "Dehiwala"
    };

    var ajaxConfig = {
        method: "POST",
        url:"api/services.php",
        data:data,
        async: true
    }

    $.ajax(ajaxConfig).done(function(response){
       console.log(response);
    });

});