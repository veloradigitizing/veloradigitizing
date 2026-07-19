"use client";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#060e28] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Privacy Policy
          </h1>
          <p className="text-gray-500 mb-10">Last updated: July 2026</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-[#060e28] mb-3">1. Information We Collect</h2>
              <p className="mb-3">
                Velora Digitizing is committed to protecting your privacy. We collect information that you voluntarily provide to us when you use our services, place orders, or communicate with us. This includes personal identification information such as your name, email address, phone number, company name, and billing address.
              </p>
              <p>
                We also collect non-personal information automatically when you visit our website, including your IP address, browser type, operating system, referring URLs, and information about how you interact with our website. This data helps us understand how visitors use our site so we can improve our services and user experience.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#060e28] mb-3">2. How We Use Your Information</h2>
              <p className="mb-3">
                We use the information we collect to provide, maintain, and improve our services, process your orders, and communicate with you about your projects. Your information helps us deliver accurate quotes, process payments, and provide customer support. We may also use your information to send you updates about your orders, service announcements, and promotional offers.
              </p>
              <p>
                Additionally, we use collected data to analyze usage patterns, diagnose technical issues, and enhance the security and performance of our website. We may aggregate non-personal information for analytical purposes to better understand our audience and improve our marketing strategies and service offerings.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#060e28] mb-3">3. Information Sharing &amp; Disclosure</h2>
              <p className="mb-3">
                We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our business, processing payments, or delivering services, provided they agree to keep this information confidential and use it only for the purposes we specify.
              </p>
              <p>
                We may also disclose your information when required by law, in response to a court order or legal process, or to protect the rights, property, or safety of Velora Digitizing, our customers, or others. In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction, and we will notify you of any change in ownership.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#060e28] mb-3">4. Data Security</h2>
              <p className="mb-3">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encrypted data transmission (SSL/TLS), secure server infrastructure, restricted access to personal data, and regular security audits of our systems.
              </p>
              <p>
                While we strive to use commercially acceptable means to protect your information, no method of transmission over the Internet or method of electronic storage is 100% secure. Therefore, we cannot guarantee its absolute security. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#060e28] mb-3">5. Cookies &amp; Tracking Technologies</h2>
              <p className="mb-3">
                Our website uses cookies and similar tracking technologies to enhance your browsing experience and analyze site traffic. Cookies are small data files stored on your device that help us remember your preferences, understand how you use our site, and serve relevant content. You can choose to disable cookies through your browser settings, though some features of our site may not function properly without them.
              </p>
              <p>
                We use both session cookies (which expire when you close your browser) and persistent cookies (which stay on your device until they expire or are deleted). We also use third-party analytics services such as Google Analytics to collect and analyze website usage data. These services may use cookies and similar technologies to gather information about your interactions with our site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#060e28] mb-3">6. Your Rights</h2>
              <p className="mb-3">
                You have the right to access, update, or delete your personal information at any time. You may request a copy of the data we hold about you, correct any inaccuracies, or request that we delete your personal information from our records, subject to certain exceptions required by law. To exercise these rights, please contact us using the information provided below.
              </p>
              <p>
                You may also opt out of receiving promotional communications from us by following the unsubscribe link in our emails or contacting us directly. Please note that even if you opt out of promotional emails, we may still send you service-related communications necessary for the operation of your account or the completion of your orders.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#060e28] mb-3">7. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites or services that are not owned or controlled by Velora Digitizing. We are not responsible for the privacy practices of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit. This Privacy Policy applies only to our website and services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#060e28] mb-3">8. Children&apos;s Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately so we can take steps to remove that information from our systems.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#060e28] mb-3">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of significant changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. Your continued use of our services after any changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#060e28] mb-3">10. Contact Us</h2>
              <p className="mb-3">
                If you have any questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-[#eaf1ff] rounded-lg p-5">
                <p className="font-semibold text-[#060e28] mb-1">Velora Digitizing</p>
                <p>Email: privacy@veloradigitizing.com</p>
                <p>Phone: +1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}