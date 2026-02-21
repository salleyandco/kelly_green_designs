import ButtonComponent from '@/components/Button';

export default function ContactPage() {
  const classNames = ['flex flex-col gap-1 mb-6', 'outline px-2 py-1'];

  return (
    <main className="mt-page grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-[#AA9361]/15 p-9">
        <h1 className="mb-12 text-4xl font-bold">Contact Us</h1>
        <p className="mb-6">
          <b>Email us:</b>
          <a href="mailto:concierge@kellygreendesigns.com" className="block">
            concierge@kellygreendesigns.com
          </a>
        </p>
      </div>
      {/* TODO: handle submit */}
      <form className="mx-20 my-9">
        <div className={classNames[0]}>
          <label htmlFor="name">First & Last Name*</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            className={classNames[1]}
          />
        </div>
        <div className={classNames[0]}>
          <label htmlFor="email">Email*</label>
          <input
            id="email"
            name="email"
            autoComplete="email"
            required
            className={classNames[1]}
          />
        </div>
        <div className={classNames[0]}>
          <label htmlFor="phone">Phone*</label>
          <input
            id="phone"
            name="phone"
            autoComplete="tel"
            required
            className={classNames[1]}
          />
        </div>
        <div className={classNames[0]}>
          <label htmlFor="inquiry">Event Type*</label>
          <input
            id="inquiry"
            name="inquiry"
            required
            className={classNames[1]}
          />
        </div>
        <div className={classNames[0]}>
          <label htmlFor="date">Event Date</label>
          <input id="date" name="date" className={classNames[1]} />
        </div>
        <div className={classNames[0]}>
          <label htmlFor="message">Message*</label>
          <textarea
            id="message"
            name="message"
            required
            className={classNames[1]}
          />
        </div>
        <div className={`${classNames[0]} flex-col flex-wrap`}>
          <label>I am a</label>
          <div className="flex gap-1">
            <input type="radio" id="customer" name="customer" value="d2c" />
            <label htmlFor="customer">Client</label>
          </div>
          <div className="flex gap-1">
            <input type="radio" id="customer" name="customer" value="b2c" />
            <label htmlFor="customer">Event Producer/Designer</label>
          </div>
        </div>
        <ButtonComponent type="submit" className="w-full">
          Submit
        </ButtonComponent>
      </form>
    </main>
  );
}
