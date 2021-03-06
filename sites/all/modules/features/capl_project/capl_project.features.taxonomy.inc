<?php
/**
 * @file
 * capl_project.features.taxonomy.inc
 */

/**
 * Implements hook_taxonomy_default_vocabularies().
 */
function capl_project_taxonomy_default_vocabularies() {
  return array(
    'discipline' => array(
      'name' => 'Discipline',
      'machine_name' => 'discipline',
      'description' => '',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
    ),
    'issue' => array(
      'name' => 'Issue',
      'machine_name' => 'issue',
      'description' => '',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
    ),
    'semester_year' => array(
      'name' => 'Semester/Year',
      'machine_name' => 'semester_year',
      'description' => '',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
    ),
  );
}
