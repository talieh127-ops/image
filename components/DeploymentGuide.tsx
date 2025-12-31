
import React from 'react';

const DeploymentGuide: React.FC = () => {
  return (
    <div className="bg-slate-900 border border-indigo-500/30 rounded-2xl p-6 mt-12 mb-20 max-w-4xl mx-auto shadow-2xl shadow-indigo-500/10 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"></div>
      
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-indigo-500 p-2 rounded-lg">
          <i className="fas fa-rocket text-white"></i>
        </div>
        <h2 className="text-2xl font-bold text-white">راهنمای انتشار و گیت‌هاب</h2>
      </div>

      <div className="space-y-8 text-slate-300 leading-relaxed text-right" dir="rtl">
        
        {/* بخش گیت هاب */}
        <section className="bg-slate-800/40 p-5 rounded-xl border border-slate-700">
          <h3 className="text-indigo-400 font-bold text-lg mb-3 flex items-center gap-2 justify-end">
            آموزش آپلود در گیت‌هاب (GitHub)
            <i className="fab fa-github text-white"></i>
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-sm text-slate-400">
            <li>یک اکانت در <strong>github.com</strong> بسازید.</li>
            <li>یک مخزن (Repository) جدید با نام دلخواه ایجاد کنید.</li>
            <li>در ترمینال پوشه پروژه، دستور <code>git init</code> را بزنید.</li>
            <li>فایل‌ها را با <code>git add .</code> اضافه کنید.</li>
            <li>کامیت کنید: <code>git commit -m "first commit"</code></li>
            <li>لینک مخزن گیت‌هاب را متصل کنید (دستور <code>git remote add origin ...</code> را از سایت کپی کنید).</li>
            <li>در نهایت <code>git push -u origin main</code> را بزنید.</li>
          </ol>
        </section>

        {/* بخش ورسل */}
        <section>
          <h3 className="text-indigo-400 font-semibold text-lg mb-2">اتصال به Vercel برای انتشار رایگان</h3>
          <p className="text-sm">
            وقتی کد در گیت‌هاب باشد، انتشار آن بسیار راحت است:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-slate-400">
            <li>وارد سایت <strong>vercel.com</strong> شوید و با گیت‌هاب لاگین کنید.</li>
            <li>پروژه خود را <strong>Import</strong> کنید.</li>
            <li><strong>خیلی مهم:</strong> در بخش <strong>Environment Variables</strong>، متغیری با نام <code>API_KEY</code> بسازید و کلید خود را آنجا قرار دهید.</li>
            <li>دکمه <strong>Deploy</strong> را بزنید. تمام!</li>
          </ul>
        </section>

        <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-xl">
          <h3 className="text-amber-400 font-bold mb-2">⚠️ نکته امنیتی:</h3>
          <p className="text-sm">
            هرگز کلید API را مستقیماً در فایل <code>geminiService.ts</code> ننویسید. ما در این پروژه از <code>process.env.API_KEY</code> استفاده کردیم تا امنیت شما حفظ شود و کلیدتان توسط دیگران دزدیده نشود.
          </p>
        </div>

      </div>
    </div>
  );
};

export default DeploymentGuide;
