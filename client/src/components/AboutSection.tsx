import { motion } from 'framer-motion';
import { Zap, Users, Shield, Gauge } from 'lucide-react';

/**
 * About OUR Technologies Section
 * Design: Neo-Minimalist Tech Elegance
 * - Highlight cards with glassmorphism
 * - Icon-based feature display
 * - Asymmetric layout
 */

export default function AboutSection() {
  const highlights = [
    {
      icon: Users,
      title: 'Certified Experts',
      description: 'Highly trained and certified technicians with years of experience',
    },
    {
      icon: Zap,
      title: 'Doorstep Service',
      description: 'We come to you - no need to carry your devices anywhere',
    },
    {
      icon: Shield,
      title: 'Genuine Components',
      description: 'Only authentic spare parts and components used for repairs',
    },
    {
      icon: Gauge,
      title: 'Fast Repairs',
      description: 'Quick turnaround time without compromising on quality',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 md:h-full min-h-96"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-2xl" />
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031149499/XGmYdoezh3HqGicPkuNvUb/laptop-repair-hero-Wh2J9eBqKZfH6NmPMYaXut.webp"
              alt="Our Team"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
                Technology Experts You Can{' '}
                <span className="gradient-text">Trust</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                OUR Technologies delivers professional repair and support services for laptops, desktops, cameras, printers, and IT infrastructure. With experienced technicians and a customer-first approach, we help individuals, startups, offices, and enterprises keep their technology running smoothly.
              </p>
            </motion.div>

            {/* Highlight Cards */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="glass dark:glass-dark p-6 rounded-xl group cursor-pointer transition-all duration-300 hover:border-cyan-400 dark:hover:border-cyan-400"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex-shrink-0 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
