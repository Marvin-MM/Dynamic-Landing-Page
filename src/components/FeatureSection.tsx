
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/framer-animations";
import { BarChart2, Users, Mail, PieChart, MessageCircle } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: <BarChart2 className="h-8 w-8" />,
      title: "Easy Analytics",
      description: "Track and visualize your data",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Collaboration",
      description: "Work together seamlessly",
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Reports",
      description: "Automated email notifications",
    },
    {
      icon: <PieChart className="h-8 w-8" />,
      title: "Custom Reports",
      description: "Create tailored reports",
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Chat Support",
      description: "24/7 customer assistance",
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-secondary/50 dark:bg-dark-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeIn("up", 0.1)}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Track all customers in a <br className="hidden sm:block" /> single dashboard
          </motion.h2>
          <motion.p 
            variants={fadeIn("up", 0.2)}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-4 justify-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.1 * index)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-dark-700 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-blue-500 mb-4 p-3 rounded-full bg-blue-50 dark:bg-blue-500/10">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-dark-700 shadow-xl rounded-xl p-2 md:p-6 max-w-4xl mx-auto overflow-hidden">
            <img 
              src="/dashboard-preview.png" 
              alt="Dashboard Preview" 
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
