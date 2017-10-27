import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { expect } from 'chai';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Game from '../src/components/Game';
import Pancake from '../src/components/Pancake';

Enzyme.configure({ adapter: new Adapter() })

describe('Game', () => {
  it('sets the initial time when the game was started in componentWillMount', () => {

    const wrapper = mount(<Game />);
    expect(wrapper.state('time')).to.not.equal('undefined');
  });
});

describe('Pancake', () => {
  it('sets up the interval updating the cooking time every second', () => {
    const wrapper = mount(<Pancake />);
  // console.log(wrapper.find('.flip').simulate('click'))
    console.log(wrapper.state().flippedAt)
//    expect(wrapper.state().timeCooked).to.equal(1);
  });

  it('cleans up the interval when the component is destroyed', () => {
    const wrapper = mount(<Pancake />);
    wrapper.unmount()
    //expect(wrapper.node.interval._idleTimeout).to.equal(-1);
  });
});
