import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 pt-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-5xl md:text-6xl text-foreground mb-4 tracking-wider">
            VISIT US
          </h2>
          <p className="font-roboto text-lg text-muted-foreground">
            Walk-ins welcome, appointments preferred
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-2 bg-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bebas text-2xl text-foreground mb-2 tracking-wide">
                      LOCATION
                    </h3>
                    <p className="font-roboto text-muted-foreground">
                      916 W Division St Suite B<br />
                      Arlington, TX 76012
                    </p>

                    <a
                      href="https://maps.google.com/?q=916+W+Division+St+Suite+B,+Arlington,+TX+76012"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground font-roboto">
                        Get Directions
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 bg-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bebas text-2xl text-foreground mb-2 tracking-wide">
                      PHONE
                    </h3>
                    <p className="font-roboto text-muted-foreground mb-4">
                      (817) 987-2555
                    </p>
                    <a href="tel:+18179872555">
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-roboto">
                        Call Now
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 bg-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bebas text-2xl text-foreground mb-2 tracking-wide">
                      HOURS
                    </h3>
                    <div className="font-roboto text-muted-foreground space-y-1">
                      <p><strong>Monday:</strong> Closed</p>
                      <p><strong>Tuesday - Friday:</strong> 10:00 AM – 7:00 PM</p>
                      <p><strong>Saturday:</strong> 8:00 AM – 5:00 PM</p>
                      <p><strong>Sunday:</strong> 10:00 AM – 3:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="h-[600px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=916%20W%20Division%20St%20Suite%20B%2C%20Arlington%2C%20TX%2076012&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ivan's Barbershop Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
