# الخصوصية / Privacy

Applies to RTL Everywhere v1.1.0.

## العربية

تعالج الإضافة نصوص الصفحة داخل المتصفح لتحديد العناصر التي تحتاج تغيير اتجاهها ومحاذاتها. لا يتضمن المصدر إرسال محتوى الصفحات أو سجل التصفح إلى خادم خارجي، ولا يتضمن أدوات تحليلات أو إعلانات.

تُحفظ ثلاثة تفضيلات باستخدام واجهة المتصفح `chrome.storage.sync`: التفعيل، والوضع الذكي، وفرض اتجاه تخطيط الصفحة. قد يقوم المتصفح بمزامنة هذه التفضيلات حسب إعدادات حسابك؛ لذلك لا يعني استخدام الإضافة أن كل إعداداتها تبقى محلية بالضرورة.

الصلاحيات المستخدمة:

- `storage`: حفظ تفضيلات الإضافة.
- `activeTab` و`scripting`: تطبيق التغيير فورًا على التبويب المفتوح.
- `<all_urls>`: إتاحة تعديل اتجاه النص على المواقع المسموح بها، بما فيها التبويبات المفتوحة مسبقًا. الوصول إلى الصفحة مطلوب لمعالجة النص؛ لا يعني ذلك إرسال النص إلى جهة أخرى.

يمكنك إيقاف الإضافة، أو تقييد وصولها إلى المواقع، أو إزالتها من صفحة الإضافات في المتصفح. ينطبق هذا البيان على مصدر الإضافة المنشور؛ خدمات GitHub والمتصفح لها سياسات منفصلة.

## English

The extension processes page text in the browser to identify elements whose direction and alignment should change. Its source contains no analytics, advertisements, or requests that send page content or browsing history to an external server.

Three preferences are stored with `chrome.storage.sync`: enabled, smart mode, and forced page layout direction. The browser may sync these preferences according to the user's account settings; they are not necessarily local-only.

Permissions:

- `storage`: save extension preferences.
- `activeTab` and `scripting`: apply changes immediately to an open tab.
- `<all_urls>`: modify text direction on permitted sites, including previously opened tabs. Page access is needed to process text; it does not imply transmitting that text.

You can disable the extension, restrict site access, or uninstall it through your browser's extensions page. This notice describes the published extension source. GitHub and the browser have their own separate policies.
