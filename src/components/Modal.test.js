import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Modal from './Modal.vue';

describe('Modal.vue', () => {
  const albumItem = {
    name: 'Test Album',
    year: 2021,
    artist: 'Test Artist',
    genre: 'Pop',
    cover: 'https://example.com/test-cover.jpg',
  };
  it('render the component with its props', () => {
    const wrapper = mount(Modal, {
      props: albumItem,
    });

    expect(wrapper.text()).toContain('Test Album');
    expect(wrapper.text()).toContain('Pop');
    expect(wrapper.text()).toContain('Test Artist');
    expect(wrapper.text()).toContain('2021');
    const image = wrapper.find('img');
    expect(image.exists()).toBe(true);
    expect(image.attributes('src')).toBe(albumItem.cover);
    expect(image.attributes('alt')).toBe('Test Album');
  });

  it('displays placeholder image when cover image is null', () => {
    const wrapper = mount(Modal, {
      props: { ...albumItem, cover: null },
    });

    const image = wrapper.find('img');
    expect(image.attributes('src')).toBe('https://placehold.co/300x300/png');
    expect(image.attributes('alt')).toBe('Test Album');
  });

  it('trigger close event when close icon has been clicked', async () => {
    const wrapper = mount(Modal, {
      props: albumItem,
    });

    const closeButton = wrapper.find('button');
    await closeButton.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('close');
    expect(wrapper.emitted('close')).toHaveLength(1);
  });

  it('trigger close event when clicking outside the modal', async () => {
    const wrapper = mount(Modal, {
      props: albumItem,
    });

    await wrapper.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('close');
    expect(wrapper.emitted('close')).toHaveLength(1);
  });
});
