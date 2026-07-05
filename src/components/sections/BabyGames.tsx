import {
  CalendarDays,
  Scale,
  Baby,
  Trophy,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const BabyGames = () => {
  const phoneNumber = "5218112345678";

  const defaultMessage = encodeURIComponent(`👶✨ ¡Hola!

    Estas son mis predicciones para el Baby Shower 💛

    📅 Fecha en que nacerá:
    ⚖️ Peso:
    📏 Estatura:
    👦👧 Será:

    ❤️ Creo que se parecerá más a:

    🙋 Mi nombre es:
  `);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  const games = [
    {
      number: "01",
      title: "¿Qué día nacerá?",
      description: "Adivina la fecha exacta en la que conoceremos al bebé.",
      Icon: CalendarDays,
    },
    {
      number: "02",
      title: "¿Cuánto pesará?",
      description:
        "Haz tu mejor cálculo. ¡Quien más se acerque será el ganador!",
      Icon: Scale,
    },
    {
      number: "03",
      title: "¿Niña o Niño?",
      description: "Si aún es sorpresa, ¿qué te dice tu intuición?",
      Icon: Baby,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-lumeritz-pearl px-6 py-32 md:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,168,128,.08),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="text-center animate-fade-in-up">
          <span className="font-sans uppercase tracking-[0.35em] text-xs text-lumeritz-gold">
            Un pequeño juego
          </span>

          <h2 className="mt-5 font-serif text-4xl md:text-6xl text-lumeritz-emerald">
            Haz tus predicciones
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg italic leading-8 text-lumeritz-emerald/70">
            ¿Quién será el invitado que mejor conozca a nuestro bebé? Anímate a
            participar y descubre si eres el ganador durante el Baby Shower.
          </p>

          <div className="mx-auto mt-10 h-px w-28 bg-lumeritz-gold" />
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {games.map((game, index) => (
            <div
              key={game.number}
              className="group relative overflow-hidden rounded-3xl border border-lumeritz-gold/20 bg-white p-10 shadow-sm 
              transition-all duration-500 hover:-translate-y-3 hover:border-lumeritz-gold/40 hover:shadow-xl animate-fade-in-up"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <span className="absolute right-6 top-4 font-serif text-7xl text-lumeritz-gold/10">
                {game.number}
              </span>

              <div className="relative z-10">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-lumeritz-sage transition-all duration-500 
                  group-hover:scale-110 group-hover:rotate-6 group-hover:bg-lumeritz-gold"
                >
                  <game.Icon
                    className="h-8 w-8 text-lumeritz-emerald group-hover:text-white"
                    strokeWidth={1.5}
                  />
                </div>

                <div className="mt-8 h-px w-12 bg-lumeritz-gold" />

                <h3 className="mt-6 font-serif text-2xl text-lumeritz-emerald">
                  {game.title}
                </h3>

                <p className="mt-5 leading-7 text-lumeritz-emerald/70">
                  {game.description}
                </p>
              </div>
            </div>
          ))}

          <div
            className="group relative overflow-hidden rounded-3xl border border-lumeritz-gold/30 bg-lumeritz-emerald p-10 text-center 
              text-lumeritz-pearl shadow-lg animate-fade-in-up"
            style={{
              animationDelay: "450ms",
            }}
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-lumeritz-gold/20">
              <Trophy
                className="h-8 w-8 text-lumeritz-gold"
                strokeWidth={1.5}
              />
            </div>

            <h3 className="mt-8 font-serif text-3xl">Premio</h3>

            <p className="mt-6 leading-7 text-lumeritz-pearl/80">
              La persona que tenga más aciertos recibirá una sorpresa especial
              durante el Baby Shower.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-20 h-px w-40 bg-lumeritz-gold/40" />

        <div className="mt-10 text-center">
          <p className="mx-auto max-w-xl italic leading-8 text-lumeritz-emerald/70">
            Cada predicción será un hermoso recuerdo que volveremos a leer
            cuando finalmente conozcamos a nuestro bebé.
          </p>
        </div>

        <div
          className="mt-12 flex justify-center animate-fade-in-up"
          style={{
            animationDelay: "700ms",
          }}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 rounded-full bg-lumeritz-emerald px-10 py-5 font-sans text-sm 
            uppercase tracking-[0.2em] text-lumeritz-pearl shadow-lg transition-all duration-300 hover:-translate-y-1 
            hover:bg-lumeritz-emerald/95 hover:shadow-xl"
          >
            <MessageCircle className="h-5 w-5 text-lumeritz-gold transition-transform group-hover:scale-110" />

            <span>Enviar mis predicciones</span>

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BabyGames;
