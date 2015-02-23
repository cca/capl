<?php

function capl_preprocess_page(&$vars){

  // Create full main menu tree
  $main_menu_tree = menu_tree_all_data('main-menu');
  // Add the rendered output to the $main_menu_expanded variable
  $vars['main_menu_expanded'] = menu_tree_output($main_menu_tree);

}

function capl_preprocess_node(&$vars){

  // Add JS to project page.
  if ($vars['node']->type == 'project') {
    drupal_add_js(drupal_get_path('theme', 'capl') . '/assets/js/vendor/jquery.flexslider-min.js');
  }

}