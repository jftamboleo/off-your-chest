import { Link } from "react-router-dom"
import StyledNavLink from "./StyledNavLink"

export default function Navbar () {
  return (
    <nav className="bg-gradient-to-b from-stone-950/40 to-stone-950/10 md:px-10 flex items-center justify-between border-b border-stone-200/10 h-auto">
      <Link to='/' className="flex items-center gap-x-1 px-2 py-4 border-b-2 border-transparent hover:border-amber-900 hover:bg-stone-50/90 hover:text-stone-800 transition-colors">
        <img src='/favicon.svg' width='30px' height='30px' alt='Tree icon' className="bg-stone-200 rounded-full" />
        <h1 className="font-semibold uppercase text-lg">Off your chest</h1>
      </Link>
      <ul className="flex items-center m-0 p-0 list-none">
        <li className="h-full">
          <StyledNavLink to='/new'>New post</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/post'>Search</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/about'>About</StyledNavLink>
        </li>
      </ul>
    </nav>
  )
}
