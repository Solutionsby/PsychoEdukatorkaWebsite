import { Link, NavLink } from 'react-router'
import { contact } from '@/content/contact'
import { navLinks } from '@/lib/nav'

export const Footer = () => {
  const links = navLinks('footer')
  const mainLinks = links.filter((link) => !link.accent)
  const accentLinks = links.filter((link) => link.accent) // np. BLOG, po prawej

  return (
    <footer className="text-sm">
      {/* desktop (projekt 1920): jeden pas, trzy kolumny: logo, dane kontaktowe, linki */}
      <div className="bg-mist-deep px-8 pt-8 pb-5 text-white lg:flex lg:h-[13vw] lg:items-center lg:py-0 lg:pr-[4vw] lg:pl-[4.5vw]">
        {/* TODO: logo SVG od grafika zamiast tekstu */}
        <Link
          to="/"
          className="font-script text-4xl tracking-wide lg:w-[30.1vw] lg:shrink-0 lg:text-[4.75vw]"
        >
          psychoedukatorka
        </Link>

        <address className="hidden text-[max(0.75rem,1vw)] leading-[1.55] text-white/80 not-italic lg:block lg:max-w-[26vw]">
          {contact.name}
          <br />
          Telefon: <a href={contact.phone.href}>{contact.phone.label}</a>
          <br />
          E-mail: <a href={contact.email.href}>{contact.email.label}</a>
          <br />
          Adres gabinetu: {contact.office.name} {contact.office.address}
        </address>

        <nav
          aria-label="Stopka"
          className="mt-4 flex items-end justify-between pl-2 lg:mt-0 lg:ml-auto lg:w-[11.6vw] lg:pl-0 lg:text-[max(0.75rem,0.9vw)] lg:leading-[2.05]"
        >
          <ul className="space-y-1 lg:space-y-0">
            {mainLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className="tracking-wide aria-[current=page]:underline aria-[current=page]:underline-offset-4"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {accentLinks.length > 0 && (
            <ul className="space-y-1 text-right">
              {accentLinks.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} className="text-rose uppercase">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>

      {/* telefon: dane kontaktowe w białym pasku; desktop: w pasie wyżej */}
      <div className="flex flex-wrap justify-between gap-x-4 gap-y-3 bg-white px-6 py-6 text-[0.8125rem] text-rose lg:hidden">
        <address className="not-italic">
          {contact.name}
          <br />
          tel.: <a href={contact.phone.href}>{contact.phone.label}</a>
        </address>
        <p>
          {contact.center.name}
          <br />
          <a href={contact.center.href} target="_blank" rel="noopener">
            {contact.center.label}
          </a>
        </p>
      </div>
    </footer>
  )
}
