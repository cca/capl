<?php

/**
 * @file
 * Default theme implementation to display a single Drupal page.
 *
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see template_process()
 * @see html.tpl.php
 */
?>

<!-- Mobile Nav button -->
<div class="container nav-wrapper">
  <input type="checkbox" id="nav-trigger" class="nav-trigger" />
  <label for="nav-trigger">
    <span class="sr-only"><?php print t('Toggle navigation'); ?></span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
  </label>

  <?php if ($main_menu): ?>
    <div class="drawer">
      <?php print render($main_menu_expanded); ?>
    </div> <!-- /#main-menu -->
  <?php endif; ?>
</div>

<header id="header" class="header" role="header">
  <div class="container">
    <div class="logo">
      <a href="<?php print $front_page; ?>">
        <img  src="/<?php print $logopath?>">
      </a>
    </div>
    <div class="page-header">
      <?php if ($title): ?>
        <h1 class="title"><?php print $title; ?></h1>
      <?php endif; ?>
      <?php if ($tabs): ?>
        <div class="tabs">
          <?php print render($tabs); ?>
        </div>
      <?php endif; ?>
      <?php print render($page['help']); ?>
      <?php if ($action_links): ?>
        <ul class="action-links">
          <?php print render($action_links); ?>
        </ul>
      <?php endif; ?>
    </div>
  </div> <!-- /.container -->
</header>

<div class="container main-wrapper">
  <?php if ($page['sidebar_first']): ?>
    <div class="sidebar-first">
      <?php print render($page['sidebar_first']); ?>
    </div>
  <?php endif; ?>
  <!-- /sidebar-first -->

  <div class="main-content" class="container">
    <?php if ($messages): ?>
      <div id="messages">
        <?php print $messages; ?>
      </div>
    <?php endif; ?>
    <div id="content" >
      <?php print render($page['content']); ?>
    </div>
  </div>
  <?php if ($page['sidebar_second']): ?>
    <div class="sidebar-second">
      <?php print render($page['sidebar_second']); ?>
    </div>
  <?php endif; ?>
  <!-- /sidebar-second -->
</div>

<footer class="footer" role="footer">
  <div class="container">
    <?php if ($page['footer']): print render($page['footer']); endif; ?>
  </div>
</footer>
 