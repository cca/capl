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
  );
}
