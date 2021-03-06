import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import CheckButton from './';


describe('<CheckButton />', () => {

  const defaultWrapper = mount(<CheckButton />);

  const wrapper = mount(
    <CheckButton defaultChecked />
  );


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CheckButton />, div);
  });

  it('should have a default defaultChecked prop', () => {
    expect(defaultWrapper.props().defaultChecked).to.not.equal(null);
    expect(defaultWrapper.props().defaultChecked).to.not.equal(undefined);
    expect(defaultWrapper.props().defaultChecked).to.not.equal(true);
    expect(defaultWrapper.props().defaultChecked).to.equal(false);
  });

  it('should accept an defaultChecked prop', () => {
    expect(wrapper.props().defaultChecked).to.not.equal(null);
    expect(wrapper.props().defaultChecked).to.not.equal(undefined);
    expect(wrapper.props().defaultChecked).to.not.equal(false);
    expect(wrapper.props().defaultChecked).to.equal(true);
  });

});
