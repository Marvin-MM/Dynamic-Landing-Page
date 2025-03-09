
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/framer-animations";
import { Button } from "@/components/ui/button";

const AnalyticsSection = () => {
  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.h2 
              variants={fadeIn("up", 0.1)}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Analysis Data
            </motion.h2>
            <motion.p 
              variants={fadeIn("up", 0.2)}
              className="text-lg text-muted-foreground mb-8"
            >
              Keep track of work projects. 
              <span className="text-blue-500 font-medium"> Get insights the same day</span>.
            </motion.p>
            <motion.p 
              variants={fadeIn("up", 0.3)}
              className="text-lg text-muted-foreground mb-8"
            >
              Boost your workflow with real-time analytics and AI-powered insights that help you make better decisions faster. Access all your data in one place.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.4)}
              className="mb-8"
            >
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="rounded-full bg-green-500 w-5 h-5 flex items-center justify-center mr-3">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Real-time data visualization</span>
                </li>
                <li className="flex items-center">
                  <div className="rounded-full bg-green-500 w-5 h-5 flex items-center justify-center mr-3">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Advanced filtering capabilities</span>
                </li>
                <li className="flex items-center">
                  <div className="rounded-full bg-green-500 w-5 h-5 flex items-center justify-center mr-3">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Custom dashboard creation</span>
                </li>
              </ul>
            </motion.div>
            <motion.div 
              variants={fadeIn("up", 0.5)}
            >
              <Button size="lg">Explore Features</Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 md:-inset-10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white dark:bg-dark-700 rounded-xl shadow-lg overflow-hidden">
              <div className="p-5 border-b border-gray-200 dark:border-gray-700">
                <h3 className="font-medium">Traffic Analysis</h3>
              </div>

              <div className="p-5">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">Visitors</p>
                    <p className="text-lg font-semibold">4,521</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">Conversion</p>
                    <p className="text-lg font-semibold">2.1%</p>
                  </div>
                </div>

                {/* Placeholder chart */}
                <div className="h-64 bg-gray-100 dark:bg-dark-800 rounded-lg mb-6 overflow-hidden">
                  <div className="h-full w-full flex items-end">
                    {[35, 55, 25, 45, 65, 30, 50, 40, 60, 35, 55, 25, 45, 65, 30].map((height, index) => (
                      <div 
                        key={index} 
                        className="h-full flex-1 flex items-end justify-center px-1"
                      >
                        <motion.div 
                          className="w-full bg-blue-500 rounded-t-sm"
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          transition={{ duration: 0.8, delay: 0.5 + (index * 0.05) }}
                          viewport={{ once: true }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { name: "Tina Turner", date: "Apr 23, 2023", amount: "$45.00" },
                    { name: "Dave Johnson", date: "Apr 24, 2023", amount: "$86.50" },
                    { name: "Sarah Williams", date: "Apr 25, 2023", amount: "$32.75" }
                  ].map((user, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                        <div>
                          <p className="text-sm font-medium">{user.name}</p>
                          <p className="text-xs text-muted-foreground">{user.date}</p>
                        </div>
                      </div>
                      <div className="text-sm font-medium">{user.amount}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
