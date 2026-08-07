import HeroContent from "./HeroContent";
import HeroButtons from "./HeroButtons";
import HeroJackpotCard from "./HeroJackpotCard";

export default function Hero() {
  return (
    <section className="bg-[#081B33] text-white pt-32 pb-20">
       <div className="max-w-[1400px] mx-auto px-2 grid lg:grid-cols-[1.35fr_0.85fr] gap-10 items-center">
          
        <div>
          <HeroContent />
          <HeroButtons />
        </div>
       <div className="flex justify-end">
  <HeroJackpotCard />
</div>

      </div>
    </section>
  );
}