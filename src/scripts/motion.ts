import { animate } from "motion";

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduce) {
  const heroPanel = document.querySelector<HTMLElement>("[data-hero-panel]");
  if (heroPanel) {
    animate(
      heroPanel,
      { opacity: [0, 1], y: [28, 0] },
      { duration: 1.05, delay: 0.35, ease: [0.22, 1, 0.36, 1] }
    );
  }

}

document.addEventListener("click", (event) => {
  const target = event.target as Element | null;
  const anchor = target?.closest<HTMLAnchorElement>('a[href^="#"]');
  const menu = document.querySelector<HTMLElement>("#menu-mobile");

  if (anchor) {
    const href = anchor.getAttribute("href");
    if (href && href.length > 1) {
      const section = document.getElementById(href.slice(1));
      if (section) {
        event.preventDefault();

        if (menu?.matches(":popover-open")) {
          menu.hidePopover();
          document.body.style.overflow = "";
        }

        history.replaceState(null, "", location.pathname + location.search);
        const isSkipLink = href === "#conteudo";

        window.setTimeout(() => {
          section.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
          if (isSkipLink) section.focus({ preventScroll: true });
        }, 0);
      }
    }
  }

  const trigger = target?.closest<HTMLElement>("[data-service-link], [data-service-cta]");
  if (!trigger) return;
  const id = trigger.dataset.serviceLink ?? trigger.dataset.serviceCta;
  if (!id) return;
  window.dispatchEvent(new CustomEvent("axis:select-service", { detail: { id } }));
});

window.addEventListener("load", () => {
  if (location.hash) {
    history.replaceState(null, "", location.pathname + location.search);
  }
});
