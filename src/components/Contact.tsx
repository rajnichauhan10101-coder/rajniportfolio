import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rajnichauhan.js@gmail.com",
      href: "mailto:rajnichauhan.js@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9034566877",
      href: "tel:+919034566877",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ambala, India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider mb-4 block">
            Get In Touch
          </span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle mx-auto">
            I'm actively looking for opportunities to grow and contribute. 
            Feel free to reach out!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="card-elevated text-center p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              {contactInfo.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-medium text-foreground mb-1">{item.label}</h3>
                  {item.href ? (
                    <a 
                      href={item.href} 
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
            
            <div className="pt-8 border-t border-border">
              <p className="text-muted-foreground mb-6">
                Ready to discuss how I can contribute to your team
              </p>
              <a 
                href="mailto:rajnichauhan.js@gmail.com" 
                className="btn-accent inline-flex"
              >
                <Send className="w-4 h-4" />
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
