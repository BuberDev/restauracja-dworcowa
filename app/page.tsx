import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Camera,
  ChefHat,
  Clock,
  ExternalLink,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  Utensils,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GalleryRail } from "./components/gallery-rail";
import { SiteHeader } from "./components/site-header";

const shell = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

const contact = {
  phone: "730 022 404",
  phoneHref: "tel:+48730022404",
  address: "ul. Bardiowska 3, 38-300 Gorlice",
  facebookHref: "https://www.facebook.com/dworcowagorlice",
  googleReviewsHref:
    "https://www.google.com/maps/search/?api=1&query=Restauracja+Dworcowa+Gorlice+Bardiowska+3",
  mapsEmbedSrc:
    "https://maps.google.com/maps?hl=pl&q=Restauracja%20Dworcowa%20Gorlice%20Bardiowska%203&t=&z=16&ie=UTF8&iwloc=B&output=embed",
  menuHref: "https://www.facebook.com/dworcowagorlice",
  directionsHref:
    "https://www.google.com/maps/dir/?api=1&destination=Bardiowska%203%2C%2038-300%20Gorlice",
  rating: 4.6,
  reviewCount: "484",
};

const navItems = [
  { label: "Menu", href: "#menu" },
  { label: "Opinie", href: "#opinie" },
  { label: "Podejście", href: "#podejscie" },
  { label: "O nas", href: "#o-nas" },
  { label: "Przyjęcia", href: "#przyjecia" },
  { label: "Galeria", href: "#galeria" },
  { label: "Kontakt", href: "#kontakt" },
];

const aboutHighlights = [
  "Domowe obiady, dania dnia, zupy i klasyczne drugie dania.",
  "Duże porcje w cenach, które goście często chwalą w opiniach.",
  "Kawa, herbata, szarlotka i szybkie zamówienia na miejscu lub na wynos.",
  "Adres przy Dworcu PKS w Gorlicach, tuż przy ul. Bardiowskiej.",
];

