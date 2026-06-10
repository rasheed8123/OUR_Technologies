import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

/**
 * Hero Section Component
 * Design: Neo-Minimalist Tech Elegance
 * - Large headline with gradient text
 * - Asymmetric layout with image on right
 * - Feature checklist with icons
 * - CTA buttons with hover effects
 */

export default function Hero() {
  const features = [
    'Doorstep Service',
    'Certified Technicians',
    'Genuine Spare Parts',
    'Fast Turnaround',
    'Affordable Pricing',
    'Business Support',
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
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden bg-white dark:bg-slate-900"
    >
      {/* Gradient background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-full blur-3xl opacity-40 -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-4" key="headline">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                Professional Laptop, Desktop & Camera Services at Your{' '}
                <span className="gradient-text">Doorstep</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
                Expert repair, maintenance, upgrades, and IT support solutions for homes, offices, and commercial businesses.
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/30"
              >
                Get Instant Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 dark:text-cyan-400 dark:border-cyan-400 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg font-semibold transition-all duration-200"
              >
                Contact Us
              </Button>
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-green-500/30"
              >
                WhatsApp Now
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-96 md:h-full min-h-96"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-2xl" />
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031149499/XGmYdoezh3HqGicPkuNvUb/hero-tech-abstract-DkkbhP8H5QQUXNwzadqrzb.webp"
              alt="Tech Services"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
