import Image from "next/image";
import bgImg from "../public/Images/herobg.png"
const Hero = () => {
    return ( 
        <section className="hero relative h-screen flex min-w-screen flex-col items-center ">
            {/* <Image src={bgImg} alt="Hero image" className="h-[95%] heroImg" /> */}
            <button className="bg-green-500 text-lg  p-5 px-8 rounded-full absolute bottom-0 text-black w-fit  z-10">asdghfjas</button>
        </section>
    );
}
 
export default Hero;