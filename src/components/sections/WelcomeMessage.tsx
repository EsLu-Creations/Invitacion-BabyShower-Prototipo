import { Heart } from "lucide-react";

const WelcomeMessage = () => {
  return (
    <section className="relative overflow-hidden bg-lumeritz-pearl px-6 py-28 text-lumeritz-emerald md:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,168,128,.08),transparent_65%)]" />

      <div className="absolute left-1/2 top-1/2 h-162.5 w-162.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lumeritz-gold/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <div
          className="flex items-center gap-5 text-lumeritz-gold animate-fade-in-up"
          style={{ animationDelay: "150ms" }}
        >
          <div className="h-px w-16 bg-lumeritz-gold/50" />

          <span className="text-xs uppercase tracking-[0.45em]">
            Con mucho cariño
          </span>

          <div className="h-px w-16 bg-lumeritz-gold/50" />
        </div>

        <h2
          className="mt-10 font-serif text-4xl md:text-6xl text-lumeritz-emerald animate-fade-in-up"
          style={{ animationDelay: "350ms" }}
        >
          Queridos familiares y amigos
        </h2>

        <div
          className="mt-10 flex items-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "500ms" }}
        >
          <div className="h-px w-20 bg-lumeritz-gold" />
          <div className="h-2 w-2 rounded-full bg-lumeritz-gold" />
          <div className="h-px w-20 bg-lumeritz-gold" />
        </div>

        <p
          className="mt-14 max-w-3xl text-lg leading-9 text-lumeritz-emerald/75 animate-fade-in-up"
          style={{ animationDelay: "700ms" }}
        >
          Nuestro corazón está lleno de ilusión porque muy pronto conoceremos al
          regalo más hermoso de nuestras vidas. Cada día nos acerca más al
          momento de abrazar a nuestro bebé, y no hay felicidad más grande que
          compartir este capítulo con las personas que más queremos.
        </p>

        <p
          className="mt-8 max-w-3xl text-lg leading-9 text-lumeritz-emerald/75 animate-fade-in-up"
          style={{ animationDelay: "900ms" }}
        >
          Su cariño, compañía y buenos deseos harán que este día sea aún más
          especial. Gracias por formar parte de nuestra historia y por
          acompañarnos en la dulce espera de esta nueva aventura.
        </p>

        <blockquote
          className="mt-16 max-w-2xl font-serif text-2xl italic text-lumeritz-gold animate-fade-in-up"
          style={{ animationDelay: "1150ms" }}
        >
          "Cada bebé llega para recordarnos que la vida siempre encuentra una
          nueva razón para sonreír."
        </blockquote>

        <div
          className="mt-20 animate-fade-in-up"
          style={{ animationDelay: "1400ms" }}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-lumeritz-gold/40" />

            <Heart className="h-4 w-4 text-lumeritz-gold" fill="currentColor" />

            <div className="h-px w-12 bg-lumeritz-gold/40" />
          </div>

          <p className="mt-8 text-xs uppercase tracking-[0.45em] text-lumeritz-gold">
            Con todo nuestro amor
          </p>

          <h3 className="mt-5 font-serif text-4xl italic text-lumeritz-emerald">
            Andrea & Alejandro
          </h3>
        </div>
      </div>
    </section>
  );
};

export default WelcomeMessage;
