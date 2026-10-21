import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Nevora Labs | Premium Digital Experiences',
  description: 'Engineering scalable web architectures and AI automated workflows.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="relative bg-white text-black antialiased">
        
        {/* Physical Grain Texture (Premium noise effect) - Ye sirf ek subtle paper texture dega */}
        <div 
          className="pointer-events-none fixed inset-0 z-[1] h-full w-full opacity-[0.03] mix-blend-multiply" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        ></div>

        {/* Main Website Content */}
        <div className="relative z-10">
          <Navbar />
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
          <Footer />
        </div>

      </body>
    </html>
  );
}