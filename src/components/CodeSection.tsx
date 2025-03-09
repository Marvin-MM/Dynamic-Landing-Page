
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/framer-animations";
import { Button } from "./ui/button";

const CodeSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-secondary/50 to-background dark:from-dark-800 dark:to-dark-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.h2 
              variants={fadeIn("up", 0.1)}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Connect & grow with <br />
              <span className="text-blue-500">your global customers</span>
            </motion.h2>
            <motion.div 
              variants={fadeIn("up", 0.2)}
              className="mt-8 bg-white dark:bg-dark-700 rounded-lg shadow-md overflow-hidden"
            >
              <div className="bg-gray-100 dark:bg-dark-800 py-2 px-4 border-b dark:border-gray-700 flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-2 text-xs text-gray-500 dark:text-gray-400">script.js</div>
              </div>
              <pre className="p-4 text-sm text-left overflow-auto font-mono">
                <code className="language-javascript text-xs md:text-sm">
                  <div className="text-gray-500 dark:text-gray-400">// API endpoint setup</div>
                  <div><span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-blue-600 dark:text-blue-400">apiKey</span> = <span className="text-green-600 dark:text-green-400">&apos;your-api-key-here&apos;</span>;</div>
                  <br />
                  <div><span className="text-purple-600 dark:text-purple-400">async function</span> <span className="text-yellow-600 dark:text-yellow-400">fetchData</span>() {'{'}</div>
                  <div>  <span className="text-purple-600 dark:text-purple-400">try</span> {'{'}</div>
                  <div>    <span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-blue-600 dark:text-blue-400">response</span> = <span className="text-purple-600 dark:text-purple-400">await</span> fetch(</div>
                  <div>      <span className="text-green-600 dark:text-green-400">&apos;https://api.deskaid.com/v1/customers&apos;</span>,</div>
                  <div>      {'{'}</div>
                  <div>        headers: {'{'}</div>
                  <div>          <span className="text-blue-600 dark:text-blue-400">&apos;Content-Type&apos;</span>: <span className="text-green-600 dark:text-green-400">&apos;application/json&apos;</span>,</div>
                  <div>          <span className="text-blue-600 dark:text-blue-400">&apos;Authorization&apos;</span>: <span className="text-green-600 dark:text-green-400">{"`Bearer ${apiKey}`"}</span>,</div>
                  <div>        {'}'}</div>
                  <div>      {'}'})</div>
                  <br />
                  <div>    <span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-blue-600 dark:text-blue-400">data</span> = <span className="text-purple-600 dark:text-purple-400">await</span> response.json();</div>
                  <div>    <span className="text-purple-600 dark:text-purple-400">return</span> data;</div>
                  <div>  {'}'} <span className="text-purple-600 dark:text-purple-400">catch</span> (error) {'{'}</div>
                  <div>    console.error(<span className="text-green-600 dark:text-green-400">&apos;Error fetching data:&apos;</span>, error);</div>
                  <div>  {'}'}</div>
                  <div>{'}'}</div>
                  <br />
                  <div><span className="text-gray-500 dark:text-gray-400">// Initialize the application</span></div>
                  <div>fetchData().then(<span className="text-blue-600 dark:text-blue-400">result</span> = {'{'}</div>
                  <div>  console.log(<span className="text-green-600 dark:text-green-400">&apos;Data loaded successfully&apos;</span>, result);</div>
                  <div>  <span className="text-yellow-600 dark:text-yellow-400">renderDashboard</span>(result);</div>
                  <div>{'}'});</div>
                </code>
              </pre>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="order-first md:order-last"
          >
            <motion.div
              variants={fadeIn("left", 0.2)}
              className="bg-white dark:bg-dark-700 rounded-lg shadow-lg p-6 md:p-8"
            >
              <h3 className="text-xl font-semibold mb-4">Build SaaS Websites</h3>
              <p className="text-muted-foreground mb-6">
                Create scalable web applications your customers will love. Use our API and SDKs to integrate with your existing systems or build something entirely new.
              </p>
              <Button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
                Learn More
              </Button>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                      <span className="text-purple-600 dark:text-purple-300 text-sm font-semibold">JD</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                      &quot;Perfect product for both internal and external developers. The APIs are well-documented and easy to implement.&quot;
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      — James Doyle, Senior Developer at Acme Inc.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CodeSection;
