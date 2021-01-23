import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';

// const setup = () => {
//     return shallow(<Footer />);
// };

// describe('renders correctly based on props', () => {
//     render(<Footer />)
// }


// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';
test('toggleDone completes an incomplete todo', () => {
    const wrapper = mount(<Footer />);
    const p = wrapper.find('.toggle-todo');
    expect(p.text()).toBe('Buy Milk');
});
