import Navbar from "./Navbar";

const Hero = () => {
    return ( 
        <section className="hero relative overflow-x-hidden h-screen flex min-w-screen flex-col items-center ">
        <Navbar/>

            {/* <Image src={bgImg} alt="Hero image" className="h-[95%] heroImg" /> */}
            <button className="bg-slate-100 font-bold text-gray-500 text-xl p-5 px-8 rounded-full absolute bottom-5  w-fit  z-10">asdghfjas</button>
        </section>
    );
}
 
export default Hero;