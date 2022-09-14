import { shallowMount } from '@vue/test-utils';
import AboutView from './AboutView.vue';

let wrapper;

describe('about view', () => {
  it('should test something', () => {
    wrapper = shallowMount(AboutView, {
      propsData: {
        preposition: "an",
      },
    });

    expect(wrapper.vm.text).toBe('This is an about page');

    jest.clearAllMocks();
    wrapper.destroy();
  });
});
