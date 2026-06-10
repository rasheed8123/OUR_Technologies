import { motion } from 'framer-motion';
import { MapPin, Zap, Users, DollarSign, Shield, Headphones } from 'lucide-react';

/**
 * Why Choose Us Section
 * Design: Neo-Minimalist Tech Elegance
 * - Animated feature grid
 * - Icon-based feature display
 * - Hover effects
 */

export default function WhyChooseUs() {
  const features = [
    {
      icon: MapPin,
      title: 'Doorstep Support',
      description: 'We come to your location',
    },
    {
      icon: Zap,
      title: 'Same Day Service',
      description: 'Quick turnaround on repairs',
    },
    {
      icon: Users,
      title: 'Skilled Engineers',
      description: 'Certified and experienced team',
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'No hidden charges',
    },
    {
      icon: Shield,
      title: 'Genuine Parts',
      description: 'Only authentic components',
    },
    {
      icon: Headphones,
      title: '24/7 Assistance',
      description: 'Always available to help',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
    <section id="why-us" className="py-20 bg-white dark:bg-slate-900">
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
            Why Choose OUR Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We deliver excellence in every service with a commitment to quality and customer satisfaction
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="glass dark:glass-dark p-8 rounded-xl text-center group cursor-pointer transition-all duration-300 hover:border-cyan-400 dark:hover:border-cyan-400"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
