# RTL Everywhere

**Clearer direction. Easier reading. One click.**

A desktop Brave and Chrome extension for right-to-left paragraph direction and right alignment, with an optional smart mode for mixed Arabic and English pages.

[Download v1.1.0](RTL-Everywhere-1.1.0.zip?raw=true) · [العربية](README.md) · [Privacy](PRIVACY.md)

## Install in four steps

1. Download the ZIP above and extract it to a permanent folder.
2. Open `brave://extensions` or `chrome://extensions`.
3. Enable **Developer mode**, then click **Load unpacked**.
4. Select the extracted folder containing **manifest.json**. The extension starts automatically on supported web pages.

Keep the folder after installation. Select the extracted folder, not the ZIP file. No build tools or Node.js required.

## Use

Open **Extensions 🧩 → RTL Everywhere**. Pin it for quick access.

- **Enable:** turn the extension on or off globally.
- **Enable and apply now:** enable RTL and inject it into the current tab without reloading the page.
- **Smart mode:** use RTL for paragraphs containing Arabic or Hebrew characters; leave English-only paragraphs LTR.
- **Force page layout RTL:** optionally change the body direction. This can reposition controls; leave it off if you only want text alignment.

By default, prose paragraphs use RTL and right alignment, smart mode is off, and forced page layout is off. Settings apply across sites.

The extension watches inserted and streamed text, handles nested inline markup, and supports permitted frames and discovered open shadow roots. Code blocks, inputs, and known editors are excluded from direct text processing. Original characters and word order are not rewritten.

## Troubleshooting and limitations

If a page does not change, open the popup and click **تفعيل وتطبيق على الصفحة الآن**. Check that the extension is enabled and allowed on that site. Reloading the tab can help after installation or updates.

Browser settings pages, extension stores, and other protected pages cannot be modified. Text in images, Canvas, and the built-in PDF viewer is not supported. Closed shadow roots are not supported. Some site-specific layouts may need additional handling; universal compatibility is not guaranteed.

This is a manually installed desktop extension, not a Chrome Web Store listing. These instructions do not apply to Brave or Chrome mobile. Managed devices may restrict extension installation.

## Update

Download the newer version, replace the extension files in the same permanent folder, and click **Reload ↻** on its card at the extensions page. Use the popup's immediate-apply button for tabs that have not updated.

## Privacy

No analytics, advertisements, or network requests to collect page content are included. Preferences use `chrome.storage.sync` and may sync according to the browser's account configuration. [Details](PRIVACY.md).

## Source

The repository root is the loadable source. `RTL-Everywhere-1.1.0.zip` contains just the extension files for quick installation. You can also download the whole repository and load its extracted folder. Report issues through this repository's **Issues** tab, including the site and expected/actual behavior. Avoid sharing personal or private page content.