const reviews = [
  {
    author: "Marek Jur",
    role: "Lokalny przewodnik · 11 opinii · 8 zdjęć",
    initial: "M",
    date: "8 miesięcy temu",
    text: "Danie dnia okazało się strzałem w dziesiątkę. Pomidorowa była aromatyczna i pełna smaku, a rumsztyk soczysty i dobrze doprawiony.",
  },
  {
    author: "Olga Ganiewska",
    role: "Lokalny przewodnik · 29 opinii · 24 zdjęcia",
    initial: "O",
    date: "7 miesięcy temu",
    text: "Pyszne jedzenie w bardzo dobrej cenie, przemiła obsługa. Będę wracać!",
  },
  {
    author: "Dawid Sierak",
    role: "Lokalny przewodnik · 56 opinii · 172 zdjęcia",
    initial: "D",
    date: "11 miesięcy temu",
    text: "Danie dnia okazało się smaczne. Zupa kalafiorowa dobrze doprawiona, młode ziemniaczki rewelacja i świeża smaczna surówka z kapusty.",
  },
  {
    author: "Gabriela Mrozek",
    role: "Lokalny przewodnik · 85 opinii · 155 zdjęć",
    initial: "G",
    date: "rok temu",
    text: "Porcje obiadowe są duże, a jedzenie bardzo smaczne. Sympatyczna obsługa i super ceny. Bez problemu można poprosić o spakowanie na wynos.",
  },
  {
    author: "Maciej S",
    role: "Lokalny przewodnik · 35 opinii · 38 zdjęć",
    initial: "M",
    date: "rok temu",
    text: "Spoko miejsce na domowy obiad. Bardzo smaczne posiłki w mega atrakcyjnej cenie: rosół, drugie danie z ziemniakami, kotletem i surówką.",
  },
  {
    author: "J C",
    role: "Lokalny przewodnik · 198 opinii · 15 zdjęć",
    initial: "J",
    date: "7 miesięcy temu",
    text: "Mega zaskoczeniem okazały się porcje: ogromne i nie do zjedzenia, smak jak w domu. Polecam każdemu zboczyć troszkę z trasy.",
  },
  {
    author: "Rafał",
    role: "5 opinii",
    initial: "R",
    date: "3 miesiące temu",
    text: "Polecam, bardzo smaczne, porcje duże, obsługa super. Cena za osobę 20-40 zł.",
  },
  {
    author: "Bruno",
    role: "Lokalny przewodnik · 68 opinii · 78 zdjęć",
    initial: "B",
    date: "rok temu",
    text: "Tanie i bardzo dobre jedzenie. Zaskoczyła mnie wielkość porcji za tak niską cenę. Szarlotka pycha. Zdecydowanie polecam.",
  },
  {
    author: "Mateusz Szura",
    role: "Lokalny przewodnik · 94 opinie · 98 zdjęć",
    initial: "M",
    date: "Edytowano 8 miesięcy temu",
    text: "Obiad jak w domu. Nie wiem, czy kiedykolwiek w jakimś lokalu jadłem lepszy domowy obiad.",
  },
  {
    author: "Anna Bobak",
    role: "Lokalny przewodnik · 73 opinie · 600 zdjęć",
    initial: "A",
    date: "6 lat temu",
    text: "Przy organizacji obiadu urodzinowego nie musieliśmy martwić się żadnymi detalami, obsługa zajęła się wszystkim. Jedzenie było bardzo dobre.",
  },
  {
    author: "Dorian Grey",
    role: "Lokalny przewodnik · 59 opinii · 3 zdjęcia",
    initial: "D",
    date: "5 miesięcy temu",
    text: "Bardzo fajne miejsce, dobre jedzenie, przystępne ceny i miła obsługa. Polecam każdemu.",
  },
  {
    author: "Bediks",
    role: "Lokalny przewodnik · 28 opinii · 16 zdjęć",
    initial: "B",
    date: "rok temu",
    text: "RE-WE-LA-CJA! Pyszne domowe jedzenie. Zupa pieczarkowa kosmos. Kotlecik, ziemniaczki i zasmażana jak w domu.",
  },
  {
    author: "Dawid Niziołek",
    role: "Lokalny przewodnik · 12 opinii · 3 zdjęcia",
    initial: "D",
    date: "4 miesiące temu",
    text: "Polecam bardzo placki po węgiersku z gulaszem i surówkami. Bardzo dobre i smaczne jedzonko, a także pyszna kawa latte.",
  },
  {
    author: "Dorota Świątek",
    role: "9 opinii · 10 zdjęć",
    initial: "D",
    date: "rok temu",
    text: "Dworcową wybraliśmy na początku z dwóch powodów: blisko i dobre opinie. Obsługa, wielkość porcji i smak zdecydowały, że nie testujemy już nic na mieście.",
  },
  {
    author: "Obywatel JC",
    role: "Lokalny przewodnik · 56 opinii · 103 zdjęcia",
    initial: "O",
    date: "2 lata temu",
    text: "Biorąc pod uwagę całokształt, czyli smak potraw, obsługę oraz ceny, to jedna z najlepszych restauracji, w jakich byłem w życiu.",
  },
  {
    author: "Marzanna Pawlik",
    role: "1 opinia",
    initial: "M",
    date: "8 miesięcy temu",
    text: "Pyszna herbatka, cudowna szarlotka, miła obsługa. Tak miły poranek chciałoby się mieć każdego dnia.",
  },
  {
    author: "Michał Biernacki",
    role: "Lokalny przewodnik · 288 opinii · 594 zdjęcia",
    initial: "M",
    date: "4 lata temu",
    text: "Fajna opcja dania dnia składająca się z zupy, drugiego dania i kompotu. Ceny stosunkowo niskie, kuchnia typowo polska, miła obsługa.",
  },
  {
    author: "Patrycja S",
    role: "Lokalny przewodnik · 276 opinii · 155 zdjęć",
    initial: "P",
    date: "2 lata temu",
    text: "Flaczki bardzo dobre. Szybko podane. Miła obsługa. Ceny bardzo przystępne. Zestaw dnia kosztuje 25 zł.",
  },
  {
    author: "Bardzo Tajemniczy klient",
    role: "Lokalny przewodnik · 253 opinie · 207 zdjęć",
    initial: "B",
    date: "4 miesiące temu",
    text: "Polecam! Tanio, smacznie i przyjazna kelnerka.",
  },
  {
    author: "Paulina Lepak",
    role: "Lokalny przewodnik · 58 opinii · 230 zdjęć",
    initial: "P",
    date: "2 lata temu",
    text: "Bardzo pysznie, ceny przystępne, miła obsługa, polecam!",
  },
  {
    author: "m n",
    role: "8 opinii",
    initial: "M",
    date: "9 miesięcy temu",
    text: "Bardzo dobre, domowe jedzenie. Szczególnie polecam ruskie z masłem. Jedyny problem: stosunkowo mało miejsca.",
  },
];

