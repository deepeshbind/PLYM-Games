import { Circle, Zap, CreditCard, Users, Store, Calendar } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start max-w-7xl mx-auto">

          <div className="flex-1 space-y-8 lg:space-y-10">
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/40 rounded-full text-sm backdrop-blur-sm">
                <Circle className="w-3 h-3 fill-emerald-400 text-emerald-400 animate-pulse" />
                LIVE BUILD IN PROGRESS
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/40 rounded-full text-sm backdrop-blur-sm">
                <Zap className="w-4 h-4 text-amber-400" />
                OPTIMIZED FOR GAMING CAFÉS
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center font-bold text-lg">
                PG
              </div>
              <div>
                <h2 className="font-semibold">PLYM Games</h2>
                <p className="text-sm text-gray-400">Gaming Café OS</p>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
                  Something powerful
                </span>
                <br />
                <span className="text-white">is loading behind this screen.</span>
              </h1>

              <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                PLYM Games is building a connected layer for gaming cafés and players:
                real-time bookings, live sessions, passes, rankings and more — all in one
                beautiful dashboard.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm backdrop-blur-sm">
                <Circle className="w-2 h-2 fill-pink-400 text-pink-400" />
                Smart café dashboards
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm backdrop-blur-sm">
                <Circle className="w-2 h-2 fill-pink-400 text-pink-400" />
                One-tap session booking
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm backdrop-blur-sm">
                <Circle className="w-2 h-2 fill-pink-400 text-pink-400" />
                Razorpay ready
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105">
                Get launch update
              </button>
              <button className="px-8 py-3 bg-white/5 border border-white/20 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                View roadmap
              </button>
              <span className="inline-flex items-center gap-2 px-4 py-3 text-sm text-gray-400">
                <Circle className="w-2 h-2 fill-emerald-400 text-emerald-400" />
                v1 experience arriving soon
              </span>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <div>
                <span className="font-semibold">Now:</span>
                <span className="text-gray-400 ml-2">Core booking flow & café tools in testing</span>
              </div>
              <div>
                <span className="font-semibold">Next:</span>
                <span className="text-gray-400 ml-2">Player profiles, rankings, and live passes</span>
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-lg mx-auto lg:mx-0 w-full">
            <div className="bg-gradient-to-br from-purple-900/40 to-violet-900/40 backdrop-blur-xl rounded-2xl border border-white/10 p-6 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Build status · PLYM Games</p>
                </div>
                <span className="px-3 py-1 bg-amber-500/20 border border-amber-500/40 rounded-full text-xs">
                  Under Development
                </span>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-300">Frontend experience</span>
                  <span className="text-2xl font-bold text-white">82%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[82%] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="text-gray-400">Design polish</div>
                <div className="text-right text-gray-400">Real-time dashboards</div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Store className="w-4 h-4" />
                    <span className="text-sm">Café owners</span>
                  </div>
                  <p className="font-semibold">Live insights, revenue & systems</p>
                  <span className="inline-block px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded border border-emerald-500/30">
                    Launching soon
                  </span>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">Players</span>
                  </div>
                  <p className="font-semibold">Discover & book gaming cafés</p>
                  <span className="inline-block px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded border border-emerald-500/30">
                    Beta queue
                  </span>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Real-time</span>
                  </div>
                  <p className="font-semibold">Bookings, sessions & passes</p>
                  <span className="inline-block px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded border border-emerald-500/30">
                    Socket enabled
                  </span>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-gray-300">
                    <CreditCard className="w-4 h-4" />
                    <span className="text-sm">Payments</span>
                  </div>
                  <p className="font-semibold">Razorpay integration ready</p>
                  <span className="inline-block px-2 py-1 bg-amber-500/20 text-amber-400 text-xs rounded border border-amber-500/30">
                    Sandbox
                  </span>
                </div>
              </div>

              <div className="text-center text-sm text-gray-400 pt-4 border-t border-white/10">
                <p>PLYM Games · Building the new layer for gaming cafés</p>
                <p className="mt-2">
                  Have a café?{' '}
                  <span className="text-pink-400 cursor-pointer hover:text-pink-300 transition-colors">
                    Join the early access list →
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
