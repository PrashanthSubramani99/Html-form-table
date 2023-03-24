$(document).ready(function(){
    $("form").submit(function(e){
        e.preventDefault();
        var first_name = $('#first_name').val();
        var last_name = $('#last_name').val();
        var gender = $('#gender').val();
        var food = [];
        $.each($("input[name='food']:checked"), function(){
            food.push($(this).val());
        });
        var address = $('#address').val();
        var pincode = $('#pincode').val();
        var state = $('#state').val();
        var country = $('#country').val();

        if(first_name==="" ||last_name==="" ||gender===""||food===""||address==="" ||pincode==="" ||state=="" || country==""){
            alert('All the fields are required');
        }else{
            var tbody = `<tr>
                            <td>${first_name}</td>
                            <td>${last_name}</td>
                            <td>${gender}</td>
                            <td>${food.join(',')}</td>
                            <td>${address}</td>
                            <td>${pincode}</td>
                            <td>${state}</td>
                            <td>${country}</td>
                        </tr>`;
            $('#tbody').append(tbody);
        }
        this.reset();
    });
  });