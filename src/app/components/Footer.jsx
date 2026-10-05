import Link from "next/link";
import { FaShieldAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-ink px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
              <FaShieldAlt className="text-accent" />
            </span>
            <span className="text-xl font-black">Provenix</span>
          </div>
          <p className="text-sm leading-7 text-slate-400">
            Fraud investigations and digital intelligence for private clients and businesses.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-black uppercase tracking-[0.16em] text-slate-300">Services</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link href="/services" className="hover:text-white">Fraud & scams</Link></li>
            <li><Link href="/services" className="hover:text-white">Crypto forensics</Link></li>
            <li><Link href="/services" className="hover:text-white">Background checks</Link></li>
            <li><Link href="/services" className="hover:text-white">Corporate reviews</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-black uppercase tracking-[0.16em] text-slate-300">Company</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/process" className="hover:text-white">Process</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQs</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-black uppercase tracking-[0.16em] text-slate-300">Legal</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link href="/legal/privacy" className="hover:text-white">Privacy policy</Link></li>
            <li><Link href="/legal/terms" className="hover:text-white">Terms of service</Link></li>
            <li><Link href="/legal/disclaimer" className="hover:text-white">Disclaimer</Link></li>
          </ul>
          <p className="mt-6 text-sm leading-7 text-slate-400">
            15303 Ventura Blvd<br />
            Sherman Oaks, CA 91403<br />
            <a href="tel:+14244190622" className="hover:text-white">+1 424 419 0622</a>
          </p>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-8 text-sm text-slate-500">
        © {new Date().getFullYear()} Provenix. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
