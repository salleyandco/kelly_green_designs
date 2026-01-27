export default function AboutPage() {
  return (
    <main className='mt-40 lg:flex items-start gap-18 mx-9'>
      <div className='max-w-[430px] mb-20'>
        <h1 className='text-6xl font-serif mt-20 mb-12'>
          <small className='block font-bold font-sans text-base'>
            What I&apos;m all
          </small>
          About
        </h1>
        <div>
          <p>
            From the White House to your house, Kelly Green brings over a decade
            of elite floral artistry to life’s most meaningful moments. A former
            White House florist, she designed for state dinners, inaugurations,
            and world leaders. Today, through Kelly Green Designs, she creates
            bespoke, seasonal floral experiences—thoughtful, refined, and deeply
            personal—marked by quiet professionalism, discretion, and impeccable
            detail.
          </p>
        </div>
      </div>
      <ul className='xl:grid grid-cols-2'>
        <li className='px-16 py-20 bg-[#AA9361]/15'>
          <h2 className='pb-2 text-4xl font-sans font-medium'>Bespoke</h2>
          <p className='font-sans'>
            Every design begins with an understanding of the client&apos;s story
            and space, resulting in a floral experience that feels deeply
            personal and unique.
          </p>
        </li>
        <li className='px-16 py-20'>
          <h2 className='pb-2 text-4xl font-sans font-medium'>Exquisite</h2>
          <p className='font-sans'>
            Every stem, every branch, and every element is considered. From
            planning to placement, the Kelly Green standard is reliability,
            meticulous detail, and an undeniably elevated finish.
          </p>
        </li>
        <li className='px-16 py-20 bg-[#AA9361]/15 xl:bg-transparent'>
          <h2 className='pb-2 text-4xl font-sans font-medium'>Discreet</h2>
          <p className='font-sans'>
            Trusted with state dinners and holiday receptions at 1600
            Pennsylvania Avenue, Kelly approaches every project with quiet
            professionalism and respect for privacy. Whether the event is
            high-profile or close to home, clients receive a polished, intimate
            experience.
          </p>
        </li>
        <li className='px-16 py-20 xl:bg-[#AA9361]/15'>
          <h2 className='pb-2 text-4xl font-sans font-medium'>Curated</h2>
          <p className='font-sans'>
            Guided by each client&apos;s taste and setting, Kelly listens and
            then curates flowers, textures, and details that come together in a
            floral experience that feels beautifully, unmistakably theirs.
          </p>
        </li>
      </ul>
    </main>
  );
}
