import { shallowMount } from '@vue/test-utils';
import AboutViewConst from './AboutViewConst.vue';

let wrapper;

describe('about view', () => {
  it('should test something', () => {
    wrapper = shallowMount(AboutViewConst);

    expect(wrapper.vm.text).toBe('This is the about page');

    jest.clearAllMocks();
    wrapper.destroy();
  });
});
