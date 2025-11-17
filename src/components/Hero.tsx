import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-barbershop.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-secondary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-bebas text-6xl md:text-8xl text-primary-foreground mb-6 tracking-wider">
          FRESH CUTS.<br />SHARP FADES.
        </h1>
        <p className="font-roboto text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Real community vibes at Arlington's premier barbershop
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="tel:+18179872555">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-roboto font-bold text-lg px-8 py-6"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (817) 987-2555
            </Button>
          </a>
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-roboto font-bold text-lg px-8 py-6"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
            </Button>
          </Link>
        </div>

        <p className="font-roboto text-primary-foreground/80 mt-6 text-sm">
          Walk-ins welcomed • Appointments preferred
        </p>
      </div>
    </section>
  );
};

export default Hero;
