import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="bg-foam px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[32px] bg-ink px-8 py-14 text-center text-white">
        <h2 className="text-3xl font-black tracking-tight md:text-5xl">
          Ready to start your investigation?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/75">
          Tell us what happened. We will review the facts and explain the next step before any formal work begins.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-ink"
        >
          Book a consultation
          <FaArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default CTA;
