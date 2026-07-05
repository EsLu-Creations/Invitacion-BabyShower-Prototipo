import { ArrowUpRight, Gift, Shirt } from "lucide-react";

const colors = [
  { name: "Marfil", color: "#F8F5EE" },
  { name: "Arena", color: "#DCC7A1" },
  { name: "Salvia", color: "#C7D2C2" },
  { name: "Beige", color: "#E8DCC8" },
  { name: "Blanco", color: "#FFFFFF" },
];

const GiftsAndDressCode = () => {
  return (
    <section className="relative overflow-hidden bg-lumeritz-pearl px-6 py-32 text-lumeritz-emerald md:px-12">
      {/* Fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,168,128,.08),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Encabezado */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-5 text-lumeritz-gold animate-fade-in-up">
            <div className="h-px w-16 bg-lumeritz-gold/50" />

            <span className="text-xs uppercase tracking-[0.45em]">
              Información importante
            </span>

            <div className="h-px w-16 bg-lumeritz-gold/50" />
          </div>

          <h2 className="mt-8 font-serif text-4xl md:text-6xl animate-fade-in-up">
            Algunos detalles
          </h2>

          <p className="mt-6 text-lg italic text-lumeritz-emerald/70 animate-fade-in-up">
            Queremos que disfrutes este día tanto como nosotros.
          </p>
        </div>

        {/* Contenido */}
        <div className="mt-24 grid gap-20 lg:grid-cols-2">
          {/* Obsequios */}
          <div
            className="text-center lg:text-left animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <Gift
              className="mx-auto mb-6 h-7 w-7 text-lumeritz-gold lg:mx-0"
              strokeWidth={1.5}
            />

            <p className="text-xs uppercase tracking-[0.4em] text-lumeritz-gold">
              Obsequios
            </p>

            <h3 className="mt-4 font-serif text-4xl">
              Tu presencia es el mejor regalo
            </h3>

            <p className="mt-8 leading-8 text-lumeritz-emerald/70">
              Si deseas tener un detalle para nuestro bebé, hemos preparado una
              mesa de regalos con mucho cariño.
            </p>

            <div className="mt-10">
              <a
                href="#"
                className="group inline-flex items-center gap-3 border-b border-lumeritz-gold pb-2 text-sm uppercase tracking-[0.35em] text-lumeritz-gold transition-all hover:gap-5"
              >
                Ver mesa de regalos
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </a>
            </div>
          </div>

          {/* Dress Code */}
          <div
            className="text-center lg:text-left animate-fade-in-up"
            style={{ animationDelay: "500ms" }}
          >
            <Shirt
              className="mx-auto mb-6 h-7 w-7 text-lumeritz-gold lg:mx-0"
              strokeWidth={1.5}
            />

            <p className="text-xs uppercase tracking-[0.4em] text-lumeritz-gold">
              Código de vestimenta
            </p>

            <h3 className="mt-4 font-serif text-4xl">Casual · Tonos Neutros</h3>

            <p className="mt-8 leading-8 text-lumeritz-emerald/70">
              Nos encantará que nos acompañes vistiendo colores suaves y
              naturales para mantener la armonía de esta celebración.
            </p>

            {/* Paleta */}
            <div className="mt-12 flex justify-center gap-6 lg:justify-start">
              {colors.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col items-center gap-3"
                >
                  <div
                    className="h-12 w-12 rounded-full border border-lumeritz-gold/20 shadow-sm"
                    style={{ backgroundColor: item.color }}
                  />

                  <span className="text-[11px] uppercase tracking-wider text-lumeritz-emerald/70">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="mt-28 flex items-center justify-center gap-5">
          <div className="h-px w-20 bg-lumeritz-gold/40" />
          <div className="h-2 w-2 rounded-full bg-lumeritz-gold" />
          <div className="h-px w-20 bg-lumeritz-gold/40" />
        </div>
      </div>
    </section>
  );
};

export default GiftsAndDressCode;
