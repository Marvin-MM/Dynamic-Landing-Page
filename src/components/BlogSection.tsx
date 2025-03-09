
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/framer-animations";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Design Things Fast",
      description: "Learn how to speed up your design workflow with our latest tools and techniques.",
      image: "/DesignThings.png",
      category: "Design",
    },
    {
      title: "Grow Your Audience",
      description: "Strategies for expanding your customer base and increasing engagement across platforms.",
      image: "/GrowAudience.png",
      category: "Marketing",
    },
    {
      title: "Support All Devices",
      description: "Build responsive applications that work seamlessly across desktop, mobile, and tablet.",
      image: "/SupportDevices.png",
      category: "Development",
    },
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
            Stay informed & inspired <br className="hidden sm:block" /> wherever you are
          </motion.h2>
          <motion.p 
            variants={fadeIn("up", 0.2)}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.1 * (index + 1))}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-dark-700 rounded-xl shadow-md overflow-hidden w-fit mx-auto"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-4">
                <div className="mb-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{post.description}</p>
                <Link to="#" className="text-blue-500 text-xs hover:text-blue-700 font-medium inline-flex items-center">
                  Read More
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
