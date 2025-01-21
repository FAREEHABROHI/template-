import Hero from "./Components/Hero";
import PickAndDrop from "./Components/PickAndDrop";
import PopCars from "./Components/PopCars";
import RecomCars from "./Components/RecomCars";
import Cars from "./Components/Cars";
import Car1 from "../public/images/rentalCar1.png";
import Car2 from "../public/images/rentalCar2.png";
import Car3 from "../public/images/car3.png";
import car4 from "../public/images/car4.png";
import car5 from "../public/images/car5.png";
import car6 from "../public/images/car6.png";
import car7 from "../public/images/car7.png";
import car8 from "../public/images/car8.png";
import car9 from "../public/images/car9.png";
import Button from './Components/Button';
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <PickAndDrop styling="pt-8 sm:pt-12 lg:flex-row items-center lg:px-12 w-[100%] gap-4 xl:gap-8 px-4" style2="w-[100%] lg:w-[48%]"/>
      <PopCars
        style="px-4 lg:px-12 pt-12 pb-3"
        grid="grid-cols-4"
        speacility="Popular Cars"
        cars={[
          <Cars key={1} CarName="Koenigsegg" carTurbo="sport car" img={Car1} liter="90" capacity="2" price="$99.00" route="/Details"/>,
          <Cars key={2} CarName="Nissan GT-R" carTurbo="sport car" img={Car2} liter="80" capacity="2" price="$120.00" route="/Details"/>,
          <Cars key={3} CarName="Rolls - Royce"carTurbo="family car" img={Car3} liter="70" capacity="4" price="$180.10" route="/Details"/>,
          <Cars key={4} CarName="Nissan GT-R" carTurbo="sport car" img={Car2} liter="80" capacity="2" price="$120.00" route="/Details"/>,
        ]}
      />
      <RecomCars 
       heading={<h1 className="text-[20px] font-semibold">Recommendation Car</h1>}
       style="px-4 lg:px-12 pb-3 bg-[#F6F7F9]"
       gridCol="grid-cols-4"
       showMore={<div className='flex justify-center mt-6 mb-3'><Link href="/Category"><Button stylee="bg-[#3563E9] py-2 px-3 rounded-md" content="Show More Cars" contentStyle="text-white text-sm"/></Link></div>}
       cars={[
       <Cars key={1} CarName="All New Rush" carTurbo="family car" img={car4} liter="70" capacity="6" price="$78.00" route="/Details"/>,
       <Cars key={2} CarName="CR-V" carTurbo="family car" img={car5} liter="80" capacity="8" price="$80.00" route="/Details"/>,
       <Cars key={3} CarName="All New Terios" carTurbo="family car" img={car6} liter="90" capacity="2" price="$90.00" route="/Details"/>,
       <Cars key={4} CarName="CR-V" carTurbo="family car" img={car9} liter="80" capacity="6" price="$80.00" route="/Details"/>,
       <Cars key={5} CarName="MG ZX Exclusive" carTurbo="family car" img={car8} liter="70" capacity="4" price="$76.00" route="/Details"/>,
       <Cars key={6} CarName="New MG ZS" carTurbo="family car" img={car7} liter="80" capacity="6" price="$86.00" route="/Details"/>,
       <Cars key={7} CarName="MG ZX Exclusive" carTurbo="family car" img={car8} liter="70" capacity="4" price="$76.00" route="/Details"/>,
       <Cars key={8} CarName="New MG ZS" carTurbo="family car" img={car7} liter="80" capacity="6" price="$86.00" route="/Details"/>,
       ]}/>
    </>
  );
}
