import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer } from "@/lib/framer-animations";
import { Star, ArrowRight } from "lucide-react";

const HeroSection = () => {
  // Define rotation animation variants
  const rotateAnimation = {
    hidden: { rotate: 0 },
    show: { 
      rotate: 360,
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  };
  
  // Define image appearance animation variants
  const imageAppear = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.7, 
        delay: 0.8 
      }
    }
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-gradient-glow opacity-30 dark:opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center lg:text-left"
          >
            <motion.div
              variants={fadeIn("up", 0.2)}
              className="inline-flex rounded-full px-3 py-1 mb-6 text-xs font-medium bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300"
            >
              New: Meet AI
              <span className="hidden sm:inline ml-1">— Coming Soon</span>
            </motion.div>

            <motion.h1 
              variants={fadeIn("up", 0.3)}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
            >
              Connecting Devs with Employers
            </motion.h1>

            <motion.p 
              variants={fadeIn("up", 0.4)}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Build your next job on today's platform for ambitious devs building modern web and native applications at scale.
            </motion.p>

            <motion.div 
              variants={fadeIn("up", 0.5)}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Button size="lg" className="group">
                <span>Get Started Free</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Talk to Sales
              </Button>
            </motion.div>

            <motion.div 
              variants={fadeIn("up", 0.6)}
              className="flex flex-col items-center lg:items-start"
            >
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                Trusted by 30+ users
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            {/* Main rotating circle with glow */}
            <motion.div 
              className="relative ml-auto w-full max-w-md aspect-square"
              variants={rotateAnimation}
              initial="hidden"
              animate="show"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-blue-400/40 to-transparent dark:from-blue-600/10"></div>

              {/* Profile images - these are positioned absolutely and won't rotate with the container */}
              <motion.div 
                className="absolute top-12 -right-4 md:top-16 md:right-0 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white dark:border-dark-800 shadow-lg"
                variants={imageAppear}
                initial="hidden"
                animate="show"
                // Counter-rotate to keep the image upright
                style={{ rotate: 0 }}
              >
                <img 
                  src="/dashboard-preview.png" 
                  alt="Happy male user"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div 
                className="absolute bottom-12 md:bottom-16 w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white dark:border-dark-800 shadow-lg"
                variants={imageAppear}
                initial="hidden"
                animate="show"
                // Counter-rotate to keep the image upright
                style={{ rotate: 0 }}
              >
                <img 
                  src="https://lh3.googleusercontent.com/a/ACg8ocLus719p2kIZoDKM1gHPpxzqIQTL0mG-WXjmFvT2HKGakYYh9RX=s288-c-no" 
                  alt="Happy female user"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-0 right-0 font-semibold text-center text-xs text-white bg-black/50 py-1">
                  Barrest
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
