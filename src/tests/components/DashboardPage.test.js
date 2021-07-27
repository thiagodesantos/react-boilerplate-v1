import React from 'react';
import { shallow } from 'enzyme';
import DashBoardPage from '../../components/DashBoardPage';

test('Deveria renderizar o DashBoardPage corretamente', () => {
    const wrapper = shallow( <DashBoardPage />);
    expect(wrapper).toMatchSnapshot();
});
