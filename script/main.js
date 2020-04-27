$(document).ready(function () {
    

// refs

var callApi = 'https://flynn.boolean.careers/exercises/api/random/int' //api
var box = $('.wrapper .box'); // box

box.click(function(){

    var self = $(this);
    //ajax call
    $.ajax ({
        url: callApi,
        method: 'GET',
        success: function(res) {
            var number = res.response;
            console.log(number);

            self.text(number)

            if (number <= 5) {
                self.addClass('yellow')
            } else {
                self.addClass('green')
            }
            
        },
        error: function() {

        }
        
    });

});





}); // <-- End Doc Ready