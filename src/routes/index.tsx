import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Gift,
  PackageCheck,
  ShieldCheck,
  Snowflake,
  Star,
  ThermometerSun,
  Truck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import whiteBottle from "@/assets/garrafa-branca.jpg.asset.json";
import pinkBottle from "@/assets/garrafa-rosa.jpg.asset.json";
import blackBottle from "@/assets/garrafa-preta.jpg.asset.json";
import blueBottle from "@/assets/garrafa-azul.jpg.asset.json";
import detailSteel from "@/assets/garrafa-detalhe-inox.jpeg.asset.json";
import detailDoubleWall from "@/assets/garrafa-detalhe-parede-dupla.webp.asset.json";
import detailCapacity from "@/assets/garrafa-detalhe-capacidade.webp.asset.json";
import detailFeatures from "@/assets/garrafa-detalhe-recursos.webp.asset.json";
import detailCar from "@/assets/garrafa-detalhe-carro.webp.asset.json";
import detailLeakproof from "@/assets/garrafa-detalhe-antivazamento.webp.asset.json";
import detailStraw from "@/assets/garrafa-detalhe-canudo.webp.asset.json";
import detailHandle from "@/assets/garrafa-detalhe-alca.webp.asset.json";
import leakproofVideo from "@/assets/demonstracao-antivazamento.mp4.asset.json";
import temperatureCopy from "@/assets/temperatura-ideal.png.asset.json";
import practicalCopy from "@/assets/praticidade-estilo.png.asset.json";
import customerVideo from "@/assets/depoimento-cliente.mp4.asset.json";
import customerPhoto1 from "@/assets/cliente-1.webp.asset.json";
import customerPhoto2 from "@/assets/cliente-2.webp.asset.json";
import customerPhoto3 from "@/assets/cliente-3.webp.asset.json";
import customerPhoto4 from "@/assets/cliente-4.webp.asset.json";
import customerPhoto5 from "@/assets/cliente-5.webp.asset.json";
import customerPhoto6 from "@/assets/cliente-6.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kit 2 Garrafas Térmicas 1,2 L | Compre 1, Leve 2" },
      { name: "description", content: "Escolha duas cores e leve duas garrafas térmicas de 1,2 L por apenas R$ 29,97." },
      { property: "og:title", content: "Kit 2 Garrafas Térmicas 1,2 L" },
      { property: "og:description", content: "Compre 1, leve 2 por R$ 29,97. Escolha a cor de cada garrafa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const colors = [
  { id: "branca", label: "Branca", image: whiteBottle.url, swatch: "bg-bottle-white" },
  { id: "rosa", label: "Rosa", image: pinkBottle.url, swatch: "bg-bottle-pink" },
  { id: "preta", label: "Preta", image: blackBottle.url, swatch: "bg-bottle-black" },
  { id: "azul", label: "Azul", image: blueBottle.url, swatch: "bg-bottle-blue" },
] as const;

type ColorId = (typeof colors)[number]["id"];
type SlotNumber = 1 | 2;

const detailImages = [
  { id: "inox", image: detailSteel.url, alt: "Estrutura em aço inoxidável 304 da garrafa térmica" },
  { id: "parede-dupla", image: detailDoubleWall.url, alt: "Parede dupla para preservar a temperatura" },
  { id: "capacidade", image: detailCapacity.url, alt: "Capacidade de 1,2 litro da garrafa térmica" },
  { id: "recursos", image: detailFeatures.url, alt: "Detalhes da alça, tampa antivazamento e aço inox" },
  { id: "carro", image: detailCar.url, alt: "Base afunilada compatível com porta-copos" },
  { id: "antivazamento", image: detailLeakproof.url, alt: "Fechamento seguro e tampa antivazamento" },
  { id: "canudo", image: detailStraw.url, alt: "Canudo em inox com ponta de silicone" },
  { id: "alca", image: detailHandle.url, alt: "Alça confortável para transportar a garrafa" },
] as const;

const benefits = [
  { icon: ThermometerSun, title: "Temperatura por horas", text: "Bebidas quentes ou geladas por muito mais tempo." },
  { icon: Snowflake, title: "Parede dupla", text: "Isolamento térmico que evita suor na parte externa." },
  { icon: PackageCheck, title: "Capacidade de 1,2 L", text: "Hidratação para acompanhar todo o seu dia." },
  { icon: ShieldCheck, title: "Uso sem vazamentos", text: "Tampa firme, canudo e alça confortável para transportar." },
];

