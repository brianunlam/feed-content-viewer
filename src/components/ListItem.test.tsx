import * as React from 'react'
import { shallow } from 'enzyme';
import ListItem from './ListItem';

test('List items renders ok', () => {
  const listItem = shallow(<ListItem data={{ id: 10, name: 'brian'}}/>);
  expect(listItem.prop('href')).toEqual('/users/[id]');
  expect(listItem.prop('as')).toEqual('/users/10');
  expect(listItem.children().text()).toEqual('10: brian');
});