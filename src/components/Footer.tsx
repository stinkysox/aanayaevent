import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 md:gap-8">
          <div className="sm:col-span-2">
            <h3 className="font-serif text-2xl text-foreground mb-4">Taaffeite Events</h3>
            <p className="editorial-body max-w-sm">
              Event planners based in Bangalore, creating thoughtful celebrations
              with care, creativity, and attention to detail.
            </p>
          </div>

          <div>
            <h4 className="editorial-subheading mb-6 text-foreground">Navigate</h4>
            <div className="flex flex-col gap-3">
              {["About", "Experiences", "Portfolio", "Destinations", "Contact"].map(
                (item) => (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase()}`}
                    className="editorial-body hover:text-foreground transition-colors duration-300"
                  >
                    {item}
                  </Link>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="editorial-subheading mb-6 text-foreground">Connect</h4>
            <div className="flex flex-col gap-3 editorial-body">
              <span>Instagram</span>
              <span>Pinterest</span>
              <span>info@taaffeite.com</span>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-8 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-body tracking-wider">
            © 2026 Taaffeite Events. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/terms"
              className="text-xs text-muted-foreground font-body tracking-wider hover:text-foreground transition-colors"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              to="/privacy"
              className="text-xs text-muted-foreground font-body tracking-wider hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-xs text-muted-foreground font-body tracking-wider">
              Bangalore, India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
