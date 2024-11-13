import { mount } from '@vue/test-utils';
import FilterGenre from './FilterGenre.vue';

describe('FilterGenre.vue', () => {
  it('emits "selectGenre" when a genre is selected', async () => {
    const allGenre = ['Rock', 'Pop', 'Jazz'];
    const wrapper = mount(FilterGenre, {
      props: { allGenre }
    });

    const genreItems = wrapper.findAll('li');
    await genreItems[0].trigger('click');

    expect(wrapper.emitted('selectGenre')).toBeTruthy();
    expect(wrapper.emitted('selectGenre')[0]).toEqual(['Rock']);
    expect(wrapper.vm.selected).toContain('Rock');
  });

  it('displays reset button once at least one genre is selected', async () => {
    const allGenre = ['Rock', 'Pop', 'Jazz'];
    const wrapper = mount(FilterGenre, {
      props: { allGenre }
    });

    expect(wrapper.find('button').exists()).toBe(false);
    await wrapper.findAll('li')[0].trigger('click');
    expect(wrapper.find('button').exists()).toBe(true);
  });

  it('resets the selected genres and emit an event', async () => {
    const allGenre = ['Rock', 'Pop', 'Jazz'];
    const wrapper = mount(FilterGenre, {
      props: { allGenre }
    });

    await wrapper.findAll('li')[0].trigger('click');
    expect(wrapper.vm.selected.length).toBe(1);

    await wrapper.find('button').trigger('click');

    expect(wrapper.vm.selected.length).toBe(0);
    expect(wrapper.emitted('selectGenre')).toBeTruthy();
    expect(wrapper.emitted('selectGenre').slice(-1)[0]).toEqual([null]);
  });
});
