import { motion } from 'framer-motion';

/**
 * Trusted Brands Section
 * Design: Neo-Minimalist Tech Elegance
 * - Premium animated grid layout
 * - Brand logos with hover effects
 * - Organized by category
 */

export default function BrandsSection() {
  const brands = {
    Laptops: ['HP', 'Dell', 'Lenovo', 'Asus', 'Acer', 'MSI', 'Samsung', 'Microsoft Surface', 'Toshiba', 'Sony Vaio', 'Fujitsu', 'LG'],
    Desktops: ['Dell', 'HP', 'Lenovo', 'Asus', 'Acer', 'Custom Gaming PCs'],
    Cameras: ['Canon', 'Nikon', 'Sony', 'Fujifilm', 'Panasonic', 'Leica', 'GoPro', 'DJI'],
    Printers: ['HP', 'Canon', 'Epson', 'Brother', 'Xerox'],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
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
            Trusted Brands We Service
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We service all major brands across laptops, desktops, cameras, and printers
          </p>
        </motion.div>

        {/* Brands Grid */}
        <div className="space-y-16">
          {Object.entries(brands).map((category) => (
            <motion.div
              key={category[0]}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                {category[0]} Brands
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
              >
                {category[1].map((brand) => (
                  <motion.div
                    key={brand}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group"
                  >
                    <div className="glass dark:glass-dark p-6 rounded-xl flex items-center justify-center min-h-24 cursor-pointer transition-all duration-300 hover:border-cyan-400 dark:hover:border-cyan-400">
                      <span className="text-center font-semibold text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                        {brand}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
