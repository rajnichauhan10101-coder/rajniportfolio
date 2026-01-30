import { Code2, BarChart3, Sparkles } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Building responsive, user-friendly websites with modern technologies",
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      description: "Transforming raw data into actionable insights with Python",
    },
    {
      icon: Sparkles,
      title: "Fresh Perspective",
      description: "Eager to learn, grow, and contribute to real-world projects",
    },
  ];

  return (
    <section id="about" className="bg-card">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-accent font-medium text-sm uppercase tracking-wider mb-4 block">
              About Me
            </span>
            <h2 className="section-title">
              Passionate About Building & Analyzing
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a Bachelor of Computer Applications (BCA) graduate with a strong 
                foundation in web design and data analysis. I have hands-on experience 
                in building responsive and user-friendly websites using HTML, CSS, and JavaScript.
              </p>
              <p>
                Alongside web development, I have completed a comprehensive Python course 
                where I worked extensively with libraries such as NumPy, Pandas, Matplotlib, 
                and Seaborn for data analysis and visualization.
              </p>
              <p>
                I have practical experience performing data analysis in Jupyter Notebook, 
                including data cleaning, exploration, and visual representation to derive 
                meaningful insights. I am detail-oriented, eager to learn, and continuously 
                working on improving my technical and problem-solving skills.
              </p>
              <p className="text-foreground font-medium">
                I am looking for opportunities where I can apply my knowledge, grow 
                professionally, and contribute to real-world projects.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="card-elevated flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
