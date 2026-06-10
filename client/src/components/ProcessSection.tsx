import { motion } from 'framer-motion';
import { Calendar, Search, FileText, Wrench, Truck } from 'lucide-react';

/**
 * Service Process Section
 * Design: Neo-Minimalist Tech Elegance
 * - Visual timeline with icons
 * - Step-by-step process flow
 * - Animated connections
 */

export default function ProcessSection() {
  const steps = [
    {
      icon: Calendar,
      title: 'Book a Service',
      description: 'Schedule your service at your convenience',
    },
    {
      icon: Search,
      title: 'Device Inspection',
      description: 'Our expert technicians inspect your device',
    },
    {
      icon: FileText,
      title: 'Quotation Approval',
      description: 'Get transparent pricing and approve the quote',
    },
    {
      icon: Wrench,
      title: 'Repair & Testing',
      description: 'Professional repair with thorough testing',
    },
    {
      icon: Truck,
      title: 'Delivery & Support',
      description: 'Get your device back with warranty support',
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
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
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
            Our Service Process
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Simple, transparent, and customer-focused approach to every repair
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex flex-col items-center flex-1"
                  >
                    {/* Step Number and Icon */}
                    <div className="relative z-10 mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center font-bold text-blue-600 border-2 border-blue-600">
                        {index + 1}
                      </div>
                    </div>

                    {/* Connector Line */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-10 left-1/2 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500 -z-10" />
                    )}

                    {/* Text */}
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white text-center mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center max-w-xs">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex gap-6"
                >
                  {/* Timeline Line and Icon */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-1 h-12 bg-gradient-to-b from-blue-600 to-cyan-500 mt-2" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pt-2 pb-4">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