const pillars = [
  {
    title: "Domowość bez skrótów",
    description:
      "Gotujemy tak, żeby dania miały prosty, rozpoznawalny smak: świeżo, uczciwie i bez przekombinowania.",
  },
  {
    title: "Menu dnia, które żyje",
    description:
      "Dania dnia zmieniają się rytmem tygodnia, sezonu i tego, co najlepiej pasuje do obiadu na miejscu lub na wynos.",
  },
  {
    title: "Gościnność przy stole",
    description:
      "Sala, obsługa i kuchnia pracują razem, żeby rodzinne spotkanie, chrzciny czy urodziny były spokojnie dopięte.",
  },
  {
    title: "Smak Gorlic",
    description:
      "Lokalny klimat traktujemy jak przewagę: proste składniki, ciepłe wnętrze i kuchnia, do której chce się wracać.",
  },
];

const services = [
  {
    title: "Codzienne dania dnia",
    text: "Zupa, drugie danie i kompot w rytmie klasycznych domowych obiadów.",
    image: "/images/dworcowa/dania-dnia.jpg",
  },
  {
    title: "Obfite porcje obiadowe",
    text: "Schabowy, ziemniaki, surówki i zestawy, które goście chwalą za wielkość.",
    image: "/images/dworcowa/schabowy.jpg",
  },
  {
    title: "Na miejscu i na wynos",
    text: "Szybki obiad przy dworcu, zamówienie telefoniczne albo spakowanie porcji do domu.",
    image: "/images/dworcowa/food-hero.jpg",
  },
];

