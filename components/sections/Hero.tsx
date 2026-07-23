import HeroContent from "./HeroContent";
import HeroButtons from "./HeroButtons";
import HeroJackpotCard from "./HeroJackpotCard";

export default function Hero() {
  return (
    <section className="bg-[#081B33] text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">

        <div>
          <HeroContent />
          <HeroButtons />
        </div>
       <div className="lg:-ml-6 xl:-ml-8">
  <HeroJackpotCard />
</div>

      </div>
    </section>
  );
}