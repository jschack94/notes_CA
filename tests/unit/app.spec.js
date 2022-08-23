import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('has array of notes', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.vm.notes).toEqual([])
  })
})
