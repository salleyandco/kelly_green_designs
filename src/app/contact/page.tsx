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
        <p className="text-sm">
          This form submits through a browser-compatible form endpoint so it can
          work on a static export.
        </p>
      </div>
      <form
        className="mx-20 my-9"
        action="https://formsubmit.co/concierge@kellygreendesigns.com"
        method="POST"
      >
        <input
          type="hidden"
          name="_subject"
          value="New inquiry from kellygreendesigns.com"
        />
        <input type="hidden" name="_template" value="table" />
        <input
          type="hidden"
          name="_next"
          value="https://kellygreendesigns.com/contact"
        />

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
            type="email"
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
            type="tel"
            autoComplete="tel"
            required
            className={classNames[1]}
          />
        </div>
        <div className={classNames[0]}>
          <label htmlFor="eventType">Event Type*</label>
          <input
            id="eventType"
            name="eventType"
            required
            className={classNames[1]}
          />
        </div>
        <div className={classNames[0]}>
          <label htmlFor="date">Event Date</label>
          <input id="date" name="date" type="date" className={classNames[1]} />
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
          <span>I am a</span>
          <div className="flex gap-1">
            <input type="radio" id="role-client" name="role" value="Client" />
            <label htmlFor="role-client">Client</label>
          </div>
          <div className="flex gap-1">
            <input
              type="radio"
              id="role-producer"
              name="role"
              value="Event Producer/Designer"
            />
            <label htmlFor="role-producer">Event Producer/Designer</label>
          </div>
        </div>
        <ButtonComponent type="submit" className="w-full">
          Submit
        </ButtonComponent>
      </form>
    </main>
  );
}
