import {render} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import {Navbar} from '../../components/Navbar/Navbar';

describe('Pruebas en <NavBar />', () => {
  test('Debe de hacer match con el snapshot', () => {
    // console.log(render(<Navbar />));
    const {container} = render(<MemoryRouter><Navbar /></MemoryRouter>)
    expect(container).toMatchSnapshot();
  });
});