const reviews = [
  { name: "Camila R.", color: "Rosa + Branca", text: "Chegaram lindas e bem embaladas. A bebida fica gelada durante horas e o tamanho é ótimo." },
  { name: "Marina S.", color: "Azul + Preta", text: "Escolhi uma para mim e outra para meu marido. As cores são iguais às fotos e a alça ajuda muito." },
  { name: "Júlia M.", color: "Rosa + Rosa", text: "A promoção vale muito a pena. Pedi as duas rosas e já uso todos os dias no trabalho." },
];

const customerPhotos = [
  { image: customerPhoto1.url, alt: "Detalhe da tampa e do canudo da garrafa rosa" },
  { image: customerPhoto2.url, alt: "Cliente segurando a garrafa térmica branca" },
  { image: customerPhoto3.url, alt: "Detalhe da tampa da garrafa térmica preta" },
  { image: customerPhoto4.url, alt: "Cliente mostrando a garrafa térmica branca" },
  { image: customerPhoto5.url, alt: "Garrafa térmica branca em uso no trabalho" },
  { image: customerPhoto6.url, alt: "Garrafa térmica branca recebida com acessórios" },
] as const;

function Countdown() {
  const [seconds, setSeconds] = useState(59 * 60 + 59);
  useEffect(() => {
    const timer = window.setInterval(() => setSeconds((value) => (value > 0 ? value - 1 : 59 * 60 + 59)), 1000);
    return () => window.clearInterval(timer);
  }, []);
  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return <span className="ml-2 inline-flex items-center gap-1" aria-label={`${minutes} minutos e ${secs} segundos`}><b className="timer-number">00</b><span aria-hidden="true">:</span><b className="timer-number">{minutes}</b><span aria-hidden="true">:</span><b className="timer-number">{secs}</b></span>;
}

