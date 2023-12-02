import brownPatience from "@/assets/images/brown-patience-1.jpg";
import Image from "next/image";
import ButtonLink from "../ui/button-link";

export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="bg-yinmn-blue grid sm:grid-cols-2"
    >
      <div className="px-6 sm:px-8 lg:px-12 py-6 flex flex-col justify-center items-start gap-6 sm:gap-12 max-sm:order-2 text-white">
        <h1 className="font-semibold text-[38px] leading-[46px]">
          It’s time you finally authored that book
        </h1>
        <p className="font-medium text-[28px] leading-[38px]">
          Work with Brown Patience to write your book, and get your message into
          the world.
        </p>
        <ButtonLink link="schedule-a-call">schedule a call</ButtonLink>
      </div>

      <div
        role="img"
        aria-label="A picture of Brown Patience"
        className="w-auto h-[300px] sm:h-[500px] max-h-[500px] relative max-sm:order-1"
      >
        <Image
          src={brownPatience}
          alt=""
          priority
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
}
