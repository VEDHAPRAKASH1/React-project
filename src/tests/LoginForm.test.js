import { fireEvent , render , screen } from "@testing-library/react";
import UserInput from "../components/UserInput";
/*data-testid='' */
test('renders userinputs', () => { 
    render(<UserInput/>)

    const consoleSpy = jest.spyOn(console,'log');
    
    const nameInput = screen.getByTestId("name-input");
    expect(nameInput).toBeInTheDocument();
    fireEvent.change(nameInput,{target:{value:'aaa@gmail.com'}})
    
    const passInput = screen.getByTestId("pass-input");
    expect(passInput).toBeInTheDocument();
    fireEvent.change(passInput,{target:{value:'aaa'}})
    
    const submitBtn = screen.getByText("Login");
    fireEvent.click(submitBtn);
    
    // Assertion
    expect(nameInput.value).toBe('aaa@gmail.com')
    expect(passInput.value).toBe('aaa')
    expect(consoleSpy).toHaveBeenCalledWith({
        email : 'aaa@gmail.com',
        password : "aaa"
    })

    consoleSpy.mockRestore();
})