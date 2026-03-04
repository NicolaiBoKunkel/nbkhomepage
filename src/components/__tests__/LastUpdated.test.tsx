import { render, screen, waitFor } from '@testing-library/react'
import LastUpdated from '../LastUpdated'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        updated_at: '2024-01-01T00:00:00Z',
      }),
  })
) as jest.Mock

jest.mock('../LanguageProvider', () => ({
  useLanguage: () => ({
    locale: 'en',
    t: () => 'Last updated:',
  }),
}))

describe('LastUpdated', () => {
  it('renders updated date', async () => {
    render(<LastUpdated />)

    await waitFor(() =>
      expect(screen.getByText(/Last updated:/)).toBeInTheDocument()
    )
  })
})