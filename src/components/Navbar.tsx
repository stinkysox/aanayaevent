import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isDarkHeroPage = ["/", "/about", "/gallery"].includes(location.pathname);
  const lightNavbar = isDarkHeroPage || scrolled || menuOpen;

  return (
    <>
      {/* ======================= */}
      {/* NAVBAR */}
      {/* ======================= */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className={`
          fixed
          top-0
          left-0
          right-0
          z-[100]
          transition-all
          duration-500
          ${
            scrolled
              ? "backdrop-blur-xl bg-black/20 border-b border-white/10"
              : "bg-transparent"
          }
        `}
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            md:px-12
            h-20
            flex
            items-center
            justify-between
          "
        >
          {/* LEFT */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  relative
                  uppercase
                  tracking-[0.28em]
                  text-[11px]
                  transition-all
                  duration-300
                  ${
                    lightNavbar
                      ? "text-white/60 hover:text-white"
                      : "text-black/50 hover:text-black"
                  }
                `}
              >
                {item.label}

                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={`
                      absolute
                      left-0
                      -bottom-2
                      w-full
                      h-px
                      ${
                        lightNavbar
                          ? "bg-white"
                          : "bg-black"
                      }
                    `}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CENTER LOGO */}
          <Link
            to="/"
            className="
              absolute
              left-1/2
              -translate-x-1/2
            "
          >
            <div className="flex flex-col items-center">
              <span
                className={`
                  font-serif
                  text-2xl
                  tracking-[-0.04em]
                  transition-colors
                  duration-500
                  ${
                    lightNavbar
                      ? "text-white"
                      : "text-black"
                  }
                `}
              >
                Aanaya
              </span>

              <span
                className={`
                  uppercase
                  tracking-[0.35em]
                  text-[9px]
                  mt-1
                  transition-colors
                  duration-500
                  ${
                    lightNavbar
                      ? "text-white/40"
                      : "text-black/40"
                  }
                `}
              >
                Event Atelier
              </span>
            </div>
          </Link>

          {/* RIGHT */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.slice(2).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  relative
                  uppercase
                  tracking-[0.28em]
                  text-[11px]
                  transition-all
                  duration-300
                  ${
                    lightNavbar
                      ? "text-white/60 hover:text-white"
                      : "text-black/50 hover:text-black"
                  }
                `}
              >
                {item.label}

                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={`
                      absolute
                      left-0
                      -bottom-2
                      w-full
                      h-px
                      ${
                        lightNavbar
                          ? "bg-white"
                          : "bg-black"
                      }
                    `}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              lg:hidden
              ml-auto
              relative
              z-[120]
              flex
              flex-col
              gap-1.5
            "
          >
            <span
              className={`
                w-6
                h-px
                transition-all
                duration-300
                ${
                  menuOpen
                    ? "rotate-45 translate-y-[4px]"
                    : ""
                }
                ${
                  lightNavbar
                    ? "bg-white"
                    : "bg-black"
                }
              `}
            />

            <span
              className={`
                w-6
                h-px
                transition-all
                duration-300
                ${
                  menuOpen
                    ? "-rotate-45 -translate-y-[4px]"
                    : ""
                }
                ${
                  lightNavbar
                    ? "bg-white"
                    : "bg-black"
                }
              `}
            />
          </button>
        </div>
      </motion.nav>

      {/* ======================= */}
      {/* MOBILE MENU */}
      {/* ======================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="
              fixed
              inset-0
              z-[90]
              bg-[#500000]
              flex
              flex-col
              items-center
              justify-center
              gap-10
            "
          >
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  to={item.path}
                  className="
                    font-serif
                    text-4xl
                    text-white
                    tracking-[-0.04em]
                  "
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;