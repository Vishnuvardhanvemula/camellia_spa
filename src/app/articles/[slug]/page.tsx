import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { spaArticles, SpaArticle } from "@/data/spa-articles";
import { ArticleFAQAccordion } from "./ArticleFAQAccordion";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return spaArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = spaArticles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found | Camellia Spa",
    };
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: [
      "best spa in KR Puram",
      "massage spa in KR Puram",
      "spa near me",
      "full body massage KR Puram",
      "Swedish massage Bangalore",
      "deep tissue massage KR Puram",
    ],
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: "article",
      publishedTime: "2026-10-01T00:00:00.000Z",
      authors: ["Camellia Spa Wellness Team"],
      images: article.featuredImage ? [article.featuredImage] : ["/images/img1.jpg"],
    },
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = spaArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Related articles (excluding current)
  const relatedArticles = spaArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  // JSON-LD Structured Data for Google Rich Snippets
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    image: article.featuredImage || "/images/img1.jpg",
    author: {
      "@type": "Organization",
      name: "Camellia Spa KR Puram",
      url: "https://camelliaspa.in",
    },
    publisher: {
      "@type": "Organization",
      name: "Camellia Spa",
      logo: {
        "@type": "ImageObject",
        url: "https://camelliaspa.in/logo.png",
      },
    },
    datePublished: "2026-10-01",
    dateModified: "2026-10-09",
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="flex min-h-screen flex-col bg-cream">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <Navbar />

      {/* Article Hero Banner */}
      <section className="pt-36 md:pt-44 pb-12 md:pb-20 px-6 md:px-12 bg-espresso text-cream">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-cream/60 uppercase tracking-widest mb-6">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-gold transition-colors">Journal</Link>
            <span>/</span>
            <span className="text-gold truncate max-w-[200px] md:max-w-none">{article.category}</span>
          </nav>

          {/* Category & Read Time */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-caramel/20 border border-gold/40 text-gold text-xs uppercase tracking-wider font-semibold rounded-full">
              {article.category}
            </span>
            <span className="text-cream/50 text-xs uppercase tracking-widest font-medium">
              {article.readTime}
            </span>
            <span className="text-cream/30 text-xs">•</span>
            <span className="text-cream/50 text-xs uppercase tracking-widest font-medium">
              {article.date}
            </span>
          </div>

          {/* Main Article Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-cream leading-[1.15] mb-6">
            {article.title}
          </h1>

          <p className="text-cream/80 text-base md:text-lg leading-relaxed font-light">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* Featured Header Image */}
      {article.featuredImage && (
        <div className="max-w-5xl mx-auto px-6 -mt-6 md:-mt-10 relative z-10 w-full">
          <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-gold/30 shadow-2xl">
            <Image
              src={article.featuredImage}
              alt={article.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent" />
          </div>
        </div>
      )}

      {/* Article Body Content */}
      <article className="py-12 md:py-20 px-6 md:px-12 max-w-4xl mx-auto w-full">
        {/* Intro Paragraphs */}
        <div className="prose prose-lg text-espresso/80 leading-relaxed space-y-5 text-base md:text-lg mb-12">
          {article.content.intro.map((p, i) => (
            <p key={i} className="leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {/* Dynamic Sections */}
        <div className="space-y-12">
          {article.content.sections.map((section, sIdx) => (
            <div key={sIdx} className="border-t border-espresso/10 pt-8">
              <h2 className="text-2xl md:text-3xl font-serif text-espresso leading-snug mb-4">
                {section.heading}
              </h2>

              {section.body.map((para, pIdx) => (
                <p key={pIdx} className="text-espresso/75 text-base md:text-lg leading-relaxed mb-4">
                  {para}
                </p>
              ))}

              {section.list && (
                <ul className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 bg-white/70 p-6 rounded-xl border border-gold/20">
                  {section.list.map((item, lIdx) => (
                    <li key={lIdx} className="flex items-center gap-2 text-sm md:text-base font-medium text-espresso/80">
                      <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Location & Booking Highlight Card */}
        <div className="my-16 p-8 md:p-12 rounded-2xl bg-espresso text-cream border border-gold/40 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-gold text-xs uppercase tracking-[0.2em] font-bold block mb-2">
              Camellia Spa Location
            </span>
            <h3 className="text-2xl md:text-3xl font-serif mb-4">
              Visit Camellia Spa in KR Puram
            </h3>
            <p className="text-cream/80 text-sm md:text-base leading-relaxed mb-6 max-w-xl">
              Located conveniently near <strong>Kodigehalli Main Road, Basavanapura, KR Puram, Bengaluru</strong>. Easily accessible for residents of Hoodi, Mahadevapura, and Whitefield.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 bg-gold text-espresso hover:bg-cream transition-colors text-xs uppercase tracking-widest font-bold rounded-sm"
              >
                Book Your Appointment
              </Link>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 border border-cream/30 text-cream hover:bg-cream/10 transition-colors text-xs uppercase tracking-widest font-bold rounded-sm"
              >
                WhatsApp Booking
              </a>
            </div>
          </div>
        </div>

        {/* Interactive FAQ Accordion */}
        <div className="mt-16 pt-12 border-t border-espresso/15">
          <div className="mb-8">
            <span className="text-burgundy text-xs uppercase tracking-[0.2em] font-bold block mb-1">
              Common Questions
            </span>
            <h2 className="text-2xl md:text-4xl font-serif text-espresso">
              Frequently Asked Questions
            </h2>
          </div>

          <ArticleFAQAccordion faqs={article.faqs} />
        </div>
      </article>

      {/* Related Articles Strip */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="mb-10 text-center md:text-left">
          <span className="text-burgundy text-xs uppercase tracking-[0.2em] font-bold block mb-2">
            Continue Reading
          </span>
          <h2 className="text-2xl md:text-4xl font-serif text-espresso">
            Related Wellness Guides
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {relatedArticles.map((rel) => (
            <Link
              key={rel.id}
              href={`/articles/${rel.slug}`}
              className="bg-white border border-gold/20 hover:border-gold p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="text-caramel text-[10px] uppercase tracking-wider font-bold block mb-2">
                  {rel.category}
                </span>
                <h3 className="text-lg font-serif text-espresso group-hover:text-burgundy transition-colors leading-snug mb-3">
                  {rel.title}
                </h3>
                <p className="text-espresso/60 text-xs line-clamp-2 leading-relaxed mb-4">
                  {rel.excerpt}
                </p>
              </div>
              <span className="text-gold font-bold text-xs uppercase tracking-widest flex items-center gap-1 group-hover:text-burgundy transition-colors">
                Read Guide →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
