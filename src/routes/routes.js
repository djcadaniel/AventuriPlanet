import { MainLayout } from "../layout"
import { Clases, Contactanos, Especialidades, Home, Nosotros } from "../pages"
import { PageError } from "../pages/PageError"

export const routes = [
  {
    path : '/',
    layout : MainLayout,
    component : Home
  },
  {
    path : '/nosotros',
    layout : MainLayout,
    component : Nosotros
  },
  {
    path : '/clases',
    layout : MainLayout,
    component : Clases
  },
  {
    path : '/especialidades',
    layout : MainLayout,
    component : Especialidades
  },
  {
    path : '/contactanos',
    layout : MainLayout,
    component : Contactanos
  },
  {
    path : '/*',
    layout : MainLayout,
    component : PageError
  }
]