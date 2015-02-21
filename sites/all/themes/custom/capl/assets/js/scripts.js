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

})(jQuery);
