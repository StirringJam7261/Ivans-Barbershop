import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Scissors, Clock, MapPin } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen pt-20">
      <Hero />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-5xl md:text-6xl text-foreground mb-4 tracking-wider">
              WHY IVAN'S
            </h2>
            <p className="font-roboto text-lg text-muted-foreground max-w-3xl mx-auto">
              Located in the heart of Arlington, Ivan's Barbershop is more than just a place to get a haircut—it's where 
              style meets community. Our skilled team is committed to precision, comfort, and creating an atmosphere where 
              you can relax and leave looking your absolute best.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Scissors className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bebas text-2xl text-foreground mb-2 tracking-wide">
                EXPERT BARBERS
              </h3>
              <p className="font-roboto text-muted-foreground">
                Master craftsmen specializing in fades, line-ups, and beard grooming
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bebas text-2xl text-foreground mb-2 tracking-wide">
                FLEXIBLE HOURS
              </h3>
              <p className="font-roboto text-muted-foreground">
                Open Tuesday-Sunday with extended hours to fit your schedule
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bebas text-2xl text-foreground mb-2 tracking-wide">
                ARLINGTON LOCATION
              </h3>
              <p className="font-roboto text-muted-foreground">
                Conveniently located on W Division St in the heart of Arlington
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-bebas text-4xl md:text-5xl text-foreground mb-4 tracking-wider">
            READY FOR A FRESH CUT?
          </h2>
          <p className="font-roboto text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Walk-ins are always welcome, but appointments are preferred to guarantee your spot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-roboto font-bold text-lg px-8">
                View Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="font-roboto font-bold text-lg px-8">
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
