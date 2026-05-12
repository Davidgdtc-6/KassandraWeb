import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/message/NEC4V43HNLMHC1"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16
        bg-magenta rounded-full flex items-center justify-center
        shadow-xl shadow-magenta/40
        transition-all duration-500 ease-out
        hover:scale-110 hover:shadow-2xl hover:shadow-magenta/50
        animate-pulse-slow"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white fill-white" />
    </a>
  );
}
