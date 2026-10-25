import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GlobalBackground from '@/components/GlobalBackground';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata = {
  title: 'Nevora Labs | Premium Digital Experiences',
  description: 'Engineering scalable web architectures and AI automated workflows.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="relative text-[#021024] dark:text-[#C1E8FF] antialiased transition-colors duration-300">
        
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {/* Universal 3D Network & Constellation Canvas (Dono modes par chalega) */}
          <GlobalBackground />

          {/* Physical Grain Noise Texture */}
          <div 
            className="pointer-events-none fixed inset-0 z-[1] h-full w-full opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay" 
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
            }}
          />

          {/* Main Website Content Layer */}
          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>

      </body>
    </html>
  );
}