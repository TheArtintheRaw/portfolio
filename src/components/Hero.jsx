import { motion } from "framer-motion";
import { LaptopCanvas } from "./canvas";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#bf2051]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#bf2051]'>Roger</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Crafting experiences they'll remember.
            <br className='sm:block hidden' />- Building the Future Starts Today
            -
          </p>
        </div>
      </div>

      <LaptopCanvas />
    </section>
  );
};

export default Hero;
