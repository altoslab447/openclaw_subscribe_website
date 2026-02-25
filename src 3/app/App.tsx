import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  const plans = [
    {
      name: "LITE",
      price: "9.9",
      specs: "1 vCPU / 2GB RAM",
      description: "個人助理型 • Telegram 機器人、基礎爬蟲、日常對話",
      features: [
        "24/7 運行",
        "每日備份",
        "基礎支援",
        "單一代理"
      ]
    },
    {
      name: "PRO",
      price: "19.9",
      specs: "3 vCPU / 4GB RAM",
      description: "交易員專用 • Polymarket 自動下單、24h 監控、多子代理協作",
      features: [
        "優先支援",
        "監控面板",
        "多代理並行",
        "自動擴展",
        "API 優先存取"
      ],
      popular: true
    },
    {
      name: "ULTIMATE",
      price: "39.9",
      specs: "4 vCPU / 8GB RAM",
      description: "重度開發型 • 大規模數據回測、Agent 團隊、個人 Web4 伺服器",
      features: [
        "專屬客服",
        "自訂配置",
        "無限代理",
        "即時備援",
        "效能優化",
        "白手套部署"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Animated gradient background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-violet-400/30 to-fuchsia-400/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Header */}
      <header className="sticky top-0 border-b border-black/5 z-50 bg-white/70 backdrop-blur-xl shadow-sm shadow-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold tracking-tight">LOBSTER CLOUD</div>
              <div className="text-xs text-black/40 mt-0.5">by Altos Labs</div>
            </div>
            <Button variant="ghost" className="text-black hover:bg-black/5">
              Sign in
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-8 bg-black text-white border-0 px-3 py-1">
              2026 WEB4 EDITION
            </Badge>
            <h1 className="text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-none">
              AI AGENT
              <br />
              CLOUD HOSTING
            </h1>
            <p className="text-xl text-black/60 max-w-2xl">
              專業級雲端基礎設施，60 秒完成部署，讓您的 AI 代理 24/7 穩定運行
            </p>
          </motion.div>
        </div>
      </section>

      {/* API Setup */}
      <section className="px-6 lg:px-8 py-24 border-t border-black/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <div className="text-sm font-medium text-black/40 mb-2">STEP 1</div>
            <h2 className="text-5xl font-bold tracking-tight mb-4">獲取 API 鑰匙</h2>
            <p className="text-lg text-black/60">選擇您偏好的 AI 模型提供商</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Google Gemini */}
            <div>
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold">Google Gemini</h3>
                  <Badge variant="outline" className="border-black/20">推薦</Badge>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="text-black/30 font-mono text-sm pt-1">01</div>
                    <div className="flex-1">
                      <p className="text-black/80">前往 <span className="underline">Google AI Studio</span></p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-black/30 font-mono text-sm pt-1">02</div>
                    <div className="flex-1">
                      <p className="text-black/80">點擊左側「Get API Key」</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-black/30 font-mono text-sm pt-1">03</div>
                    <div className="flex-1">
                      <p className="text-black/80">建立新專案並生成 Key</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-black/[0.02] border border-black/5 rounded-lg">
                <p className="text-sm text-black/60 leading-relaxed">
                  <span className="font-medium text-black">完全免費</span> • Gemini 2.0 Flash，每分鐘 15 次請求
                </p>
              </div>
            </div>

            {/* OpenAI */}
            <div>
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold">OpenAI GPT-4</h3>
                  <Badge variant="outline" className="border-black/20">專業</Badge>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="text-black/30 font-mono text-sm pt-1">01</div>
                    <div className="flex-1">
                      <p className="text-black/80">前往 <span className="underline">OpenAI Platform</span></p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-black/30 font-mono text-sm pt-1">02</div>
                    <div className="flex-1">
                      <p className="text-black/80">註冊帳號（新用戶贈送 $5）</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-black/30 font-mono text-sm pt-1">03</div>
                    <div className="flex-1">
                      <p className="text-black/80">於控制台建立 API Key</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-black/[0.02] border border-black/5 rounded-lg">
                <p className="text-sm text-black/60 leading-relaxed">
                  <span className="font-medium text-black">需綁定信用卡</span> • 建議先用 Gemini 測試
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 lg:px-8 py-24 border-t border-black/5 bg-black/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="text-sm font-medium text-black/40 mb-2">STEP 2</div>
            <h2 className="text-5xl font-bold tracking-tight mb-4">選擇方案</h2>
            <p className="text-lg text-black/60">靈活擴展，隨時升級</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-8">
                    <Badge className="bg-black text-white border-0">Most Popular</Badge>
                  </div>
                )}
                <div className={`p-8 border ${
                  plan.popular 
                    ? 'border-black bg-white shadow-2xl shadow-black/5' 
                    : 'border-black/10 bg-white hover:border-black/20'
                } transition-all duration-200 rounded-2xl h-full flex flex-col`}>
                  <div className="mb-8">
                    <div className="text-sm font-medium text-black/40 mb-4">{plan.name}</div>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-6xl font-bold tracking-tight">${plan.price}</span>
                      <span className="text-black/40">/mo</span>
                    </div>
                    <div className="text-sm text-black/50 font-mono mb-4">{plan.specs}</div>
                    <p className="text-sm text-black/60 leading-relaxed">{plan.description}</p>
                  </div>

                  <div className="flex-1 mb-8">
                    <div className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <Check className="size-4 text-black flex-shrink-0" />
                          <span className="text-sm text-black/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className={`w-full ${
                      plan.popular
                        ? 'bg-black text-white hover:bg-black/90'
                        : 'bg-black/5 text-black hover:bg-black/10'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-black/40">
              All plans include SSL, automatic backups, DDoS protection, and 99.9% uptime SLA
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-8 py-32 border-t border-black/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-bold tracking-tight mb-8">
            Ready to deploy?
          </h2>
          <p className="text-xl text-black/60 mb-12 max-w-2xl mx-auto">
            準備好您的 API Key，60 秒內完成雲端環境配置
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black text-white hover:bg-black/90 px-8">
              Start Now
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-black/20 hover:bg-black/5 px-8">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="font-medium mb-4 text-sm text-black/40">Product</div>
              <ul className="space-y-3 text-sm text-black/60">
                <li><a href="#" className="hover:text-black">Pricing</a></li>
                <li><a href="#" className="hover:text-black">Documentation</a></li>
                <li><a href="#" className="hover:text-black">API Reference</a></li>
              </ul>
            </div>
            <div>
              <div className="font-medium mb-4 text-sm text-black/40">Company</div>
              <ul className="space-y-3 text-sm text-black/60">
                <li><a href="#" className="hover:text-black">About</a></li>
                <li><a href="#" className="hover:text-black">Blog</a></li>
                <li><a href="#" className="hover:text-black">Careers</a></li>
              </ul>
            </div>
            <div>
              <div className="font-medium mb-4 text-sm text-black/40">Support</div>
              <ul className="space-y-3 text-sm text-black/60">
                <li><a href="#" className="hover:text-black">Help Center</a></li>
                <li><a href="#" className="hover:text-black">Contact</a></li>
                <li><a href="#" className="hover:text-black">Status</a></li>
              </ul>
            </div>
            <div>
              <div className="font-medium mb-4 text-sm text-black/40">Legal</div>
              <ul className="space-y-3 text-sm text-black/60">
                <li><a href="#" className="hover:text-black">Privacy</a></li>
                <li><a href="#" className="hover:text-black">Terms</a></li>
                <li><a href="#" className="hover:text-black">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-black/5">
            <div>
              <div className="font-bold tracking-tight mb-1">LOBSTER CLOUD</div>
              <div className="text-xs text-black/40">by Altos Labs</div>
            </div>
            <div className="text-sm text-black/40">
              © 2026 Altos Labs. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}