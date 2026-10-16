import WhatsAppIcon from "./WhatsAppIcon";
import { site, telHref, whatsappHref } from "@/lib/site";

// Always-visible call/WhatsApp actions: a bottom bar on phones, a floating button on desktop.
export default function MobileActionBar() {
  const chat = whatsappHref("Hello Satvika Enterprises, I need help with a leak/repair.");

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 grid h-[4.6rem] grid-cols-2 gap-2 border-t border-navy-100 bg-white p-2.5 lg:hidden">
        <a
          href={telHref(site.phones[0])}
          className="grid place-items-center rounded-sm bg-navy-900 font-display font-semibold text-white"
        >
          Call now
        </a>
        <a
          href={chat}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-sm bg-whatsapp font-display font-semibold text-navy-950"
        >
          <WhatsAppIcon className="size-5" /> WhatsApp
        </a>
      </div>

      <a
        href={chat}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden size-16 place-items-center rounded-full bg-whatsapp text-white shadow-2xl shadow-black/25 transition hover:scale-105 lg:grid"
      >
        <WhatsAppIcon className="size-8" />
      </a>
    </>
  );
}
