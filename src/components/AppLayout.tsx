import { Outlet } from "react-router-dom"
import Navbar from './Navbar'

export default function AppLayout () {
  return (
    <div className="font-inter h-screen text-primary">
      <Navbar />
      <Outlet />
      <video
        src='/bg.webm'
        muted
        autoPlay
        loop
        className="-z-10 absolute w-screen h-screen inset-0 object-cover overflow-clip pointer-events-none"
      />
    </div>
  )
}
