# Mankusa Printing & Publishing - WordPress Plugin

This WordPress plugin embeds the complete, high-fidelity Mankusa Printing & Publishing website experience directly on any page or post of your WordPress site.

## Installation Instructions

1. **Download the Plugin ZIP**: Download the file `mankusa-printing-plugin.zip` from the root folder.
2. **Upload to WordPress**:
   - Log in to your WordPress dashboard.
   - Go to **Plugins** -> **Add New Plugin**.
   - Click **Upload Plugin** at the top.
   - Choose the downloaded `mankusa-printing-plugin.zip` file and click **Install Now**.
3. **Activate**: After installation is complete, click **Activate Plugin**.

## How to Use the Embed

Once activated, you can place the complete Mankusa Printing & Publishing experience on any page or post:

### Gutenberg Block Editor
1. Edit any page or post.
2. Click the **+** (Add Block) button.
3. Search for **Shortcode** and insert it.
4. Paste the following shortcode:
   ```text
   [mankusa_printing_app]
   ```
5. Save or Publish the page.

### Classic Editor or Widget
Simply copy and paste the shortcode `[mankusa_printing_app]` inside the editor text area or inside a "Text" / "Custom HTML" widget.

## Features
- **Asset Resolution**: All images are bundled inside the plugin and load dynamically from the correct WordPress directory.
- **Visual Isolation**: Styled using fully scoped Tailwind CSS so that it does not leak or conflict with your parent WordPress theme styles.
- **Fast Performance**: Fully optimized React bundle compiled on the fast Vite compiler engine.
