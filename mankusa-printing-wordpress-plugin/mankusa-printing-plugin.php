<?php
/**
 * Plugin Name: Mankusa Printing & Publishing Website Embed
 * Plugin URI: https://mankusaprints.com/
 * Description: Embeds the premium Mankusa Printing & Publishing website experience seamlessly on any page or post of your WordPress site using a simple shortcode: [mankusa_printing_app].
 * Version: 1.0.0
 * Author: Mankusa Press Team
 * Author URI: https://mankusaprints.com/
 * License: GPL2
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

// 1. Register Shortcode
function mankusa_printing_register_shortcode() {
    add_shortcode( 'mankusa_printing_app', 'mankusa_printing_render_app' );
}
add_action( 'init', 'mankusa_printing_register_shortcode' );

// 2. Render Shortcode
function mankusa_printing_render_app() {
    // Enqueue Google Fonts for UI Typography
    wp_enqueue_style( 'mankusa-google-fonts', 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap', array(), null );

    // Enqueue React application scripts & styles
    wp_enqueue_script( 'mankusa-printing-js', plugins_url( 'assets/mankusa-printing.js', __FILE__ ), array(), '1.0.0', true );
    wp_enqueue_style( 'mankusa-printing-css', plugins_url( 'assets/mankusa-printing.css', __FILE__ ), array(), '1.0.0' );

    // Inject WordPress Plugin Base URL into React so that image assets resolve correctly
    $plugin_base_url = plugins_url( '/', __FILE__ );
    wp_localize_script( 'mankusa-printing-js', 'wp_mankusa_settings', array(
        'pluginUrl' => $plugin_base_url
    ) );

    // Inline script to bind plugin base URL to window object
    wp_add_inline_script( 'mankusa-printing-js', 'window.mankusaPluginUrl = "' . esc_url( $plugin_base_url ) . '";', 'before' );

    // Return the root mount container for the React app
    ob_start();
    ?>
    <!-- Wrapper to contain any styles and mount React -->
    <div id="mankusa-wp-wrapper" style="width: 100%; min-height: 500px; overflow: hidden; position: relative; display: block;">
        <div id="root"></div>
    </div>
    <?php
    return ob_get_clean();
}
