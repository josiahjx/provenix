import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaBalanceScale,
  FaBuilding,
  FaCheck,
  FaFileAlt,
  FaGlobe,
  FaLock,
  FaSearch,
  FaShieldAlt,
  FaUser,
  FaUserSecret,
  FaUsers,
} from "react-icons/fa";

const heroServices = [
  { href: "/services", title: "Fraud & Scams", icon: FaShieldAlt },
  { href: "/services", title: "Crypto Forensics", icon: FaSearch },
  { href: "/services", title: "Background Checks", icon: FaUserSecret },
  { href: "/services", title: "Corporate Reviews", icon: FaBuilding },
];

const coreServices = [
  {
    title: "Fraud & Scams",
    text: "Look into investment fraud, impersonation, and other schemes where money has already left the account.",
    icon: FaShieldAlt,
  },
  {
    title: "Crypto Forensics",
    text: "Follow on-chain movement, identify likely exit points, and record what the trail actually shows.",
    icon: FaSearch,
  },
  {
    title: "Background Checks",
    text: "Review people and companies for public records, conflicts, and other issues that should be known before a decision.",
    icon: FaUserSecret,
  },
];

const processSteps = [
  {
    title: "Case review",
    text: "We look at what happened and say whether an investigation is realistic, and what a useful outcome could be.",
  },
  {
    title: "Investigation",
    text: "The team collects the records that matter and checks the leads that can still be verified.",
  },
  {
    title: "Evidence file",
    text: "Findings are written so they can be shared with counsel, police, or an internal decision-maker.",
  },
  {
    title: "Next action",
    text: "Where a formal step is needed, we coordinate with lawyers and the authorities who can take it.",
  },
];

const reasons = [
  {
    title: "Wider context",
    text: "A name, a company, or a single transfer is rarely the whole picture. We look for the connections around it.",
  },
  {
    title: "Outside sources",
    text: "Public records, open data, and specialist partners are checked against what the client already holds.",
  },
  {
    title: "Checked findings",
    text: "Nothing is passed on until someone on the team has reviewed it and can explain where it came from.",
  },
  {
    title: "One brief",
    text: "Technical tracing, field inquiries, and the written report sit in the same engagement instead of three vendors.",
  },
];

const deeper = [
  {
    title: "Locate counterparties",
    text: "Identify who sits behind an account, a wallet, or a company, including associates that keep appearing.",
    icon: FaUserSecret,
  },
  {
    title: "Group matters",
    text: "When several people were hit by the same scheme, the facts can be gathered once and used across the group.",
    icon: FaUsers,
  },
  {
    title: "Investigation desk",
    text: "Analysts and investigators work the same file, so a complex case does not stall between tools and people.",
    icon: FaSearch,
  },
];

