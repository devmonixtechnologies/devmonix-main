import {
  Activity,
  BellRing,
  ShieldCheck,
  LineChart,
  Server,
  Clock,
  ChevronRight,
} from "lucide-react";

export default function Monitoring() {
  return (
    // <section className="py-28 bg-neutral-950 relative overflow-hidden">
    <section className="py-8 sm:py-12 md:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <span className="inline-block mb-4 rounded-full px-4 py-1 text-sm font-medium bg-primary/10 text-primary">
            Monitoring & Reliability
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-neutral-100">
            Built for Stability, Performance & Trust
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-neutral-400">
            We proactively monitor your systems to ensure uptime, security, and
            peak performance 24/7.
          </p>
        </div>

        {/* Feature Grid */}
        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full mb-16">
  {[
    {
      title: "Real-Time Monitoring",
      desc: "Live tracking of application health, traffic, and system metrics.",
      icon: Activity,
      gradient: "from-cyan-500 to-blue-800",
    },
    {
      title: "Smart Alerts",
      desc: "Instant notifications before issues impact your users.",
      icon: BellRing,
      gradient: "from-amber-500 to-orange-800",
    },
    {
      title: "Security Watch",
      desc: "Continuous monitoring for vulnerabilities and threats.",
      icon: ShieldCheck,
      gradient: "from-emerald-500 to-teal-800",
    },
    {
      title: "Performance Metrics",
      desc: "Deep insights into response time, load, and bottlenecks.",
      icon: LineChart,
      gradient: "from-violet-500 to-purple-800",
    },
    {
      title: "Infrastructure Health",
      desc: "Server, database, and cloud resource monitoring.",
      icon: Server,
      gradient: "from-indigo-500 to-blue-800",
    },
    {
      title: "High Availability",
      desc: "Ensuring uptime with redundancy and failover strategies.",
      icon: Clock,
      gradient: "from-pink-500 to-rose-800",
    },
  ].map((item, index) => {
    const Icon = item.icon;
    return (
      
      <div
        key={index}
        className="
          w-full
          group relative rounded-2xl sm:rounded-3xl p-6 sm:p-8
          border border-neutral-800/50 group-hover:border-neutral-700/50
          bg-gradient-to-br from-neutral-900/40 via-neutral-800/20 to-neutral-900/40
          backdrop-blur-xl backdrop-saturate-150
          transition-all duration-500
          hover:-translate-y-2 hover:scale-[1.02]
          hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.05)]
          before:absolute before:inset-0 before:rounded-2xl sm:before:rounded-3xl before:bg-gradient-to-br before:from-white/5 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 group-hover:before:opacity-100
        "
      >
        {/* Glass Reflection */}
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-20 pointer-events-none" />
        
        {/* Corner Gradient */}
        <div
          className={`absolute inset-0 rounded-2xl sm:rounded-3xl
            bg-gradient-to-br ${item.gradient}
            opacity-[0.08] blur-[60px sm:blur-[80px]] group-hover:opacity-[0.15] transition-opacity duration-500`}
        />

        {/* Hover Glow */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-60
            bg-gradient-to-br ${item.gradient}
            blur-3xl transition-all duration-700 group-hover:scale-110`}
        />

        {/* Content */}
        <div className="relative z-10">
          <div
          className={`w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-6 rounded-xl sm:rounded-2xl
              flex items-center justify-center
              bg-gradient-to-br ${item.gradient}
              shadow-[0_8px_32px_rgba(99,102,241,0.25),0_0_0_1px_rgba(255,255,255,0.1),inset_0_1px_0_rgba(255,255,255,0.2)]
              group-hover:scale-110 group-hover:shadow-[0_12px_40px_rgba(99,102,241,0.4),0_0_0_1px_rgba(255,255,255,0.2),inset_0_1px_0_rgba(255,255,255,0.3)] transition-all duration-500`}
          >
            <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-white drop-shadow-lg" />
          </div>

          <h3 className="text-lg sm:text-xl font-semibold text-neutral-100 mb-2 sm:mb-3 tracking-tight">
            {item.title}
          </h3>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-light">
            {item.desc}
          </p>
        </div>

        {/* Premium Border Shine */}
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-colors duration-500" />
        
        
      </div>
    );
  })}
</div>


        {/* Bottom Trust Bar */}
        <div className="mt-12 sm:mt-16 md:mt-20 rounded-2xl sm:rounded-3xl 
          bg-gradient-to-br from-violet-600/5 via-blue-600/3 to-cyan-600/5
          backdrop-blur-xl backdrop-saturate-150
          border border-neutral-800/50 
          p-6 sm:p-8 md:p-10 text-center relative overflow-hidden group
          transition-all duration-500 hover:-translate-y-1
          hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.05)]">
          
          {/* Colored Background Glow */}
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-violet-500/8 via-blue-500/5 to-cyan-500/8 blur-3xl opacity-60" />
          
          {/* Glass Reflection */}
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-20 pointer-events-none" />
          
          {/* Premium Border Shine */}
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-colors duration-500" />
          
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-100 mb-3 sm:mb-4 tracking-tight relative z-10">
            Monitoring That Prevents Downtime — Not Just Reports It
          </h3>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-neutral-400 max-w-3xl mx-auto leading-relaxed font-light relative z-10">
            Our proactive monitoring approach helps detect anomalies early,
            reduce incidents, and keep your business running without disruption.
          </p>
        </div>
      </div>
    </section>
  );
}
