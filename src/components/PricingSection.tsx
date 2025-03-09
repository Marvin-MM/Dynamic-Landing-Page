
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/framer-animations";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");
  
  const yearlyDiscount = 0.15; // 15% discount for yearly billing

  const pricingPlans = [
    {
      name: "Basic",
      description: "For teams just getting started with our platform",
      monthlyPrice: 15,
      period: "per user / month",
      features: [
        "Up to 5 team members",
        "20 boards in total",
        "Unlimited storage",
        "API access",
        "Standard support",
      ],
      isPopular: false,
    },
    {
      name: "Professional",
      description: "For teams that need more advanced features",
      monthlyPrice: 30,
      period: "per user / month",
      features: [
        "Up to 10 team members",
        "40 boards in total",
        "Unlimited storage",
        "API access",
        "Priority support",
        "Advanced reporting",
        "Custom fields",
      ],
      isPopular: true,
    },
    {
      name: "Enterprise",
      description: "For large organizations with specific needs",
      monthlyPrice: 65,
      period: "per user / month",
      features: [
        "Unlimited team members",
        "Unlimited boards",
        "Unlimited storage",
        "API access",
        "24/7 support",
        "Advanced reporting",
        "Custom fields",
        "SSO integration",
        "Custom workflows",
      ],
      isPopular: false,
    },
  ];

  return (
    <section className="py-20 md:py-32">
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
            Choose what you need
          </motion.h2>
          <motion.p 
            variants={fadeIn("up", 0.2)}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Simple pricing for teams of all sizes. Always know what you'll pay.
            All plans come with a 14-day trial.
          </motion.p>
        </motion.div>

        <div className="flex justify-center my-8">
          <motion.div 
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="bg-gray-100 dark:bg-dark-700 p-1 rounded-full inline-flex"
          >
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${billingPeriod === "monthly" ? "bg-white dark:bg-dark-800 shadow-sm" : ""}`}
              onClick={() => setBillingPeriod("monthly")}
            >
              Monthly
            </button>
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${billingPeriod === "yearly" ? "bg-white dark:bg-dark-800 shadow-sm" : ""}`}
              onClick={() => setBillingPeriod("yearly")}
            >
              Yearly
              <span className="ml-2 text-xs px-2 py-0.5 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                Save 15%
              </span>
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => {
            // Calculate price based on billing period
            const price = billingPeriod === "yearly" 
              ? Math.round(plan.monthlyPrice * 12 * (1 - yearlyDiscount)) 
              : plan.monthlyPrice;
            
            // Determine the display period
            const displayPeriod = billingPeriod === "yearly" 
              ? "per user / year" 
              : plan.period;
              
            return (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.1 * (index + 1))}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                className={`bg-white dark:bg-dark-700 rounded-2xl shadow-lg p-8 relative overflow-hidden ${
                  plan.isPopular ? "ring-2 ring-blue-500 dark:ring-blue-400" : ""
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-5 right-5">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                      Popular
                    </span>
                  </div>
                )}
                <div className="mb-5">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-end">
                    <span className="text-3xl font-bold">${price}</span>
                    <span className="text-muted-foreground ml-1">{displayPeriod}</span>
                  </div>
                  {billingPeriod === "yearly" && (
                    <p className="text-green-600 dark:text-green-400 text-sm mt-1">
                      ${plan.monthlyPrice * 12} → ${price} with yearly billing
                    </p>
                  )}
                </div>
                <div className="mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button 
                  variant={plan.isPopular ? "default" : "outline"} 
                  className="w-full"
                >
                  Get Started
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
