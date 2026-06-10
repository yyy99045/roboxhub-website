import Link from "next/link";

const SOLUTIONS = [
  { title: "Education", desc: "高校课程、实验室采购、机器人教学与科研项目", ctas: ["获取教育方案", "申请教育折扣"] },
  { title: "Research Lab", desc: "研究机构技术验证与实验平台搭建", ctas: ["咨询方案", "技术沟通"] },
  { title: "Robotics Startup", desc: "创业团队原型开发与小批量交付", ctas: ["提交需求", "咨询方案"] },
  { title: "Industrial Prototype", desc: "企业产品原型开发与方案验证", ctas: ["提交 RFQ", "技术评估"] },
  { title: "3D Vision Integration", desc: "3D 视觉系统集成与边缘 AI 部署", ctas: ["了解更多"] },
  { title: "Embodied AI Lab", desc: "具身智能实验平台搭建与数据采集方案", ctas: ["了解更多"] },
  { title: "Custom RFQ", desc: "批量采购与定制化集成需求", ctas: ["提交 RFQ"] },
];

export default function SolutionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900">解决方案</h1>
      <p className="mt-3 text-lg text-gray-500 max-w-2xl">面向高校、研究机构、企业团队的成套方案。</p>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SOLUTIONS.map((s) => (
          <div key={s.title} className="kit-card p-6 border border-gray-200 rounded-xl">
            <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{s.desc}</p>
            <div className="flex flex-wrap gap-2">
              {s.ctas.map((c) => (
                <Link key={c} href="/rfq" className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1.5 rounded-md hover:bg-blue-100">{c}</Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
