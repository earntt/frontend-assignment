import '@testing-library/jest-dom'
import { render, screen, within } from '@testing-library/react'
import BookingPage from '@/app/booking/page'
import { userEvent } from "@testing-library/user-event";


describe('Booking Page', () => {
  it('Booking Page contains Form', async() => {
    render(<BookingPage/>)
    
    const nameLastname = screen.getByRole('textbox', { name: /Name-Lastname/i })
    expect(nameLastname).toBeInTheDocument
    expect(nameLastname.classList).toContain('MuiInput-input')
    
    const citizenId = screen.getByRole('textbox', { name: /Citizen ID/i })
    expect(citizenId).toBeInTheDocument
    expect(citizenId.classList).toContain('MuiInput-input')    

    const hospitalSelect = screen.getByRole('combobox')
    expect(hospitalSelect).toBeInTheDocument
    expect(hospitalSelect.className).toContain('MuiSelect-select')

    const bookBtn = screen.getByRole('button', {name: /Book Vaccine/i})
    expect(bookBtn).toBeInTheDocument

    await userEvent.click(hospitalSelect);
    expect(
      await screen.findByRole("option", {name: /Chulalongkorn Hospital/i})
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("option", {name: /Rajavithi Hospital/i})
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("option", {name: /Thammasat University Hospital/i})
    ).toBeInTheDocument();  
    
  })
})