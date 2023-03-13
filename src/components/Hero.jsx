import { LaptopCanvas } from "./canvas";
import { styles } from "../styles";

export default function Hero() {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row gap-5`}
      >
        <div className='flex flex-col items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#bf2051]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
      </div>
      <LaptopCanvas />
    </section>
  );
}
