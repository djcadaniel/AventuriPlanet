import {Routes, Route, Navigate} from 'react-router-dom';
import { routes } from './routes';

export const Navigation = () => {
  return (
      <Routes>
        {
          routes.map((route, index) =>(
            <Route 
              key = {index}
              path = {route.path}
              element = {
                <route.layout>
                  <route.component />
                </route.layout>
              }
            />
            ))
          }
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
  )
}