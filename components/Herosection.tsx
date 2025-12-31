import {
  ArrowRightIcon,
  Calendar,
  Circle,
  CreditCard,
  Store,
  Users,
  Zap,
} from "lucide-react";
import { AuroraText } from "./ui/aurora-text";
import { MagicCard } from "./ui/magic-card";
import { Progress } from "./ui/progress";
import { AnimatedShinyText } from "./ui/animated-shiny-text";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <div className="min-h-screen  overflow-hidden">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start max-w-7xl mx-auto">
          <div className="flex-1 space-y-8 lg:space-y-10">
            <div className="flex flex-wrap gap-3">
              <div className="flex gap-4">
                <Button variant="secondary">
                  <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1">
                    <span>✨ Live Build In Progress</span>
                    <ArrowRightIcon className="size-3 ml-1 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                  </AnimatedShinyText>
                </Button>
                <Button variant="secondary">
                  <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1">
                    <span>✨ Optimized For Gaming Cafés</span>
                    <ArrowRightIcon className="size-3 ml-1 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                  </AnimatedShinyText>
                </Button>
              </div>
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <AuroraText>Something powerful</AuroraText>
                <br />
                <span className="text-foreground">
                  is loading behind this screen.
                </span>
              </h1>

              <p className="text-lg text-foreground/70 max-w-2xl leading-relaxed">
                PLYM Games is building a connected layer for gaming cafés and
                players: real-time bookings, live sessions, passes, rankings and
                more — all in one beautiful dashboard.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex gap-4">
                <Button variant="secondary">
                  <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1">
                    <span>✨ Smart café dashboards</span>
                  </AnimatedShinyText>
                </Button>
                <Button variant="secondary">
                  <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1">
                    <span>✨ One-tap session booking</span>
                  </AnimatedShinyText>
                </Button>
                <Button variant="secondary">
                  <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1">
                    <span>✨ Razorpay ready</span>
                  </AnimatedShinyText>
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex gap-4">
                <Button variant="accent" className="px-8 py-3">
                  Get launch update
                </Button>
                <Button variant="outline" className="px-8 py-3">
                  View roadmap
                </Button>
                <Button variant="ghost">
                  <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1">
                    <div className="relative mr-2.5">
                      <div className="w-1.5 h-1.5 bg-green-800 rounded-full animate-ping absolute"></div>
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full relative"></div>
                    </div>
                    <span>v1 experience arriving soon</span>
                  </AnimatedShinyText>
                </Button>
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <div>
                <Button>
                  <span className="font-semibold">Now:</span>
                <span className="text-gray-400 ml-2">
                  Core booking flow & café tools in testing
                </span>
                </Button>
              </div>
              <div>
                <Button>
                  <span className="font-semibold">Next:</span>
                <span className="text-gray-400 ml-2">
                  Player profiles, rankings, and live passes
                </span>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-lg mx-auto lg:mx-0 w-full">
            <Card className=" rounded-2xl border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-l text-foreground/70">
                    Build status · PLYM Games
                  </p>
                </div>
                <div
            className={cn(
              "group rounded-full border border-black/10 bg-foreground/5 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1">
              <span>✨ Under Development</span>
            </AnimatedShinyText>
          </div>
              </div>

              <MagicCard className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm">
                    Frontend experience
                  </span>
                  <span className="text-2xl font-bold text-white">82%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[82%] bg-linear-to-r from-pink-500 to-purple-500 rounded-full"></div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm mt-2">
                  <div className="text-gray-400">Design polish</div>
                  <div className="text-right text-gray-400">
                    Real-time dashboards
                  </div>
                </div>
              </MagicCard>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <MagicCard className="rounded-xl p-4">
                  <div className="flex items-center gap-2">
                    <Store className="w-4 h-4" />
                    <span className="text-sm">Café owners</span>
                  </div>
                  <p className="font-semibold py-2">
                    Live insights, revenue & systems
                  </p>
                  <span className="inline-block px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded border border-emerald-500/30">
                    Launching soon
                  </span>
                </MagicCard>
                <MagicCard className="rounded-xl p-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">Players</span>
                  </div>
                  <p className="font-semibold py-2">
                    Discover & book gaming cafés
                  </p>
                  <span className="inline-block px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded border border-emerald-500/30">
                    Beta queue
                  </span>
                </MagicCard>
                 <MagicCard className="rounded-xl p-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">Real-time</span>
                  </div>
                  <p className="font-semibold py-2">
                    Bookings, sessions & passes
                  </p>
                  <span className="inline-block px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded border border-emerald-500/30">
                    Socket enabled
                  </span>
                </MagicCard>
                <MagicCard className="rounded-xl p-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">Payments</span>
                  </div>
                  <p className="font-semibold py-2">
                    Razorpay integration ready
                  </p>
                  <span className="inline-block px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded border border-emerald-500/30">
                    Sandbox
                  </span>
                </MagicCard>
              </div>

              <div className="text-center text-sm text-gray-400 pt-4 border-t border-white/10">
                <p>PLYM Games · Building the new layer for gaming cafés</p>
                <p className="mt-2">
                  Have a café?{" "}
                  <span className="cursor-pointer">
                    <AuroraText>Join the early access list →</AuroraText>
                  </span>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
