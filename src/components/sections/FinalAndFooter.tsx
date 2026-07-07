import {
  MessageCircle,
  Sparkles,
  Heart,
  ArrowRight,
  Flower2,
} from "lucide-react";

const FinalAndFooter = () => {
  const phoneNumber = "5218112345678";

  const defaultMessage =
    "¡Hola María y José! Confirmo mi asistencia al Baby Shower. Mi nombre es:";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    defaultMessage,
  )}`;

  return (
    <section className="relative overflow-hidden bg-lumeritz-emerald px-6 pt-32 pb-16 text-lumeritz-pearl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(197,168,128,.16),transparent_60%)]" />

      <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-lumeritz-gold/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="flex items-center justify-center gap-5 animate-fade-in-up">
          <div className="h-px w-20 bg-lumeritz-gold/40" />

          <Flower2 className="h-5 w-5 text-lumeritz-gold" strokeWidth={1.5} />

          <div className="h-px w-20 bg-lumeritz-gold/40" />
        </div>

        <h2 className="mt-10 font-serif text-4xl md:text-6xl text-lumeritz-gold animate-fade-in-up">
          Nos encantará compartir
          <br />
          este momento contigo
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-lumeritz-pearl/80 animate-fade-in-up">
          Tu compañía hará aún más especial este día. Esperamos contar con tu
          presencia para celebrar juntos la llegada de nuestro bebé.
        </p>

        <div
          className="mx-auto mt-14 max-w-md rounded-3xl border border-lumeritz-gold/20 bg-white/5 px-8 py-8 backdrop-blur-sm animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-lumeritz-gold">
            Confirma antes del
          </p>

          <h3 className="mt-3 font-serif text-4xl text-lumeritz-pearl">
            10 de Octubre
          </h3>
        </div>

        <div
          className="mt-14 animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 rounded-full bg-lumeritz-gold px-10 py-5 font-sans text-sm uppercase tracking-[0.2em] 
            text-lumeritz-emerald shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-lumeritz-pearl"
          >
            <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />

            <span>Confirmar asistencia</span>

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div
          className="mt-24 flex items-center justify-center gap-5 animate-fade-in-up"
          style={{ animationDelay: "600ms" }}
        >
          <div className="h-px w-16 bg-lumeritz-gold/30" />

          <Heart className="h-4 w-4 text-lumeritz-gold" fill="currentColor" />

          <div className="h-px w-16 bg-lumeritz-gold/30" />
        </div>

        <p
          className="mx-auto mt-12 max-w-2xl font-serif text-3xl italic leading-relaxed text-lumeritz-pearl animate-fade-in-up"
          style={{ animationDelay: "800ms" }}
        >
          "Gracias por formar parte de esta hermosa etapa de nuestras vidas."
        </p>

        <div
          className="mt-14 animate-fade-in-up"
          style={{ animationDelay: "1000ms" }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-lumeritz-gold">
            Con mucho amor
          </p>

          <div className="mt-6 flex items-center justify-center gap-6">
            <span className="font-serif text-4xl md:text-5xl">Andrea</span>
            <span className="font-serif text-5xl text-lumeritz-gold">&</span>
            <span className="font-serif text-4xl md:text-5xl">Alejandro</span>
          </div>
        </div>

        <div
          className="mt-28 animate-fade-in-up"
          style={{ animationDelay: "1200ms" }}
        >
          <div className="mx-auto mb-10 h-px w-40 bg-lumeritz-gold/20" />

          <p className="text-sm italic text-lumeritz-pearl/60">
            Hecho con amor para celebrar una nueva historia.
          </p>

          <a href="#" className="group mt-8 inline-flex items-center gap-3">
            <Sparkles className="h-4 w-4 text-lumeritz-gold transition-transform duration-300 group-hover:rotate-12" />

            <span className="font-serif text-2xl uppercase tracking-[0.35em] text-lumeritz-gold">
              EsLu Creations
            </span>

            <Sparkles className="h-4 w-4 text-lumeritz-gold transition-transform duration-300 group-hover:-rotate-12" />
          </a>

          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-lumeritz-pearl/40">
            Invitaciones digitales memorables
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalAndFooter;
