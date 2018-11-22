$(document).ready(loadAllCustomers);

function loadAllCustomers(){

    var ajaxConfig = {
        method: "GET",
        url:"api/customers.php?action=all",
        async: true
    };

    $.ajax(ajaxConfig).done(function(response){
        response.forEach(function (customer){
            var html = "<tr>" +
                "<td>" + customer.id + "</td>" +
                "<td>" + customer.name + "</td>" +
                "<td>" + customer.address + "</td>" +
                '<td class="recycle"><i class="fa fa-2x fa-trash"></i></td>' +
                "</tr>";

            $("#tblCustomers tbody").append(html);

            $(".recycle").off();
            $(".recycle").click(function(){

                var customerID = ($(this).parents("tr").find("td:first-child").text());
                console.log(customerID);

                if (confirm("Are you sure that you want to delete?")){

                    $.ajax({
                        method:"DELETE",
                        url:"api/customers.php?id=" + customerID,
                        async: true
                    }).done(function(response){
                       if (response){
                           alert("Customer has been successfully deleted");
                           $("#tblCustomers tbody tr").remove();
                           loadAllCustomers();
                       } else{
                           alert("Failed to delete the customer");
                       }
                    });

                }

            });
       });
    });

}

$("#csavebtn").click(savecustomer);


function savecustomer() {

    var ajaxConfig = {
        method:"POST",
        url:"api/customers.php",
        data: $("#cform").serialize() + "&action=save",
        async:true
    }

    console.log(ajaxConfig);

    $.ajax(ajaxConfig).done(function(response){
        if (response){
            $("#tblCustomers tbody tr").remove();
            loadAllCustomers();
        }else{
            alert("Failed to save the customer ");
        }
    })

    // response.forEach(function (customer){
    //     $id=customer.id;
    //      $name=customer.name;
    //    $address=customer.address;
    //
    //
    //
    // $.ajax({
    //     method:"POST",
    //     url:"api/customers.php",
    //     data:{
    //         $id,
    //         $name,
    //         $address
    //     },
    //     async: true
    // }).done(function(response){
    //     if (response){
    //         alert("Customer has been successfully save");
    //               } else{
    //         alert("Failed to save the customer");
    //     }
    // });
    // });
}