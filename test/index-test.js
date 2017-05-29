import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { spyOn } from 'expect';

import Game from '../components/Game';
import Pancake from '../components/Pancake';

describe('Game', () => {
  it('sets the initial time when the game was started in componentWillMount', () => {
    const spy = expect.spyOn(Game.prototype, 'setCurrentTime');
    const wrapper = mount(<Game />);
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.length).toEqual(1);
    Game.prototype.setCurrentTime.restore();
  });
});

describe('Pancake', () => {
  it('sets up the interval updating the cooking time every second', () => {
    const spy = expect.spyOn(Pancake.prototype, 'startInterval');
    const wrapper = mount(<Pancake />);
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.length).toEqual(1);
    Pancake.prototype.startInterval.restore();
  });

  it('cleans up the interval when the component is destroyed', () => {
    const spy = expect.spyOn(Pancake.prototype, 'cleanUpInterval');
    const wrapper = mount(<Pancake />);
    wrapper.unmount();
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.length).toEqual(1);
    Pancake.prototype.cleanUpInterval.restore();
  });
});
