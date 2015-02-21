<?php
/**
 * @file
 * capl_project.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function capl_project_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'projects';
  $view->description = '';
  $view->tag = 'capl';
  $view->base_table = 'node';
  $view->human_name = 'Projects';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Projects';
  $handler->display->display_options['use_ajax'] = TRUE;
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'better_exposed_filters';
  $handler->display->display_options['exposed_form']['options']['expose_sort_order'] = FALSE;
  $handler->display->display_options['exposed_form']['options']['autosubmit'] = TRUE;
  $handler->display->display_options['exposed_form']['options']['autosubmit_hide'] = FALSE;
  $handler->display->display_options['exposed_form']['options']['bef'] = array(
    'general' => array(
      'allow_secondary' => 0,
      'secondary_label' => 'Advanced options',
    ),
    'field_discipline_tid' => array(
      'bef_format' => 'bef',
      'more_options' => array(
        'bef_select_all_none' => 1,
        'bef_collapsible' => 1,
        'is_secondary' => 0,
        'any_label' => '',
        'bef_filter_description' => '',
        'tokens' => array(
          'available' => array(
            0 => 'global_types',
          ),
        ),
        'rewrite' => array(
          'filter_rewrite_values' => '',
        ),
      ),
    ),
    'field_issue_tid_1' => array(
      'bef_format' => 'bef',
      'more_options' => array(
        'bef_select_all_none' => 1,
        'bef_collapsible' => 1,
        'is_secondary' => 0,
        'any_label' => '',
        'bef_filter_description' => '',
        'tokens' => array(
          'available' => array(
            0 => 'global_types',
          ),
        ),
        'rewrite' => array(
          'filter_rewrite_values' => '',
        ),
      ),
    ),
    'field_program_target_id' => array(
      'bef_format' => 'bef',
      'more_options' => array(
        'bef_select_all_none' => 1,
        'bef_collapsible' => 1,
        'is_secondary' => 0,
        'any_label' => '',
        'bef_filter_description' => '',
        'tokens' => array(
          'available' => array(
            0 => 'global_types',
          ),
        ),
        'rewrite' => array(
          'filter_rewrite_values' => '',
        ),
      ),
    ),
    'field_year_value' => array(
      'bef_format' => 'default',
      'more_options' => array(
        'is_secondary' => 0,
        'any_label' => '',
        'bef_filter_description' => '',
        'tokens' => array(
          'available' => array(
            0 => 'global_types',
          ),
        ),
        'rewrite' => array(
          'filter_rewrite_values' => '',
        ),
      ),
    ),
  );
  $handler->display->display_options['exposed_form']['options']['input_required'] = 0;
  $handler->display->display_options['exposed_form']['options']['text_input_required_format'] = 'filtered_html';
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['pager']['options']['items_per_page'] = '32';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'node';
  $handler->display->display_options['row_options']['links'] = FALSE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'project' => 'project',
  );

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['exposed_block'] = TRUE;
  $handler->display->display_options['defaults']['filter_groups'] = FALSE;
  $handler->display->display_options['defaults']['filters'] = FALSE;
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'project' => 'project',
  );
  $handler->display->display_options['filters']['type']['group'] = 1;
  /* Filter criterion: Content: Course Discipline (field_discipline) */
  $handler->display->display_options['filters']['field_discipline_tid']['id'] = 'field_discipline_tid';
  $handler->display->display_options['filters']['field_discipline_tid']['table'] = 'field_data_field_discipline';
  $handler->display->display_options['filters']['field_discipline_tid']['field'] = 'field_discipline_tid';
  $handler->display->display_options['filters']['field_discipline_tid']['group'] = 1;
  $handler->display->display_options['filters']['field_discipline_tid']['exposed'] = TRUE;
  $handler->display->display_options['filters']['field_discipline_tid']['expose']['operator_id'] = 'field_discipline_tid_op';
  $handler->display->display_options['filters']['field_discipline_tid']['expose']['label'] = 'Discipline';
  $handler->display->display_options['filters']['field_discipline_tid']['expose']['operator'] = 'field_discipline_tid_op';
  $handler->display->display_options['filters']['field_discipline_tid']['expose']['identifier'] = 'discipline';
  $handler->display->display_options['filters']['field_discipline_tid']['expose']['multiple'] = TRUE;
  $handler->display->display_options['filters']['field_discipline_tid']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
  );
  $handler->display->display_options['filters']['field_discipline_tid']['type'] = 'select';
  $handler->display->display_options['filters']['field_discipline_tid']['vocabulary'] = 'discipline';
  $handler->display->display_options['filters']['field_discipline_tid']['error_message'] = FALSE;
  /* Filter criterion: Content: Issue (field_issue) */
  $handler->display->display_options['filters']['field_issue_tid_1']['id'] = 'field_issue_tid_1';
  $handler->display->display_options['filters']['field_issue_tid_1']['table'] = 'field_data_field_issue';
  $handler->display->display_options['filters']['field_issue_tid_1']['field'] = 'field_issue_tid';
  $handler->display->display_options['filters']['field_issue_tid_1']['group'] = 1;
  $handler->display->display_options['filters']['field_issue_tid_1']['exposed'] = TRUE;
  $handler->display->display_options['filters']['field_issue_tid_1']['expose']['operator_id'] = 'field_issue_tid_1_op';
  $handler->display->display_options['filters']['field_issue_tid_1']['expose']['label'] = 'Issue';
  $handler->display->display_options['filters']['field_issue_tid_1']['expose']['operator'] = 'field_issue_tid_1_op';
  $handler->display->display_options['filters']['field_issue_tid_1']['expose']['identifier'] = 'issue1';
  $handler->display->display_options['filters']['field_issue_tid_1']['expose']['multiple'] = TRUE;
  $handler->display->display_options['filters']['field_issue_tid_1']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
  );
  $handler->display->display_options['filters']['field_issue_tid_1']['type'] = 'select';
  $handler->display->display_options['filters']['field_issue_tid_1']['vocabulary'] = 'issue';
  $handler->display->display_options['filters']['field_issue_tid_1']['error_message'] = FALSE;
  /* Filter criterion: Content: Program (field_program) */
  $handler->display->display_options['filters']['field_program_target_id']['id'] = 'field_program_target_id';
  $handler->display->display_options['filters']['field_program_target_id']['table'] = 'field_data_field_program';
  $handler->display->display_options['filters']['field_program_target_id']['field'] = 'field_program_target_id';
  $handler->display->display_options['filters']['field_program_target_id']['group'] = 1;
  $handler->display->display_options['filters']['field_program_target_id']['exposed'] = TRUE;
  $handler->display->display_options['filters']['field_program_target_id']['expose']['operator_id'] = 'field_program_target_id_op';
  $handler->display->display_options['filters']['field_program_target_id']['expose']['label'] = 'Program';
  $handler->display->display_options['filters']['field_program_target_id']['expose']['operator'] = 'field_program_target_id_op';
  $handler->display->display_options['filters']['field_program_target_id']['expose']['identifier'] = 'program';
  $handler->display->display_options['filters']['field_program_target_id']['expose']['multiple'] = TRUE;
  $handler->display->display_options['filters']['field_program_target_id']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
  );
  /* Filter criterion: Content: Year (field_year) */
  $handler->display->display_options['filters']['field_year_value']['id'] = 'field_year_value';
  $handler->display->display_options['filters']['field_year_value']['table'] = 'field_data_field_year';
  $handler->display->display_options['filters']['field_year_value']['field'] = 'field_year_value';
  $handler->display->display_options['filters']['field_year_value']['group'] = 1;
  $handler->display->display_options['filters']['field_year_value']['exposed'] = TRUE;
  $handler->display->display_options['filters']['field_year_value']['expose']['operator_id'] = 'field_year_value_op';
  $handler->display->display_options['filters']['field_year_value']['expose']['label'] = 'Year';
  $handler->display->display_options['filters']['field_year_value']['expose']['operator'] = 'field_year_value_op';
  $handler->display->display_options['filters']['field_year_value']['expose']['identifier'] = 'year';
  $handler->display->display_options['filters']['field_year_value']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
  );
  $handler->display->display_options['filters']['field_year_value']['granularity'] = 'year';
  $handler->display->display_options['path'] = 'projects';
  $handler->display->display_options['menu']['type'] = 'normal';
  $handler->display->display_options['menu']['title'] = 'Projects';
  $handler->display->display_options['menu']['name'] = 'main-menu';

  /* Display: Related Projects Block */
  $handler = $view->new_display('block', 'Related Projects Block', 'block_1');
  $handler->display->display_options['defaults']['title'] = FALSE;
  $handler->display->display_options['display_description'] = 'Displays on Program Node';
  $handler->display->display_options['defaults']['pager'] = FALSE;
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['pager']['options']['items_per_page'] = '0';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['pager']['options']['id'] = '0';
  $handler->display->display_options['pager']['options']['quantity'] = '9';
  $handler->display->display_options['defaults']['relationships'] = FALSE;
  $handler->display->display_options['defaults']['arguments'] = FALSE;
  /* Contextual filter: Content: Program (field_program) */
  $handler->display->display_options['arguments']['field_program_target_id']['id'] = 'field_program_target_id';
  $handler->display->display_options['arguments']['field_program_target_id']['table'] = 'field_data_field_program';
  $handler->display->display_options['arguments']['field_program_target_id']['field'] = 'field_program_target_id';
  $handler->display->display_options['arguments']['field_program_target_id']['default_action'] = 'default';
  $handler->display->display_options['arguments']['field_program_target_id']['default_argument_type'] = 'node';
  $handler->display->display_options['arguments']['field_program_target_id']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['field_program_target_id']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['field_program_target_id']['summary_options']['items_per_page'] = '25';
  $export['projects'] = $view;

  return $export;
}
