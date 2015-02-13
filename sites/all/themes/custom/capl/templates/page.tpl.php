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
<header id="header" class="header" role="header">
  <div class="container">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#drawer">
        <span class="sr-only"><?php print t('Toggle navigation'); ?></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a href="<?php print $front_page; ?>" class="logo" class="navbar-brand">
        <img src="<?php print $logo; ?>"/>
      </a>
    </div> <!-- /.navbar-header -->
  </div> <!-- /.container -->
</header>

<div id="main-wrapper">
  <div id="main" class="main">
    <div class="container">
      <?php if ($messages): ?>
        <div id="messages">
          <?php print $messages; ?>
        </div>
      <?php endif; ?>

      <?php if ($title): ?>
        <h1 class="title"><?php print $title; ?></h1>
      <?php endif; ?>

      <div id="page-header">

        <?php if ($tabs): ?>
          <div class="tabs">
            <?php print render($tabs); ?>
          </div>
        <?php endif; ?>
        <?php if ($action_links): ?>
          <ul class="action-links">
            <?php print render($action_links); ?>
          </ul>
        <?php endif; ?>
      </div>
    </div>
    <div id="content" class="container">
      <?php print render($page['content']); ?>
    </div>
  </div> <!-- /#main -->
</div> <!-- /#main-wrapper -->

<footer class="footer" role="footer">
  <div class="container">
    <?php if ($page['footer']) : ?>
      <?php print render($page['footer']); ?>
    <?php endif; ?>
    <?php if ($main_menu): ?>
      <div class="block">
        <ul class="footer-menu">
          <?php print render($main_menu); ?>
        </ul>
      </div>
    <?php endif; ?>
  </div>
</footer>
<div class="drawer">
  <?php if ($main_menu): ?>
      <?php print render($main_menu); ?>
  <?php endif; ?>
</div>