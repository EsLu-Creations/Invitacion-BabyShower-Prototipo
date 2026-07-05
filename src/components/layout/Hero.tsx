import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-lumeritz-pearl text-lumeritz-emerald">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=1920&q=80"
          alt="Sesión de maternidad"
          className="h-full w-full object-cover object-center animate-subtle-zoom"
        />

        <div className="absolute inset-0 bg-linear-to-b from-lumeritz-pearl/20 via-lumeritz-pearl/65 to-lumeritz-pearl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(253,251,247,.08),rgba(253,251,247,.45),rgba(253,251,247,.9))]" />

        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#1b3b36_1px,transparent_1px)] bg-size-[24px_24px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-8 text-center">
        <div
          className="flex items-center gap-6 text-lumeritz-gold animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          <div className="h-px w-12 bg-lumeritz-gold/60" />

          <span className="text-xs uppercase tracking-[0.45em] font-medium">
            Con mucho amor
          </span>

          <div className="h-px w-12 bg-lumeritz-gold/60" />
        </div>

        <h2
          className="mt-10 font-serif text-5xl italic text-lumeritz-gold md:text-7xl animate-fade-in-up"
          style={{ animationDelay: "500ms" }}
        >
          Sofía
        </h2>

        <h1
          className="mt-4 font-serif text-6xl text-lumeritz-emerald md:text-8xl animate-cinematic-rise"
          style={{ animationDelay: "800ms" }}
        >
          Baby Shower
        </h1>

        <div
          className="mt-10 flex items-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "1000ms" }}
        >
          <div className="h-px w-16 bg-lumeritz-gold" />
          <div className="h-2 w-2 rounded-full bg-lumeritz-gold" />
          <div className="h-px w-16 bg-lumeritz-gold" />
        </div>

        <p
          className="mt-10 max-w-xl text-lg italic leading-8 text-lumeritz-emerald/70 animate-fade-in-up"
          style={{ animationDelay: "1200ms" }}
        >
          "La aventura más hermosa de nuestras vidas está por comenzar y
          queremos compartir este momento tan especial contigo."
        </p>

        <div
          className="mt-14 animate-fade-in-up"
          style={{ animationDelay: "1500ms" }}
        >
          <p className="text-xs uppercase tracking-[0.45em] text-lumeritz-gold">
            Domingo
          </p>

          <p className="mt-2 font-serif text-3xl text-lumeritz-emerald">
            18 Octubre 2026
          </p>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center animate-fade-in"
        style={{ animationDelay: "1800ms" }}
      >
        <div className="mb-5 h-px w-16 bg-lumeritz-gold/60" />

        <span className="text-[11px] uppercase tracking-[0.45em] text-lumeritz-gold">
          Desliza
        </span>

        <ChevronDown
          className="mt-3 h-6 w-6 text-lumeritz-gold animate-float"
          strokeWidth={1.5}
        />
      </div>
    </section>
  );
};

export default Hero;
