# Privacy Notice

Applies to RTL Everywhere v1.1.1.

## Page content

The extension processes page text in the browser to identify elements whose direction and alignment should change. Its source contains no analytics, advertisements, or requests that send page content or browsing history to an external server.

## Preferences

Three preferences are stored with `chrome.storage.sync`: whether the extension is enabled, smart mode, and forced page layout direction. The browser may sync these preferences according to your account settings; they are not necessarily local-only.

## Permissions

| Permission | Purpose |
|---|---|
| `storage` | Save extension preferences. |
| `activeTab` and `scripting` | Apply changes immediately to an open tab. |
| `<all_urls>` | Modify text direction on permitted sites, including previously opened tabs. |

Page access is needed to process text. It does not imply transmitting that text to another service.

## Your controls

You can disable the extension, restrict its site access, or uninstall it through your browser's extensions page.

This notice describes the published extension source. GitHub and your browser have their own separate policies. For questions, use the repository's Issues tab without including sensitive information.
