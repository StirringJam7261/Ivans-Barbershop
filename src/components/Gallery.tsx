import storefrontNight from "@/assets/storefront-night.jpg";
import fadeDesign from "@/assets/fade-design.jpg";
import fadeSide from "@/assets/fade-side.jpg";
import interior from "@/assets/interior.jpg";

const images = [
  {
    src: storefrontNight,
    alt: "Ivan's Barbershop storefront at night with illuminated red sign",
    title: "Our Shop",
  },
  {
    src: fadeDesign,
    alt: "Professional fade haircut with artistic line designs",
    title: "Precision Designs",
  },
  {
    src: fadeSide,
    alt: "Clean fade haircut side profile",
    title: "Expert Fades",
  },
  {
    src: interior,
    alt: "Ivan's Barbershop interior with professional barber chairs and stations",
    title: "Modern Shop",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 pt-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-5xl md:text-6xl text-foreground mb-4 tracking-wider">
            OUR WORK
          </h2>
          <p className="font-roboto text-lg text-muted-foreground">
            Check out some of our finest cuts and the Ivan's experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-secondary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="font-bebas text-2xl text-primary-foreground tracking-wider">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-roboto text-muted-foreground mb-4">
            Follow us on Instagram for more updates: <strong>@ivans_barbershop_tx</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
