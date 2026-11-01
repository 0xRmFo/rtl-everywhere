<div align="center">

![RTL Everywhere](banner.svg)

# RTL Everywhere

**Right-to-left reading, made simple.**

Instant RTL text alignment for desktop Brave and Chrome, with smart Arabic/English mode and code protection.

[**Download v1.1.1**](RTL-Everywhere-1.1.1.zip?raw=true) · [Privacy](PRIVACY.md) · [Changelog](CHANGELOG.md)

</div>

## Install in a minute

1. **[Download the extension](RTL-Everywhere-1.1.1.zip?raw=true)** and extract the ZIP to a permanent folder.
2. Open **`brave://extensions`** or **`chrome://extensions`**.
3. Enable **Developer mode**, then click **Load unpacked**.
4. Select the extracted folder containing **`manifest.json`**. Done! RTL starts automatically on supported web pages.

> Keep the extracted folder after installation. Select the folder, not the ZIP file. No Node.js, terminal commands, or build tools required.

## One-click controls

Open **Extensions → RTL Everywhere**. Pin it to your toolbar for quick access.

| Control | What it does |
|---|---|
| **Enable extension** | Turn RTL processing on or off across supported sites. |
| **Enable and apply now** | Enable the extension and apply it to the current tab without reloading the page. |
| **Smart mode** | Use RTL for paragraphs containing Arabic or Hebrew characters; keep English-only paragraphs LTR. |
| **Force page layout RTL** | Also change the body's direction. Optional: this may reposition some controls. |

By default, prose uses RTL direction and right alignment, **Smart mode** is off, and **Force page layout RTL** is off. Settings apply globally, not per site.

## Features

- Automatic processing on new pages and injection into existing tabs after installation or updates.
- Support for text added later, including streamed responses.
- Paragraph alignment through nested links, spans, and bold text.
- Code blocks, inputs, and known editing surfaces excluded from direct processing.
- Processing in permitted frames and discovered open shadow roots.
- Display-only changes: original text characters and word order are not rewritten or translated.

## Troubleshooting

**The page did not change:** open the extension and click **Enable and apply now**. Check that it is enabled and allowed to access the site. Reloading the tab can help after installation or updates.

**Controls moved:** turn off **Force page layout RTL**.

**English paragraphs should stay left-to-right:** turn on **Smart mode**.

## Update

Download the newer version, replace the extension files in the **same permanent folder**, and click **Reload** on the extension's card at the extensions page. Use **Enable and apply now** for tabs that have not updated.

## Compatibility

Designed for **desktop Brave and Chrome**. This is a manually installed extension, not a Chrome Web Store listing. These installation steps do not apply to Brave or Chrome mobile. Managed devices may restrict extension installation.

Browser settings, extension stores, and other protected pages cannot be modified. Text inside images, Canvas, and the built-in PDF viewer is not supported. Closed shadow roots are not supported. Some site-specific layouts may need additional handling; universal compatibility is not guaranteed.

## Privacy

No analytics, advertisements, or requests that collect page content are included. Preferences use `chrome.storage.sync` and may sync according to your browser's account settings. [Read the privacy notice](PRIVACY.md).

## Source and feedback

The repository root is the loadable source. **`RTL-Everywhere-1.1.1.zip`** contains only the extension files for quick installation. You can also download the entire repository and load its extracted folder.

Found a problem? Open an **Issue** with the site name, expected behavior, and actual behavior. Avoid sharing private conversations or personal information.
