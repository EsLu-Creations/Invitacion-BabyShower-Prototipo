import { useEffect, useState } from "react";
import { Camera, ChevronLeft, ChevronRight, Search, X } from "lucide-react";

const photos = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=1200",
    className: "md:col-span-2 md:row-span-2 h-72 md:h-[34rem]",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/3933274/pexels-photo-3933274.jpeg?auto=compress&cs=tinysrgb&w=900",
    className: "h-72",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/6849562/pexels-photo-6849562.jpeg?auto=compress&cs=tinysrgb&w=900",
    className: "h-72",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/7089629/pexels-photo-7089629.jpeg?auto=compress&cs=tinysrgb&w=900",
    className: "md:row-span-2 h-72 md:h-[34rem]",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/3662630/pexels-photo-3662630.jpeg?auto=compress&cs=tinysrgb&w=1200",
    className: "md:col-span-2 md:row-span-2 h-72 md:h-[34rem]",
  },
];

const BabyGallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const close = () => setSelected(null);

  const next = () => {
    if (selected === null) return;
    setSelected((selected + 1) % photos.length);
  };

  const prev = () => {
    if (selected === null) return;
    setSelected((selected - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selected === null) return;

      if (e.key === "Escape") close();

      if (e.key === "ArrowRight") next();

      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [selected]);

  return (
    <>
      <section className="relative overflow-hidden bg-lumeritz-sage px-6 py-32 md:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,168,128,.08),transparent_70%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="text-center">
            <div className="flex items-center justify-center gap-5 text-lumeritz-gold animate-fade-in-up">
              <div className="h-px w-16 bg-lumeritz-gold/50" />

              <Camera className="h-5 w-5" strokeWidth={1.5} />

              <div className="h-px w-16 bg-lumeritz-gold/50" />
            </div>

            <h2 className="mt-8 font-serif text-4xl md:text-6xl text-lumeritz-emerald">
              La Dulce Espera
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg italic leading-8 text-lumeritz-emerald/70">
              Cada fotografía guarda un pedacito de la ilusión que sentimos
              mientras esperamos a nuestro bebé.
            </p>
          </div>

          <div className="mt-24 grid auto-rows-fr grid-cols-1 gap-8 md:grid-cols-3">
            {photos.map((photo, index) => (
              <button
                key={photo.id}
                onClick={() => setSelected(index)}
                className={`group relative overflow-hidden rounded-3xl shadow-lg ${photo.className} animate-fade-in-up`}
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <img
                  src={photo.src}
                  alt={`Fotografía ${index + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div
                  className="absolute inset-0 flex items-center justify-center bg-lumeritz-emerald/0 transition duration-500 
                  group-hover:bg-lumeritz-emerald/20"
                >
                  <div className="rounded-full bg-white/90 p-4 opacity-0 shadow-lg transition duration-500 group-hover:opacity-100">
                    <Search
                      className="h-6 w-6 text-lumeritz-emerald"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute right-8 top-8 rounded-full bg-white/10 p-3 text-white transition hover:bg-white hover:text-lumeritz-emerald"
          >
            <X className="h-7 w-7" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-8 rounded-full bg-white/10 p-4 text-white transition hover:bg-white hover:text-lumeritz-emerald"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-8 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-4 text-white transition hover:bg-white 
            hover:text-lumeritz-emerald"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="mx-20 overflow-hidden rounded-3xl shadow-2xl animate-fade-in-up"
          >
            <img
              src={photos[selected].src}
              alt="Fotografía"
              className="max-h-[85vh] max-w-[90vw] object-contain"
            />
          </div>

          <div className="absolute bottom-10 flex flex-col items-center gap-5">
            <span className="tracking-[0.35em] uppercase text-white/80 text-xs">
              {selected + 1} / {photos.length}
            </span>

            <div className="flex gap-3">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected(i);
                  }}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    i === selected
                      ? "bg-white scale-125"
                      : "bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BabyGallery;
