import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus J.",
    text: "Best fade in Arlington, hands down. Ivan and his team always deliver.",
    rating: 5,
  },
  {
    name: "David R.",
    text: "The atmosphere is great, and the cuts are always on point. Highly recommend!",
    rating: 5,
  },
  {
    name: "Carlos M.",
    text: "Professional service, friendly staff, and attention to detail. My go-to barbershop.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-5xl md:text-6xl text-foreground mb-4 tracking-wider">
            WHAT OUR CLIENTS SAY
          </h2>
          <p className="font-roboto text-lg text-muted-foreground">
            Don't just take our word for it
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 bg-card">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-roboto text-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-roboto font-bold text-muted-foreground">
                  — {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
