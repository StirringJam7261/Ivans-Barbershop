import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Users } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Expert Craftsmanship",
    description: "Years of experience delivering precision cuts and fades",
  },
  {
    icon: Heart,
    title: "Community First",
    description: "Building relationships one haircut at a time",
  },
  {
    icon: Users,
    title: "Welcoming Atmosphere",
    description: "A place where everyone feels at home",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 pt-32 bg-background">
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
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="border-none shadow-lg bg-card">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6">
                    <Icon className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="font-bebas text-3xl text-foreground mb-3 tracking-wide">
                    {value.title}
                  </h3>
                  <p className="font-roboto text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="font-roboto text-lg text-foreground mb-4">
            <strong>Meet Ivan & The Team</strong>
          </p>
          <p className="font-roboto text-muted-foreground max-w-2xl mx-auto">
            Ivan, our master barber, has built a reputation for exceptional fades and attention to detail. 
            Along with our experienced team, we're dedicated to keeping Arlington looking fresh.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
