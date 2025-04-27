import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                <span className="text-black font-semibold">TNB</span>
              </div>
              <span className="text-sm font-semibold text-white">The New Black AI</span>
            </div>
            <p className="text-sm mb-4">
              AI Fashion Design tools for fashion designers and brands
            </p>
            <div className="flex space-x-4">
              {['twitter', 'instagram', 'facebook', 'youtube', 'linkedin'].map((social) => (
                <Link
                  key={social}
                  href={`https://${social}.com`}
                  className="text-zinc-400 hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">{social}</span>
                  <div className="h-5 w-5 bg-zinc-700 rounded-full flex items-center justify-center">
                    <span className="text-[10px]">{social.charAt(0).toUpperCase()}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">AI Design</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white">AI Fashion Design</Link></li>
              <li><Link href="#" className="hover:text-white">AI Virtual Try On</Link></li>
              <li><Link href="#" className="hover:text-white">AI Generated Models</Link></li>
              <li><Link href="#" className="hover:text-white">AI Fashion Branding</Link></li>
              <li><Link href="#" className="hover:text-white">AI Techpack Maker</Link></li>
              <li><Link href="#" className="hover:text-white">AI Fashion Trends</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Features</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white">AI Clothing Design</Link></li>
              <li><Link href="#" className="hover:text-white">AI Fashion Videos</Link></li>
              <li><Link href="#" className="hover:text-white">3D Fashion Models</Link></li>
              <li><Link href="#" className="hover:text-white">AI Moodboards</Link></li>
              <li><Link href="#" className="hover:text-white">AI Color Changer</Link></li>
              <li><Link href="#" className="hover:text-white">All AI Features</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white">About</Link></li>
              <li><Link href="#" className="hover:text-white">Careers</Link></li>
              <li><Link href="#" className="hover:text-white">FAQ</Link></li>
              <li><Link href="#" className="hover:text-white">Contact</Link></li>
              <li><Link href="#" className="hover:text-white">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-zinc-800 pt-8 text-sm">
          © {new Date().getFullYear()} The New Black AI. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
