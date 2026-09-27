import { index, route, type RouteConfig } from '@react-router/dev/routes'
import { pages } from './content/pages'

export default [
  ...pages.map(({ path, file }) =>
    path === '/' ? index(file) : route(path.slice(1), file),
  ),
  route('*', 'pages/NotFound.tsx'), // 404: poza listą, bo nie ma własnego adresu
] satisfies RouteConfig
