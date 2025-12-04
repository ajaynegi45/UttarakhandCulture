"use client";

import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Github, Code, PenTool, Book, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-hand text-3xl text-secondary mb-2 block"
          >
            Join the Community
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-6 text-primary"
          >
            How You Can Contribute
          </motion.h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            You can get involved in code or non-code contributions. Here’s how you can help preserve our heritage.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Code Contributions */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-border/50"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Code className="w-6 h-6 text-blue-700" />
              </div>
              <h2 className="text-2xl font-bold font-serif">For Code Contributions</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">🐞 Found a Bug?</h3>
                <p className="text-muted-foreground">Open an issue with details or, even better, submit a pull request with the fix.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">🎉 Got a Feature Idea?</h3>
                <p className="text-muted-foreground">Share your feature ideas in an issue to discuss or go ahead and submit a pull request implementing the feature!</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">💅 Want to Improve the UI?</h3>
                <p className="text-muted-foreground">If you have design skills, we welcome UI improvements! Propose changes in layout, color scheme, or fonts—we love minimal and clean designs.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">💻 Tech Stack</h3>
                <p className="text-muted-foreground">We use React, Tailwind CSS, and Framer Motion. If you have expertise, your help is appreciated!</p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border/50">
               <a href="https://github.com/ajaynegi45/Uttarakhand-Culture-NewUI" target="_blank" rel="noopener noreferrer">
                 <Button className="w-full gap-2">
                   <Github className="w-4 h-4" /> View on GitHub
                 </Button>
               </a>
            </div>
          </motion.div>

          {/* Non-Code Contributions */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-border/50"
          >
             <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-orange-100 rounded-xl">
                <PenTool className="w-6 h-6 text-orange-700" />
              </div>
              <h2 className="text-2xl font-bold font-serif">For Non-Code Contributions</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">📄 Improve Documentation</h3>
                <p className="text-muted-foreground">Help us write or refine our documentation, making it easier for others to join the project.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">🎨 Website Design</h3>
                <p className="text-muted-foreground">Your creativity is welcome! Share design suggestions to improve the website’s aesthetic.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">📚 Gather Cultural Content</h3>
                <p className="text-muted-foreground">Choose an aspect of Uttarakhand’s culture—history, traditions, or nature—and gather authentic information. Please cite your sources.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">💡 Suggest a Name</h3>
                <p className="text-muted-foreground">We want a meaningful name in the local language. Share your ideas via email with the subject "Website Name Suggestion".</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border/50">
               <Button variant="outline" className="w-full gap-2">
                 <Mail className="w-4 h-4" /> Email Suggestions
               </Button>
            </div>
          </motion.div>

        </div>
      </Section>

      <Section centered className="bg-muted/20">
         <h2 className="text-3xl font-serif font-bold mb-6">Contributor Spotlight</h2>
         <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
           We value every contribution! To celebrate your efforts, we'll feature your name and photo on a dedicated "Contributors" page, where you'll receive full recognition for your impact.
         </p>
         <div className="flex -space-x-4 justify-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs text-gray-500">
                User
              </div>
            ))}
            <div className="w-12 h-12 rounded-full border-2 border-white bg-secondary text-white flex items-center justify-center text-xs font-bold">
              You?
            </div>
         </div>
      </Section>
    </div>
  );
}
