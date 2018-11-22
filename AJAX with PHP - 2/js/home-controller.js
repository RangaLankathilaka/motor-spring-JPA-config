$("#btnSendSomeData").click(function(){

    //var queryString = 'itemCode=I001&action=Save';
    var queryObject = {
        itemCode: "I001",
        action: "Save"
    }

    var ajaxConfig = {
        method: "GET",
        url:"api/services.php",
        data: queryObject,
        async: true
    }

    $.ajax(ajaxConfig).done(function(response){
       console.log(JSON.parse(response));
    });

});