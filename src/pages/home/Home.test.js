/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';

import Homepage from './Home';
import GridSection from './grid-section/GridSection';

import { sections } from '../sections.conf';

jest.mock('d2-ui/lib/org-unit-tree/OrgUnitTree.component', () => ('OrgUnitTree'));
jest.mock('d2-ui/lib/feedback-snackbar/FeedbackSnackbarTypes', () => ('FeedbackSnackbarTypes'));

const ownShallow = () => {
  return shallow(
      <Homepage sectionKey="home" />,
      {
        disableLifecycleMethods: true,
        context: {
          updateAppState: jest.fn(),
        }
      }
  );
};

it('Homepage renders without crashing', () => {
  ownShallow();
});

it('Homepage renders a GridList', () => {
  const wrapper = ownShallow();
  expect(wrapper.find('#grid-list-id')).toHaveLength(1);
});

it('Home renders the correct number of GridSection', () => {
  const wrapper = ownShallow();
  expect(wrapper.find(GridSection)).toHaveLength(sections.length);
});

