import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/10 pb-28 pt-12 md:pb-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[1.2fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate">
            Luma guides are virtual guides. They offer perspective for reflection, not predictions, and they are not a substitute for medical, legal, financial or mental health advice.
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate md:justify-end">
          <li><Link href="/explore" className="hover:text-ink">Explore guides</Link></li>
          <li><Link href="/privacy" className="hover:text-ink">Privacy</Link></li>
          <li><Link href="/terms" className="hover:text-ink">Terms</Link></li>
        </ul>
      </div>
    </footer>
  );
}
