import { motion } from 'framer-motion';
import { Laptop, Monitor, Camera, Printer, Database, Settings } from 'lucide-react';
import { useTilt3D } from '@/hooks/useTilt3D';

/**
 * Services Section
 * Design: Neo-Minimalist Tech Elegance
 * - Premium service cards with glassmorphism
 * - Icon-based categorization
 * - Hover animations
 */

export default function ServicesSection() {
  const services = [
    {
      icon: Laptop,
      title: 'Laptop Services',
      items: [
        'Screen Replacement',
        'Keyboard Replacement',
        'Battery Replacement',
        'Motherboard Repair',
        'SSD Upgrade',
        'RAM Upgrade',
      ],
    },
    {
      icon: Monitor,
      title: 'Desktop Services',
      items: [
        'PC Assembly',
        'Hardware Upgrade',
        'Performance Optimization',
        'Power Supply Repair',
        'Motherboard Repair',
        'GPU Installation',
      ],
    },
    {
      icon: Camera,
      title: 'Camera Services',
      items: [
        'Lens Repair',
        'Sensor Cleaning',
        'Autofocus Issues',
        'Display Problems',
        'Battery Issues',
        'Water Damage Repair',
      ],
    },
    {
      icon: Printer,
      title: 'Printer Services',
      items: [
        'Hardware Repair',
        'Driver Installation',
        'Network Setup',
        'Maintenance',
        'Toner Issues',
        'Paper Jam Fix',
      ],
    },
    {
      icon: Database,
      title: 'Data Recovery',
      items: [
        'HDD Recovery',
        'SSD Recovery',
        'External Drive Recovery',
        'Memory Card Recovery',
        'RAID Recovery',
        'Backup Solutions',
      ],
    },
    {
      icon: Settings,
      title: 'IT Support',
      items: [
        'Network Setup',
        'CCTV Installation',
        'Server Maintenance',
        'AMC Contracts',
        'System Optimization',
        'Security Setup',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Our Premium Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions for all your technology needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const { ref, tilt, handleMouseMove, handleMouseLeave } = useTilt3D();
            return (
              <motion.div
                key={index}
                ref={ref}
                variants={itemVariants}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                animate={{
                  rotateX: tilt.rotateX,
                  rotateY: tilt.rotateY,
                  scale: tilt.scale,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                style={{
                  transformStyle: 'preserve-3d' as const,
                  perspective: '1000px',
                }}
                className="glass dark:glass-dark p-8 rounded-xl group cursor-pointer transition-all duration-300 hover:border-cyan-400 dark:hover:border-cyan-400 hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="p-4 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg w-fit mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {service.title}
                </h3>

                {/* Service Items */}
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors"
                    >
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
