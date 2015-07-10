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

  Drupal.behaviors.navbar = {
    attach: function(context, settings) {
      // Hide Header on on scroll down
      var didScroll;
      var lastScrollTop = 0;
      var delta = 5;
      var navbar = $('.navbar');
      var navbarHeight = navbar.outerHeight();

      console.log(navbarHeight);

      $(window).scroll(function(event){
          didScroll = true;
      });

      setInterval(function() {
          if (didScroll) {
              hasScrolled();
              didScroll = false;
          }
      }, 250);

      function hasScrolled() {
          var st = $(this).scrollTop();
          
          // Make sure they scroll more than delta
          if(Math.abs(lastScrollTop - st) <= delta)
              return;
          
          // If they scrolled down and are past the navbar, add class .nav-up.
          // This is necessary so you never see what is "behind" the navbar.
          if (st > lastScrollTop && st > navbarHeight){
              // Scroll Down
              navbar.removeClass('nav-down over').addClass('nav-up');
          } else {
              // Scroll Up
              if(st + $(window).height() < $(document).height()) {
                  navbar.removeClass('nav-up').addClass('nav-down over');
              }
              if(st < navbarHeight) {
                navbar.removeClass('over');
              }
          }
          
          lastScrollTop = st;
      }
    }
  }

  Drupal.behaviors.shuffle = {
    attach: function (context, settings) {

      // implement shufflejs for drupal views [http://vestride.github.io/Shuffle/]

      // add grid id for project view
      $('.view-projects').find('.view-content').attr('id', 'grid');

      // 'item' must be configured as row class in views UI
      $('.item').each(function() {
        // get terms from views field
        var $terms = $(this).find('.views-field-term-node-tid');
        // format terms into comma-sparated list
        var $data = $terms.text().trim().split(', ').join('","');
        // add terms as data attribute for this item
        $(this).attr('data-groups', '["' + $data + '"]');
        // remove terms from display
        $terms.remove();
      });

      // add filter id for category view
      var $categories = $('.view-project-categories');
      $categories.find('.view-content').attr('id', 'filter');

      $categories.find('div').each(function () {
        var $data = $(this).children('a').text().trim();
        // add terms as data attribute for this item
        $(this).children('a').attr('data-group', $data);
      });

      // initialize shuffle plugin
      var $grid = $('#grid');

      $grid.shuffle({
          itemSelector: '.item' // the selector for the items in the grid
      });

      $('#filter a').click(function (e) {
        e.preventDefault();

        // set active class
        $('#filter a').removeClass('active');
        $(this).addClass('active');

        // get group name from clicked item
        var groupName = $(this).attr('data-group');

        // reshuffle grid
        $grid.shuffle('shuffle', groupName );
      });

    }
  }

  Drupal.behaviors.categories = {
    attach: function (context, settings) {
    }
  }

  Drupal.behaviors.accordions = {
    attach: function (context, settings) {

      // Project Filter

      $('.view-project-categories').on('click', '.view-header', function(e) {
        e.stopPropagation();
        $(this).toggleClass('expanded');
        $(this).next('.view-content').toggle('fast');
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