const gallery = [
  {
    title: "Pomidorowa i domowy talerz",
    label: "Danie dnia",
    description: "Zdjęcia dań Dworcowej: zupa, drugie danie i deserowy akcent.",
    image: "/images/dworcowa/food-hero.jpg",
  },
  {
    title: "Zestawy obiadowe",
    label: "Domowo",
    description: "Klasyczne zestawy z ziemniakami, surówkami, zupą i kompotem.",
    image: "/images/dworcowa/dania-dnia.jpg",
  },
  {
    title: "Schabowy z surówkami",
    label: "Menu",
    description: "Duże porcje i kuchnia, którą goście opisują jako smak jak w domu.",
    image: "/images/dworcowa/schabowy.jpg",
  },
  {
    title: "Zupa i słodki finisz",
    label: "Na miejscu",
    description: "Kawa, herbata, szarlotka i codzienne zupy pojawiają się w opiniach gości.",
    image: "/images/dworcowa/zupa-i-deser.jpg",
  },
  {
    title: "Telefon do zamówień",
    label: "Kontakt",
    description: "Baner restauracji z numerem telefonu do szybkich zamówień.",
    image: "/images/dworcowa/banner-contact.png",
  },
];

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Restauracja Dworcowa",
  description:
    "Domowe obiady, dania dnia, zupy, kawa, desery i zamówienia na wynos przy Dworcu PKS w Gorlicach.",
  telephone: contact.phone,
  servesCuisine: ["kuchnia polska", "dania domowe", "dania dnia"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bardiowska 3",
    postalCode: "38-300",
    addressLocality: "Gorlice",
    addressCountry: "PL",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
      />
      <SiteHeader contact={contact} navItems={navItems} />
      <main>
        <HeroSection />
        <MenuIntroSection />
        <ReviewsSection />
        <ApproachSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

function HeroSection() {
  return (
    <section
      id="start"
      className="relative min-h-[100svh] overflow-hidden bg-[#2b2016] pt-24 text-white"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/dworcowa/food-hero.jpg"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ filter: "sepia(0.24) saturate(0.62) contrast(0.96) brightness(0.88)" }}
      >
        <source src="/video_hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[#20150d]/68" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,12,5,0.80)_0%,rgba(22,12,5,0.60)_44%,rgba(70,42,18,0.22)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(180deg,rgba(251,244,233,0)_0%,rgba(251,244,233,0.60)_74%,var(--background)_100%)]" />

      <div className={`${shell} relative z-10 flex min-h-[calc(100svh-6rem)] items-center py-16`}>
        <div className="max-w-3xl">
          <Badge className="animate-fade-up rounded-[8px] border-white/15 bg-white/10 px-3 py-1 text-white hover:bg-white/10">
            Restauracja · Gorlice · Dworzec PKS
          </Badge>
          <h1 className="animate-fade-up delay-100 mt-7 max-w-4xl text-balance text-5xl font-semibold leading-[0.98] tracking-normal sm:text-7xl lg:text-8xl">
            Restauracja Dworcowa
          </h1>
          <p className="animate-fade-up delay-200 mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
            Domowe obiady przy ul. Bardiowskiej 3: dania dnia, zupy, schabowy,
            placki po węgiersku, szarlotka i porcje, po których nikt nie wychodzi głodny.
          </p>

          {/* Google rating inline badge */}
          <div className="animate-fade-up delay-300 mt-8 inline-flex items-center gap-3 rounded-[8px] border border-white/14 bg-black/28 px-4 py-2.5 backdrop-blur-sm">
            <GoogleGLogo />
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-white">
                {contact.rating || 4.6}
              </span>
              <div className="flex text-[#F9AB00]">
                {[...Array(5)].map((_, i) => {
                  const ratingValue = contact.rating || 4.6;
                  const fullStars = Math.floor(ratingValue);
                  const partialPercentage = Math.round((ratingValue % 1) * 100);

                  if (i < fullStars) {
                    return <Star key={i} className="h-3.5 w-3.5 fill-current" />;
                  } else if (i === fullStars && partialPercentage > 0) {
                    return <StarPartial key={i} percentage={partialPercentage} className="h-3.5 w-3.5 text-[#F9AB00]" />;
                  } else {
                    return <Star key={i} className="h-3.5 w-3.5 text-[#F9AB00]/30" />;
                  }
                })}
              </div>
              <span className="text-xs text-white/58">· {contact.reviewCount || "1 419"} opinii</span>
            </div>
          </div>

          <div className="animate-fade-up delay-300 mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="min-h-12 rounded-[8px] bg-white px-6 text-base font-semibold text-[#171615] hover:bg-white/90"
            >
              <a href="#menu">
                Zobacz menu
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="min-h-12 rounded-[8px] border-white/20 bg-white/10 px-6 text-base font-semibold text-white hover:bg-white/15 hover:text-white"
            >
              <a href={contact.directionsHref} target="_blank" rel="noreferrer">
                <MapPin className="size-4" />
                Wyznacz trasę
              </a>
            </Button>
          </div>

          <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
            {[
              ["4,2 tys.", "obserwujących na Facebooku"],
              [contact.reviewCount, "opinii w Google"],
              ["20-40 zł", "często wskazywana cena"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-[8px] border border-white/10 bg-black/25 p-4 backdrop-blur"
              >
                <p className="text-3xl font-semibold">{value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-white/60">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#menu"
        aria-label="Przewiń do następnej sekcji"
        className="group absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 items-center justify-center text-white/75 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:flex"
      >
        <span className="scroll-cue-shell relative flex h-14 w-9 items-start justify-center rounded-full border border-white/35 bg-white/10 pt-2 shadow-[0_18px_45px_rgba(0,0,0,0.28)] backdrop-blur-md transition group-hover:border-white/55 group-hover:bg-white/15">
          <span className="scroll-cue-dot block h-1.5 w-1.5 rounded-full bg-current" />
        </span>
      </a>
    </section>
  );
}

function MenuIntroSection() {
  return (
    <section id="menu" className="ks-noise py-20 sm:py-24">
      <div className={`${shell} grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center`}>
        <div>
          <SectionLabel icon={<Utensils className="size-4" />}>Menu i zamówienia</SectionLabel>
          <h2 className="mt-5 max-w-2xl text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            Dania dnia, zupy i porcje jak w domu.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
            Oferujemy codziennie inne zestawy obiadowe, zupy i klasyczne dania
            kuchni polskiej. Śledź Facebooka Dworcowej, aby sprawdzić aktualne
            menu i godziny.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="min-h-12 rounded-[8px] px-6 text-base">
              <a href={contact.menuHref} target="_blank" rel="noreferrer">
                Sprawdź menu
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="min-h-12 rounded-[8px] border-[#1877f2]/25 bg-white px-6 text-base text-[#1877f2] hover:border-[#1877f2]/45 hover:bg-[#1877f2]/8 hover:text-[#1877f2]"
            >
              <a href={contact.facebookHref} target="_blank" rel="noreferrer">
                <FacebookLogo />
                Facebook
              </a>
            </Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
          <ImageCard
            src="/images/dworcowa/dania-dnia.jpg"
            alt="Zestawy obiadowe Restauracji Dworcowa"
            title="Dania dnia"
            className="min-h-[420px]"
          />
          <div className="grid gap-4">
            <ImageCard
              src="/images/dworcowa/schabowy.jpg"
              alt="Schabowy z ziemniakami i surówkami w Restauracji Dworcowa"
              title="Obiady"
              className="min-h-[250px]"
            />
            <Card className="rounded-[8px] border-primary/10 bg-white/80 shadow-sm">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <Clock className="size-4" />
                  Zamówienia
                </div>
                <p className="mt-3 text-3xl font-semibold tracking-tight">{contact.phone}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Najszybciej zamówisz telefonicznie. Aktualne dania dnia są publikowane
                  na profilu restauracji.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  const reviewTags = [
    "Pomidorowa",
    "Rumsztyk",
    "Schabowy",
    "Szarlotka",
    "Domowo",
    "Duże porcje",
  ];

  return (
    <section id="opinie" className="scroll-mt-24 overflow-hidden bg-background pb-20 sm:pb-24">
      <div className="border-y bg-white/72 px-4 py-3">
        <div className={`${shell} flex items-center justify-between gap-6 overflow-hidden`}>
          <div className="flex min-w-0 items-center gap-5">
            {reviewTags.map((word) => (
              <span
                key={word}
                className="shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-primary/70"
              >
                {word}
              </span>
            ))}
          </div>
          <div
            className="hidden shrink-0 items-center gap-2 rounded-[8px] border border-primary/10 bg-white px-3 py-1.5 shadow-sm sm:flex"
            aria-label="Opinie Google, ocena 5 na 5"
          >
            <GoogleRating compact />
            <span className="text-xs font-semibold text-foreground/62">opinie</span>
          </div>
        </div>
      </div>

      <div className={`${shell} pt-16`}>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-end">
          <div>
            <SectionLabel icon={<MessageCircle className="size-4" />}>
              Co mówią goście
            </SectionLabel>
            <h2 className="mt-5 max-w-2xl text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              Najlepsze reklamy piszą ludzie po domowym obiedzie.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
              Opinie z Google powtarzają te same rzeczy: duże porcje, rozsądne
              ceny, domowy smak, sprawną obsługę i dania dnia, do których chce
              się wracać.
            </p>
          </div>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="min-h-12 rounded-[8px] px-6 text-base lg:justify-self-end"
          >
            <a href={contact.googleReviewsHref} target="_blank" rel="noreferrer">
              Zobacz opinie
              <ExternalLink className="size-4" />
            </a>
          </Button>
        </div>

        <div className="marquee-mask mt-12 space-y-4 overflow-hidden py-2">
          <div className="animate-reviews-left flex w-max gap-4 will-change-transform">
            {[...reviews, ...reviews].map((review, index) => (
              <ReviewCard key={`top-${review.author}-${index}`} review={review} />
            ))}
          </div>
          <div className="animate-reviews-right flex w-max gap-4 will-change-transform">
            {[...reviews.slice().reverse(), ...reviews.slice().reverse()].map((review, index) => (
              <ReviewCard key={`bottom-${review.author}-${index}`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({
  review,
}: Readonly<{
  review: (typeof reviews)[number];
}>) {
  return (
    <article className="flex h-[260px] w-[310px] shrink-0 flex-col rounded-[8px] border bg-white p-5 shadow-[0_12px_36px_rgba(23,22,21,0.06)] transition hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_20px_56px_rgba(23,22,21,0.10)] sm:w-[370px]">
      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/15 bg-primary/10 text-sm font-semibold text-primary"
          aria-hidden="true"
        >
          {review.initial}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">{review.author}</p>
          <p className="truncate text-xs text-muted-foreground">{review.role}</p>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between gap-2">
        <div className="flex gap-0.5 text-[#b87333]" aria-label="Ocena 5 na 5">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <span className="text-xs text-muted-foreground">{review.date}</span>
      </div>

      <p className="mt-4 flex-1 overflow-hidden text-sm leading-6 text-foreground/78">
        {review.text}
      </p>
    </article>
  );
}

function ApproachSection() {
  return (
    <section id="podejscie" className="relative overflow-hidden bg-[#171615] py-20 text-white sm:py-28">
      <div className="absolute inset-0 ks-grid opacity-70" />
      <div className={`${shell} relative`}>
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel center inverted icon={<ChefHat className="size-4" />}>
            Podejście Dworcowej
          </SectionLabel>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            Szanujemy prostotę domowego smaku.
          </h2>
          <p className="mt-5 text-base leading-8 text-white/65">
            Dobra restauracja nie musi opowiadać wielkich historii. Wystarczy,
            że obiad jest uczciwy, obsługa uważna, a gość wie, że może wrócić.
          </p>
        </div>

        <div className="relative mt-16">
          <div
            className="absolute left-0 right-0 top-[1.75rem] hidden h-px lg:block"
            style={{
              background:
                "linear-gradient(to right, transparent 0%, rgba(217,180,111,0.36) 15%, rgba(217,180,111,0.36) 85%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((item, index) => (
              <div key={item.title} className="group relative">
                <div className="relative mb-8 hidden h-14 items-start lg:flex">
                  <div className="relative h-3.5 w-3.5 rounded-full border-2 border-[#d9b46f] bg-[#171615] shadow-[0_0_18px_rgba(217,180,111,0.24)] transition-all duration-300 group-hover:bg-[#d9b46f]" />
                </div>

                <span
                  className="pointer-events-none absolute right-0 top-0 select-none text-[5rem] font-semibold leading-none text-white/[0.035] lg:-top-2 lg:text-[7rem]"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  <span className="font-mono text-sm font-semibold tracking-widest text-[#d9b46f]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight text-white">
                    {item.title}
                  </h3>
                  <div className="mt-3 h-px w-8 bg-[#d9b46f]/50 transition-all duration-500 group-hover:w-16 group-hover:bg-[#d9b46f]" />
                  <p className="mt-4 text-sm leading-7 text-white/60">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <Button asChild size="lg" className="min-h-12 rounded-[8px] bg-white px-6 text-base font-semibold text-[#171615] hover:bg-white/90">
            <a href="#kontakt">
              Zapytaj o termin
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="przyjecia" className="bg-background py-20 sm:py-24">
      <div className={shell}>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <SectionLabel icon={<CalendarDays className="size-4" />}>Na co dzień i od święta</SectionLabel>
            <h2 className="mt-5 max-w-xl text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              Jedno miejsce na obiad, kawę, deser i zamówienie na wynos.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-muted-foreground lg:justify-self-end">
            Restauracja Dworcowa działa prosto i praktycznie: możesz wpaść na
            szybki obiad przy Dworcu PKS, odebrać zamówienie albo zapytać
            telefonicznie o aktualne danie dnia.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-[8px] border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="o-nas" className="scroll-mt-24 bg-[#f3eadc] py-20 sm:py-24">
      <div className={`${shell} grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center`}>
        <div className="relative min-h-[460px] overflow-hidden rounded-[8px] border bg-black shadow-sm sm:min-h-[560px]">
          <Image
            src="/images/dworcowa/banner-contact.png"
            alt="Baner Restauracji Dworcowa z numerem telefonu"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 48vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
          <div className="absolute inset-x-5 bottom-5 rounded-[8px] border border-white/15 bg-[#171615]/82 p-5 text-white backdrop-blur-sm">
            <p className="text-xl font-semibold">Domowa kuchnia i szybkie zamówienia.</p>
            <p className="mt-2 text-sm leading-6 text-white/68">
              Miejsce na obiad, kawę, szarlotkę i szybkie zamówienie na wynos.
            </p>
          </div>
        </div>

        <div>
          <SectionLabel icon={<ChefHat className="size-4" />}>O restauracji</SectionLabel>
          <h2 className="mt-5 max-w-2xl text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            Domowy punkt na kulinarnej mapie Gorlic.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
            Restauracja Dworcowa stawia na proste, sycące obiady i obsługę,
            którą goście regularnie chwalą. Wpadnij na danie dnia, zupę, placki
            po węgiersku albo spokojną kawę przy dworcu.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {aboutHighlights.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-[8px] border bg-white/72 p-4">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <p className="text-sm font-medium leading-6 text-foreground/82">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="min-h-12 rounded-[8px] px-6 text-base">
              <a href={contact.phoneHref}>
                <Phone className="size-4" />
                Zadzwoń
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-h-12 rounded-[8px] px-6 text-base">
              <a href="#galeria">
                Zobacz galerię
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section id="galeria" className="relative overflow-hidden bg-[#141312] py-20 text-white sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(217,180,111,0.16)_0%,rgba(217,180,111,0)_34%),radial-gradient(circle_at_84%_12%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_28%)]" />
      <div className="absolute inset-0 ks-grid opacity-35" />

      <div className={`${shell} relative`}>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel inverted icon={<Camera className="size-4" />}>Galeria</SectionLabel>
            <h2 className="mt-5 max-w-2xl text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Kadry z Dworcowej: zupy, zestawy i domowe porcje.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/62">
              Zdjęcia bazują na materiałach Restauracji Dworcowa i pokazują to,
              co najczęściej pojawia się w opiniach: domowy talerz, zupę,
              surówki, kompot i kontakt do zamówień.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="min-h-12 rounded-[8px] border-white/20 bg-white/8 px-6 text-base text-white hover:bg-white hover:text-[#141312]"
          >
            <a href={contact.facebookHref} target="_blank" rel="noreferrer">
              Więcej zdjęć
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>

        <GalleryRail items={gallery} />

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/58 sm:flex-row sm:items-center sm:justify-between">
          <p>Kliknij dowolny kadr, aby otworzyć zdjęcie w większym podglądzie.</p>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#d9b46f]/80">
            {gallery.length} wybranych ujęć
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="kontakt" className="scroll-mt-24 bg-background py-20 sm:py-24">
      <div className={shell}>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel center icon={<MapPin className="size-4" />}>Kontakt i dojazd</SectionLabel>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            Restauracja Dworcowa w Gorlicach, gotowa na obiad i zamówienie.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
            Zadzwoń, zapytaj o aktualne dania dnia, zamów na wynos albo ustal
            szczegóły rodzinnego spotkania. Poniżej masz adres, mapę i najważniejsze
            drogi kontaktu.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <aside className="space-y-4">
            <ContactCard icon={<Phone className="size-5" />} label="Telefon" value={contact.phone} href={contact.phoneHref} />
            <ContactCard icon={<MapPin className="size-5" />} label="Adres" value={contact.address} href={contact.directionsHref} />
            <ContactCard icon={<MessageCircle className="size-5" />} label="Facebook" value="Restauracja Dworcowa" href={contact.facebookHref} />
          </aside>

          <Card className="rounded-[8px] border bg-white shadow-[0_20px_60px_rgba(23,22,21,0.07)]">
            <CardContent className="p-5 sm:p-6">
              <div className="grid gap-5 lg:grid-cols-[1fr_0.88fr]">
                <div>
                  <h3 className="text-2xl font-semibold">Mapa Google</h3>
                  <MapEmbed />
                  <Button asChild variant="outline" className="mt-4 min-h-11 w-full rounded-[8px]">
                    <a href={contact.directionsHref} target="_blank" rel="noreferrer">
                      <MapPin className="size-4" />
                      Wyznacz trasę
                    </a>
                  </Button>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">Godziny i rezerwacje</h3>
                  <div className="mt-4 rounded-[8px] border bg-secondary/45 p-4">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      <Clock className="size-4" />
                      Aktualne informacje
                    </div>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      Aktualne godziny, dania dnia i informacje o przyjęciach najlepiej
                      potwierdzić telefonicznie lub na profilu Facebook restauracji.
                    </p>
                  </div>

                  <div className="mt-4 space-y-3 rounded-[8px] border p-4">
                    <div className="flex items-start justify-between gap-4 text-sm">
                      <span className="font-semibold">Zamówienia</span>
                      <a href={contact.phoneHref} className="text-right font-semibold text-primary">
                        {contact.phone}
                      </a>
                    </div>
                    <Separator />
                    <div className="flex items-start justify-between gap-4 text-sm">
                      <span className="font-semibold">Adres</span>
                      <span className="max-w-[14rem] text-right text-muted-foreground">
                        {contact.address}
                      </span>
                    </div>
                  </div>

                  <Button asChild size="lg" className="mt-5 min-h-12 w-full rounded-[8px]">
                    <a href={contact.phoneHref}>
                      <Phone className="size-4" />
                      Zadzwoń teraz
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#171615] py-14 text-white">
      <div className={shell}>
        <div className="grid gap-x-8 gap-y-10 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-[1.35fr_0.75fr_0.9fr_0.9fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex justify-center sm:justify-start">
              <Image
                src="/images/dworcowa/logo-white.svg"
                alt="Restauracja Dworcowa"
                width={240}
                height={140}
                className="h-20 w-auto object-contain opacity-90 transition-opacity hover:opacity-100"
              />
            </div>
            <p className="mx-auto mt-5 max-w-sm leading-7 text-white/62 sm:mx-0">
              Domowa kuchnia, dania dnia, duże porcje i szybki kontakt przy
              Dworcu PKS w Gorlicach.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#d9b46f]">
              Nawigacja
            </h2>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a className="text-sm font-medium text-white/62 transition hover:text-[#d9b46f]" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#d9b46f]">
              Kontakt
            </h2>
            <ul className="mt-4 space-y-3 text-sm font-medium">
              <li>
                <a href={contact.phoneHref} className="text-white/62 transition hover:text-white">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={contact.facebookHref} target="_blank" rel="noreferrer" className="break-all text-white/62 transition hover:text-white">
                  facebook.com/dworcowagorlice
                </a>
              </li>
              <li className="text-white/62">{contact.address}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#d9b46f]">
              Znajdź nas
            </h2>
            <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
              {[
                { label: "Facebook", href: contact.facebookHref },
                { label: "Google", href: contact.googleReviewsHref },
                { label: "Menu", href: contact.menuHref },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[8px] border border-white/10 px-3 py-2 text-sm font-semibold text-white/70 transition hover:bg-white/8 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-5 flex justify-center sm:justify-start">
              <GoogleRating className="rounded-[8px] border border-white/10 bg-white/[0.04] px-3 py-2" />
            </div>
            <p className="mt-3 text-xs leading-5 text-white/42">
              Opinie gości z Google i Facebooka pomagają nowym osobom trafić do restauracji.
            </p>
          </div>
        </div>

        <Separator className="bg-white/10 sm:hidden" />

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/10 pt-7 sm:flex-row sm:justify-between">
          <p className="text-center text-xs text-white/42 sm:text-left">
            © {new Date().getFullYear()} Restauracja Dworcowa · Gorlice
          </p>
          <a href="#kontakt" className="text-xs font-semibold text-white/42 transition hover:text-white">
            Kontakt i dojazd
          </a>
        </div>
      </div>
    </footer>
  );
}

function SectionLabel({
  children,
  icon,
  center = false,
  inverted = false,
}: Readonly<{
  children: React.ReactNode;
  icon: React.ReactNode;
  center?: boolean;
  inverted?: boolean;
}>) {
  return (
    <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-[8px] border ${inverted
            ? "border-[#d9b46f]/25 bg-white/5 text-[#d9b46f]"
            : "border-primary/15 bg-primary/10 text-primary"
          }`}
      >
        {icon}
      </span>
      <p
        className={`text-xs font-semibold uppercase tracking-[0.18em] ${inverted ? "text-[#d9b46f]" : "text-primary"
          }`}
      >
        {children}
      </p>
    </div>
  );
}

function GoogleGLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 shrink-0">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function FacebookLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 shrink-0 fill-current">
      <path d="M14.2 8.1V6.6c0-.7.5-.9.9-.9h2.2V2.1L14.2 2c-3.4 0-4.1 2.5-4.1 4.1v2H7.4V12h2.7v10h4.1V12h3.1l.5-3.9h-3.6z" />
    </svg>
  );
}

function StarPartial({ percentage = 60, className = "" }: Readonly<{ percentage?: number; className?: string }>) {
  return (
    <svg viewBox="0 0 24 24" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <defs>
        <linearGradient id={`partial-${percentage}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset={`${percentage}%`} stopColor="currentColor" />
          <stop offset={`${percentage}%`} stopColor="transparent" />
        </linearGradient>
      </defs>
      <polygon fill={`url(#partial-${percentage})`} points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function GoogleRating({
  compact = false,
  className = "",
}: Readonly<{
  compact?: boolean;
  className?: string;
}>) {
  return (
    <div
      className={`inline-flex items-center ${compact ? "gap-1.5" : "gap-2"} ${className}`}
      aria-hidden="true"
    >
      <GoogleGLogo />
      <div className="flex gap-0.5 text-[#fbbc05]">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${compact ? "h-3.5 w-3.5" : "h-4 w-4"} fill-current`}
          />
        ))}
      </div>
    </div>
  );
}

function ImageCard({
  src,
  alt,
  title,
  className = "",
}: Readonly<{
  src: string;
  alt: string;
  title: string;
  className?: string;
}>) {
  return (
    <figure className={`relative overflow-hidden rounded-[8px] border bg-black shadow-sm ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        loading="eager"
        className="object-cover opacity-90"
        sizes="(max-width: 1024px) 100vw, 42vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <figcaption className="absolute bottom-4 left-4 right-4 text-white">
        <p className="text-xl font-semibold">{title}</p>
      </figcaption>
    </figure>
  );
}

function MapEmbed() {
  return (
    <div className="relative mt-4 h-72 overflow-hidden rounded-[8px] border bg-secondary sm:h-80">
      <iframe
        src={contact.mapsEmbedSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa Google: Restauracja Dworcowa w Gorlicach"
      />
    </div>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: Readonly<{
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}>) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-[8px] border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] bg-primary/10 text-primary">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          {label}
        </span>
        <span className="mt-1 block break-words text-sm font-semibold leading-6 group-hover:text-primary">
          {value}
        </span>
      </span>
    </a>
  );
}
