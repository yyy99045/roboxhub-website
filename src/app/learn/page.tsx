import Link from "next/link";

export default function LearnPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900">Learn 课程中心</h1>
      <p className="mt-3 text-lg text-gray-500 max-w-2xl">从免费入门到高校课程包，体系化的机器人视觉学习路径。</p>

      {/* 免费课程 */}
      <section className="mt-12">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">🎓 免费入门课程</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "3D 视觉相机入门", "Jetson 机器人开发入门", "ROS2 机器人开发基础",
            "OpenCV 深度图处理入门", "机械臂视觉抓取入门", "移动机器人导航入门",
          ].map((c) => (
            <div key={c} className="card-hover"><p className="text-sm font-medium text-gray-900">{c}</p></div>
          ))}
        </div>
      </section>

      {/* Workshop */}
      <section className="mt-12">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">🔧 Workshop</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {["Jetson + 深度相机工作坊", "ROS2 移动机器人导航工作坊", "机械臂视觉抓取工作坊", "具身智能数据采集工作坊"].map((c) => (
            <div key={c} className="card-hover"><p className="text-sm font-medium text-gray-900">{c}</p></div>
          ))}
        </div>
      </section>

      {/* 高校课程包 */}
      <section className="mt-12">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">🏫 高校课程包</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {["机器人视觉实验课程包", "ROS2 移动机器人实验课程包", "AI机器人综合实践课程包"].map((c) => (
            <div key={c} className="card-hover"><p className="text-sm font-medium text-gray-900">{c}</p></div>
          ))}
        </div>
      </section>

      <div className="mt-12 p-6 bg-yellow-50 rounded-xl border border-yellow-100">
        <p className="text-sm text-gray-600">📌 课程资料和实验手册正在制作中，敬请期待。如需高校合作，请联系 info@roboxhub.ai。</p>
      </div>
    </div>
  );
}
