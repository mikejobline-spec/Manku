export function getAssetUrl(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  // If running inside WordPress, a global variable can provide the plugin base URL
  const wpBaseUrl = (window as any).mankusaPluginUrl;
  if (wpBaseUrl) {
    // Strip leading slash if present
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    return `${wpBaseUrl}${cleanPath}`;
  }
  return path;
}
