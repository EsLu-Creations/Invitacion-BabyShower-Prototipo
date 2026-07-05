import { Calendar, Clock, MapPin, ArrowUpRight } from "lucide-react";

const EventInfo = () => {
  return (
    <section className="relative overflow-hidden bg-lumeritz-sage px-6 py-32 text-lumeritz-emerald md:px-12">
      {/* Fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,168,128,.08),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Encabezado */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-5 text-lumeritz-gold animate-fade-in-up">
            <div className="h-px w-16 bg-lumeritz-gold/50" />

            <span className="text-xs uppercase tracking-[0.45em]">
              Nuestra celebración
            </span>

            <div className="h-px w-16 bg-lumeritz-gold/50" />
          </div>

          <h2 className="mt-8 font-serif text-4xl md:text-6xl animate-fade-in-up">
            Cuándo & Dónde
          </h2>

          <p className="mt-6 text-lg italic text-lumeritz-emerald/70 animate-fade-in-up">
            Esperamos compartir este día tan especial contigo.
          </p>
        </div>

        {/* Contenido */}
        <div className="mt-24 grid gap-20 lg:grid-cols-[1fr_420px]">
          {/* Información */}
          <div className="space-y-14">
            {/* Fecha */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "150ms" }}
            >
              <Calendar
                className="mb-5 h-6 w-6 text-lumeritz-gold"
                strokeWidth={1.5}
              />

              <p className="text-xs uppercase tracking-[0.35em] text-lumeritz-gold">
                Fecha
              </p>

              <h3 className="mt-3 font-serif text-4xl">
                Sábado, 24 de Octubre
              </h3>

              <p className="mt-2 text-lg text-lumeritz-emerald/70">2026</p>
            </div>

            {/* Hora */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              <Clock
                className="mb-5 h-6 w-6 text-lumeritz-gold"
                strokeWidth={1.5}
              />

              <p className="text-xs uppercase tracking-[0.35em] text-lumeritz-gold">
                Hora
              </p>

              <h3 className="mt-3 font-serif text-4xl">4:00 PM</h3>

              <p className="mt-2 text-lg text-lumeritz-emerald/70">
                Recepción desde las 3:30 PM
              </p>
            </div>

            {/* Lugar */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "450ms" }}
            >
              <MapPin
                className="mb-5 h-6 w-6 text-lumeritz-gold"
                strokeWidth={1.5}
              />

              <p className="text-xs uppercase tracking-[0.35em] text-lumeritz-gold">
                Lugar
              </p>

              <h3 className="mt-3 font-serif text-4xl">Jardín Las Magnolias</h3>

              <p className="mt-4 max-w-lg leading-8 text-lumeritz-emerald/70">
                Av. de la Primavera #123,
                <br />
                Colonia Las Rosas,
                <br />
                Guadalajara, Jalisco.
              </p>
            </div>
          </div>

          {/* Mapa */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "600ms" }}
          >
            <div className="overflow-hidden rounded-3xl border border-lumeritz-gold/20 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=900&q=80"
                alt="Mapa"
                className="h-72 w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <p className="mt-8 text-center text-sm leading-7 text-lumeritz-emerald/70">
              Toca el botón para abrir la ubicación exacta en Google Maps.
            </p>

            <div className="mt-10 flex justify-center">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 border-b border-lumeritz-gold pb-2 text-sm uppercase tracking-[0.35em] text-lumeritz-gold transition hover:gap-5"
              >
                Abrir ubicación
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  strokeWidth={1.5}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;
