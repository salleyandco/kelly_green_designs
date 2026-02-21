import Image from 'next/image';

const Images = [
  { src: '/0282D00A-C389-4E56-B838-6EBA05CE7E36.JPG', alt: '' },
  { src: '/CA01FFF0-97B6-42C2-9025-A74FF65F47D3.JPG', alt: '' },
  { src: '/File_001.jpeg', alt: '' },
  { src: '/IMG_1568.JPEG', alt: '' },
  { src: '/IMG_2887.JPG', alt: '' },
  { src: '/IMG_3223.JPEG', alt: '' },
  { src: '/IMG_3428.JPEG', alt: '' },
  { src: '/IMG_4014.JPEG', alt: '' },
];

export default function AboutPage() {
  return (
    <main className="mx-9 mt-page items-start gap-18 lg:flex">
      <div className="mb-20 max-w-[430px]">
        <h1 className="mt-20 mb-12 font-serif text-6xl">
          <small className="block font-sans text-base font-bold">
            What I&apos;m all
          </small>
          About
        </h1>
        <div>
          <p>
            From the White House to your house, Kelly Green brings nearly three
            decades of elite floral artistry to life’s most meaningful moments.
            Hired by the Obama administration as the first Black florist to work
            full-time in the White House flower shop, she served for 12 years
            designing for state dinners, inaugurations, world leaders and
            created floral experiences throughout the House and private
            residence. Today, through Kelly Green Designs, she creates bespoke,
            seasonal floral experiences—thoughtful, refined, and deeply
            personal—marked by quiet professionalism, discretion, and impeccable
            detail. Let her bring your next celebration to life.
          </p>
        </div>
      </div>
      <div>
        <ul className="grid-cols-2 xl:grid">
          <li className="bg-[#AA9361]/15 px-16 py-20">
            <h2 className="pb-2 font-sans text-4xl font-medium">Bespoke</h2>
            <p className="font-sans">
              Every design begins with an understanding of the client&apos;s
              story and space, resulting in a floral experience that feels
              deeply personal and unique.
            </p>
          </li>
          <li className="px-16 py-20">
            <h2 className="pb-2 font-sans text-4xl font-medium">Exquisite</h2>
            <p className="font-sans">
              Every stem, every branch, and every element is considered. From
              planning to placement, the Kelly Green standard is reliability,
              meticulous detail, and an undeniably elevated finish.
            </p>
          </li>
          <li className="bg-[#AA9361]/15 px-16 py-20 xl:bg-transparent">
            <h2 className="pb-2 font-sans text-4xl font-medium">Discreet</h2>
            <p className="font-sans">
              Trusted with state dinners and holiday receptions at 1600
              Pennsylvania Avenue, Kelly approaches every project with quiet
              professionalism and respect for privacy. Whether the event is
              high-profile or close to home, clients receive a polished,
              intimate experience.
            </p>
          </li>
          <li className="px-16 py-20 xl:bg-[#AA9361]/15">
            <h2 className="pb-2 font-sans text-4xl font-medium">Curated</h2>
            <p className="font-sans">
              Guided by each client&apos;s taste and setting, Kelly listens and
              then curates flowers, textures, and details that come together in
              a floral experience that feels beautifully, unmistakably theirs.
            </p>
          </li>
        </ul>
        <div className="my-32 flex gap-2 overflow-scroll">
          {Images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={240}
              height={240}
              className="aspect-square h-60 object-cover"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
