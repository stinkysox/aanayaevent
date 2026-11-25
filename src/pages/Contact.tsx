import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Calendar,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    location: "",
    guests: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Get today's date in YYYY-MM-DD format to prevent selecting past dates
  const today = new Date().toISOString().split("T")[0];

  // Format YYYY-MM-DD into a readable string like "25 Nov 2026" for WhatsApp
  const formatDisplayDate = (dateStr: string) => {
    if (!dateStr) return "Not specified";
    const dateObj = new Date(dateStr + "T00:00:00");
    return dateObj.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "918799997899";

    const textMessage =
      `*New Event Inquiry*%0A%0A` +
      `*Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Email:* ${encodeURIComponent(formData.email)}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Preferred Date:* ${encodeURIComponent(formatDisplayDate(formData.date))}%0A` +
      `*Location:* ${encodeURIComponent(formData.location || "Not specified")}%0A` +
      `*Expected Guests:* ${encodeURIComponent(formData.guests || "Not specified")}%0A` +
      `*Message:* ${encodeURIComponent(formData.message)}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${textMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitted) setSubmitted(false);
  };

  return (
    <PageLayout>
      {/* Header Section */}
      <section className="pt-28 pb-12 md:pt-40 md:pb-20 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
          <ScrollReveal>
            <span className="editorial-subheading block mb-4 text-primary">
              Inquiries & Bookings
            </span>
            <h1 className="editorial-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground max-w-3xl leading-[1.1]">
              Let’s Talk About
              <br />
              Your Event
            </h1>
            <p className="mt-6 font-body text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Share a few details about your celebration. Once submitted, you’ll
              be connected directly with our team on WhatsApp to discuss
              availability and curation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">
            {/* Left Column: Form (7 cols) */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
                    {/* Full Name */}
                    <div className="group">
                      <label
                        htmlFor="name"
                        className="editorial-subheading block mb-2.5 text-xs tracking-wider text-muted-foreground group-focus-within:text-primary transition-colors"
                      >
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="e.g., Aarav Sharma"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-border py-2.5 font-body text-base text-foreground focus:outline-none focus:border-primary transition-colors duration-300 placeholder:text-muted-foreground/40"
                      />
                    </div>

                    {/* Email */}
                    <div className="group">
                      <label
                        htmlFor="email"
                        className="editorial-subheading block mb-2.5 text-xs tracking-wider text-muted-foreground group-focus-within:text-primary transition-colors"
                      >
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="aarav@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-border py-2.5 font-body text-base text-foreground focus:outline-none focus:border-primary transition-colors duration-300 placeholder:text-muted-foreground/40"
                      />
                    </div>

                    {/* Phone */}
                    <div className="group">
                      <label
                        htmlFor="phone"
                        className="editorial-subheading block mb-2.5 text-xs tracking-wider text-muted-foreground group-focus-within:text-primary transition-colors"
                      >
                        Phone / WhatsApp <span className="text-primary">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-border py-2.5 font-body text-base text-foreground focus:outline-none focus:border-primary transition-colors duration-300 placeholder:text-muted-foreground/40"
                      />
                    </div>

                    {/* Working Date Picker */}
                    <div className="group">
                      <label
                        htmlFor="date"
                        className="editorial-subheading block mb-2.5 text-xs tracking-wider text-muted-foreground group-focus-within:text-primary transition-colors"
                      >
                        Preferred Date <span className="text-primary">*</span>
                      </label>
                      <div className="relative">
                        <input
                          id="date"
                          name="date"
                          type="date"
                          required
                          min={today}
                          value={formData.date}
                          onChange={handleChange}
                          onClick={(e) => {
                            // Opens native calendar picker immediately on click in modern browsers
                            if ("showPicker" in e.currentTarget) {
                              try {
                                e.currentTarget.showPicker();
                              } catch {
                                // Fallback to default behavior
                              }
                            }
                          }}
                          className="w-full bg-transparent border-b border-border py-2.5 font-body text-base text-foreground focus:outline-none focus:border-primary transition-colors duration-300 cursor-pointer [color-scheme:light] dark:[color-scheme:dark]"
                        />
                      </div>
                    </div>

                    {/* Location */}
                    <div className="group">
                      <label
                        htmlFor="location"
                        className="editorial-subheading block mb-2.5 text-xs tracking-wider text-muted-foreground group-focus-within:text-primary transition-colors"
                      >
                        Event City / Venue
                      </label>
                      <input
                        id="location"
                        name="location"
                        type="text"
                        placeholder="e.g., Hyderabad, Goa, Udaipur"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-border py-2.5 font-body text-base text-foreground focus:outline-none focus:border-primary transition-colors duration-300 placeholder:text-muted-foreground/40"
                      />
                    </div>

                    {/* Expected Guests */}
                    <div className="group">
                      <label
                        htmlFor="guests"
                        className="editorial-subheading block mb-2.5 text-xs tracking-wider text-muted-foreground group-focus-within:text-primary transition-colors"
                      >
                        Expected Guests
                      </label>
                      <input
                        id="guests"
                        name="guests"
                        type="number"
                        min={1}
                        placeholder="e.g., 250"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-border py-2.5 font-body text-base text-foreground focus:outline-none focus:border-primary transition-colors duration-300 placeholder:text-muted-foreground/40"
                      />
                    </div>
                  </div>

                  {/* Event Details Textarea */}
                  <div className="group pt-2">
                    <label
                      htmlFor="message"
                      className="editorial-subheading block mb-2.5 text-xs tracking-wider text-muted-foreground group-focus-within:text-primary transition-colors"
                    >
                      Tell Us About Your Event{" "}
                      <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Share your vision, type of celebration, key rituals, or any specific requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-border py-2.5 font-body text-base text-foreground focus:outline-none focus:border-primary transition-colors duration-300 resize-none placeholder:text-muted-foreground/40"
                    />
                  </div>

                  {/* Submit Action & Feedback */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
                    <Button
                      variant="editorial"
                      size="xl"
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2"
                    >
                      <span>Send Inquiry via WhatsApp</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Button>

                    {submitted && (
                      <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 font-body">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>Opening WhatsApp with your details...</span>
                      </div>
                    )}
                  </div>
                </form>
              </ScrollReveal>
            </div>

            {/* Right Column: Editorial Contact Sidebar (5 cols) */}
            <div className="lg:col-span-5 lg:pl-8">
              <ScrollReveal>
                <div className="p-8 sm:p-10 border border-border/70 bg-muted/20 space-y-8">
                  <div>
                    <span className="editorial-subheading text-xs text-primary block mb-2">
                      Direct Contact
                    </span>
                    <h2 className="editorial-heading text-2xl text-foreground">
                      Prefer a Direct Conversation?
                    </h2>
                    <p className="mt-2 font-body text-sm text-muted-foreground leading-relaxed">
                      We take on a limited number of events each season to
                      ensure dedicated attention to every detail.
                    </p>
                  </div>

                  <div className="space-y-5 pt-2 border-t border-border/60">
                    <a
                      href="tel:+918799997899"
                      className="flex items-start gap-4 group"
                    >
                      <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">
                          Phone & WhatsApp
                        </p>
                        <p className="font-body text-base text-foreground group-hover:text-primary transition-colors">
                          +91 87999 97899
                        </p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4">
                      <Calendar className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">
                          Booking Window
                        </p>
                        <p className="font-body text-base text-foreground">
                          Now accepting 2026 – 2027 dates
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">
                          Availability
                        </p>
                        <p className="font-body text-base text-foreground">
                          Available across India & Destination Venues
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
