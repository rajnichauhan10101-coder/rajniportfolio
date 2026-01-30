import { Mail, MapPin, Phone, ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="animate-fade-in">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6">
                Available for Opportunities
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 animate-slide-up">
              Hi, I'm <span className="text-gradient">Rajni</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-slide-up animate-delay-100">
              Web Developer & Data Analyst
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 animate-slide-up animate-delay-200">
              Crafting responsive web experiences and transforming data into insights. 
              BCA graduate passionate about clean code and meaningful visualizations.
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 animate-slide-up animate-delay-300">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Ambala, India</span>
              </div>
              <div className="hidden md:block w-1 h-1 rounded-full bg-border" />
              <a 
                href="mailto:rajnichauhan.js@gmail.com" 
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-sm md:text-base">rajnichauhan.js@gmail.com</span>
              </a>
            </div>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-slide-up animate-delay-300">
              <a href="#contact" className="btn-accent">
                Get In Touch
              </a>
              <a href="#about" className="btn-primary">
                Learn More
              </a>
            </div>
          </div>
          
          {/* Profile Photo */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in">
            <div className="relative">
              {/* Animated ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-accent/30 animate-pulse-ring" />
              <div className="absolute -inset-8 rounded-full border border-accent/20 animate-rotate-slow" 
                   style={{ borderStyle: 'dashed' }} />
              
              {/* Decorative dots */}
              <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-accent animate-float" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-primary/50 animate-float" 
                   style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 -right-6 w-3 h-3 rounded-full bg-accent/60 animate-float" 
                   style={{ animationDelay: '0.5s' }} />
              
              {/* Photo container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-card shadow-2xl animate-float">
                <img 
                  src={profilePhoto} 
                  alt="Rajni - Web Developer & Data Analyst" 
                  className="w-full h-full object-cover object-top"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
        
        <a 
          href="#about" 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-accent transition-colors animate-bounce"
        >
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
