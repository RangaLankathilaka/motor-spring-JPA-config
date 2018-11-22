$("#btnSave").click(function(){

    var ajaxConfig = {
        method : "POST",
        url:"api/services.php",
        data: $("#frmCustomer").serialize(),
        async: true
    };

    $.ajax(ajaxConfig).done(function(response){
        console.log(response);
    });


});