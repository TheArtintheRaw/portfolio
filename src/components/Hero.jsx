import { styles } from "../styles";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row gap-5`}
      >
        <Navbar className="flex flex-col bottom-[120px] inset-0 " />
      </div>
    </section>
  );
}
