
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
            <div className="mt-4 text-sm text-muted-foreground">
              <p>Aganippis 3, Zografou, Athens, 15773</p>
              <p>Email: tsekouras.x@outlook.com</p>
              <p>Tel: 6980012768</p>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Experience</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
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
                    <h3 className="text-xl font-semibold">Website Administrator</h3>
                    <p className="text-muted-foreground">Financial Company</p>
                  </div>
                  <span className="text-primary font-medium">2009 - 2018</span>
                </div>
                <p className="text-muted-foreground">
                  Maintained and managed company website using HTML, CSS, and cPanel.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Technical Support Manager</h3>
                    <p className="text-muted-foreground">Phone Technical Support</p>
                  </div>
                  <span className="text-primary font-medium">1/2019 - 4/2019</span>
                </div>
                <p className="text-muted-foreground">
                  Achieved 90% customer satisfaction rate through excellent technical support and problem-solving.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Warehouse Runner</h3>
                    <p className="text-muted-foreground">Seasonal Position - Black Friday/Holidays</p>
                  </div>
                  <span className="text-primary font-medium">9/2024 - 12/2024</span>
                </div>
                <p className="text-muted-foreground">
                  Excellent collaboration and team performance during peak seasons.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Education</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">IEK TEP</h3>
                    <p className="text-muted-foreground">Programming Excellence</p>
                  </div>
                  <span className="text-primary font-medium">2020-2022</span>
                </div>
                <p className="text-muted-foreground">
                  Completed intensive programming curriculum with one-year scholarship for academic excellence.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">English Language Certificate</h3>
                    <p className="text-muted-foreground">Lower Certificate</p>
                  </div>
                  <span className="text-primary font-medium">2014</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Advanced Excel Certification</h3>
                    <p className="text-muted-foreground">TUV Hellas Certificate</p>
                  </div>
                  <span className="text-primary font-medium">2023</span>
                </div>
              </div>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-primary">Technical Skills</h2>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Full Stack Development</li>
                  <li>HTML, CSS, cPanel</li>
                  <li>System Administration</li>
                  <li>Technical Support</li>
                  <li>Advanced Excel</li>
                  <li>English Language Proficiency</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6 text-primary">Personal Qualities</h2>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Calm and Composed</li>
                  <li>Hardworking</li>
                  <li>Well-organized</li>
                  <li>Leadership</li>
                  <li>Problem Solving</li>
                  <li>Team Collaboration</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Additional Activities</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-muted-foreground">
                Led dance groups at the Cultural Groups of the Student Center, University of Athens.
                Organized dozens of dance events and classes. Experienced in event organization and
                community building through dance education and cultural activities.
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
