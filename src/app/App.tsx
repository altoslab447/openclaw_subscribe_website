import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  const plans = [
    {
      name: "LITE",
      price: "9.9",
      specs: "1 vCPU / 2 GB RAM",
      description: "Personal assistant · Telegram bots, basic crawlers, everyday conversations",
      features: [
        "24/7 uptime",
        "Daily backups",
        "Basic support",
        "Single agent",
      ],
    },
    {
      name: "PRO",
      price: "19.9",
      specs: "3 vCPU / 4 GB RAM",
      description: "Trader-optimized · Polymarket auto-trading, 24h monitoring, multi-agent orchestration",
      features: [
        "Priority support",
        "Monitoring dashboard",
        "Multi-agent parallel",
        "Auto-scaling",
        "API priority access",
      ],
      popular: true,
    },
    {
      name: "ULTIMATE",
      price: "39.9",
      specs: "4 vCPU / 8 GB RAM",
      description: "Power developer · Large-scale backtesting, agent teams, private Web4 server",
      features: [
        "Dedicated support",
        "Custom configuration",
        "Unlimited agents",
        "Instant failover",
        "Performance tuning",
        "White-glove deployment",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Animated gradient background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-violet-400/30 to-fuchsia-400/30 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, -100, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, 100, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
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
              Sign In
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
              Enterprise-grade cloud infrastructure. Deploy in 60 seconds.
              Run your AI agents 24/7 with zero downtime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* API Setup */}
      <section className="px-6 lg:px-8 py-24 border-t border-black/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <div className="text-sm font-medium text-black/40 mb-2">STEP 1</div>
            <h2 className="text-5xl font-bold tracking-tight mb-4">Get Your API Keys</h2>
            <p className="text-lg text-black/60">Choose your preferred AI model provider</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Google Gemini */}
            <div>
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold">Google Gemini</h3>
                  <Badge variant="outline" className="border-black/20">Recommended</Badge>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="text-black/30 font-mono text-sm pt-1">01</div>
                    <div className="flex-1">
                      <p className="text-black/80">Go to <span className="underline">Google AI Studio</span></p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-black/30 font-mono text-sm pt-1">02</div>
                    <div className="flex-1">
                      <p className="text-black/80">Click <span className="font-medium">"Get API Key"</span> in the left sidebar</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-black/30 font-mono text-sm pt-1">03</div>
                    <div className="flex-1">
                      <p className="text-black/80">Create a new project and generate your key</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-black/[0.02] border border-black/5 rounded-lg">
                <p className="text-sm text-black/60 leading-relaxed">
                  <span className="font-medium text-black">Completely free</span> · Gemini 2.0 Flash, 15 requests/minute
                </p>
              </div>
            </div>

            {/* OpenAI */}
            <div>
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold">OpenAI GPT-4</h3>
                  <Badge variant="outline" className="border-black/20">Professional</Badge>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="text-black/30 font-mono text-sm pt-1">01</div>
                    <div className="flex-1">
                      <p className="text-black/80">Go to <span className="underline">OpenAI Platform</span></p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-black/30 font-mono text-sm pt-1">02</div>
                    <div className="flex-1">
                      <p className="text-black/80">Create an account — new users receive $5 in free credits</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-black/30 font-mono text-sm pt-1">03</div>
                    <div className="flex-1">
                      <p className="text-black/80">Generate an API key from your dashboard</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-black/[0.02] border border-black/5 rounded-lg">
                <p className="text-sm text-black/60 leading-relaxed">
                  <span className="font-medium text-black">Requires a credit card</span> · We recommend starting with Gemini
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
            <h2 className="text-5xl font-bold tracking-tight mb-4">Choose Your Plan</h2>
            <p className="text-lg text-black/60">Scale flexibly, upgrade anytime</p>
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
                <div
                  className={`p-8 border ${
                    plan.popular
                      ? "border-black bg-white shadow-2xl shadow-black/5"
                      : "border-black/10 bg-white hover:border-black/20"
                  } transition-all duration-200 rounded-2xl h-full flex flex-col`}
                >
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
                        ? "bg-black text-white hover:bg-black/90"
                        : "bg-black/5 text-black hover:bg-black/10"
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
          <h2 className="text-6xl font-bold tracking-tight mb-8">Ready to deploy?</h2>
          <p className="text-xl text-black/60 mb-12 max-w-2xl mx-auto">
            Have your API key ready. Configure your cloud environment in under 60 seconds.
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
