import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/message/NEC4V43HNLMHC1"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 md:w-14 md:h-14
        bg-[#25D366] rounded-full flex items-center justify-center
        shadow-lg shadow-[#25D366]/30
        transition-all duration-300 ease-out
        hover:scale-105 hover:shadow-xl hover:shadow-[#25D366]/40"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white fill-white" />
    </a>
  );
}
