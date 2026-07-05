import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

const Countdown = () => {
  const targetDate = new Date("2026-10-15T17:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="relative w-full py-24 px-6 md:px-12 bg-lumeritz-sage text-lumeritz-emerald overflow-hidden">
      <div
        className="absolute top-0 left-0 w-64 h-64 bg-lumeritz-gold/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4 
        pointer-events-none"
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="flex justify-center items-center mb-6 animate-pulse-soft">
          <Heart
            strokeWidth={1.5}
            className="w-8 h-8 text-lumeritz-gold"
            fill="currentColor"
            opacity={0.3}
          />
        </div>

        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-12 animate-fade-in-up">
          Falta muy poco...
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto">
          <div
            className="flex flex-col items-center justify-center bg-lumeritz-pearl py-6 px-4 md:py-8 rounded-2xl shadow-sm border 
            border-lumeritz-gold/20 animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            <span className="font-serif text-4xl md:text-5xl lg:text-6xl text-lumeritz-emerald mb-2">
              {timeLeft.days}
            </span>
            <span className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-lumeritz-gold font-semibold">
              Días
            </span>
          </div>

          <div
            className="flex flex-col items-center justify-center bg-lumeritz-pearl py-6 px-4 md:py-8 rounded-2xl shadow-sm border 
              border-lumeritz-gold/20 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <span className="font-serif text-4xl md:text-5xl lg:text-6xl text-lumeritz-emerald mb-2">
              {timeLeft.hours.toString().padStart(2, "0")}
            </span>
            <span className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-lumeritz-gold font-semibold">
              Horas
            </span>
          </div>

          <div
            className="flex flex-col items-center justify-center bg-lumeritz-pearl py-6 px-4 md:py-8 rounded-2xl shadow-sm border 
            border-lumeritz-gold/20 animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            <span className="font-serif text-4xl md:text-5xl lg:text-6xl text-lumeritz-emerald mb-2">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </span>
            <span className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-lumeritz-gold font-semibold">
              Minutos
            </span>
          </div>

          <div
            className="flex flex-col items-center justify-center bg-lumeritz-pearl py-6 px-4 md:py-8 rounded-2xl shadow-sm border 
            border-lumeritz-gold/20 animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            <span className="font-serif text-4xl md:text-5xl lg:text-6xl text-lumeritz-emerald mb-2">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </span>
            <span className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-lumeritz-gold font-semibold">
              Segundos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
