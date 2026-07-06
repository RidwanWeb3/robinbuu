import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Copy, Check, Wallet, Coins, ArrowLeftRight, PartyPopper, Twitter, Send } from "lucide-react";
import heroImg from "@/assets/hero.png";
import aboutImg from "@/assets/about.png";
import logoImg from "@/assets/logo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "$ROBINBUU — Pinkest menace on Robinhood Chain" },
      { name: "description", content: "Robin Buu on Robinhood Chain. Candy beams, dip-eating, infinite regen." },
    ],
  }),
  component: Index,
});

const CONTRACT = "Coming soon";
const BUY_URL = "https://fun.noxa.fi/robinhood";
const CHART_URL = "";
const X_URL = "https://x.com/Therobinbuu";
const TG_URL = "https://t.me/buubnb";

const marqueeItems = [
  "EATS THE DIPS", "$ROBINBUU", "TURN THE CHART SWEET", "REGENERATES FROM ANY RUG",
  "$ROBINBUU", "POWERED BY PURE MAJIN CHAOS", "CANDY BEAM ACTIVATED", "ROBIN BUU EATS THE DIPS",
];

function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="overflow-hidden border-y-[3px] border-[var(--ink)] bg-[var(--yellow)] py-3">
      <div className="flex w-max marquee-track gap-10 whitespace-nowrap">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-xl tracking-wider text-[var(--ink)]">
            {t} <span className="text-[var(--pink-deep)]">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Contract() {
  const [copied, setCopied] = useState(false);
  const isComingSoon = CONTRACT === "Coming soon";
  return (
    <button
      onClick={() => {
        if (isComingSoon) return;
        navigator.clipboard.writeText(CONTRACT);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="pop flex w-full max-w-xl items-center gap-3 rounded-full bg-white px-3 py-2 text-left transition active:translate-x-1 active:translate-y-1 active:shadow-none"
    >
      <span className="rounded-full bg-[var(--pink)] px-3 py-1 text-xs font-bold uppercase tracking-wider">Contract</span>
      <span className="flex-1 truncate font-mono text-sm text-[var(--ink)]">{CONTRACT}</span>
      {!isComingSoon && (
        <span className="flex items-center gap-1 text-xs font-bold uppercase text-[var(--purple)]">
          {copied ? <><Check className="h-4 w-4" /> Copied</> : <><Copy className="h-4 w-4" /> Copy</>}
        </span>
      )}
    </button>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-[var(--ink)] bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#top" className="flex items-center gap-2">
          <img src={logoImg} alt="$ROBINBUU logo" className="h-10 w-10 rounded-full border-[3px] border-[var(--ink)]" />
          <span className="font-display text-2xl text-[var(--pink-deep)]">$ROBINBUU</span>
        </a>
        <nav className="hidden gap-7 text-sm font-semibold uppercase tracking-wider md:flex">
          <a href="#about" className="hover:text-[var(--pink-deep)]">About</a>
          <a href="#tokenomics" className="hover:text-[var(--pink-deep)]">Tokenomics</a>
          <a href="#how" className="hover:text-[var(--pink-deep)]">How to Buy</a>
          <a href="#join" className="hover:text-[var(--pink-deep)]">Join</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href={X_URL} target="_blank" rel="noreferrer" aria-label="X"
            className="pop flex h-10 w-10 items-center justify-center rounded-full bg-white">
            <Twitter className="h-4 w-4" />
          </a>
          <a href={TG_URL} target="_blank" rel="noreferrer" aria-label="Telegram"
            className="pop flex h-10 w-10 items-center justify-center rounded-full bg-[var(--pink)]">
            <Send className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40"
        style={{ backgroundImage: "radial-gradient(circle, var(--ink) 1px, transparent 1.5px)", backgroundSize: "22px 22px" }} />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="pop inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
            🍬 Pure Majin chaos · Robinhood Chain
          </span>
          <h1 className="mt-6 text-5xl leading-[0.95] md:text-7xl">
            <span className="block text-[var(--ink)]">Meet the pinkest</span>
            <span className="block text-[var(--ink)]">menace on Robinhood</span>
            <span className="mt-3 block text-7xl text-[var(--pink-deep)] md:text-8xl"
              style={{ WebkitTextStroke: "2px var(--ink)" }}>
              ROBIN $BUU
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-[var(--ink)]/80">
            Robin Buu turns candy into chocolate, dips into snacks, and charts into pure sugar. Can't be rugged, can't be killed — he just regenerates and eats again, now stealing from the whales and feeding the Robinhood Chain degens.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={BUY_URL} target="_blank" rel="noreferrer"
              className="pop-lg rounded-full bg-[var(--yellow)] px-7 py-3 font-display text-xl tracking-wider transition active:translate-x-1 active:translate-y-1 active:shadow-none">
              Buy $ROBINBUU
            </a>
            {CHART_URL && (
              <a href={CHART_URL} target="_blank" rel="noreferrer"
                className="pop-lg rounded-full bg-white px-7 py-3 font-display text-xl tracking-wider transition active:translate-x-1 active:translate-y-1 active:shadow-none">
                View Chart
              </a>
            )}
          </div>
          <div className="mt-8"><Contract /></div>
        </div>

        <div className="relative">
          <div className="pop-lg relative mx-auto max-w-md rounded-3xl bg-[var(--ink)] p-6">
            <span className="pop absolute -top-3 right-6 rounded-full bg-[var(--yellow)] px-3 py-1 text-xs font-bold">
              🎯 +1000%
            </span>
            <img src={heroImg} alt="Robin Buu holding a giant coin" className="float w-full" />
            <span className="pop absolute -bottom-3 left-6 rounded-full bg-[var(--pink)] px-3 py-1 text-xs font-bold">
              CANDY BEAM ⚡
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const traits = [
    { icon: "♻️", title: "Regenerates", text: "Blow him up, he comes back bigger. The original diamond hands of Robinhood Chain. You literally cannot get rid of him." },
    { icon: "🍩", title: "Steals the dips", text: "Every red candle is a snack. Robin Buu robs the whales and drops the loot on the poor degens." },
    { icon: "⚡", title: "Candy beam", text: "One zap turns the whole chart into sugar. Sweetness is not optional around here." },
  ];
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="pop-lg relative rounded-3xl bg-white p-6">
          <img src={aboutImg} alt="Robin Buu firing a candy beam" className="w-full" />
          <span className="pop absolute right-4 top-4 rounded-full bg-[var(--pink)] px-3 py-1 text-xs font-bold">Majin Energy 100%</span>
        </div>
        <div>
          <span className="font-display text-sm uppercase tracking-[0.3em] text-[var(--purple)]">The Legend</span>
          <h2 className="mt-2 text-5xl text-[var(--ink)] md:text-6xl">Who is Robin Buu?</h2>
          <p className="mt-5 text-lg text-[var(--ink)]/80">
            Born from pure mischief and an unstoppable sweet tooth, Robin Buu is the pink chaos goblin the charts deserve. He doesn't care about your candles, your TA, or your sleep schedule — he only cares about robbing whales and sharing candy.
          </p>
          <p className="mt-3 text-lg text-[var(--ink)]/80">
            He just wants snacks, friends, and to turn everything into candy — and somehow that's the most honest tokenomics on Robinhood Chain. No roadmap. No promises. Just vibes, sugar, and infinite regeneration.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {traits.map(t => (
              <div key={t.title} className="pop rounded-2xl bg-white p-4">
                <div className="text-3xl">{t.icon}</div>
                <h3 className="mt-2 text-xl text-[var(--ink)]">{t.title}</h3>
                <p className="mt-1 text-sm text-[var(--ink)]/70">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Tokenomics() {
  const stats = [
    { value: "1B", label: "Total Supply" },
    { value: "3 / 3%", label: "Buy / Sell Tax" },
    { value: "Locked", label: "Liquidity" },
    { value: "Renounced", label: "Contract" },
  ];
  return (
    <section id="tokenomics" className="bg-[var(--pink)] border-y-[3px] border-[var(--ink)]">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center">
          <span className="font-display text-sm uppercase tracking-[0.3em] text-[var(--purple)]">Tokenomics</span>
          <h2 className="mt-2 text-5xl text-[var(--ink)] md:text-6xl">The Robin Buu Recipe</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--ink)]/80">
            Simple ingredients. No funny business. Just sugar, liquidity, and a Robinhood Chain community that refuses to stop snacking.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-[1.2fr_2fr]">
          <div className="pop-lg rounded-3xl bg-[var(--ink)] p-8 text-center text-white">
            <div className="font-display text-sm uppercase tracking-[0.3em] text-[var(--yellow)]">Total Supply of $ROBINBUU</div>
            <div className="mt-4 font-display text-6xl text-[var(--pink)]">1,000,000,000</div>
            <div className="mt-2 font-display text-2xl text-white/70">1B</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map(s => (
              <div key={s.label} className="pop rounded-2xl bg-white p-6 text-center">
                <div className="font-display text-4xl text-[var(--pink-deep)]">{s.value}</div>
                <div className="mt-1 text-sm font-semibold uppercase tracking-wider text-[var(--ink)]/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center gap-4">
          <Contract />
          <p className="max-w-xl text-center text-sm text-[var(--ink)]/70">
            Liquidity locked, contract renounced, 3% tax to keep the candy jar full. No funny business, just snacks — the Robinhood way.
          </p>
        </div>
      </div>
    </section>
  );
}

function HowToBuy() {
  const steps = [
    { icon: Wallet, title: "Get a wallet", text: "Download MetaMask or Trust Wallet and add the Robinhood Chain network." },
    { icon: Coins, title: "Fund with RBH", text: "Grab some RBH (Robinhood Chain gas token) on any supported exchange and send it to your wallet." },
    { icon: ArrowLeftRight, title: "Swap on the DEX", text: "Open the Robinhood Chain DEX, paste the $ROBINBUU contract below, and swap your RBH for $ROBINBUU." },
    { icon: PartyPopper, title: "Hold & snack", text: "Add $ROBINBUU to your wallet, hold tight, and join the Robin Army. Buu does the rest." },
  ];
  return (
    <section id="how" className="mx-auto max-w-7xl px-4 py-20">
      <div className="text-center">
        <span className="font-display text-sm uppercase tracking-[0.3em] text-[var(--purple)]">On Robinhood Chain</span>
        <h2 className="mt-2 text-5xl text-[var(--ink)] md:text-6xl">How to Buy $ROBINBUU</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--ink)]/80">
          Four steps between you and the pinkest bag on Robinhood Chain.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <div key={s.title} className="pop relative rounded-2xl bg-white p-6">
            <div className="pop absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--yellow)] font-display text-2xl">
              {i + 1}
            </div>
            <s.icon className="mt-4 h-8 w-8 text-[var(--pink-deep)]" />
            <h3 className="mt-3 text-2xl text-[var(--ink)]">{s.title}</h3>
            <p className="mt-2 text-sm text-[var(--ink)]/70">{s.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <a href={BUY_URL} target="_blank" rel="noreferrer"
          className="pop-lg rounded-full bg-[var(--yellow)] px-7 py-3 font-display text-xl tracking-wider">
          Buy $ROBINBUU
        </a>
        <a href={CHART_URL} target="_blank" rel="noreferrer"
          className="pop-lg rounded-full bg-white px-7 py-3 font-display text-xl tracking-wider">
          View Chart
        </a>
      </div>
    </section>
  );
}

function Join() {
  return (
    <section id="join" className="border-t-[3px] border-[var(--ink)] bg-[var(--purple)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <span className="font-display text-sm uppercase tracking-[0.3em] text-[var(--yellow)]">Community</span>
        <h2 className="mt-2 text-5xl md:text-6xl">Join the Robin Army</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">
          No suits, no roadmap, no chill. Just the friendliest pink mob on Robinhood Chain. Pick your channel and come snack with us.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
          <a href={X_URL} target="_blank" rel="noreferrer"
            className="pop-lg rounded-2xl bg-white p-6 text-left text-[var(--ink)] transition hover:-translate-y-1">
            <Twitter className="h-8 w-8 text-[var(--pink-deep)]" />
            <div className="mt-3 font-display text-2xl">X / Twitter</div>
            <div className="text-sm text-[var(--ink)]/70">Follow the chaos</div>
            <div className="mt-3 inline-block rounded-full bg-[var(--yellow)] px-4 py-1 text-sm font-bold uppercase">Follow</div>
          </a>
          <a href={TG_URL} target="_blank" rel="noreferrer"
            className="pop-lg rounded-2xl bg-white p-6 text-left text-[var(--ink)] transition hover:-translate-y-1">
            <Send className="h-8 w-8 text-[var(--pink-deep)]" />
            <div className="mt-3 font-display text-2xl">Telegram</div>
            <div className="text-sm text-[var(--ink)]/70">Join the chat</div>
            <div className="mt-3 inline-block rounded-full bg-[var(--pink)] px-4 py-1 text-sm font-bold uppercase">Join</div>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t-[3px] border-[var(--ink)] bg-[var(--ink)] text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
        <div className="flex items-center gap-2">
          <img src={logoImg} alt="$ROBINBUU" className="h-8 w-8 rounded-full border-2 border-white" />
          <span className="font-display text-xl text-[var(--pink)]">$ROBINBUU</span>
        </div>
        <p className="text-sm text-white/60">$ROBINBUU is a meme coin with no intrinsic value. DYOR and snack responsibly.</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div>
      <Marquee />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Tokenomics />
      <HowToBuy />
      <Join />
      <Footer />
    </div>
  );
}
