import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImage from "@/assets/hero-seniors.jpg";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Mente Activa — Ejercicios cognitivos para mayores de 60" },
      {
        name: "description",
        content:
          "Programa diario de ejercicios cognitivos diseñado para personas mayores. Mejora tu memoria, concentración y agilidad mental en solo 15 minutos al día.",
      },
      { property: "og:title", content: "Mente Activa — Ejercicios cognitivos para mayores" },
      { property: "og:description", content: "15 minutos al día para una mente más ágil." },
      { property: "og:type", content: "website" },
    ],
  }),
});

function CTAButton({ children, large = false }: { children: React.ReactNode; large?: boolean }) {
  return (
    <a
      href="#comprar"
      className={`inline-flex items-center justify-center rounded-xl bg-cta text-cta-foreground font-semibold shadow-[var(--shadow-warm)] transition-all hover:scale-[1.02] hover:brightness-105 active:scale-[0.99] ${
        large ? "px-10 py-6 text-2xl" : "px-8 py-5 text-xl"
      }`}
    >
      {children}
    </a>
  );
}

function Landing() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const faqs = [
    {
      q: "¿Necesito saber usar el ordenador?",
      a: "No. El programa se entrega en un cuadernillo impreso y en formato digital muy sencillo. Si sabe abrir un correo electrónico, puede usarlo.",
    },
    {
      q: "¿Cuánto tiempo al día tengo que dedicarle?",
      a: "Solo 15 minutos al día. Puede hacerlo por la mañana con el café o cuando prefiera.",
    },
    {
      q: "¿A qué edad está dirigido?",
      a: "Está diseñado para personas de 60 años en adelante, sin límite superior. Muchos usuarios tienen más de 80 años.",
    },
    {
      q: "¿Y si no me gusta?",
      a: "Tiene 30 días para probarlo. Si no está satisfecho, le devolvemos su dinero. Sin preguntas.",
    },
    {
      q: "¿Cómo lo recibo?",
      a: "Recibirá acceso inmediato por correo electrónico tras el pago. Puede imprimir los ejercicios o hacerlos en el móvil o la tableta.",
    },
  ];

  return (
    <main className="min-h-dvh bg-background">
      {/* HERO */}
      <section
        className="px-6 py-12 md:py-20"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-block rounded-full bg-card px-4 py-2 text-base font-medium text-primary shadow-[var(--shadow-soft)]">
              ✓ Más de 12.400 personas mayores en Europa
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Mantenga su mente <span className="text-primary">ágil y despierta</span> después de los 60
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-muted-foreground">
              Un programa sencillo de <strong className="text-foreground">15 minutos al día</strong> con ejercicios diseñados por especialistas para mejorar su memoria, concentración y claridad mental.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <CTAButton large>Empezar hoy — 27€</CTAButton>
              <p className="text-base text-muted-foreground">
                Acceso inmediato · Garantía 30 días
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4 text-base">
              <div className="flex -space-x-3">
                <img src={t1} alt="" className="w-12 h-12 rounded-full border-2 border-background object-cover" />
                <img src={t2} alt="" className="w-12 h-12 rounded-full border-2 border-background object-cover" />
                <img src={t3} alt="" className="w-12 h-12 rounded-full border-2 border-background object-cover" />
              </div>
              <div>
                <div className="text-cta text-xl">★★★★★</div>
                <div className="text-muted-foreground">4,9 / 5 sobre 2.180 valoraciones</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImage}
              alt="Pareja mayor haciendo ejercicios cognitivos"
              width={1024}
              height={1024}
              className="rounded-2xl shadow-[var(--shadow-warm)] w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="px-6 py-20 bg-card">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            ¿Le suena familiar?
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3 text-left">
            {[
              "Olvida dónde ha dejado las llaves o las gafas varias veces al día.",
              "Le cuesta recordar nombres de personas que acaba de conocer.",
              "Nota que le lleva más tiempo hacer cosas que antes hacía sin pensar.",
            ].map((p, i) => (
              <div key={i} className="rounded-xl border border-border bg-muted p-6 text-lg">
                {p}
              </div>
            ))}
          </div>
          <p className="mt-10 text-xl md:text-2xl text-foreground max-w-2xl mx-auto">
            No es la edad. Es <strong>falta de estimulación</strong>. Y tiene solución.
          </p>
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold">
              Mente Activa: el programa diario que su cerebro necesita
            </h2>
            <p className="mt-6 text-xl text-muted-foreground">
              90 días de ejercicios progresivos, claros y agradables. Sin apps complicadas. Sin jerga médica.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              { n: "01", t: "Memoria", d: "Ejercicios para recordar nombres, fechas y detalles del día a día." },
              { n: "02", t: "Concentración", d: "Prácticas cortas que entrenan la atención sostenida." },
              { n: "03", t: "Agilidad mental", d: "Retos de lógica y cálculo para pensar más rápido." },
              { n: "04", t: "Lenguaje", d: "Juegos con palabras que enriquecen el vocabulario." },
              { n: "05", t: "Orientación", d: "Actividades que fortalecen la orientación espacial y temporal." },
              { n: "06", t: "Bienestar", d: "Rutinas suaves de respiración y relajación mental." },
            ].map((c) => (
              <div
                key={c.n}
                className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]"
              >
                <div className="text-cta font-serif text-3xl">{c.n}</div>
                <h3 className="mt-3 text-2xl font-bold">{c.t}</h3>
                <p className="mt-3 text-lg text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="px-6 py-20 bg-secondary">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            Lo que notará en pocas semanas
          </h2>
          <ul className="mt-12 space-y-5">
            {[
              "Recordará nombres, citas y recados sin apuntarlos.",
              "Se sentirá más seguro al hablar y expresarse.",
              "Dormirá mejor gracias a una mente más ordenada.",
              "Ganará confianza en usted mismo y en sus capacidades.",
              "Tendrá una rutina agradable que esperará cada día.",
            ].map((b, i) => (
              <li key={i} className="flex items-start gap-4 text-xl">
                <span className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground grid place-items-center font-bold">
                  ✓
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            Personas como usted ya lo han probado
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { img: t1, name: "María, 71 — Valencia", text: "Después de dos meses, recuerdo los nombres de mis nietos y sus amigos sin dudar. Mi hija está sorprendida." },
              { img: t2, name: "Antonio, 76 — Madrid", text: "Lo hago cada mañana con el café. Es entretenido y me despeja para todo el día." },
              { img: t3, name: "Carmen, 68 — Sevilla", text: "Tenía miedo de que fuera complicado. Es todo lo contrario: claro, sencillo y muy agradable." },
            ].map((r, i) => (
              <div key={i} className="rounded-2xl bg-card border border-border p-6 shadow-[var(--shadow-soft)]">
                <div className="text-cta text-xl">★★★★★</div>
                <p className="mt-4 text-lg">"{r.text}"</p>
                <div className="mt-6 flex items-center gap-4">
                  <img src={r.img} alt="" loading="lazy" width={512} height={512} className="w-14 h-14 rounded-full object-cover" />
                  <div className="font-semibold">{r.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="comprar" className="px-6 py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            Empiece hoy — pague una sola vez
          </h2>
          <p className="mt-6 text-xl opacity-90">
            Todo el programa por menos de lo que cuesta una comida fuera de casa.
          </p>

          <div className="mt-12 rounded-3xl bg-card text-card-foreground p-8 md:p-12 shadow-[var(--shadow-warm)] text-left">
            <div className="text-center">
              <div className="text-muted-foreground text-lg line-through">Precio normal 54€</div>
              <div className="mt-2 text-6xl md:text-7xl font-bold text-primary">27€</div>
              <div className="text-lg text-muted-foreground">Pago único · IVA incluido</div>
            </div>

            <ul className="mt-8 space-y-3 text-lg">
              {[
                "Programa completo de 90 días",
                "Cuadernillo digital para imprimir",
                "Guía para acompañantes y familia",
                "Acceso inmediato tras el pago",
                "Garantía de devolución de 30 días",
              ].map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-cta text-2xl leading-none">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 text-center">
              <CTAButton large>Quiero empezar ahora</CTAButton>
              <p className="mt-4 text-base text-muted-foreground">
                Pago seguro · Visa, Mastercard, PayPal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 bg-card">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            Preguntas frecuentes
          </h2>
          <div className="mt-12 space-y-4">
            {faqs.map((f, i) => {
              const open = faqOpen === i;
              return (
                <div key={i} className="rounded-xl border border-border overflow-hidden">
                  <button
                    onClick={() => setFaqOpen(open ? null : i)}
                    aria-expanded={open}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left text-xl font-semibold hover:bg-muted transition-colors"
                  >
                    <span>{f.q}</span>
                    <span className="text-3xl text-primary flex-shrink-0 leading-none w-8 text-center">
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  {open && (
                    <div className="px-5 pb-5 text-lg text-muted-foreground">{f.a}</div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-14 text-center">
            <CTAButton large>Empezar ahora — 27€</CTAButton>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10 bg-foreground text-background/80 text-center">
        <p className="text-lg font-serif text-background">Mente Activa</p>
        <p className="mt-2 text-base">
          © {new Date().getFullYear()} Mente Activa · Contacto: ayuda@menteactiva.eu
        </p>
        <p className="mt-2 text-sm opacity-70">Aviso legal · Política de privacidad · Términos</p>
      </footer>
    </main>
  );
}
