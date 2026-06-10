import Link from "next/link";

const KITS = [
  { title: "3D Vision Starter Kit", desc: "3D 视觉入门套件", level: "入门", hw: "深度相机 + USB 线材 + 支架" },
  { title: "Jetson Robot Vision Kit", desc: "Jetson + 深度相机视觉套件", level: "进阶", hw: "Jetson Orin + 深度相机 + 电源" },
  { title: "ROS2 Mobile Robot Kit", desc: "ROS2 移动机器人开发套件", level: "进阶", hw: "移动底盘 + LiDAR + Jetson + 电池" },
  { title: "Robotic Arm Vision Grasping Kit", desc: "机械臂视觉抓取套件", level: "高级", hw: "6-DOF 机械臂 + 深度相机 + 夹爪" },
  { title: "Embodied AI Lab Kit", desc: "具身智能实验套件", level: "高级", hw: "双臂机器人 + 深度相机 + 灵巧手" },
  { title: "Education Robotics Kit", desc: "高校机器人教学套件", level: "入门-进阶", hw: "桌面机械臂 + 相机 + 课程包" },
];

const RESOURCES = [
  { icon: "⚡", label: "Quick Start", href: "https://wiki.roboxhub.ai/getting-started" },
  { icon: "📥", label: "SDK Download", href: "https://wiki.roboxhub.ai/downloads" },
  { icon: "✅", label: "Compatibility List", href: "https://wiki.roboxhub.ai/compatibility" },
  { icon: "🎯", label: "Demo Library", href: "https://wiki.roboxhub.ai/demo-guides" },
  { icon: "❓", label: "FAQ", href: "https://wiki.roboxhub.ai/getting-started/faq" },
  { icon: "🛠️", label: "Troubleshooting", href: "https://wiki.roboxhub.ai/troubleshooting" },
];

const DEMOS = [
  { name: "深度相机点云可视化", desc: "实时 3D 点云显示", tags: ["3D Vision", "Beginner"] },
  { name: "Jetson 目标检测", desc: "边缘 AI 实时检测", tags: ["Edge AI", "Jetson"] },
  { name: "ROS2 接入深度相机", desc: "ROS2 感知 Pipeline", tags: ["ROS2", "Camera"] },
  { name: "Mobot 室内建图", desc: "SLAM + LiDAR 建图", tags: ["SLAM", "Mobile Robot"] },
  { name: "机械臂视觉抓取", desc: "完整抓取闭环", tags: ["Robot Arm", "Grasping"] },
  { name: "LiDAR 接入 ROS2", desc: "激光雷达集成", tags: ["LiDAR", "ROS2"] },
];

export default function Home() {
  return (
    <>
      {/* === Section 1: Hero === */}
      <section className="hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
            RoboxHub<br />
            <span className="text-blue-600">具智未来研习社</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            面向 3D 视觉、AI 机器人与具身智能开发者的开放社区。<br />
            产品选型 · Wiki 文档 · 开源 Demo · 开发者社区
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="https://wiki.roboxhub.ai/getting-started" className="px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
              开始学习
            </Link>
            <Link href="https://wiki.roboxhub.ai/demo-guides" className="px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              浏览 Demo
            </Link>
            <Link href="/hardware" className="px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              查看产品套件
            </Link>
            <a href="https://forum.roboxhub.ai" target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              加入社区
            </a>
          </div>
        </div>
      </section>

      {/* === Section 2: Core Entry === */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: "Hardware 产品中心", href: "/hardware", emoji: "🖥️" },
              { label: "Wiki 技术文档", href: "https://wiki.roboxhub.ai", emoji: "📚" },
              { label: "Forum 社区论坛", href: "https://forum.roboxhub.ai", emoji: "💬" },
              { label: "Learn 课程中心", href: "/learn", emoji: "🎓" },
              { label: "Projects 项目案例", href: "https://wiki.roboxhub.ai/demo-guides", emoji: "🚀" },
              { label: "GitHub 开源代码", href: "https://github.com/roboxhub", emoji: "💻" },
            ].map((item) => (
              <Link key={item.label} href={item.href}
                className="card-hover flex flex-col items-center text-center gap-2 no-underline"
                {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className="text-3xl">{item.emoji}</span>
                <span className="text-sm font-medium text-gray-900">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* === Section 3: Solution Kits === */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">重点解决方案</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">从入门到进阶的开发套件</p>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl">按项目任务组织产品组合，帮您快速找到适合自己的方案。</p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {KITS.map((kit) => (
              <div key={kit.title} className="kit-card p-6 border border-gray-200 rounded-xl">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">{kit.title}</h3>
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">{kit.level}</span>
                </div>
                <p className="text-sm text-gray-500 mb-2">{kit.desc}</p>
                <p className="text-xs text-gray-400">{kit.hw}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Section 4: Hot Demos === */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">热门 Demo</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">可复现的机器人项目</p>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl">每个 Demo 包含完整硬件清单、代码与运行说明。</p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DEMOS.map((demo) => (
              <div key={demo.name} className="demo-card p-5 border border-gray-200 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-1">{demo.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{demo.desc}</p>
                <div className="flex gap-2">
                  {demo.tags.map((t) => (
                    <span key={t} className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="https://wiki.roboxhub.ai/demo-guides" className="text-sm font-medium text-blue-600 hover:text-blue-700">
              查看全部 Demo →
            </Link>
          </div>
        </div>
      </section>

      {/* === Section 5: Developer Resources === */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">开发者资源</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">能马上用</p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {RESOURCES.map((r) => (
              <a key={r.label} href={r.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-blue-200 hover:shadow-sm transition-all no-underline"
              >
                <span className="text-2xl">{r.icon}</span>
                <span className="text-sm font-medium text-gray-900">{r.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* === Section 6: Community === */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">教育合作</h2>
              <p className="text-2xl font-bold text-gray-900 mt-2">For Education</p>
              <p className="text-gray-500 mt-3">高校课程、实验室采购、机器人教学、科研项目</p>
              <Link href="/solutions" className="inline-block mt-4 px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                获取教育方案
              </Link>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">企业合作</h2>
              <p className="text-2xl font-bold text-gray-900 mt-2">For Business</p>
              <p className="text-gray-500 mt-3">产品原型开发、机器人方案验证、小批量采购、定制化集成</p>
              <div className="flex gap-3 mt-4">
                <Link href="/rfq" className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                  提交 RFQ
                </Link>
                <a href="mailto:info@roboxhub.ai" className="px-5 py-2.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
                  联系顾问
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Section 7: Newsletter === */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">订阅 Newsletter</h2>
          <p className="mt-2 text-gray-500">获取新品、教程、Demo 与活动通知</p>
          <form className="mt-6 flex gap-3 max-w-md mx-auto">
            <input type="email" placeholder="输入邮箱地址" className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            <button type="submit" className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">订阅</button>
          </form>
        </div>
      </section>

      {/* === Section 8: CTA === */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">准备好开始机器人开发了吗？</h2>
          <p className="mt-2 text-blue-100">从 Wiki 入门，或者直接与团队沟通需求。</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="https://wiki.roboxhub.ai/getting-started" className="px-6 py-3 text-sm font-medium text-blue-600 bg-white rounded-lg hover:bg-gray-100 transition-colors">
              开始学习
            </Link>
            <Link href="/rfq" className="px-6 py-3 text-sm font-medium text-white border border-white rounded-lg hover:bg-blue-700 transition-colors">
              提交需求
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
