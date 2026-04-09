"use client";

const logos = [
  { src: "https://uptimerobot.com/assets/images/logos/logo-ibm.svg", alt: "IBM" },
  { src: "https://uptimerobot.com/assets/images/logos/logo-mastercard.svg", alt: "Mastercard" },
  { src: "https://uptimerobot.com/assets/images/logos/logo-gitlab.svg", alt: "GitLab" },
  { src: "https://uptimerobot.com/assets/images/logos/logo-moodys.svg", alt: "Moody's" },
  { src: "https://uptimerobot.com/assets/images/logos/logo-headline.svg", alt: "Headline" },
  { src: "https://uptimerobot.com/assets/images/logos/logo-squareup.svg", alt: "SquareUp" },
  { src: "https://www.leetsolutions.ma/Partnership/UM6P.svg", alt: "Indeed" },
];

function LogoRow() {
  return (
    <div className="flex items-center gap-12 pr-12 shrink-0">
      {logos.map((l) => (
        <img
          key={l.src}
          src={l.src}
          alt={l.alt}
          className="h-10 w-auto opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition"
          draggable={false}
        />
      ))}
    </div>
  );
}

export default function TrustedBy() {
  return (
    <section className="w-full py-12">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-center text-sm text-muted-foreground mb-6">
          Trusted by users and companies worldwide
        </p>

        <div className="relative overflow-hidden">
          {/* Edge fade */}
         <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-bg-card/95 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-bg-card/95 to-transparent" />

          {/* Moving track */}
          <div className="flex w-max animate-logo-marquee will-change-transform">
            <LogoRow />
            <LogoRow />
          </div>
        </div>
      </div>
    </section>
  );
}