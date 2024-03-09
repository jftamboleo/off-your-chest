import { Link } from "react-router-dom"

export default function HomepageLink ({ to, children }: { to: string, children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="bg-stone-800/20 border border-stone-200 px-10 py-4 backdrop-blur-sm hover:bg-stone-950/70 transition-all tracking-wide uppercase"
    >
      {children}
    </Link>
  )
}
