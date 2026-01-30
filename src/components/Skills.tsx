import { Globe, Database } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Globe,
      title: "Web Design & Development",
      skills: [
        { name: "HTML5", description: "Semantic and well-structured web pages" },
        { name: "CSS3", description: "Responsive layouts, Flexbox, Grid" },
        { name: "JavaScript", description: "Interactive features, DOM manipulation" },
        { name: "Responsive Design", description: "Mobile-friendly and cross-browser compatible" },
      ],
    },
    {
      icon: Database,
      title: "Python & Data Analysis",
      skills: [
        { name: "Python", description: "Core Python for data analysis" },
        { name: "NumPy", description: "Numerical computations and array operations" },
        { name: "Pandas", description: "Data cleaning, manipulation, and analysis" },
        { name: "Matplotlib", description: "Data visualization with charts and plots" },
        { name: "Seaborn", description: "Advanced statistical visualizations" },
        { name: "Jupyter Notebook", description: "Exploratory data analysis" },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider mb-4 block">
            Expertise
          </span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle mx-auto">
            A blend of web development and data analysis skills, ready to tackle diverse challenges.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card-elevated">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="group p-4 rounded-xl bg-secondary/50 hover:bg-accent/10 transition-colors"
                  >
                    <h4 className="font-medium text-foreground group-hover:text-accent transition-colors">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
