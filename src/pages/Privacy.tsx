import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";

const Privacy = () => {
  return (
    <PageLayout>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-12">
          <ScrollReveal>
            <span className="editorial-subheading block mb-4">Legal</span>
            <h1 className="editorial-heading text-3xl sm:text-4xl md:text-6xl text-foreground mb-8">
              Privacy Policy
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-12 space-y-12">
          {[
            {
              title: "1. Information We Collect",
              body: "We collect personal information that you voluntarily provide when contacting us, submitting inquiry forms, or engaging our services. This may include your name, email address, phone number, event details, and preferences. We also automatically collect certain technical data when you visit our website, such as your IP address, browser type, and browsing behavior through cookies.",
            },
            {
              title: "2. How We Use Your Information",
              body: "Your information is used to respond to inquiries, plan and coordinate your events, improve our services, and communicate updates or offerings that may interest you. We may also use anonymized data for analytics to enhance the website experience. We will never sell your personal information to third parties.",
            },
            {
              title: "3. Cookies & Tracking",
              body: "Our website uses cookies to enhance your browsing experience, analyze site traffic, and understand visitor preferences. Essential cookies are necessary for the website to function. Analytics and preference cookies help us improve our services. You can manage your cookie preferences through the consent banner or your browser settings at any time.",
            },
            {
              title: "4. Data Sharing",
              body: "We may share your information with trusted third-party vendors involved in your event planning (e.g., venues, caterers, decorators) only to the extent necessary to deliver our services. We may also share data when required by law or to protect our legal rights. All third-party partners are expected to maintain the confidentiality of your information.",
            },
            {
              title: "5. Data Security",
              body: "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.",
            },
            {
              title: "6. Your Rights",
              body: "You have the right to access, correct, or request deletion of your personal information at any time. You may also withdraw consent for non-essential data processing. To exercise these rights, please contact us at info@taaffeite.com. We will respond to your request within 30 days.",
            },
            {
              title: "7. Data Retention",
              body: "We retain your personal information only for as long as necessary to fulfill the purposes described in this policy, or as required by applicable law. Event-related data is typically retained for up to 3 years after the event for portfolio and reference purposes, unless you request earlier deletion.",
            },
            {
              title: "8. Third-Party Links",
              body: "Our website may contain links to external websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.",
            },
            {
              title: "9. Changes to This Policy",
              body: "We may update this Privacy Policy periodically. Any changes will be posted on this page with a revised effective date. We encourage you to review this policy regularly to stay informed about how we protect your information.",
            },
            {
              title: "10. Contact Us",
              body: "If you have questions or concerns about this Privacy Policy or how your data is handled, please reach out to us at info@taaffeite.com or visit our Contact page.",
            },
          ].map((section, i) => (
            <ScrollReveal key={i} delay={i * 50}>
              <div>
                <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-4">
                  {section.title}
                </h2>
                <p className="editorial-body">{section.body}</p>
              </div>
            </ScrollReveal>
          ))}

          <ScrollReveal>
            <div className="border-t border-border pt-8">
              <p className="editorial-body text-xs">
                Last updated: March 2026 · Taaffeite Events, Bangalore, India
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
};

export default Privacy;
