import { Link } from 'react-router-dom';

const DashboardShowcase = () => {
  return (
    <section className="bg-[#061829] py-16 sm:py-20 lg:py-24 relative z-30 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(200,149,46,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,149,46,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        opacity: 0.5
      }} />
      <div className="container-premium relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-8" style={{ backgroundColor: 'rgba(200,149,46,0.15)', border: '1px solid rgba(200,149,46,0.25)', color: '#C8952E' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#C8952E' }} />
              Vertically Integrated Operations
            </div>
            <h2 className="section-title text-white mb-6">
              Institutional Intelligence.<br />
              <span style={{ color: '#C8952E' }}>Every Asset Optimized.</span>
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-400 mb-10 max-w-lg">
              Institutional-grade underwriting and in-house operations run on the same platform — so owners see current numbers instead of last month's PDF, and every decision is made on data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/technology" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5" style={{ backgroundColor: '#C8952E', color: '#061829' }}>
                Explore the Platform →
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-sm font-medium text-white transition-all duration-300 border border-white/20 hover:border-[#C8952E] hover:text-[#C8952E]">
                Schedule a Consultation
              </Link>
            </div>
          </div>

          {/* Right side - dashboard mockup */}
          <div className="relative hidden lg:block">
            {/* Main dashboard card */}
            <div className="rounded-xl overflow-hidden" style={{ backgroundColor: 'rgba(27,42,74,0.6)', border: '1px solid rgba(200,149,46,0.12)', backdropFilter: 'blur(20px)' }}>
              {/* Dashboard header */}
              <div className="px-5 py-4 flex items-center justify-between" style={{ borderBottom: '1px solid rgba(200,149,46,0.08)' }}>
                <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Owner Command Center</span>
                <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider" style={{ color: '#4ADE80' }}>
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#4ADE80' }} />
                  Live
                </span>
              </div>
              {/* Metrics */}
              <div className="p-5">
                <div className="grid grid-cols-3 gap-4 mb-5">
                  <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(10,35,66,0.4)', border: '1px solid rgba(200,149,46,0.06)' }}>
                    <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Occupancy</div>
                    <div className="text-2xl font-bold" style={{ color: '#C8952E' }}>97.6%</div>
                    <div className="text-xs font-medium mt-1" style={{ color: '#4ADE80' }}>↑ 2.1% vs prior</div>
                  </div>
                  <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(10,35,66,0.4)', border: '1px solid rgba(200,149,46,0.06)' }}>
                    <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Units Managed</div>
                    <div className="text-2xl font-bold text-white">85</div>
                    <div className="text-xs font-medium text-gray-400 mt-1">3 properties</div>
                  </div>
                  <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(10,35,66,0.4)', border: '1px solid rgba(200,149,46,0.06)' }}>
                    <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2">HAP Status</div>
                    <div className="text-lg font-bold" style={{ color: '#4ADE80' }}>Current</div>
                    <div className="text-xs font-medium text-gray-400 mt-1">Tracked in real-time</div>
                  </div>
                </div>
                {/* Chart area */}
                <div className="rounded-lg p-3 relative" style={{ backgroundColor: 'rgba(10,35,66,0.3)', border: '1px solid rgba(200,149,46,0.06)', height: '120px' }}>
                  <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Monthly Collections — 12mo Trend</span>
                  <svg viewBox="0 0 480 80" className="w-full h-16 mt-2" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="dashChartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(200,149,46,0.3)" />
                        <stop offset="100%" stopColor="rgba(200,149,46,0)" />
                      </linearGradient>
                    </defs>
                    <path d="M0,65 Q40,60 80,55 T160,45 T240,35 T320,28 T400,20 T480,12 L480,80 L0,80 Z" fill="url(#dashChartGrad)" />
                    <path d="M0,65 Q40,60 80,55 T160,45 T240,35 T320,28 T400,20 T480,12" fill="none" stroke="#C8952E" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Floating card - Compliance */}
            <div className="absolute -bottom-5 -left-8 rounded-xl px-5 py-4" style={{ backgroundColor: 'rgba(27,42,74,0.85)', border: '1px solid rgba(200,149,46,0.15)', backdropFilter: 'blur(16px)', animation: 'float 6s ease-in-out infinite' }}>
              <div className="text-[9px] font-semibold text-gray-500 uppercase tracking-wider mb-1">Compliance</div>
              <div className="text-xl font-bold" style={{ color: '#4ADE80' }}>✓ Compliant</div>
            </div>

            {/* Floating card - Work Orders */}
            <div className="absolute -top-4 -right-5 rounded-xl px-5 py-4" style={{ backgroundColor: 'rgba(27,42,74,0.85)', border: '1px solid rgba(200,149,46,0.15)', backdropFilter: 'blur(16px)', animation: 'float 6s ease-in-out infinite 2s' }}>
              <div className="text-[9px] font-semibold text-gray-500 uppercase tracking-wider mb-1">Work Orders</div>
              <div className="text-xl font-bold text-white">2.4hr <span className="text-xs font-normal text-gray-500">avg response</span></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
};

export default DashboardShowcase;
