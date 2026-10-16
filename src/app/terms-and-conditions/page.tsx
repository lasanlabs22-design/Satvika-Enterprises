import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { formatPhone, fullAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for using the ${site.name} website and services.`,
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsAndConditions() {
  return (
    <LegalPage title="Terms & Conditions" updated="16 October 2026">
      <p>
        These Terms &amp; Conditions apply to your use of this website and to services provided by{" "}
        {site.name} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), GSTIN {site.gst}. By using this website or
        engaging our services, you agree to these terms.
      </p>

      <h2>1. Use of this website</h2>
      <p>
        This website gives general information about our services. We try to keep it accurate and up to date,
        but it is not a quotation or a guarantee of any result. Do not misuse the website or try to disrupt it.
      </p>

      <h2>2. Enquiries and site inspections</h2>
      <p>
        Sending an enquiry does not create a contract. After an enquiry, we may visit your site to inspect the
        problem. Any charges for the inspection will be told to you before the visit.
      </p>

      <h2>3. Quotations</h2>
      <ul>
        <li>All work is based on a written quotation that describes the scope, materials, price and timeline.</li>
        <li>A quotation is valid for the period stated on it. Prices may change after that period.</li>
        <li>Work not listed in the quotation is extra and will be charged only after you agree to it.</li>
      </ul>

      <h2>4. Payments</h2>
      <p>
        Payment terms, including any advance, are stated on the quotation. Prices are subject to GST as
        applicable. We may pause work if agreed payments are not made on time.
      </p>

      <h2>5. Your responsibilities</h2>
      <ul>
        <li>Give our team safe access to the work area, plus water and electricity where needed.</li>
        <li>Move or protect valuables and furniture near the work area.</li>
        <li>Obtain any permissions needed from your housing society or building management.</li>
        <li>Tell us about any known issues, such as hidden pipes or wiring, before work begins.</li>
      </ul>

      <h2>6. Schedules and delays</h2>
      <p>
        We work to complete jobs on the agreed timeline. Weather, curing times, material availability, site
        conditions or other events outside our control can cause delays. We will keep you informed.
      </p>

      <h2>7. Materials and warranty</h2>
      <p>
        We use branded products from manufacturers such as Dr. Fixit, Fosroc, MYK Laticrete and Asian Paints.
        Any warranty on our work is limited to what is stated in writing on your quotation or invoice. Product
        warranties are provided by the manufacturer under their own terms. A warranty does not cover damage
        from structural movement, new construction, alterations, misuse, or work done by others on the treated
        area after we finish.
      </p>

      <h2>8. Cancellations</h2>
      <p>
        If you cancel after work has started, you will pay for work completed and materials purchased for your
        job up to the date of cancellation.
      </p>

      <h2>9. Limitation of liability</h2>
      <p>
        To the extent the law allows, our total liability for any claim related to a job is limited to the
        amount you paid us for that job. We are not liable for indirect or consequential losses.
      </p>

      <h2>10. Intellectual property</h2>
      <p>
        The content, logo and design of this website belong to {site.name} unless stated otherwise. Brand names
        and logos of product manufacturers belong to their respective owners. Photographs on this website are
        used for illustration.
      </p>

      <h2>11. Governing law</h2>
      <p>
        These terms are governed by the laws of India. Any dispute will be subject to the courts in Hyderabad,
        Telangana.
      </p>

      <h2>12. Changes to these terms</h2>
      <p>We may update these terms from time to time. The latest version will always be on this page.</p>

      <h2>13. Contact us</h2>
      <p>
        <strong>{site.name}</strong>
        <br />
        {fullAddress}
        <br />
        Phone: {formatPhone(site.phones[0])}, {formatPhone(site.phones[1])}
        <br />
        Email: <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </LegalPage>
  );
}
