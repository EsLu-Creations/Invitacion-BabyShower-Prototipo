import Hero from "../../components/layout/Hero";
import BabyGallery from "../../components/sections/BabyGallery";
import BabyGames from "../../components/sections/BabyGames";
import Countdown from "../../components/sections/Countdown";
import EventInfo from "../../components/sections/EventInfo";
import FinalAndFooter from "../../components/sections/FinalAndFooter";
import GiftsAndDressCode from "../../components/sections/GiftsAndDressCode";
import WelcomeMessage from "../../components/sections/WelcomeMessage";

const Baby = () => {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-lumeritz-pearl text-lumeritz-emerald antialiased">
      <Hero />
      <Countdown />
      <WelcomeMessage />
      <EventInfo />
      <GiftsAndDressCode />
      <BabyGallery />
      <BabyGames />
      <FinalAndFooter />
    </main>
  );
};

export default Baby;
