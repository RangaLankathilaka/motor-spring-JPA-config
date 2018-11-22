$("#btnReadJSON").click(function(){

    var ajaxConfig = {
        method: "GET",
        url: "database.json",
        async: true
    };

    $.ajax(ajaxConfig).done(function(response){
        console.log(response);
        var myArray = JSON.parse(response);
        console.log(myArray);
    });

    // var myObj = {
    //     name : "Ranjith Suranga",
    //     location : "Panadura",
    //     printDetails: function(){
    //         console.log(this.name, this.location);
    //     }
    // };
    //
    // console.log(JSON.stringify(myObj));

});