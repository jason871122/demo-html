// 輪播
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// gotop
$(function() {
    $("#gotop").click(function() {
        jQuery("html,body").animate({
            scrollTop: 0
        }, 0);
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#gotop').fadeIn("fast");
        } else {
            $('#gotop').stop().fadeOut("fast");
        }
    });
});


// 推薦商品切換
$(document).ready(function() {
  flag=1;
  $("#nex").click(function() {
    if(flag==1)
    {
      $("#sug1").css("display","none");
      $("#sug2").fadeIn("fast");
      flag=2;
    }
    else if(flag==2)
    {
      $("#sug2").css("display","none");
      $("#sug1").fadeIn("fast");
      flag=1;
    }
  });
  $("#pre").click(function() {
    if(flag==1)
    {
      $("#sug1").css("display","none");
      $("#sug2").fadeIn("fast");
      flag=2;
    }
    else if(flag==2)
    {
      $("#sug2").css("display","none");
      $("#sug1").fadeIn("fast");
      flag=1;
    }
  });
});