import Navigation from "@/components/Navigation";
import SubtleAnimations from "@/components/SubtleAnimations";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Photography = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const photos = [
    {
      id: 1,
      url: "https://res.cloudinary.com/di4s4vcah/image/upload/v1763010957/street_gwqaoz.jpg",
      title: "Urban Wanderer",
      category: "Street"
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/di4s4vcah/image/upload/v1763010957/street_gwqaoz.jpg",
      title: "Golden Portrait",
      category: "Portrait"
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/di4s4vcah/image/upload/v1762967310/20250203_194938_utmhje.heic",
      title: "Evening Glow",
      category: "Portrait"
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/di4s4vcah/image/upload/v1762967310/20250203_194938_utmhje.heic",
      title: "Afternoon Light",
      category: "Portrait"
    },
    {
      id: 5,
      url: "https://res.cloudinary.com/di4s4vcah/image/upload/v1762967309/oo_cvqifs.jpg",
      title: "Natural Mood",
      category: "Portrait"
    },
    {
      id: 6,
      url: "https://res.cloudinary.com/di4s4vcah/image/upload/v1762967308/IMG20231021174057_tk3pzt.heic",
      title: "Classic Frame",
      category: "Portrait"
    },
    {
      id: 7,
      url: "https://res.cloudinary.com/di4s4vcah/image/upload/v1762967308/IMG-20250922-WA0005_onmzj7.jpg",
      title: "Candid Capture",
      category: "Street"
    },
    {
      id: 8,
      url: "https://res.cloudinary.com/di4s4vcah/image/upload/v1763011057/DSC00423_yepigg.jpg",
      title: "Raw Emotion",
      category: "Portrait"
    },
    {
      id: 9,
      url: "https://res.cloudinary.com/di4s4vcah/image/upload/v1763046146/Screenshot_20251112_222232_Instagram_p6uf89.jpg",
      title: "Morning Shot",
      category: "Portrait"
    },
  ];

  const handlePrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null && selectedImage < photos.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle relative">
      <SubtleAnimations />
      <Navigation />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              Photography
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Serious portraits shot on mirrorless. No filters, no compromises.
            </p>
          </motion.div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="break-inside-avoid"
              >
                <div
                  onClick={() => setSelectedImage(index)}
                  className="group relative overflow-hidden rounded-sm cursor-pointer bg-muted"
                >
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-auto object-cover transition-smooth group-hover:scale-110 group-hover:rotate-1"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-xs text-muted-foreground mb-1">{photo.category}</p>
                      <h3 className="text-xl font-bold tracking-tight">{photo.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground text-sm">
              Shot on mirrorless • 24-bit captures • Zero compromise on quality
            </p>
          </motion.div>
        </div>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-muted hover:bg-muted/80 transition-fast z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {selectedImage > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                className="absolute left-4 sm:left-6 p-2 rounded-full bg-muted hover:bg-muted/80 transition-fast z-10"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}

            {selectedImage < photos.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 sm:right-6 p-2 rounded-full bg-muted hover:bg-muted/80 transition-fast z-10"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-6xl max-h-[90vh] relative"
            >
              <img
                src={photos[selectedImage].url}
                alt={photos[selectedImage].title}
                className="max-w-full max-h-[90vh] object-contain rounded-sm"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
                <p className="text-xs text-muted-foreground mb-1">
                  {photos[selectedImage].category}
                </p>
                <h3 className="text-2xl font-bold tracking-tight">
                  {photos[selectedImage].title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {selectedImage + 1} / {photos.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Photography;
