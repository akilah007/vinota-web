// JavaScript Document
$(document).ready(function() {

var title_array = ["Crystal Clear Voice Quality", "Accessible to Any Device: Android and iOS"];
var description_array = ["Immerse yourself in conversations with Vinota's crystal clear voice quality. Our advanced technology ensures uninterrupted and high-quality calls. Enjoy conversations that feel like you're in the same room, no matter the distance.", "Experience the convenience and flexibility of Vinota across all your devices. Our app is designed to be compatible with various platforms, ensuring that you can enjoy seamless communication no matter which device you prefer."];
var index = 0;
// just a bit of caching:
var title = $("#dynamic_title");

setInterval(function () {
  title.html(title_array[index]);
  index++;
  if (index >= title_array.length) {
    index = 0;
  }
}, 3000);
var index_a = 0;
var descriptin = $("#dynamic_description");
setInterval(function () {
  descriptin.html(description_array[index_a]);
  index_a++;
  if (index_a >= description_array.length) {
    index_a = 0;
  }
}, 3000);


    "use strict";
    
    $(".quick-form").submit(function(e) {
        e.preventDefault();
        var email = $(".email");
        var flag = false;
        if (email.val() == "") {
            email.closest(".form-control").addClass("error");
            email.focus();
            flag = false;
            return false;
        } else {
            email.closest(".form-control").removeClass("error").addClass("success");
            flag = true;
        }
        var dataString = "&email=" + email.val();
        $(".loading").fadeIn("slow").html("Loading...");
        $.ajax({
            type: "POST",
            data: dataString,
            url: "php/quickForm.php",
            cache: false,
            success: function (d) {
                $(".form-control").removeClass("success");
					if(d == 'success') // Message Sent? Show the 'Thank You' message and hide the form
						$('.loading').fadeIn('slow').html('<font color="#48af4b">Mail sent Successfully.</font>').delay(3000).fadeOut('slow');
					else
						$('.loading').fadeIn('slow').html('<font color="#ff5607">Mail not sent.</font>').delay(3000).fadeOut('slow');
                        document.quickform.reset(); 

								  }
        });
        return false;
    });

    $("#reset").on('click', function() {
        $(".form-control").removeClass("success").removeClass("error");
    });

})

function showSupportSection() {
  var x = document.getElementById("support_section");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function showHiddeCountries() {
  var x = document.getElementById("show-hide-country-list");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
