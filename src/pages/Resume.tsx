
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Chris Tsekouras</h1>
            <p className="text-xl text-muted-foreground">Full Stack Developer</p>
            <p className="text-muted-foreground">Athens, Greece</p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Experience</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Tech Community Leader</h3>
                  <p className="text-muted-foreground">ZenLight</p>
                </div>
                <span className="text-primary font-medium">Present</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Building a social network focused on self-improvement and advice exchange. 
                Leading a community of no-code AI developers.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Dance Instructor</h3>
                  <p className="text-muted-foreground">Self-employed</p>
                </div>
                <span className="text-primary font-medium">Previous</span>
              </div>
              <p className="text-muted-foreground">
                Professional Argentine Tango and Latin dance teacher and event organizer.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Education</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Programming Excellence</h3>
                  <p className="text-muted-foreground">2-year programming school</p>
                </div>
                <span className="text-primary font-medium">Scholarship</span>
              </div>
              <p className="text-muted-foreground">
                Completed intensive programming curriculum with scholarship for academic excellence.
              </p>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-primary">Technical Skills</h2>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Full Stack Development</li>
                  <li>System Administration</li>
                  <li>Server Management</li>
                  <li>Web Development</li>
                  <li>Technical Support</li>
                  <li>Community Management</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6 text-primary">Soft Skills</h2>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Teaching</li>
                  <li>Community Building</li>
                  <li>Event Organization</li>
                  <li>Problem Solving</li>
                  <li>Communication</li>
                  <li>Leadership</li>
                </ul>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
