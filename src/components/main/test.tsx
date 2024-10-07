import Main from '.'

import { render, screen } from '@testing-library/react'
describe('<Main />', () => {
  it('should render the heading', () => {
    // renderiza o component
    render(<Main />)
    // busca o elemento e verifica a existência dele
    expect(screen.getAllByText(/react avançado/i))
    // gerar snapshot
  })
})
