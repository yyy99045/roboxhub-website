import Link from "next/link";

export default function HardwarePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900">Hardware 产品中心</h1>
      <p className="mt-3 text-lg text-gray-500 max-w-2xl">
        按开发任务组织的机器人硬件选型中心，不只展示单品，而是展示可跑通的组合。
      </p>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "3D 相机", desc: "深度相机、RGB-D、双目、iTOF、结构光", count: "14+" },
          { title: "LiDAR", desc: "单线/多线激光雷达", count: "18+" },
          { title: "AI 计算平台", desc: "Jetson / Raspberry Pi / RDK / x86", count: "10+" },
          { title: "机械臂", desc: "协作臂、桌面臂、教学臂", count: "5+" },
          { title: "移动机器人", desc: "差速/麦克纳姆/阿克曼底盘", count: "5+" },
          { title: "电机与驱动", desc: "BLDC、伺服、H-Bridge、关节模组", count: "5+" },
          { title: "传感器", desc: "环境/距离/力/触觉/生物识别", count: "15+" },
          { title: "通信模块", desc: "LoRa / 以太网 / MQTT / CAN", count: "8+" },
          { title: "电源与配件", desc: "电池、电源、线材、支架、转接板", count: "10+" },
        ].map((cat) => (
          <div key={cat.title} className="card-hover">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-gray-900">{cat.title}</h3>
              <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{cat.count}</span>
            </div>
            <p className="text-sm text-gray-500">{cat.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
        <p className="text-sm text-gray-600">
          📋 完整产品型号与技术链接请查看 <Link href="https://wiki.roboxhub.ai/product-documentation/product-index" className="text-blue-600 font-medium hover:underline">产品资料索引</Link>。
        </p>
      </div>
    </div>
  );
}
