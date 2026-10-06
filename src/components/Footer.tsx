import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-espresso text-cream py-12 md:py-24 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-8 md:gap-12">
        <div className="max-w-sm">
          <h2 className="text-xl md:text-2xl font-serif uppercase tracking-widest mb-4">Camellia Spa</h2>
          <p className="text-cream/70 text-sm leading-relaxed">
            A quiet space for rest, ritual, and renewal. Designed for unhurried moments of care.
          </p>
        </div>

        <div className="flex gap-8 md:gap-16">
          <div className="flex flex-col gap-4 text-sm tracking-wide">
            <h3 className="text-gold uppercase text-xs font-semibold mb-2">Explore</h3>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <div className="flex flex-col gap-4 text-sm tracking-wide">
            <h3 className="text-gold uppercase text-xs font-semibold mb-2">Visit</h3>
            <Link href="/contact" className="hover:text-white transition-colors text-gold">Book an Appointment</Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 md:mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs text-cream/50">
        <p>© 2026 Camellia Spa. All rights reserved.</p>
        <p className="text-center md:text-right">No. 96, 5th Cross, Muneshwara Layout, Kodigehalli Main Road, Basavanapura, Bangalore</p>
      </div>
    </footer>
  );
}
