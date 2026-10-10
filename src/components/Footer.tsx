import { Link, NavLink } from 'react-router'
import { contact } from '@/content/contact'
import { navLinks } from '@/lib/nav'

export const Footer = () => {
  const links = navLinks('footer')
  const mainLinks = links.filter((link) => !link.accent)
  const accentLinks = links.filter((link) => link.accent) // np. BLOG, po prawej

  return (
    <footer className="text-sm">
      <div className="bg-mist-deep px-8 pt-8 pb-5 text-white">
        {/* TODO: logo SVG od grafika zamiast tekstu */}
        <Link to="/" className="font-script text-4xl tracking-wide">
          psychoedukatorka
        </Link>

        <nav
          aria-label="Stopka"
          className="mt-4 flex items-end justify-between pl-2"
        >
          <ul className="space-y-1">
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

      <div className="flex flex-wrap justify-between gap-x-4 gap-y-3 bg-white px-6 py-6 text-[0.8125rem] text-rose">
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
