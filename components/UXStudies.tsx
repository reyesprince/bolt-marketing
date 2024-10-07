"use client"

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const studies = [
  {
    title: "The Importance of MVP in Market Validation",
    description: "Learn how MVPs can help you validate your ideas quickly and cost-effectively.",
  },
  {
    title: "User-Centric Design in MVP Development",
    description: "Discover how focusing on user needs leads to more successful MVPs.",
  },
  {
    title: "Rapid Iteration: The Key to MVP Success",
    description: "Explore the benefits of fast, iterative development in the MVP process.",
  },
];

const UXStudies = () => {
  return (
    <section id="ux-studies" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          UX Studies
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {studies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{study.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{study.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UXStudies;