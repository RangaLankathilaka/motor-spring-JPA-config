$(document).ready(function(){

    var ajaxConfig = {
        method:"GET",
        url:"api/customers.php",
        data:{
            action:"count"
        },
        async:true
    }

    $.ajax(ajaxConfig).done(function(response){
        $("#lblCustomersCount").text(response);
    });


});