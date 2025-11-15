import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Sparkles, Users, Flame } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Men's Haircut",
    description: "Expert cuts including skin fades, bald fades, and precision styling",
    price: "Starting at $40",
  },
  {
    icon: Sparkles,
    title: "Haircut + Beard Trim",
    description: "Complete grooming package for the full gentleman experience",
    price: "Starting at $50",
  },
  {
    icon: Users,
    title: "Kid's Haircut",
    description: "Patient, professional cuts for ages 5-12",
    price: "Starting at $30",
  },
  {
    icon: Flame,
    title: "Hot Towel Shave",
    description: "Traditional straight razor shave with hot towel treatment",
    price: "Starting at $45",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 pt-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-5xl md:text-6xl text-foreground mb-4 tracking-wider">
            OUR SERVICES
          </h2>
          <p className="font-roboto text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium cuts and grooming services delivered with precision and style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-2 hover:border-primary transition-colors duration-300 bg-card">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bebas text-2xl text-foreground mb-2 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="font-roboto text-muted-foreground mb-4 text-sm">
                    {service.description}
                  </p>
                  <p className="font-roboto font-bold text-primary text-lg">
                    {service.price}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="font-roboto text-muted-foreground">
            Additional services available: Line-Up Only, Face Shave, Beard Line-Up
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
