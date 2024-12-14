import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Card from '@/components/Card'
import InteractiveCard from '@/components/InteractiveCard'
import Page from '@/app/booking/page'
import DateReserve from '@/components/DateReserve'

jest.mock('../src/components/InteractiveCard')
jest.mock('../src/components/DateReserve')

describe('Card', () => {
  it('Card contains InteractiveCard', () => {
    const testSrc = "/img/chula.jpg"
    const testName = "Chulalongkorn Hospital"
    render(<Card imgSrc={testSrc} hospitalName={testName} />)
    
    expect(InteractiveCard).toHaveBeenCalledTimes(1)
  })
})

describe('Booking Page', () => {
  it('Booking Page contains DateReserve', () => {
    render(<Page/>)
    expect(DateReserve).toHaveBeenCalledTimes(1)
  })
})

