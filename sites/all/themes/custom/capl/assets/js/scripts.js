(function($) {

  Drupal.behaviors.is_responsive = {
    attach: function (context, settings) {

      // Bind the window resize event to  responsive manager
      $(window).resize(function() {
        adminMenuFix();
      }).resize();

      function adminMenuFix() {
        // Adjust body position when admin menu is present.
        if($('#admin-menu').length > 0) {
          var bodyOffset = $('#admin-menu-wrapper').height() + 10;
          $('body').removeClass('admin-menu').css('margin-top', bodyOffset, 'important');
          $('label[for="nav-trigger"]').css('top', bodyOffset, 'important');
        }
      }

    }
  };

  Drupal.behaviors.flexslider = {
    attach: function (context, settings) {

      var slideshow = $('.field-name-field-slideshow');
      if (slideshow.length > 0 ) {
        $(slideshow).flexslider({
          selector: '.field-items > .field-item',
          animation: "slide",
          animationLoop: true,
          itemWidth: 490
        });
      }
    }
  }

  Drupal.behaviors.accordions = {
    attach: function (context, settings) {

      // Project Filter
      $('.region-sidebar-first h2').click(function() {
        $(this).toggleClass( 'expanded');
        $('.region-sidebar-first > .block > .content').toggle('fast');
      });

      //Project Details
      var details = $('.group-left');
      if (details.length > 0) {
        details.prepend('<h2 class="js-trigger"> Project Details </h2>'
        );
        $('.js-trigger').click(function() {
          $(this).toggleClass( 'expanded');
          $('.group-left .field').toggle('fast');
        });
      }
    }
  }

})(jQuery);
