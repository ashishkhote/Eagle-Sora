export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://eagle-sora.com/#organization",
    name: "EAGLE SORA TRANSCENDENT PRIVATE LIMITED",
    alternateName: [
      "Eagle Sora",
      "Eagle Sora Technologies",
      "Eagle Sora Transcendent",
      "Eagle Sora Company India",
    ],
    url: "https://eagle-sora.com",
    logo: {
      "@type": "ImageObject",
      url: "https://eagle-sora.com/icon.png",
      caption: "EAGLE SORA Logo",
    },
    description:
      "EAGLE SORA TRANSCENDENT PRIVATE LIMITED delivers innovative technology, custom enterprise software development, cloud infrastructure, AI solutions (SoraAI™), and digital transformation services.",
    email: "contact@eagle-sora.com",
    telephone: "+91-94228-66258",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 12, Gorle Layout, Arni Road",
      addressLocality: "Yavatmal",
      addressRegion: "Maharashtra",
      postalCode: "445001",
      addressCountry: "IN",
    },
    founder: [
      {
        "@type": "Person",
        name: "Sanjay Gorle",
        jobTitle: "Director",
      },
      {
        "@type": "Person",
        name: "Ajay Sanjayrao Gorle",
        jobTitle: "Director & Technology Lead",
      },
    ],
    knowsAbout: [
      "Custom Software Development",
      "Cloud Architecture & DevOps",
      "Artificial Intelligence & Machine Learning",
      "Enterprise SaaS Platforms",
      "Cybersecurity Compliance",
      "Mobile App Development",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://eagle-sora.com/#website",
    url: "https://eagle-sora.com",
    name: "Eagle Sora Transcendent",
    publisher: {
      "@id": "https://eagle-sora.com/#organization",
    },
    inLanguage: "en-IN",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
