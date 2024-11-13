import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Album from './Album.vue';

describe('Album.vue', () => {
  const albumItem = {
    name: 'Test Album',
    year: '2023',
    artist: 'Test Artist',
    cover: 'https://placehold.co/500x500/png',
  }

  it('fetch and display album data correctly', () => {
    const wrapper = mount(Album, {
      props: { albumItem },
    });

    expect(wrapper.find('h2').text()).toBe(albumItem.name);
    expect(wrapper.find('p').text()).toContain(albumItem.year);
    expect(wrapper.find('p').text()).toContain(albumItem.artist);
    expect(wrapper.find('img').attributes('src')).toBe(albumItem.cover);
  })

  it('display a placeholder image if cover image is null', () => {
    const wrapper = mount(Album, {
      props: { albumItem: { ...albumItem, cover: null } },
    });

    expect(wrapper.find('img').attributes('src')).toBe('https://placehold.co/300x300/png');
  })
})
