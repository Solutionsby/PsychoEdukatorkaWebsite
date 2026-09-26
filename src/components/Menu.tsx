import MenuTlo from '@/assets/svg/menuTlo.svg?react'

export const Menu = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20">
      <MenuTlo
        aria-hidden
        preserveAspectRatio="none"
        className="absolute top-0 left-1/2 -z-40 h-30 w-[120%] -translate-x-1/2"
      />
      <nav className="flex h-full items-center justify-between px-4">
        {/* logo (link do "/") */}
        {/* przycisk hamburgera */}
      </nav>
    </header>
  )
}
