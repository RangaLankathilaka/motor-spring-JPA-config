$("#btnGenerate").click(function(){

    var ajaxConfig = {
        method:"GET",
        url:"api/services.php",
        async: true
    }

    $.ajax(ajaxConfig).done(function(response){
        console.log(response);
    });



});