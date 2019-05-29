import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Dropdown from './Dropdown';

const items = [
  {
    text: 'Facebook',
    link: 'https://facebook.com',
  },
  {
    text: 'Twitter',
    link: 'https://twitter.com',
  },
];

const texts = [];
const links = [];

items.forEach((item) => {
  texts.push(item.text);
  links.push(item.link);
});

describe('dropdown', () => {
  test('renders default title button', () => {
    const dropdown = TestUtils.renderIntoDocument();
    const button = TestUtils.findRenderedDOMComponentWithTag(dropdown, 'button');

    expect(button.textContent).toBe('Dropdown');
  });

  test('renders custom title button', () => {
    const dropdown =
      TestUtils.renderIntoDocument();
    const button = TestUtils.findRenderedDOMComponentWithTag(dropdown, 'button');

    expect(button.textContent).toBe('Social Media');
  });

  test('renders list of items on click', () => {
    const dropdown = TestUtils.renderIntoDocument();
    const button = TestUtils.findRenderedDOMComponentWithTag(dropdown, 'button');
    TestUtils.Simulate.click(button);

    const list = TestUtils.findRenderedDOMComponentWithTag(dropdown, 'ul');
    expect(TestUtils.isDOMComponent(list)).toBe(true);
    expect(TestUtils.scryRenderedDOMComponentsWithTag(dropdown, 'a').map(li =>
      li.textContent,
    )).toEqual(texts);
    expect(TestUtils.scryRenderedDOMComponentsWithTag(dropdown, 'a').map(a =>
      a.getAttribute('href'),
    )).toEqual(links);
  });
});