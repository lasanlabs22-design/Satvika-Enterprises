import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { formatPhone, fullAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects your personal information.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" updated="16 October 2026">
      <p>
        This Privacy Policy explains how {site.name} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) collects,
        uses and protects personal information when you visit {site.url.replace("https://", "")} or contact us
        about our services. We follow the Digital Personal Data Protection Act, 2023 and the Information
        Technology Act, 2000 of India.
      </p>

      <h2>1. Information we collect</h2>
      <p>We only collect information you choose to give us, such as:</p>
      <ul>
        <li>Your name, mobile number and email address.</li>
        <li>Your site address or locality, and details or photos of the problem you want fixed.</li>
        <li>Messages you send us by phone, WhatsApp or email.</li>
      </ul>
      <p>
        Our enquiry form does not store your details on our website. When you submit it, it opens WhatsApp
        with your message pre-filled, and the message reaches us only if you send it.
      </p>

      <h2>2. How we use your information</h2>
      <ul>
        <li>To respond to your enquiry and arrange a site inspection.</li>
        <li>To prepare quotations, carry out work and issue invoices.</li>
        <li>To contact you about the work you have asked us to do.</li>
        <li>To meet our legal, tax and accounting obligations.</li>
      </ul>
      <p>We do not sell, rent or trade your personal information.</p>

      <h2>3. Sharing your information</h2>
      <p>We share your information only when needed:</p>
      <ul>
        <li>With our own team members and site workers who carry out your job.</li>
        <li>With service providers we rely on to communicate, such as WhatsApp, phone and email services.</li>
        <li>With government authorities when the law requires it.</li>
      </ul>

      <h2>4. Third-party services</h2>
      <p>
        Our website shows a Google Maps embed and links to WhatsApp. When you use them, Google and WhatsApp
        may collect data under their own privacy policies. We do not control how they handle that data.
      </p>

      <h2>5. Cookies</h2>
      <p>
        We do not use cookies to track you. Embedded third-party services such as Google Maps may set their own
        cookies, which you can block or delete in your browser settings.
      </p>

      <h2>6. How long we keep it</h2>
      <p>
        We keep your information for as long as we need it to serve you, and for as long as tax and accounting
        laws require us to keep business records. After that, we delete it.
      </p>

      <h2>7. Your rights</h2>
      <p>You can ask us to:</p>
      <ul>
        <li>Tell you what personal information we hold about you.</li>
        <li>Correct or update information that is wrong or incomplete.</li>
        <li>Delete your information, unless we must keep it by law.</li>
        <li>Stop contacting you.</li>
      </ul>
      <p>To make a request, contact us using the details below. We will respond within a reasonable time.</p>

      <h2>8. Security</h2>
      <p>
        We take reasonable steps to keep your information safe. No method of storage or transmission is
        completely secure, so we cannot guarantee absolute security.
      </p>

      <h2>9. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The latest version will always be on this page, with the
        date it was last updated.
      </p>

      <h2>10. Contact us</h2>
      <p>
        For any privacy questions or concerns, contact:
        <br />
        <strong>{site.name}</strong>
        <br />
        {fullAddress}
        <br />
        Phone: {formatPhone(site.phones[0])}
        <br />
        Email: <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </LegalPage>
  );
}
