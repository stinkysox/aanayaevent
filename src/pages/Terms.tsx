import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";

const Terms = () => {
  return (
    <PageLayout>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-12">
          <ScrollReveal>
            <span className="editorial-subheading block mb-4">Legal</span>
            <h1 className="editorial-heading text-3xl sm:text-4xl md:text-6xl text-foreground mb-8">
              Terms &amp; Conditions
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-12 space-y-12">
          {[
            {
              title: "1. Agreement to Terms",
              body: "By accessing or using the Taaffeite Events website and services, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please refrain from using our website or engaging our services.",
            },
            {
              title: "2. Services",
              body: "Taaffeite Events provides event planning, wedding coordination, decor design, and related services. The scope, timeline, and deliverables for each engagement are defined in individual service agreements signed between Taaffeite Events and the client.",
            },
            {
              title: "3. Bookings & Payments",
              body: "A non-refundable booking fee is required to secure your event date. Payment schedules, amounts, and methods are outlined in your service agreement. All prices are quoted in Indian Rupees (INR) unless otherwise specified. Late payments may incur additional charges as detailed in your contract.",
            },
            {
              title: "4. Cancellations & Refunds",
              body: "Cancellation policies vary by service type and proximity to the event date. Details are specified in your individual service agreement. In general, cancellations made more than 90 days prior to the event may be eligible for a partial refund, excluding the booking fee.",
            },
            {
              title: "5. Client Responsibilities",
              body: "Clients are responsible for providing accurate information, timely approvals, and access to venues as required. Delays caused by the client may affect timelines and incur additional costs. Clients must ensure all necessary permits and permissions are obtained for their event venue.",
            },
            {
              title: "6. Intellectual Property",
              body: "All designs, concepts, mood boards, and creative materials produced by Taaffeite Events remain our intellectual property until full payment is received. Photography and videography of our work may be used in our portfolio and marketing materials unless otherwise agreed in writing.",
            },
            {
              title: "7. Liability",
              body: "Taaffeite Events takes every precaution to ensure the success of your event. However, we are not liable for circumstances beyond our control, including but not limited to weather, venue issues, vendor failures, or force majeure events. Our total liability shall not exceed the fees paid for the specific service in question.",
            },
            {
              title: "8. Third-Party Vendors",
              body: "We work with trusted third-party vendors for various aspects of your event. While we carefully vet our partners, Taaffeite Events is not liable for the performance, quality, or conduct of third-party vendors. Separate agreements between you and vendors are independent of our engagement.",
            },
            {
              title: "9. Changes to Terms",
              body: "We reserve the right to update these terms at any time. Changes will be posted on this page with an updated effective date. Continued use of our website or services constitutes acceptance of the revised terms.",
            },
            {
              title: "10. Governing Law",
              body: "These terms are governed by and construed in accordance with the laws of India. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.",
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

export default Terms;
