import { Mail, MapPin, Phone, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      
      <div className="section-container relative z-10 text-center">
        <div className="animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6">
            Available for Opportunities
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-slide-up">
          Hi, I'm <span className="text-gradient">Rajni</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-up animate-delay-100">
          Web Developer & Data Analyst
        </p>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up animate-delay-200">
          Crafting responsive web experiences and transforming data into insights. 
          BCA graduate passionate about clean code and meaningful visualizations.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-slide-up animate-delay-300">
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
            <span>rajnichauhan.js@gmail.com</span>
          </a>
          <div className="hidden md:block w-1 h-1 rounded-full bg-border" />
          <a 
            href="tel:+919034566877" 
            className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <Phone className="w-4 h-4 text-accent" />
            <span>+91 9034566877</span>
          </a>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-4 animate-slide-up animate-delay-300">
          <a href="#contact" className="btn-accent">
            Get In Touch
          </a>
          <a href="#about" className="btn-primary">
            Learn More
          </a>
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
