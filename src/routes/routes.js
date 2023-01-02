import { MainLayout } from "../layout"
import { Clases, Contactanos, Especialidades, Home, Nosotros,Generales } from "../pages";

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
    path : '/generales',
    layout : MainLayout,
    component : Generales
  }
]