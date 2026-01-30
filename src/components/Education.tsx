import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="bg-card">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider mb-4 block">
            Background
          </span>
          <h2 className="section-title">Education & Achievements</h2>
          <p className="section-subtitle mx-auto">
            Academic foundation and recognitions that shaped my professional journey.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Education Card */}
          <div className="card-elevated">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Education</h3>
                <p className="text-sm text-muted-foreground">Academic Background</p>
              </div>
            </div>
            
            <div className="border-l-2 border-accent pl-6 space-y-2">
              <h4 className="text-lg font-semibold text-foreground">
                Bachelor of Computer Applications (BCA)
              </h4>
              <p className="text-muted-foreground">
                Khalsa College of Mohali Technology & Business Studies
              </p>
              <div className="flex items-center gap-2 text-accent">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">2022 - 2025</span>
              </div>
            </div>
          </div>
          
          {/* Achievements Card */}
          <div className="card-elevated">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                <Award className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Achievements</h3>
                <p className="text-sm text-muted-foreground">Certifications & Awards</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">
                      First Position - Moral Education Exam
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Recognized for outstanding performance in moral education
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">
                      Web Design Certificate
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Professional certification in web design and development
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
