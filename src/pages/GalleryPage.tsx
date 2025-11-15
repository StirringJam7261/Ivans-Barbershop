import Gallery from "@/components/Gallery";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const GalleryPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Gallery />
      <Footer />
    </div>
  );
};

export default GalleryPage;
