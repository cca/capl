(function($) {

  // allow nested functions to override navbar overlay behavior
  var globalScroll = true;

  Drupal.behaviors.is_responsive = {
    attach: function (context, settings) {

      // Bind the window resize event to  responsive manager
      $(window).resize(function() {
        adminMenuFix();
        showCollapsedContent();
      }).resize();

      function adminMenuFix() {
        // Adjust body position when admin menu is present.
        if($('#admin-menu').length > 0) {
          var bodyOffset = $('#admin-menu-wrapper').height() + 5;
          $('body').removeClass('admin-menu').css('margin-top', bodyOffset, 'important');
          $('.navbar').css('top', bodyOffset);
        }
      }

      function showCollapsedContent() {
        // Show collapsed content if window is resized from mobile display
        if ($(window).width() > 480) {
          // homepage project grid filters
          $('.view-project-categories').parent().show();
          // project sidebar details
          $('.group-left .field').show();
        }
      }

    }
  };

  Drupal.behaviors.flexslider = {
    attach: function (context, settings) {

      $('.field-name-field-slideshow .field-items').slick({
        //setting-name: setting-value
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        arrows: true,
        variableWidth: true
      });

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
          if (st > lastScrollTop && st > (navbarHeight * 2)) {
              // Scroll Down
              navbar.removeClass('nav-down over').addClass('nav-up');
          } else {
              // Scroll Up
              if(globalScroll && st + $(window).height() < $(document).height()) {
                  navbar.removeClass('nav-up').addClass('nav-down over');
              }
              if(st < navbarHeight) {
                navbar.removeClass('over');
              }
          }
          
          lastScrollTop = st;
          // reset global scroll variable
          globalScroll = true;
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

      var $grid = $('#grid');

      // wait until all images are loaded before calling shuffle on grid items
      imagesLoaded('.view-projects', function() {
        $grid.shuffle({
            itemSelector: '.item' // the selector for the items in the grid
        });
      })

      $('#filter a').click(function (e) {
        e.preventDefault();

        // set active class
        $('#filter a').removeClass('active');
        $(this).addClass('active');

        // get group name from clicked item
        var groupName = $(this).attr('data-group');

        // reshuffle grid
        $grid.shuffle('shuffle', groupName );
        // scroll to top of grid results
        $(window).scrollTo("#main-content", 500);
        // suppress navbar overlay on scroll
        globalScroll = false;
      });

    }
  }

  Drupal.behaviors.accordions = {
    attach: function (context, settings) {


      // Mobile project categories expand
      $('#block-views-project-categories-block').on('click', 'h2', function() {
        $(this).toggleClass('expanded');
        $('.region-sidebar-first > .block > .content').toggle();
      });

      // Project Filter
      $('.view-project-categories').on('click', '.view-header', function(e) {
        e.stopPropagation();
        $(this).toggleClass('expanded');
        $(this).next('.view-content').toggle('fast');
      });

      //Project Details
      var details = $('.node-type-project .group-left');
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

      // hide drawer menu when user clicks outside of nav-wrapper
      $('html').click(function() {
        $('#nav-trigger').prop('checked', false);
      });
      $('.nav-wrapper').click(function(event){
          event.stopPropagation();
      });

      $('.view-capl-team').find('.views-row').each(function() {
        var $username = $(this).find('.field-name-name').text();
        // add email to staff username
        $(this).find('.field-name-name').text($username + '@cca.edu');
        // remove profile image link
        $(this).find('img').unwrap();
      });

      // make homepage grid images clickable
      $('.view-projects').on('click', '.item', function () {
        var href = $(this).find('a').attr('href');
        window.location.href = href;
      });

      // fix programs view link
      $('.view-programs').find('.views-row').each(function() {
        console.log($(this).find('.field-name-body').text());
      })
    }
  }

})(jQuery);
