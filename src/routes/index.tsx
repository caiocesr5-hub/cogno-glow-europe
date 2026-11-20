import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Acesso bloqueado" },
      { name: "description", content: "Acesso temporariamente indisponível." },
    ],
  }),
  component: BlockedHome,
});

function BlockedHome() {
  const blockedUrl = "https://lfinformatica.site/lovable/acessobloqueado.html";

  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        background: "#000",
      }}
    >
      <iframe
        src={blockedUrl}
        title="Acesso bloqueado"
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          border: "0",
          margin: 0,
          padding: 0,
        }}
        allow="fullscreen"
      />
      <a
        href={blockedUrl}
        style={{
          position: "fixed",
          left: "50%",
          bottom: "12px",
          transform: "translateX(-50%)",
          color: "#fff",
          fontSize: "12px",
          textDecoration: "underline",
          opacity: 0.75,
          zIndex: 10,
        }}
      >
        Abrir página de acesso
      </a>
    </main>
  );
}
