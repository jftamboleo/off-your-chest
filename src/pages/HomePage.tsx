import HomepageLink from "../components/HomepageLink";

export default function HomePage () {
  return (
    <main className="px-5 py-6">
      <div className='w-full sm:w-11/12 mx-auto text-center'>
        <section className="mb-10">
          <h1 className="font-extrabold text-4xl md:text-6xl mb-2">Get it off your chest</h1>
          <p className="text-xl">Share your thoughts anonymously</p>
        </section>
        <HomepageLink to={'/new'}>
          Get started
        </HomepageLink>
      </div>
    </main>
  )
}