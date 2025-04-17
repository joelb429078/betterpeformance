/**
 * Enqueue finance section assets
 */
function bp_enqueue_finance_assets() {
  // Load finance.css
  wp_enqueue_style(
    'bp-finance-styles',
    get_stylesheet_directory_uri() . '/assets/css/finance.css',
    [],
    '1.0'
  );

  // Load alt-section.js
  wp_enqueue_script(
    'bp-alt-section-js',
    get_stylesheet_directory_uri() . '/assets/js/finance-section.js',
    ['jquery'],
    '1.0',
    true
  );
}
add_action('wp_enqueue_scripts', 'bp_enqueue_finance_assets');