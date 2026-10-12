import type { ComponentProps } from 'react'
import { Link } from 'react-router'

type SmartLinkProps = Omit<ComponentProps<'a'>, 'href'> & {
  to: string // adres strony albo kotwica na tej samej stronie ('#id')
}

/** Link wewnętrzny: kotwica '#id' jako zwykły <a> (przewija przeglądarka), strona przez <Link>. */
export const SmartLink = ({ to, ...props }: SmartLinkProps) =>
  to.startsWith('#') ? <a href={to} {...props} /> : <Link to={to} {...props} />
