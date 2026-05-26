import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <PageLayout>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
          <ScrollReveal>
            <span className="editorial-subheading block mb-4">Contact</span>
            <h1 className="editorial-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-foreground max-w-3xl">
              Let's Talk About
              <br />
              Your Event
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    {[
                      { key: "name", label: "Full Name", type: "text" },
                      { key: "email", label: "Email", type: "email" },
                      { key: "phone", label: "Phone", type: "tel" },
                      { key: "date", label: "Preferred Date", type: "text" },
                      { key: "location", label: "Location", type: "text" },
                      { key: "guests", label: "Expected Guests", type: "text" },
                    ].map((field) => (
                      <div key={field.key}>
                        <label className="editorial-subheading block mb-3">{field.label}</label>
                        <input
                          type={field.type}
                          value={formData[field.key as keyof typeof formData]}
                          onChange={(e) =>
                            setFormData({ ...formData, [field.key]: e.target.value })
                          }
                          className="w-full bg-transparent border-b border-border pb-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors duration-300 placeholder:text-muted-foreground/50"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="editorial-subheading block mb-3">
                      Tell Us About Your Event
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-border pb-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors duration-300 resize-none placeholder:text-muted-foreground/50"
                    />
                  </div>

                  <Button variant="editorial" size="xl" type="submit">
                    Send Inquiry
                  </Button>
                </form>
              </ScrollReveal>
            </div>

     
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
