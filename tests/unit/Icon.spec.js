import { render, screen } from '@testing-library/vue'

import Icon from '@/components/Icon.vue'

const componentOptions = propsData => ({
  propsData,
})

describe('Icon.vue', () => {
  describe('All props given', () => {
    const props = {
      name: 'plus',
      color: 'red',
      size: '12px',
    }

    beforeEach(() => {
      render(Icon, componentOptions(props))
    })

    it('should contain proper icon class based on name prop', () => {
      expect(screen.getByTestId('icon')).toHaveClass(`icon-${props.name}`)
    })

    it('should be styled with the given color', () => {
      expect(screen.getByTestId('icon')).toHaveStyle(`color: ${props.color}`)
    })

    it('should be styled with the given font size', () => {
      expect(screen.getByTestId('icon')).toHaveStyle(`fontSize: ${props.size}`)
    })
  })

  describe('Only name prop given', () => {
    const props = { name: 'plus' }

    beforeEach(() => {
      render(
        Icon,
        componentOptions({
          name: 'plus',
        })
      )
    })

    it('should contain proper icon class based on name prop', () => {
      expect(screen.getByTestId('icon')).toHaveClass(`icon-${props.name}`)
    })

    it('should be styled with the default primary color', () => {
      expect(screen.getByTestId('icon')).toHaveStyle('color: var(--primary)')
    })

    it('should be styled with the default font size of 24px', () => {
      expect(screen.getByTestId('icon')).toHaveStyle('fontSize: 24px')
    })
  })
})
