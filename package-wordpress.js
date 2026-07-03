import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { ZipArchive } from 'archiver';

const ROOT_DIR = process.cwd();
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const PLUGIN_DIR = path.join(ROOT_DIR, 'mankusa-printing-wordpress-plugin');
const PUBLIC_IMAGES_DIR = path.join(ROOT_DIR, 'public', 'images');

async function main() {
  try {
    console.log('Step 1: Building React Application...');
    execSync('npm run build', { stdio: 'inherit' });

    console.log('Step 2: Preparing Plugin Directories...');
    if (fs.existsSync(PLUGIN_DIR)) {
      fs.rmSync(PLUGIN_DIR, { recursive: true, force: true });
    }
    fs.mkdirSync(PLUGIN_DIR);
    fs.mkdirSync(path.join(PLUGIN_DIR, 'assets'));
    fs.mkdirSync(path.join(PLUGIN_DIR, 'images'));

    console.log('Step 3: Finding Built JS and CSS Assets...');
    const distAssetsDir = path.join(DIST_DIR, 'assets');
    const files = fs.readdirSync(distAssetsDir);

    let jsFile = null;
    let cssFile = null;

    for (const file of files) {
      if (file.endsWith('.js')) {
        jsFile = file;
      } else if (file.endsWith('.css')) {
        cssFile = file;
      }
    }

    if (!jsFile || !cssFile) {
      console.error('Error: Could not find compiled JS or CSS in dist/assets!');
      process.exit(1);
    }

    console.log(`Found JS asset: ${jsFile}`);
    console.log(`Found CSS asset: ${cssFile}`);

    // Copy and rename built assets
    fs.copyFileSync(
      path.join(distAssetsDir, jsFile),
      path.join(PLUGIN_DIR, 'assets', 'mankusa-printing.js')
    );
    fs.copyFileSync(
      path.join(distAssetsDir, cssFile),
      path.join(PLUGIN_DIR, 'assets', 'mankusa-printing.css')
    );

    console.log('Step 4: Copying Image Assets...');
    const images = fs.readdirSync(PUBLIC_IMAGES_DIR);
    for (const img of images) {
      const srcPath = path.join(PUBLIC_IMAGES_DIR, img);
      const destPath = path.join(PLUGIN_DIR, 'images', img);
      if (fs.statSync(srcPath).isFile()) {
        fs.copyFileSync(srcPath, destPath);
      }
    }

    console.log('Step 5: Generating WordPress Plugin PHP Entry Point...');
    const phpContent = `<?php
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
`;

    fs.writeFileSync(path.join(PLUGIN_DIR, 'mankusa-printing-plugin.php'), phpContent);

    console.log('Step 6: Writing README.md Instructions...');
    const readmeContent = `# Mankusa Printing & Publishing - WordPress Plugin

This WordPress plugin embeds the complete, high-fidelity Mankusa Printing & Publishing website experience directly on any page or post of your WordPress site.

## Installation Instructions

1. **Download the Plugin ZIP**: Download the file \`mankusa-printing-plugin.zip\` from the root folder.
2. **Upload to WordPress**:
   - Log in to your WordPress dashboard.
   - Go to **Plugins** -> **Add New Plugin**.
   - Click **Upload Plugin** at the top.
   - Choose the downloaded \`mankusa-printing-plugin.zip\` file and click **Install Now**.
3. **Activate**: After installation is complete, click **Activate Plugin**.

## How to Use the Embed

Once activated, you can place the complete Mankusa Printing & Publishing experience on any page or post:

### Gutenberg Block Editor
1. Edit any page or post.
2. Click the **+** (Add Block) button.
3. Search for **Shortcode** and insert it.
4. Paste the following shortcode:
   \`\`\`text
   [mankusa_printing_app]
   \`\`\`
5. Save or Publish the page.

### Classic Editor or Widget
Simply copy and paste the shortcode \`[mankusa_printing_app]\` inside the editor text area or inside a "Text" / "Custom HTML" widget.

## Features
- **Asset Resolution**: All images are bundled inside the plugin and load dynamically from the correct WordPress directory.
- **Visual Isolation**: Styled using fully scoped Tailwind CSS so that it does not leak or conflict with your parent WordPress theme styles.
- **Fast Performance**: Fully optimized React bundle compiled on the fast Vite compiler engine.
`;

    fs.writeFileSync(path.join(PLUGIN_DIR, 'README.md'), readmeContent);

    console.log('Step 7: Creating ZIP Archive using Node archiver...');
    const zipFile = path.join(ROOT_DIR, 'mankusa-printing-plugin.zip');
    if (fs.existsSync(zipFile)) {
      fs.unlinkSync(zipFile);
    }

    const outputStream = fs.createWriteStream(zipFile);
    const archive = new ZipArchive({ zlib: { level: 9 } });

    outputStream.on('close', () => {
      console.log(`WordPress plugin successfully packed into mankusa-printing-plugin.zip! Total size: ${(archive.pointer() / 1024 / 1024).toFixed(2)} MB`);
    });

    archive.on('error', (err) => {
      throw err;
    });

    archive.pipe(outputStream);
    archive.directory(PLUGIN_DIR, 'mankusa-printing-wordpress-plugin');
    await archive.finalize();

  } catch (err) {
    console.error('Error during packaging:', err);
    process.exit(1);
  }
}

main();
