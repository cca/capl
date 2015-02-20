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

<!-- Collect the nav links, forms, and other content for toggling -->
<div class="drawer collapse navbar-collapse" id="navbar-collapse">
  <?php if ($main_menu): ?>
    <ul id="main-menu" class="menu nav navbar-nav">
      <?php print render($main_menu); ?>
    </ul>
  <?php endif; ?>
</div><!-- /.navbar-collapse -->

<nav class="navbar navbar-default" role="navigation">
  <!-- Brand and toggle get grouped for better mobile display -->
  <div class="navbar-header">
    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
      <span class="sr-only"><?php print t('Toggle navigation'); ?></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
  </div> <!-- /.navbar-header -->
</nav><!-- /.navbar -->

<header id="header" class="header" role="header">
  <div class="container">
    <a href="<?php print $front_page; ?>">
      <img class="logo" src="<?php print $logo; ?>">
    </a>
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
      <div class="page-header">
        <?php if ($title): ?>
          <h1 class="title"><?php print $title; ?></h1>
        <?php endif; ?>
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

<footer id="footer" class="footer" role="footer">
  <div class="container">
    <? if ($page['footer']): print render($page['footer']); endif; ?>
    <?php if ($main_menu): ?>
      <ul class="footer-menu">
        <?php print render($main_menu); ?>
      </ul>
    <?php endif; ?>
  </div>
</footer>
