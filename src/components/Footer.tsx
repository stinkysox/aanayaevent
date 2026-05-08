import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 md:gap-8">
          <div className="sm:col-span-2">
            <h3 className="font-serif text-2xl text-foreground mb-4">Aanaya Event</h3>
            <p className="editorial-body max-w-sm">
              Event planners based in Hyderabad, turning visions into timeless celebrations
              with care, creativity, and attention to detail.
            </p>
          </div>

          <div>
            <h4 className="editorial-subheading mb-6 text-foreground">Navigate</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Gallery", path: "/gallery" },
                { label: "Contact", path: "/contact" },
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

          <div>
            <h4 className="editorial-subheading mb-6 text-foreground">Connect</h4>
            <div className="flex flex-col gap-3 editorial-body">
              <a 
                href="https://www.instagram.com/aanaya_event" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Instagram: @aanaya_event
              </a>
              <span>Pinterest</span>
              <span>hello@aanayaevent.com</span>
            </div>
          </div>
        </div>

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
