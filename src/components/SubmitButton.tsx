export default function SubmitButton ({ children }: { children: React.ReactNode }) {
  return (
    <button
    className="bg-stone-800/20 border border-stone-200 px-10 py-4 backdrop-blur-sm hover:bg-stone-950/70 transition-all tracking-wide uppercase"
    >
      {children}
    </button>
  )
}
