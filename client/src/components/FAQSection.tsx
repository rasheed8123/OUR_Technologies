import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

/**
 * FAQ Section
 * Design: Neo-Minimalist Tech Elegance
 * - Accordion-based layout
 * - Smooth animations
 * - Premium styling
 */

export default function FAQSection() {
  const faqs = [
    {
      question: 'Do you provide doorstep service?',
      answer: 'Yes, we provide doorstep service for all our customers. Our technicians will visit your location at a time convenient for you. We serve residential customers, home offices, startups, and corporate offices.',
    },
    {
      question: 'Do you repair MacBooks?',
      answer: 'Yes, we repair Apple MacBooks. Our certified technicians are trained to handle all MacBook models and can assist with screen replacement, keyboard issues, battery problems, and more.',
    },
    {
      question: 'Do you offer business AMC (Annual Maintenance Contracts)?',
      answer: 'Yes, we offer comprehensive AMC packages for businesses. Our AMC includes regular maintenance, priority support, discounted service rates, and 24/7 assistance for critical issues.',
    },
    {
      question: 'What brands do you support?',
      answer: 'We support all major brands including HP, Dell, Lenovo, Asus, Acer, Canon, Nikon, Sony, and many more. Whether it\'s laptops, desktops, cameras, or printers, we have expertise across all popular brands.',
    },
    {
      question: 'How long do repairs typically take?',
      answer: 'Most repairs are completed within 24-48 hours. Simple issues like software installation or driver updates can be done immediately. Complex hardware repairs may take 3-5 days depending on the issue and parts availability.',
    },
    {
      question: 'Do you provide warranty on repairs?',
      answer: 'Yes, we provide warranty on all our repairs. Most repairs come with a 3-month warranty on parts and labor. For major repairs, we offer extended warranty options.',
    },
    {
      question: 'Can you recover data from damaged hard drives?',
      answer: 'Yes, we specialize in data recovery from damaged hard drives, SSDs, external drives, and memory cards. Our recovery success rate is very high. Contact us for a free assessment.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, credit cards, debit cards, and digital payment methods like UPI and online transfers. We also offer flexible payment plans for major repairs and AMC contracts.',
    },
  ];

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
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about our services
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass dark:glass-dark rounded-xl overflow-hidden"
              >
                <AccordionItem value={`item-${index}`} className="border-none">
                  <AccordionTrigger className="px-6 py-4 hover:bg-blue-50 dark:hover:bg-slate-700/50 transition-colors duration-200 text-left font-semibold text-slate-900 dark:text-white">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
