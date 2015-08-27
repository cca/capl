<?php

function capl_preprocess_page(&$vars){

  // Create full main menu tree
  $main_menu_tree = menu_tree_all_data('main-menu');
  // Add the rendered output to the $main_menu_expanded variable
  $vars['main_menu_expanded'] = menu_tree_output($main_menu_tree);

  // Make search available to page template.
  $search_block = module_invoke('search','block_view','search');
  $vars['search'] =  render($search_block);

  // Change logo on front page.
  $vars['logopath'] = path_to_theme() .'/assets/images/logo-' .(($vars['is_front'] === TRUE) ? 'big': 'small') .'.svg' ;

  // Add shuffle.js
  drupal_add_js(drupal_get_path('theme', 'capl') . '/bower_components/imagesloaded/imagesloaded.pkgd.js');
  drupal_add_js(drupal_get_path('theme', 'capl') . '/bower_components/shufflejs/dist/jquery.shuffle.modernizr.js');
  drupal_add_js(drupal_get_path('theme', 'capl') . '/bower_components/shufflejs/dist/jquery.shuffle.js');
  drupal_add_js(drupal_get_path('theme', 'capl') . '/bower_components/jquery.scrollTo/jquery.scrollTo.min.js');
  drupal_add_js(drupal_get_path('theme', 'capl') . '/assets/js/vendor/slick-1.5.7/slick/slick.min.js');
  drupal_add_css(drupal_get_path('theme', 'capl') . '/assets/js/vendor/slick-1.5.7/slick/slick.css');
  drupal_add_css(drupal_get_path('theme', 'capl') . '/assets/js/vendor/slick-1.5.7/slick/slick-theme.css');
}

function capl_preprocess_node(&$vars){

  // Add JS to project page.
  if ($vars['node']->type == 'project') {
  }
}