function Index() {
  const [firstColor, setFirstColor] = useState<ColorId>("branca");
  const [secondColor, setSecondColor] = useState<ColorId>("rosa");
  const [viewing, setViewing] = useState<SlotNumber>(1);
  const [ready, setReady] = useState(false);
  const [activeDetail, setActiveDetail] = useState<string | null>(null);
  const [showStickyBuy, setShowStickyBuy] = useState(false);
  const [customerSlide, setCustomerSlide] = useState(0);

  const selectedId = viewing === 1 ? firstColor : secondColor;
  const selected = colors.find((color) => color.id === selectedId) ?? colors[0];
  const selectedDetail = detailImages.find((image) => image.id === activeDetail);
  const featuredImage = selectedDetail?.image ?? selected.image;
  const featuredAlt = selectedDetail?.alt ?? `Garrafa ${viewing} na cor ${selected.label}`;

  useEffect(() => {
    const updateStickyBuy = () => setShowStickyBuy(window.scrollY > 620);
    updateStickyBuy();
    window.addEventListener("scroll", updateStickyBuy, { passive: true });
    return () => window.removeEventListener("scroll", updateStickyBuy);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCustomerSlide((current) => (current + 1) % customerPhotos.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, []);

  function chooseColor(slot: SlotNumber, color: ColorId) {
    if (slot === 1) setFirstColor(color);
    else setSecondColor(color);
    setViewing(slot);
    setActiveDetail(null);
    setReady(false);
  }

  function changeViewing(direction: number) {
    setViewing((current) => (current + direction === 2 ? 2 : 1));
    setActiveDetail(null);
  }

  function finishSelection() {
    setReady(true);
    window.setTimeout(() => document.getElementById("pedido-pronto")?.scrollIntoView({ behavior: "smooth", block: "center" }), 0);
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="bg-banner px-4 py-2 text-center text-xs font-extrabold uppercase text-banner-foreground">
        Promoção especial • Compre 1 e leve 2 <Countdown />
      </div>
      <header className="border-b border-border bg-surface px-5 py-5 text-center">
        <a href="#oferta" className="font-display text-xl font-bold tracking-[0.38em] text-brand" aria-label="Início">THERMO</a>
      </header>

      <section id="oferta" className="mx-auto grid max-w-6xl gap-7 px-4 py-7 sm:px-5 sm:py-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:py-14">
        <div className="lg:sticky lg:top-5 lg:self-start">
          <div className="relative overflow-hidden rounded-lg border border-border bg-product">
            <span className="absolute left-4 top-4 z-10 rounded-md bg-offer px-3 py-2 text-xs font-black uppercase text-offer-foreground">Kit com 2 peças</span>
            <img src={featuredImage} alt={featuredAlt} className="aspect-square w-full object-cover transition-opacity duration-300" />
            <Button aria-label="Ver garrafa anterior" title="Ver garrafa anterior" variant="ghost" size="compact" onClick={() => changeViewing(-1)} disabled={viewing === 1} className="absolute left-3 top-1/2 w-10 -translate-y-1/2 bg-surface shadow-sm"><ChevronLeft /></Button>
            <Button aria-label="Ver próxima garrafa" title="Ver próxima garrafa" variant="ghost" size="compact" onClick={() => changeViewing(1)} disabled={viewing === 2} className="absolute right-3 top-1/2 w-10 -translate-y-1/2 bg-surface shadow-sm"><ChevronRight /></Button>
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 overflow-hidden rounded-md border border-border bg-surface shadow-sm">
              {[1, 2].map((slot) => <Button key={slot} variant={!activeDetail && viewing === slot ? "selected" : "ghost"} size="compact" onClick={() => { setViewing(slot as SlotNumber); setActiveDetail(null); }}>Garrafa {slot}</Button>)}
            </div>
          </div>
          <div className="mt-3 grid grid-cols-4 gap-2">
            {colors.map((color) => (
              <Button key={color.id} variant={selectedId === color.id ? "selected" : "outline"} className="h-auto min-h-0 p-1" onClick={() => chooseColor(viewing, color.id)} aria-label={`Escolher ${color.label} para garrafa ${viewing}`}>
                <img src={color.image} alt={`Miniatura da garrafa ${color.label}`} className="aspect-square w-full rounded-sm object-cover" />
              </Button>
            ))}
          </div>
          <p className="mt-3 text-center text-xs font-medium text-muted-foreground">Visualizando garrafa {viewing}: <strong className="text-foreground">{selected.label}</strong></p>
          <div className="mt-5">
            <p className="mb-2 text-xs font-black uppercase text-muted-foreground">Veja todos os detalhes</p>
            <div className="flex snap-x gap-2 overflow-x-auto pb-2">
              {detailImages.map((image) => (
                <Button key={image.id} variant={activeDetail === image.id ? "selected" : "outline"} className="h-auto min-h-0 w-20 shrink-0 snap-start p-1" onClick={() => setActiveDetail(image.id)} aria-label={image.alt}>
                  <img src={image.image} alt="" className="aspect-square w-full rounded-sm object-cover" />
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 text-sm"><span className="flex text-rating" aria-label="5 estrelas">{[1,2,3,4,5].map((n) => <Star key={n} className="size-4 fill-current" />)}</span><strong>4,9</strong><span className="text-muted-foreground">(327 avaliações)</span></div>
          <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-brand">Oferta exclusiva por tempo limitado</p>
          <h1 className="mt-4 font-display text-3xl font-black leading-[1.06] sm:text-5xl">Kit Garrafas Térmicas 1,2 L <span className="block text-brand">[COMPRE 1, LEVE 2]</span></h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">Duas garrafas térmicas com alça e canudo para manter sua bebida na temperatura ideal durante todo o dia.</p>

          <div className="my-6 border-y border-border py-5">
            <div className="flex items-center gap-3"><span className="text-sm text-muted-foreground line-through">R$ 89,90</span><span className="rounded-sm bg-discount px-2 py-1 text-xs font-black text-discount-foreground">67% OFF</span></div>
            <p className="mt-1 flex items-end gap-2 text-muted-foreground">por <strong className="font-display text-4xl text-price">R$ 29,97</strong></p>
          </div>

          <div className="animate-offer-pulse rounded-md border border-offer-border bg-offer px-4 py-3 text-offer-foreground"><div className="flex items-center gap-2 text-sm font-black uppercase"><Gift className="size-4" />Oferta compre 1, leve 2 — hoje!</div><p className="mt-1 pl-6 text-xs">Você recebe duas garrafas de 1,2 L e escolhe a cor de cada uma.</p></div>
          <div className="animate-urgency-pulse mt-2 rounded-md bg-urgency px-4 py-2 text-center text-xs font-black uppercase text-urgency-foreground">Últimas unidades disponíveis — garanta seu kit hoje!</div>

          <div className="mt-6 space-y-6">
            <ColorSelector slot={1} value={firstColor} onSelect={(color) => chooseColor(1, color)} />
            <ColorSelector slot={2} value={secondColor} onSelect={(color) => chooseColor(2, color)} />
          </div>

          <div className="mt-5 flex items-center gap-4 rounded-md border border-border p-4"><Truck className="size-8 text-brand" /><div><p className="text-[10px] uppercase text-muted-foreground">Oferta adicional</p><p className="text-sm font-black uppercase text-brand">Frete grátis somente hoje</p></div></div>
          <Button size="wide" className="animate-buy-pulse mt-3" onClick={finishSelection}>Comprar agora <ChevronRight className="size-5" /></Button>

          {ready && <div id="pedido-pronto" role="status" className="mt-3 rounded-md border border-primary bg-selection p-4 text-sm text-selection-foreground"><strong className="block">Seu kit está pronto!</strong>Garrafa 1: {colors.find((c) => c.id === firstColor)?.label} • Garrafa 2: {colors.find((c) => c.id === secondColor)?.label}. A integração de pagamento ainda será adicionada.</div>}

          <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs text-muted-foreground">
            <div><PackageCheck className="mx-auto mb-2 size-5 text-brand" /><strong className="block text-foreground">Envio rápido</strong>todo Brasil</div>
            <div><ShieldCheck className="mx-auto mb-2 size-5 text-brand" /><strong className="block text-foreground">Compra segura</strong>dados protegidos</div>
            <div><Clock3 className="mx-auto mb-2 size-5 text-brand" /><strong className="block text-foreground">7 dias</strong>para experimentar</div>
          </div>
        </div>
      </section>

      <section className="bg-section py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-5">
          <h2 className="mx-auto max-w-2xl text-center font-display text-3xl font-black leading-tight sm:text-4xl">Anti Vazamento - A garrafa térmica que não te Molha.</h2>
          <video className="mx-auto mt-7 aspect-[9/16] max-h-[720px] w-full max-w-sm rounded-lg bg-foreground object-cover shadow-action" src={leakproofVideo.url} controls autoPlay muted loop playsInline preload="metadata" aria-label="Demonstração do sistema antivazamento" />

          <div className="mt-10 space-y-5 sm:mt-14">
            <img src={temperatureCopy.url} alt="Garrafa THERMO mantém sua bebida na temperatura ideal" className="mx-auto h-auto w-full rounded-lg" loading="lazy" />
            <img src={practicalCopy.url} alt="Praticidade e estilo com a garrafa THERMO" className="mx-auto h-auto w-full rounded-lg" loading="lazy" />
          </div>

          <div className="mt-12 sm:mt-16">
            <h2 className="text-center font-display text-2xl font-black uppercase leading-tight sm:text-3xl">Recebido de uma de Nossas Clientes</h2>
            <video className="mx-auto mt-6 aspect-[9/16] max-h-[720px] w-full max-w-sm rounded-lg bg-foreground object-cover shadow-action" src={customerVideo.url} controls muted playsInline preload="metadata" aria-label="Vídeo recebido de uma cliente" />
          </div>

          <div className="mt-12 sm:mt-16" aria-roledescription="carrossel" aria-label="Fotos enviadas por clientes">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-product">
              <img key={customerSlide} src={customerPhotos[customerSlide].image} alt={customerPhotos[customerSlide].alt} className="animate-carousel-fade aspect-[3/4] w-full object-cover" loading="lazy" />
              <Button variant="ghost" size="icon" className="absolute left-2 top-1/2 -translate-y-1/2 bg-surface/90 shadow-sm" onClick={() => setCustomerSlide((current) => (current - 1 + customerPhotos.length) % customerPhotos.length)} aria-label="Foto anterior"><ChevronLeft /></Button>
              <Button variant="ghost" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 bg-surface/90 shadow-sm" onClick={() => setCustomerSlide((current) => (current + 1) % customerPhotos.length)} aria-label="Próxima foto"><ChevronRight /></Button>
            </div>
            <div className="mt-4 flex justify-center gap-2">
              {customerPhotos.map((photo, index) => <button key={photo.image} type="button" className={`size-2.5 rounded-full transition-colors ${customerSlide === index ? "bg-primary" : "bg-border"}`} onClick={() => setCustomerSlide(index)} aria-label={`Ver foto ${index + 1}`} aria-current={customerSlide === index ? "true" : undefined} />)}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-5"><p className="section-kicker">Qualidade em cada detalhe</p><h2 className="section-title">Feitas para acompanhar sua rotina</h2><div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">{benefits.map(({ icon: Icon, title, text }) => <article key={title} className="bg-surface p-7"><Icon className="size-8 text-brand" /><h3 className="mt-5 font-display text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}</div></div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16"><p className="section-kicker">Quem compra, recomenda</p><h2 className="section-title">A garrafa que conquista</h2><div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-3">{reviews.map((review) => <article key={review.name} className="rounded-lg border border-border bg-surface p-5 sm:p-6"><div className="flex text-rating">{[1,2,3,4,5].map((n) => <Star key={n} className="size-4 fill-current" />)}</div><p className="mt-5 text-sm leading-relaxed">“{review.text}”</p><div className="mt-6 border-t border-border pt-4"><strong>{review.name}</strong><p className="text-xs text-muted-foreground">Compra verificada • {review.color}</p></div></article>)}</div></section>

      <section className="bg-section py-16"><div className="mx-auto max-w-3xl px-5"><p className="section-kicker">Tire suas dúvidas</p><h2 className="section-title">Perguntas frequentes</h2><div className="mt-8 divide-y divide-border border-y border-border"><Faq question="O kit vem com quantas garrafas?">Você recebe duas garrafas térmicas de 1,2 L na promoção Compre 1, Leve 2.</Faq><Faq question="Posso escolher duas cores diferentes?">Sim. A cor da garrafa 1 e da garrafa 2 são escolhidas separadamente. Você também pode repetir a mesma cor.</Faq><Faq question="A garrafa acompanha tampa e canudo?">Sim. Cada unidade acompanha tampa transparente, canudo e alça lateral.</Faq><Faq question="Qual é a capacidade?">Cada garrafa tem capacidade de 1,2 litro.</Faq><Faq question="Quais cores estão disponíveis?">Branca, rosa, preta e azul, conforme as imagens do produto.</Faq></div></div></section>

      <section className="bg-brand px-5 py-14 text-center text-brand-foreground"><p className="text-xs font-black uppercase tracking-[0.18em] opacity-80">Oferta especial</p><h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-black sm:text-4xl">Leve duas garrafas térmicas por apenas R$ 29,97</h2><p className="mx-auto mt-4 max-w-xl text-sm opacity-80">Escolha suas duas cores favoritas e aproveite enquanto durarem os estoques.</p><Button variant="primary" size="wide" className="mx-auto mt-7 max-w-md bg-offer text-offer-foreground hover:bg-offer/90" onClick={() => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })}>Escolher minhas cores <ChevronRight /></Button></section>
      <footer className="bg-footer px-5 py-8 text-center text-xs text-footer-foreground">© 2026 THERMO • Compra segura e protegida</footer>
      {showStickyBuy && (
        <div className="animate-slide-in-up fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface/95 px-3 py-2 shadow-sticky backdrop-blur-sm">
          <div className="mx-auto flex max-w-3xl items-center gap-3">
            <div className="min-w-0 shrink-0"><span className="block text-[10px] font-bold uppercase text-muted-foreground">Kit com 2</span><strong className="font-display text-lg text-price">R$ 29,97</strong></div>
            <Button className="animate-buy-pulse min-h-12 flex-1" onClick={() => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth", block: "start" })}>Comprar agora <ChevronRight className="size-4" /></Button>
          </div>
        </div>
      )}
    </main>
  );
}

function ColorSelector({ slot, value, onSelect }: { slot: SlotNumber; value: ColorId; onSelect: (color: ColorId) => void }) {
  return <fieldset><legend className="mb-2 text-sm font-bold">Escolha a cor da garrafa {slot}</legend><div className="grid grid-cols-2 gap-2 sm:grid-cols-4">{colors.map((color) => <Button key={color.id} variant={value === color.id ? "selected" : "outline"} size="compact" onClick={() => onSelect(color.id)} aria-pressed={value === color.id}><span className={`size-4 rounded-full border border-border ${color.swatch}`} />{value === color.id && <Check className="size-4" />}{color.label}</Button>)}</div></fieldset>;
}

function Faq({ question, children }: { question: string; children: string }) {
  return <details className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">{question}<ChevronDown className="size-5 shrink-0 transition-transform group-open:rotate-180" /></summary><p className="mt-3 pr-10 text-sm leading-relaxed text-muted-foreground">{children}</p></details>;
}
