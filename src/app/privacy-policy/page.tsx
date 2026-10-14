import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Lock, Eye, FileText, PhoneCall, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Camellia Spa Bangalore",
  description: "Learn how Camellia Spa collects, protects, and handles your personal data in accordance with India's Digital Personal Data Protection Act (DPDP Act).",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 14, 2026";

  return (
    <main className="flex min-h-screen flex-col bg-cream text-espresso">
      <Navbar />

      {/* Header */}
      <section className="pt-36 md:pt-44 pb-16 md:pb-20 px-6 md:px-12 bg-espresso text-cream text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-espresso/50 to-espresso pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/15 border border-gold/40 rounded-full mb-4">
            <ShieldCheck className="w-4 h-4 text-gold" />
            <span className="text-gold text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em]">
              Data Protection &amp; Trust
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-4">
            Privacy Policy
          </h1>

          <p className="text-cream/70 text-sm md:text-base max-w-2xl leading-relaxed">
            Your privacy and peace of mind are paramount. This document outlines how Camellia Spa safeguards your personal information and respects your rights.
          </p>

          <span className="mt-4 text-xs text-gold/80 tracking-widest uppercase">
            Effective Date: {lastUpdated}
          </span>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-4xl mx-auto w-full">
        {/* Quick Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
          <div className="p-6 bg-ivory rounded-xl border border-gold/20 shadow-sm flex flex-col gap-2">
            <Lock className="w-5 h-5 text-burgundy mb-1" />
            <h3 className="font-serif text-base text-espresso font-semibold">Zero Data Selling</h3>
            <p className="text-xs text-espresso/70 leading-relaxed">
              We never sell, rent, or trade your contact or personal data with third-party telemarketers or advertisers.
            </p>
          </div>

          <div className="p-6 bg-ivory rounded-xl border border-gold/20 shadow-sm flex flex-col gap-2">
            <Eye className="w-5 h-5 text-burgundy mb-1" />
            <h3 className="font-serif text-base text-espresso font-semibold">Confidential Care</h3>
            <p className="text-xs text-espresso/70 leading-relaxed">
              Any wellness notes, treatment choices, or medical preferences shared remain strictly confidential with your therapists.
            </p>
          </div>

          <div className="p-6 bg-ivory rounded-xl border border-gold/20 shadow-sm flex flex-col gap-2">
            <ShieldCheck className="w-5 h-5 text-burgundy mb-1" />
            <h3 className="font-serif text-base text-espresso font-semibold">DPDP Act Compliant</h3>
            <p className="text-xs text-espresso/70 leading-relaxed">
              Full adherence to India&apos;s Digital Personal Data Protection Act 2023 and the Information Technology Act 2000.
            </p>
          </div>
        </div>

        {/* Detailed Policy Text */}
        <div className="prose prose-espresso max-w-none space-y-12 text-sm sm:text-base leading-relaxed text-espresso/80">
          
          {/* Section 1 */}
          <div>
            <h2 className="text-xl md:text-2xl font-serif text-espresso mb-4 pb-2 border-b border-espresso/10 flex items-center gap-2">
              <span className="text-gold font-sans font-bold text-sm">01.</span> Introduction &amp; Scope
            </h2>
            <p className="mb-3">
              This Privacy Policy applies to <strong>Camellia Spa</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), operating our flagship luxury sanctuary situated at:
            </p>
            <div className="p-4 bg-ivory border-l-2 border-gold text-espresso/90 text-sm font-medium rounded-r-md mb-4">
              Camellia Spa, No. 96, 5th Cross, Muneshwara Layout, Kodigehalli Main Road, Basavanapura, KR Puram, Bangalore – 560 036, Karnataka, India.
            </div>
            <p>
              By accessing our website (<Link href="/" className="text-burgundy hover:underline font-medium">camelliaspa.in</Link>), booking appointments via phone or WhatsApp, or visiting our spa premises, you consent to the collection and handling of your data in accordance with this policy.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl md:text-2xl font-serif text-espresso mb-4 pb-2 border-b border-espresso/10 flex items-center gap-2">
              <span className="text-gold font-sans font-bold text-sm">02.</span> Information We Collect
            </h2>
            <p className="mb-3">
              We collect only the minimum necessary information required to facilitate and confirm your wellness reservations:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Personal Contact Details:</strong> Full name, telephone/mobile number, and optional email address provided when requesting appointments or submitting enquiries.
              </li>
              <li>
                <strong>Appointment Preferences:</strong> Preferred appointment date, preferred time slot, therapist gender preferences (if specified), and requested treatments or spa packages.
              </li>
              <li>
                <strong>Voluntary Health &amp; Safety Disclosures:</strong> Details you voluntarily share with our guest relations team or therapists regarding allergies, pressure preferences, skin sensitivities, or physical conditions (such as pregnancy or joint injuries) to ensure your treatment is safe and personalized.
              </li>
              <li>
                <strong>Automated Technical Data:</strong> Anonymized metrics including browser type, operating system, approximate geographic location, and page engagement patterns collected via secure analytics cookies.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl md:text-2xl font-serif text-espresso mb-4 pb-2 border-b border-espresso/10 flex items-center gap-2">
              <span className="text-gold font-sans font-bold text-sm">03.</span> How We Use Your Information
            </h2>
            <p className="mb-3">
              All information collected is strictly utilized for genuine operational and guest hospitality purposes:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Scheduling, confirming, rescheduling, or answering enquiries regarding your spa sessions.</li>
              <li>Sending courteous WhatsApp or SMS booking confirmations, appointment reminders, and directions to our KR Puram centre.</li>
              <li>Ensuring therapy oils and body scrubs are chosen safely without exposing you to known allergens.</li>
              <li>Enhancing our website performance, layout responsiveness, and customer service quality.</li>
              <li>Complying with statutory accounting and tax regulations in accordance with Indian law.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl md:text-2xl font-serif text-espresso mb-4 pb-2 border-b border-espresso/10 flex items-center gap-2">
              <span className="text-gold font-sans font-bold text-sm">04.</span> Sharing &amp; Third-Party Services
            </h2>
            <p className="mb-3">
              <strong>We do not sell, rent, disclose, or trade personal customer records to third parties.</strong>
            </p>
            <p className="mb-3">
              We only interface with reputable service platforms necessary for operating modern digital customer service:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>WhatsApp (Meta Platforms):</strong> When you click &quot;Send via WhatsApp&quot; on our contact page, your message opens directly in your own WhatsApp application, governed by WhatsApp&apos;s end-to-end encryption.
              </li>
              <li>
                <strong>Google Maps:</strong> Used on our contact page to provide accurate driving and transit directions to our Basavanapura location.
              </li>
              <li>
                <strong>YouTube (Google LLC):</strong> Embedded walkthrough videos allow guests to preview our ambient suites prior to arrival.
              </li>
              <li>
                <strong>Legal Authorities:</strong> We may disclose information only if required by an official court order or law enforcement agency in compliance with Indian legislation.
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl md:text-2xl font-serif text-espresso mb-4 pb-2 border-b border-espresso/10 flex items-center gap-2">
              <span className="text-gold font-sans font-bold text-sm">05.</span> Data Security &amp; Retention
            </h2>
            <p className="mb-3">
              We maintain technical, administrative, and physical safeguards to prevent unauthorized access, loss, or disclosure of your information:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Our website transmits all communications over encrypted <strong>SSL/TLS (HTTPS)</strong> protocols.</li>
              <li>Access to guest booking logs is restricted solely to authorized management personnel.</li>
              <li>We retain guest records only for as long as required to honor active spa packages, maintain service history for returning guests, or satisfy applicable Indian tax and legal requirements.</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl md:text-2xl font-serif text-espresso mb-4 pb-2 border-b border-espresso/10 flex items-center gap-2">
              <span className="text-gold font-sans font-bold text-sm">06.</span> Your Rights as a Guest
            </h2>
            <p className="mb-3">
              Under India&apos;s <em>Digital Personal Data Protection Act (DPDP Act 2023)</em>, you hold the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Right of Access:</strong> You may request a summary of the personal data we hold about you.</li>
              <li><strong>Right to Correction:</strong> You may update or correct inaccurate contact numbers or preferences at any time.</li>
              <li><strong>Right to Erasure:</strong> You may request the deletion of your personal records from our guest communications registry.</li>
              <li><strong>Right to Withdraw Consent:</strong> You may opt-out of booking reminders or marketing messages by sending an opt-out message to our WhatsApp support.</li>
            </ul>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl md:text-2xl font-serif text-espresso mb-4 pb-2 border-b border-espresso/10 flex items-center gap-2">
              <span className="text-gold font-sans font-bold text-sm">07.</span> Grievance Officer &amp; Contact
            </h2>
            <p className="mb-4">
              In accordance with the Information Technology Act 2000 and DPDP Rules, if you have any questions, concerns, or requests regarding this Privacy Policy or how your data is handled, please contact our designated Grievance Officer:
            </p>

            <div className="p-6 bg-ivory border border-gold/30 rounded-xl space-y-2 text-sm">
              <p><strong>Grievance Officer:</strong> Guest Relations Director</p>
              <p><strong>Establishment:</strong> Camellia Spa</p>
              <p><strong>Address:</strong> No. 96, 5th Cross, Muneshwara Layout, Kodigehalli Main Road, Basavanapura, KR Puram, Bangalore – 560 036, Karnataka, India</p>
              <p><strong>Direct Inquiries:</strong> Available via our official <Link href="/contact" className="text-burgundy hover:underline font-semibold">Contact Desk</Link></p>
            </div>
          </div>

          {/* Policy Updates Notice */}
          <div className="pt-6 border-t border-espresso/15 text-xs text-espresso/60">
            <p>
              We reserve the right to amend this Privacy Policy periodically to reflect changes in our wellness practices or legal mandates. Any updates will be posted on this page with an updated &quot;Effective Date&quot;.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
