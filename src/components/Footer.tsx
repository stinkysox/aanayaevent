import { Link } from "react-router-dom";
import { ShimmerImage } from "@/components/ui/ShimmerImage";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 md:gap-8">
          <div className="sm:col-span-2">
            {/* LOGO */}
            <div className="mb-5">
              <ShimmerImage
                src="https://i.postimg.cc/qR6FB3wR/Screenshot-2026-05-23-191725.png"
                alt="Aanaya Event"
                className="
                  w-40
                  object-cover
                  rounded-2xl
                  border
                  border-border/40
                  shadow-sm
                "
              />
            </div>

            <p className="editorial-body max-w-sm mb-6">
              Event planners based in Hyderabad, designing stories with soul and
              crafting celebrations where every detail holds meaning.
            </p>

            {/* ADDRESS */}
            <div className="flex gap-3 text-sm text-muted-foreground max-w-sm align-start group">
              <MapPin className="w-5 h-5 shrink-0 text-muted-foreground/70 mt-0.5" />
              <p className="leading-relaxed font-body">
                CCFQ+H4J, Rd Number 3, UBI Colony, Andhra Pradesh Real Estate, Green Valley, Banjara Hills, Hyderabad, Telangana 500034
              </p>
            </div>
          </div>

          {/* NAVIGATE */}
          <div>
            <h4 className="editorial-subheading mb-6 text-foreground">
              Navigate
            </h4>

            <div className="flex flex-col gap-3">
              {[
                { label: "Our World", path: "/" },
                { label: "Who We Are", path: "/about" },
                { label: "Our Creations", path: "/gallery" },
                { label: "Reach Us", path: "/contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="editorial-body hover:text-foreground transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CONNECT */}
          <div>
            <h4 className="editorial-subheading mb-6 text-foreground">
              Connect
            </h4>

            <div className="flex flex-col gap-4 editorial-body">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/aanaya_event"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-foreground transition-colors duration-300"
              >
                <Instagram className="w-4 h-4 shrink-0" />
                <span>@aanaya_event</span>
              </a>

              {/* Pinterest */}
              <a
                href="https://in.pinterest.com/aanayaevent/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-foreground transition-colors duration-300"
              >
                <svg
                  className="w-4 h-4 shrink-0 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.017 0C5.396 0 0 5.377 0 12c0 5.077 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.03-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.493 0-2.873-2.064-4.882-5.005-4.882-3.41 0-5.413 2.561-5.413 5.203 0 1.03.397 2.133.892 2.734a.317.317 0 0 1 .074.286c-.097.404-.314 1.282-.357 1.455-.056.23-.189.279-.435.164-1.622-.756-2.636-3.134-2.636-5.05 0-4.113 2.991-7.892 8.622-7.892 4.526 0 8.043 3.226 8.043 7.54 0 4.5-2.837 8.118-6.775 8.118-1.323 0-2.567-.687-2.991-1.494l-.815 3.109c-.295 1.129-1.097 2.545-1.633 3.418a11.97 11.97 0 0 0 3.865.64c6.623 0 12-5.377 12-12s-5.378-12-12-12z" />
                </svg>
                <span>Pinterest</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918799997899"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-foreground transition-colors duration-300"
              >
                <svg
                  className="w-4 h-4 shrink-0 stroke-current fill-none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 .81.7A2 2 0 0 1 22 16.92z" />
                  <path d="M14.05 2a9 9 0 0 1 8 7.94" strokeDasharray="2 2" className="opacity-60" />
                  <path d="M14.05 6A5 5 0 0 1 18 10" />
                </svg>
                <span>WhatsApp</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+918799997899"
                className="flex items-center gap-3 hover:text-foreground transition-colors duration-300"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>+91 87999 97899</span>
              </a>

              {/* Email */}
              <a
                href="mailto:aanayaevent@gmail.com"
                className="flex items-center gap-3 hover:text-foreground transition-colors duration-300"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span className="break-all">aanayaevent@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-body tracking-wider">
            © 2026 Aanaya Event. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-xs text-muted-foreground font-body tracking-wider">
              Hyderabad, India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;