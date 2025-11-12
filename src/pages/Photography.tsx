import Navigation from "@/components/Navigation";

const Photography = () => {
  // Placeholder images - you'll replace these with actual photos
  const photos = [
    { id: 1, title: "Urban Geometry", category: "Street" },
    { id: 2, title: "Golden Hour", category: "Portrait" },
    { id: 3, title: "Minimalist Product", category: "Product" },
    { id: 4, title: "City Nights", category: "Street" },
    { id: 5, title: "Natural Light", category: "Portrait" },
    { id: 6, title: "Abstract Architecture", category: "Editorial" },
    { id: 7, title: "Candid Moment", category: "Street" },
    { id: 8, title: "Studio Work", category: "Product" },
    { id: 9, title: "Black & White", category: "Portrait" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              Photography
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Proof that I occasionally leave the house with something other than a laptop
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-muted cursor-pointer"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <p className="text-sm text-muted-foreground mb-2">
                      {photo.category}
                    </p>
                    <h3 className="text-xl font-bold tracking-tight">
                      {photo.title}
                    </h3>
                  </div>
                </div>
                <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                  <p className="text-background font-medium">
                    Image placeholder — Add your photos later
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground text-sm">
              All images shot on film because it makes me look more artistic
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Photography;
