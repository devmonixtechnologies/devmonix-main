import { motion } from 'framer-motion'; // Changed from 'motion/react' to 'framer-motion' for Next.js compatibility

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  delay: number;
}

export default function ServiceCard({ icon, title, delay }: ServiceCardProps) {
  return (

    
    <motion.div
      initial={{ opacity: 0, y: 50, rotate: 45 }}
      animate={{ opacity: 1, y: 0, rotate: 45 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        scale: 1.1, 
        rotate: 50,
        transition: { duration: 0.2 }
      }}
      // className="relative group cursor-pointer"
    >
      <div className="w-32 h-30 bg-white/10 backdrop-blur-sm border border-white/20 transform rotate-45 flex items-center justify-center hover:bg-white/15 transition-all duration-300">
        <div className="transform -rotate-45 text-center">
          <div className="flex justify-center mb-2 text-white">
            {icon}
          </div>
          <div className="text-white px-2" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
            {title}
          </div>
        </div>
      </div>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-white/5 transform rotate-45 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
        animate={{
          boxShadow: [
            "0 0 0px rgba(255,255,255,0)",
            "0 0 20px rgba(255,255,255,0.3)",
            "0 0 0px rgba(255,255,255,0)"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}