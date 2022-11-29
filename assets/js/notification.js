$(document).ready(function () {

    var down = false;

    $('#bell').click(function (e) {

      var color = $(this).text();
      if (down) {

        $('#box').css('height', '0px');
        $('#box').css('opacity', '0');
        down = false;
      } else {

        $('#box').css('height', 'auto');
        $('#box').css('opacity', '1');
        down = true;

      }

    });

  });
  $(document).ready(function () {

    var down1 = false;


    $('#bell1').click(function (e) {

      var color = $(this).text();
      if (down1) {

        $('#box1').css('height', '0px');
        $('#box1').css('opacity', '0');
        down1 = false;
      } else {

        $('#box1').css('height', 'auto');
        $('#box1').css('opacity', '1');
        down1 = true;

      }

    });

  });