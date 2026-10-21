import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import Background3D from '@/components/Background3D'; // <--- Import this

export const metadata = {
  title: 'Nevora Labs | Premium Digital Experiences',
  description: 'Engineering scalable web architectures and AI automated workflows.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="relative bg-transparent text-black antialiased">
        
        {/* 1. The 3D Infinite Moving Background */}
        <Background3D />

        {/* 2. Physical Grain Texture (Premium noise effect) */}
        <div 
          className="pointer-events-none fixed inset-0 z-[1] h-full w-full opacity-[0.03] mix-blend-multiply" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        ></div>

        {/* 3. Interactive Custom Cursor */}
        <CustomCursor />

        {/* Main Website Content (z-10 to stay above background) */}
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