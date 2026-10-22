// Dane kontaktowe: stopka i strona Współpraca.
export const contact = {
  name: 'Agata Hemmerling-Goc',
  phone: { label: '519 785 884', href: 'tel:+48519785884' },
  email: {
    label: 'agata@psycho-edukatorka.pl',
    href: 'mailto:agata@psycho-edukatorka.pl',
  },
  office: {
    name: 'Centrum Zdrowia Psychicznego Psycho Academy',
    address: 'ul. Okrąg 21/23, lokal 3 (1 piętro), 80-871 Gdańsk',
  },
  // dane strukturalne (JSON-LD): adres gabinetu w polach, mapa Google
  officeAddress: {
    streetAddress: 'ul. Okrąg 21/23/3',
    postalCode: '80-871',
    addressLocality: 'Gdańsk',
    addressCountry: 'PL',
  },
  mapUrl: 'https://maps.app.goo.gl/9E8mYF4fye8eqm3r6',
  // profile w sieci (JSON-LD sameAs)
  profiles: [
    'https://www.instagram.com/psycho.edukatorka/',
    'https://www.linkedin.com/in/agata-hemmerling-goc-92298b31b/',
  ],
  center: {
    name: 'Centrum Zdrowia Psychicznego',
    label: 'www.psycho-academy.pl',
    href: 'https://www.psycho-academy.pl',
  },
}
