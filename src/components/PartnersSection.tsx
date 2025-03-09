
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/framer-animations";

const PartnersSection = () => {
  const partners = [
    { name: "Pinterest", logo: "/pinterest.png" },
    { name: "Github", logo: "/github.png" },
    { name: "Facebook", logo: "/facebook.png" },
    { name: "Telegram", logo: "/telegram.png" },
    { name: "React", logo: "/react.png" },
    { name: "Next.js", logo: "/Next.js.png" },
    { name: "Vite.js", logo: "/Vite.js.png" },
    { name: "Nest.js", logo: "/Nest.js.png" },
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mb-12"
        >
          <motion.h3 
            variants={fadeIn("up", 0.1)}
            className="text-xl md:text-2xl font-semibold mb-3"
          >
            Trusted by top companies
          </motion.h3>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12 items-center justify-center"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="flex justify-center"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-10 object-contain filter grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-16 flex flex-col items-center"
        >
          <div className="flex items-center mb-3">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">4.9/5 from 230+ reviews</p>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
