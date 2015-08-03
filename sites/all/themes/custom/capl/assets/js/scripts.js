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
          var bodyOffset = $('#admin-menu-wrapper').height() + 5;
          $('body').removeClass('admin-menu').css('margin-top', bodyOffset, 'important');
          $('.navbar').css('top', bodyOffset);
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
        var $count = $(this).children('.count').text();

        // add terms as data attribute for this item
        $(this).children('a').attr('data-group', $data);

        // remove items with zero results
        if ($count === '(0)') {
          $(this).remove();
        }
      });

      // add view all option for each category
      var showAll = '<div><a href="#" class="show-all" data-group="all">Show All</a></div>';
      $categories.find('.view-content').prepend(showAll);

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

  Drupal.behaviors.accordions = {
    attach: function (context, settings) {


      // Mobile project categories expand
      $('#block-views-project-categories-block').on('click', 'h2', function() {
         $('.region-sidebar-first > .block > .content').toggle();
      });

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

  Drupal.behaviors.tweaks = {
    attach: function (context, settings) {

      // capl team view
      // combine name and job title
      $('.view-capl-team').find('.views-row').each( function () {
        var $nameField = $(this).find('.field-name-field-staff-name');
        var $jobTitleField = $(this).find('.field-name-field-job-title');
        $nameField.find('.field-item')
          .text($nameField.text() + ' – ' + $jobTitleField.text());
        $jobTitleField.remove();
      });

      // make homepage grid images clickable
      $('.view-projects').on('click', '.item', function () {
        var href = $(this).find('a').attr('href');
        window.location.href = href;
      });
    }
  }

})(jQuery);
