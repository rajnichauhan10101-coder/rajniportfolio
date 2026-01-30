import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm opacity-80 flex items-center justify-center gap-1">
          © 2025 Rajni. Built with 
          <Heart className="w-4 h-4 text-accent inline" />
          and dedication.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
