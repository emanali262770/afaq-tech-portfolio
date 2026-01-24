import React from "react";

const PrivacyPolicyContentSection = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-[95rem] px-4 sm:px-6 lg:px-8">
        <div className="space-y-10 text-foreground">
          {/* Title */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-primary">
              Privacy Policy – Afaq Technology
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              Last Updated: 1/24/2026
            </p>
          </div>

          {/* Intro */}
          <p className="text-base leading-relaxed">
            At <strong>Afaq Technology</strong>, accessible from{" "}
            <strong>https://afaq-tech-portfolio.vercel.app</strong>, protecting the privacy
            of our visitors and clients is one of our top priorities. This
            Privacy Policy explains what information we collect, how we use it,
            and how we protect it.
          </p>

          {/* Consent */}
          <div>
            <h2 className="text-xl font-bold">Consent</h2>
            <p className="mt-3 leading-relaxed">
              By using our website, you hereby consent to our Privacy Policy and
              agree to its terms.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="text-xl font-bold">Information We Collect</h2>
            <p className="mt-3 leading-relaxed">
              We collect personal information only when you voluntarily provide
              it to us, such as when you fill out a contact form or contact us
              via email, phone, or WhatsApp.
            </p>

            <ul className="mt-4 list-disc pl-6 space-y-2">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Service Interest</li>
              <li>Message or inquiry details</li>
            </ul>
          </div>

          {/* How We Use Info */}
          <div>
            <h2 className="text-xl font-bold">How We Use Your Information</h2>
            <ul className="mt-4 list-disc pl-6 space-y-2">
              <li>To respond to your inquiries and requests</li>
              <li>To communicate with you regarding our services</li>
              <li>To provide customer support</li>
              <li>To improve our website and service offerings</li>
              <li>To maintain internal communication records</li>
            </ul>
          </div>

          {/* Communication */}
          <div>
            <h2 className="text-xl font-bold">
              Communication (Email, Phone & WhatsApp)
            </h2>
            <p className="mt-3 leading-relaxed">
              If you contact us through email, phone call, or WhatsApp, your
              information is used strictly for communication and service-related
              purposes only. We do not share your contact details with third
              parties.
            </p>
          </div>

          {/* Log Files */}
          <div>
            <h2 className="text-xl font-bold">Log Files</h2>
            <p className="mt-3 leading-relaxed">
              Afaq Technology follows a standard procedure of using log files.
              These may include IP address, browser type, ISP, date/time stamps,
              and pages visited. This information is used only for analytics and
              website improvement and is not linked to personal identity.
            </p>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-xl font-bold">Cookies</h2>
            <p className="mt-3 leading-relaxed">
              Our website may use basic cookies to improve user experience and
              understand website usage patterns. Cookies do not collect personal
              information and can be disabled through browser settings.
            </p>
          </div>

          {/* Third Party */}
          <div>
            <h2 className="text-xl font-bold">Third-Party Services</h2>
            <p className="mt-3 leading-relaxed">
              We may use trusted third-party services such as hosting or email
              providers. These services are required to keep your data secure
              and confidential and are not permitted to use it for marketing.
            </p>
          </div>

          {/* Security */}
          <div>
            <h2 className="text-xl font-bold">Data Security</h2>
            <p className="mt-3 leading-relaxed">
              We take reasonable technical and organizational measures to
              protect your personal information. However, no method of online
              transmission is completely secure.
            </p>
          </div>

          {/* Rights */}
          <div>
            <h2 className="text-xl font-bold">Your Privacy Rights</h2>
            <p className="mt-3 leading-relaxed">
              You have the right to request access, correction, or deletion of
              your personal data and to withdraw consent for communication.
            </p>
          </div>

          {/* Changes */}
          <div>
            <h2 className="text-xl font-bold">
              Changes to This Privacy Policy
            </h2>
            <p className="mt-3 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated date.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-bold">Contact Us</h2>
            <p className="mt-3 leading-relaxed">
              If you have any questions about this Privacy Policy, you may
              contact us at:
            </p>

            <ul className="mt-4 space-y-2">
              <li>
                <strong>Company:</strong> Afaq Technology
              </li>
              <li>
                <strong>Email:</strong> info@afaqtechnologies.com
              </li>
              <li>
                <strong>Phone / WhatsApp:</strong> +92 3567899099
              </li>
              <li>
                <strong>Website:</strong>https://afaq-tech-portfolio.vercel.app
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyContentSection;
