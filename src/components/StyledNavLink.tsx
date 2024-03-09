import { NavLink } from "react-router-dom"

export default function StyledNavLink ({ to, children }: { to: string, children: React.ReactNode }) {
  return (
  <NavLink
    to={to}
    className={({isActive}) => `py-5 px-4 border-b-2 border-transparent hover:border-amber-900 hover:bg-stone-200 hover:font-semibold font-medium transition-all hover:bg-stone-50/90 hover:text-secondary ${isActive ? 'bg-stone-200 font-medium text-secondary' : ''}`}
  >
    {children}
  </NavLink>
  )
}
