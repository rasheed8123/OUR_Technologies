import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useTilt3D } from '@/hooks/useTilt3D';

/**
 * Testimonials Section
 * Design: Neo-Minimalist Tech Elegance
 * - Premium testimonial cards
 * - Star ratings
 * - Smooth carousel animations
 */

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      service: 'Laptop Screen Replacement',
      rating: 5,
      text: 'Excellent service! The technician was professional and replaced my laptop screen quickly. Highly recommended!',
    },
    {
      name: 'Priya Sharma',
      service: 'Data Recovery',
      rating: 5,
      text: 'I was worried about losing my important files. OUR Tech recovered everything perfectly. Great work!',
    },
    {
      name: 'Amit Patel',
      service: 'Desktop Repair',
      rating: 5,
      text: 'Fast, reliable, and affordable. They fixed my desktop in no time. Will definitely use their services again.',
    },
    {
      name: 'Sneha Gupta',
      service: 'Camera Repair',
      rating: 5,
      text: 'Professional team with excellent customer service. My camera is working like new. Thank you!',
    },
    {
      name: 'Vikram Singh',
      service: 'Network Setup',
      rating: 5,
      text: 'Best IT support service in the city. They set up our office network seamlessly. Highly satisfied!',
    },
    {
      name: 'Anjali Verma',
      service: 'Printer Repair',
      rating: 5,
      text: 'Quick response and efficient service. My printer is working perfectly now. Great experience!',
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
    <section className="py-20 bg-white dark:bg-slate-900">
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
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Trusted by thousands of satisfied customers across the city
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => {
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
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h4 className="font-bold text-slate-900 dark:text-white">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.service}
                </p>
              </div>
              </motion.div>
            );
            })})
        </motion.div>
      </div>
    </section>
  );
}
