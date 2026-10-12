import * as Dialog from '@radix-ui/react-dialog'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import MenuTlo from '@/assets/svg/menu-wave.svg?react'
import { cn } from '@/lib/cn'
import { navLinks } from '@/lib/nav'

// Dialog nie-modalny: modalny blokowałby kliknięcia poza panelem (logo, przycisk).
export const Menu = () => {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen} modal={false}>
      <header className="fixed inset-x-0 top-0 z-50 h-20 lg:h-[9.5vw]">
        <MenuTlo
          aria-hidden
          preserveAspectRatio="none"
          // desktop: naturalne proporcje fali (plik 2014 px, ścieżka od x=53)
          className="absolute top-0 left-1/2 -z-40 h-30 w-[120%] -translate-x-1/2 lg:left-0 lg:h-auto lg:w-[104.9vw] lg:-translate-x-[2.63%]"
        />

        {/* z-20: logo i przycisk zawsze nad panelem (z-10) */}
        <div className="relative z-20 flex h-full items-center justify-between px-8 lg:items-start lg:pr-[4vw] lg:pl-[5.4vw]">
          {/* TODO: logo SVG od grafika */}

          <Link
            to="/"
            onClick={close}
            className="font-script text-4xl text-ink lg:mt-[1.9vw] lg:text-[4.75vw]"
          >
            psychoedukatorka
          </Link>

          {/* desktop: linki w poziomie, aktywna strona podkreślona kreską */}
          <nav
            aria-label="Menu"
            className="hidden lg:mt-[1.6vw] lg:flex lg:items-center lg:gap-[4.27vw]"
          >
            {navLinks('menu').map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    'text-[max(0.8125rem,1.35vw)] tracking-wide text-ink-soft',
                    link.pill
                      ? 'rounded-full border border-current px-[1.9vw] py-[0.05vw]'
                      : 'relative after:absolute after:top-full after:left-0 after:mt-[0.3vw] after:h-[0.26vw] after:w-[2.2vw] after:bg-ink after:opacity-0',
                    isActive && 'after:opacity-100',
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <Dialog.Trigger
            aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
            className="-m-1 p-1 lg:hidden"
          >
            <MenuIcon open={open} />
          </Dialog.Trigger>
        </div>

        <AnimatePresence>
          {open && (
            <Dialog.Content forceMount asChild aria-describedby={undefined}>
              <motion.nav
                aria-label="Menu"
                className="fixed inset-x-4 top-4 z-10 rounded-[30px] bg-white/97 pt-20 pb-8 outline-none lg:hidden"
                initial={{ y: '-110%' }}
                animate={{ y: 0 }}
                exit={{ y: '-110%' }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <Dialog.Title className="sr-only">Menu</Dialog.Title>
                <ul className="ml-auto w-fit space-y-3 pr-12 text-ink-soft">
                  {navLinks('menu').map((link) => (
                    <li key={link.to}>
                      <NavLink
                        to={link.to}
                        onClick={close}
                        className={cn(
                          'tracking-wide',
                          link.accent && 'text-rose uppercase',
                        )}
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </motion.nav>
            </Dialog.Content>
          )}
        </AnimatePresence>
      </header>
    </Dialog.Root>
  )
}

// Trzy kreski; przy otwartym menu górna i dolna obracają się w X, środkowa znika.
const MenuIcon = ({ open }: { open: boolean }) => (
  <span
    className={cn(
      'grid size-9 place-items-center rounded-full transition-colors motion-safe:duration-300',
      open ? 'bg-transparent' : 'bg-white/80',
    )}
  >
    <span className="relative block h-3 w-4">
      <span
        className={cn(
          'absolute inset-x-0 top-0 h-px bg-ink transition-all motion-safe:duration-300',
          open && 'top-1/2 rotate-45',
        )}
      />
      <span
        className={cn(
          'absolute inset-x-0 top-1/2 h-px bg-ink transition-opacity motion-safe:duration-300',
          open && 'opacity-0',
        )}
      />
      <span
        className={cn(
          'absolute inset-x-0 bottom-0 h-px bg-ink transition-all motion-safe:duration-300',
          open && 'bottom-1/2 -rotate-45',
        )}
      />
    </span>
  </span>
)
