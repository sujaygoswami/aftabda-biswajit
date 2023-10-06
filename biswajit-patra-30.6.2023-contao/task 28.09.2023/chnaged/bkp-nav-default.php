<!--mobile menu-->
<!--<div class="mobile-menu-hidden-items">-->
<!--	<button class="ma5menu__toggle" type="button"><span class="ma5menu__icon-toggle"></span><span class="ma5menu__sr-only">Menu</span></button>-->
<!--</div>-->
<!--mobile menu-->

<ul class="navbar-nav <?= $this->level ?>">
  <?php foreach ($this->items as $item): ?>
    <?php if ($item['isActive']): ?>
      <li class="nav-item <?= $item['class'] ?>"><span class="<?= $item['class'] ?>"<?php if (!empty($item['subitems'])) echo ' aria-haspopup="true"'; ?>><?= $item['link'] ?></span><?= $item['subitems'] ?></li>
    <?php else: ?>
      <li<?php if ($item['class']) echo ' class="nav-item ' . $item['class'] . '"'; ?>><a href="<?= $item['href'] ?: './' ?>" title="<?= $item['pageTitle'] ?: $item['title'] ?>"<?php if ($item['class']) echo ' class="nav-link  ' . $item['class'] . '"'; ?><?php if ($item['accesskey']) echo ' accesskey="' . $item['accesskey'] . '"'; ?><?php if ($item['tabindex']) echo ' tabindex="' . $item['tabindex'] . '"'; ?><?php if ($item['nofollow']) echo ' rel="nofollow"'; ?><?= $item['target'] ?><?php if (!empty($item['subitems'])) echo ' aria-haspopup="true"'; ?>><?= $item['link'] ?></a><?= $item['subitems'] ?></li>
    <?php endif; ?>
  <?php endforeach; ?>
</ul>

<!--mobile menu-->
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>-->
<link rel="stylesheet" href="https://tilohildebrandt.com/files/css/ma5-menu.css">
<!--<script src="https://tilohildebrandt.com/files/js/ma5-menu.js"></script>-->
<script src="https://tilohildebrandt.com/files/js/mobile-menu.js"></script>
<!--mobile menu-->



<!-- bkp original -->
<ul class="navbar-nav <?= $this->level ?>">
  <?php foreach ($this->items as $item): ?>
    <?php if ($item['isActive']): ?>
      <li class="nav-item <?= $item['class'] ?>"><span class="<?= $item['class'] ?>"<?php if (!empty($item['subitems'])) echo ' aria-haspopup="true"'; ?>><?= $item['link'] ?></span><?= $item['subitems'] ?></li>
    <?php else: ?>
      <li<?php if ($item['class']) echo ' class="nav-item ' . $item['class'] . '"'; ?>><a href="<?= $item['href'] ?: './' ?>" title="<?= $item['pageTitle'] ?: $item['title'] ?>"<?php if ($item['class']) echo ' class="nav-link  ' . $item['class'] . '"'; ?><?php if ($item['accesskey']) echo ' accesskey="' . $item['accesskey'] . '"'; ?><?php if ($item['tabindex']) echo ' tabindex="' . $item['tabindex'] . '"'; ?><?php if ($item['nofollow']) echo ' rel="nofollow"'; ?><?= $item['target'] ?><?php if (!empty($item['subitems'])) echo ' aria-haspopup="true"'; ?>><?= $item['link'] ?></a><?= $item['subitems'] ?></li>
    <?php endif; ?>
  <?php endforeach; ?>
</ul>
<!-- bkp original -->