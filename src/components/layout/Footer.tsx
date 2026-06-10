import Link from "next/link";

const footerLinks = [
  { label: "Wiki 知识库", href: "https://wiki.roboxhub.ai" },
  { label: "论坛", href: "https://forum.roboxhub.ai" },
  { label: "GitHub", href: "https://github.com/roboxhub" },
  { label: "Hardware", href: "/hardware" },
  { label: "Learn", href: "/learn" },
  { label: "Solutions", href: "/solutions" },
  { label: "RFQ", href: "/rfq" },
  { label: "关于我们", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-gray-900 mb-3">
              <span className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center text-white text-xs font-bold">R</span>
              RoboxHub
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              3D 视觉、AI 机器人与具身智能<br />开发者社区
            </p>
          </div>
          {["资源", "产品", "合作"].map((title, i) => (
            <div key={title}>
              <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">{title}</h3>
              <ul className="space-y-2">
                {footerLinks.slice(i * 3, (i + 1) * 3).map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("http") ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-gray-700">
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-sm text-gray-500 hover:text-gray-700">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-6 border-t border-gray-200 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} RoboxHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