function PillLink({ href, children, variant = "accent" }) {
  const styles = {
    accent: "bg-accent text-white hover:bg-ink",
    ink: "bg-ink text-white hover:bg-slate-800",
    outline: "border-2 border-ink text-ink hover:bg-ink hover:text-white",
    white: "bg-white text-ink hover:bg-accent hover:text-white",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] transition duration-300 hover:-translate-y-0.5 ${styles[variant]}`}
    >
      {children}
      <FaArrowRight className="text-sm" />
    </Link>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#e0f2f7] to-[#f0f9fb] px-4 pb-20 pt-16 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute -right-[10%] -top-1/2 h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle,rgba(98,191,202,0.18)_0%,transparent_70%)]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            <span className="text-[0.65rem] font-black uppercase tracking-[0.18em] text-slate-500">
              Welcome to Provenix
            </span>
          </div>
          <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-[-0.03em] text-ink md:text-7xl">
            Fraud investigations
            <span className="mt-2 block font-serif text-[0.72em] font-normal italic normal-case tracking-normal text-accent">
              and digital intelligence
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg font-medium leading-8 text-slate-600">
            Provenix Asset Intelligence investigates financial crime and hidden risk for private clients and businesses. We gather the facts, test them, and set out what can be done next.
          </p>
          <div className="mt-10 flex justify-center">
            <PillLink href="/contact">Start a case review</PillLink>
          </div>
          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
            {heroServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-[20px] border-2 border-slate-200 bg-white px-4 py-6 text-center transition duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-card"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-ink to-slate-800 transition group-hover:bg-accent group-hover:from-accent group-hover:to-accent">
                  <service.icon className="text-2xl text-accent group-hover:text-white" />
                </div>
                <p className="text-sm font-bold uppercase tracking-tight text-ink group-hover:text-accent md:text-base">
                  {service.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-ink px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="pointer-events-none absolute -right-24 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-accent/20 shadow-[0_0_0_84px_rgba(98,191,202,0.03)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-accent">Network view</p>
            <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.03em] md:text-6xl">
              Look past the name in front of you.
            </h2>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-snug">
              A standard check stops at the person, company, or transfer you can already see.
            </p>
            <p className="mt-4 max-w-xl text-base leading-8 text-white/80">
              Provenix Asset Intelligence maps related parties, payment routes, company structures, and the digital setup around them. The aim is to show what a surface review leaves out, before that gap becomes a loss you have to explain.
            </p>
            <div className="mt-8">
              <PillLink href="/about" variant="white">
                How we work
              </PillLink>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden rounded-[32px] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            <Image
              src="/images/network-intelligence.jpg"
              alt="A teal network of connected points across a dark office window"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 520px, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-ink px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-[32px] border border-white/10 bg-slate-900/60 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">For operating businesses</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Work inside the decision, not beside it.</h2>
            <p className="mt-4 leading-8 text-white/75">
              This is not a plug-in. Provenix Asset Intelligence sits with your team on the transactions, counterparties, and files that carry real exposure, and flags what needs a harder look before money moves.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-serif text-3xl italic leading-snug text-white">
              Analysts, outside records, and investigators on the same file.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Built for desks, payment firms, advisers, family offices, and other teams that cannot treat a risky payment as a routine check.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-foam px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-black tracking-tight text-ink md:text-5xl">How we can help you</h2>
            <p className="mt-3 text-slate-500">Choose the path that matches the problem.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="flex h-full flex-col rounded-[32px] border border-slate-200 bg-white p-10 shadow-card transition duration-300 hover:-translate-y-2 hover:border-accent/30">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-mist text-accent">
                <FaUser className="text-2xl" />
              </div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-accent">Private client</p>
              <h3 className="mt-2 text-3xl font-black text-ink">I&apos;m an individual</h3>
              <p className="mt-4 leading-7 text-slate-600">
                You lost money to an investment pitch, a crypto scheme, a job scam, or another fraud and need to know what can still be examined.
              </p>
              <ul className="mt-6 space-y-3 text-sm font-semibold text-ink">
                {["Understand the realistic options", "Match the case to the right inquiry", "Get a free first assessment"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <FaCheck className="text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <PillLink href="/contact" variant="ink">Request an assessment</PillLink>
              </div>
            </article>
            <article className="flex h-full flex-col rounded-[32px] border border-slate-200 bg-white p-10 shadow-card transition duration-300 hover:-translate-y-2 hover:border-accent/30">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-mist text-accent">
                <FaBuilding className="text-2xl" />
              </div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-accent">Organisations</p>
              <h3 className="mt-2 text-3xl font-black text-ink">I am a business</h3>
              <p className="mt-4 leading-7 text-slate-600">
                You need a background review, a fraud look, a payment check, or a discreet investigation before you commit.
              </p>
              <ul className="mt-6 space-y-3 text-sm font-semibold text-ink">
                {["Investigations led by the question, not a template", "Records from more than one source", "Corporate fraud and counterparty reviews"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <FaCheck className="text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <PillLink href="/contact" variant="ink">Talk to the team</PillLink>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-4xl font-black tracking-tight text-ink md:text-5xl">Our core services</h2>
              <p className="mt-3 max-w-xl text-slate-500">Three places most engagements begin.</p>
            </div>
            <Link href="/services" className="text-xs font-bold uppercase tracking-[0.16em] text-accent hover:text-ink">
              View all services
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {coreServices.map((service) => (
              <article key={service.title} className="rounded-3xl border border-slate-200 p-8 transition hover:-translate-y-1 hover:border-accent hover:shadow-card">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-mist text-accent">
                  <service.icon className="text-xl" />
                </div>
                <h3 className="text-xl font-black text-ink">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foam px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="relative min-h-[420px] overflow-hidden rounded-[32px] shadow-card">
            <Image
              src="/images/investigators-desk.jpg"
              alt="Two people reviewing a case at a quiet desk"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </div>
          <div>
            <h2 className="text-4xl font-black tracking-tight text-ink">Investigators, not a dashboard</h2>
            <p className="mt-4 max-w-2xl leading-8 text-slate-600">
              Some work happens at a desk. Some of it is commissioned through associates who can make inquiries on the ground. Those relationships give the file more than a screen of open data.
            </p>
          <div className="mt-8 grid gap-4">
            {[
              { label: "Reach", value: "Cross-border files" },
              { label: "Network", value: "Local associates when needed" },
              { label: "Handling", value: "Discreet by default" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl bg-white px-6 py-5 shadow-sm">
                <p className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-accent">{item.label}</p>
                <p className="mt-1 text-lg font-bold text-ink">{item.value}</p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-4xl font-black tracking-tight text-ink md:text-5xl">
            Focused work. A clear file.
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-3xl border border-slate-200 p-6">
                <span className="text-sm font-black text-accent">0{index + 1}</span>
                <h3 className="mt-3 text-lg font-black text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
            First response on new inquiries is prioritised
          </p>
        </div>
      </section>

      <section className="bg-[#f7fbfc] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black tracking-tight text-ink md:text-5xl">Clear findings. Usable answers.</h2>
            <p className="mt-4 leading-8 text-slate-600">
              We try to find more of the picture, check it, and hand you something you can act on.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {reasons.map((reason) => (
              <article key={reason.title} className="rounded-3xl bg-white p-8 shadow-sm">
                <h3 className="text-xl font-black text-ink">{reason.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-black tracking-tight text-ink">Want to go further?</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {deeper.map((item) => (
              <article key={item.title} className="rounded-[28px] bg-foam p-8">
                <item.icon className="text-2xl text-accent" />
                <h3 className="mt-5 text-2xl font-black text-ink">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">When the courts are next</p>
            <h2 className="mt-3 text-4xl font-black leading-tight tracking-tight md:text-5xl">
              Evidence first. Formal steps after.
            </h2>
            <p className="mt-5 leading-8 text-white/75">
              If recovery needs a lawyer, Provenix Asset Intelligence can introduce independent counsel. We prepare the investigative record. Regulated legal work stays with the lawyers instructed on the matter.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: FaLock, title: "Asset steps", text: "Counsel can seek disclosure and freezing orders from banks and exchanges where the law allows it." },
              { icon: FaFileAlt, title: "Court-ready file", text: "The material is organised so a legal team can use it without rebuilding the investigation." },
              { icon: FaBalanceScale, title: "Independent lawyers", text: "Legal advice and representation come from lawyers instructed separately, not from Provenix." },
              { icon: FaGlobe, title: "Cross-border cases", text: "Files often touch more than one country. We keep the facts in one place while local counsel handles their part." },
            ].map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <item.icon className="text-xl text-accent" />
                <h3 className="mt-4 font-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/70">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#e0f2f7] to-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">Direct conversation</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-ink md:text-6xl">
            Ready to start your investigation?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            Book a consultation with the team. We will look at the facts you have and tell you what a sensible next step is.
          </p>
          <div className="mt-8">
            <PillLink href="/contact">Book a consultation</PillLink>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {["Confidential first call", "A written view of options", "No obligation to proceed"].map((item) => (
              <p key={item} className="rounded-2xl bg-white px-4 py-5 text-sm font-bold text-ink shadow-sm">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
