import HomepageLink from "../components/HomepageLink";

export default function PageNotFound () {
  return (
    <main className="px-5 py-4 flex flex-col text-center items-center ">
      <section className="mb-10">
        <h1 className="font-extrabold text-4xl md:text-6xl mb-2 uppercase">404 not found</h1>
        <p className="text-lg">The link may be broken, or the page might have been moved elsewhere.</p>
      </section>
      <HomepageLink to={'/'}>
        Go to the homepage
      </HomepageLink>
    </main>
  )
}
