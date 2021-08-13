import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe("Header", () => {
    // 1st step is test block or it block
    test('Should render same text as passed in props', () => {
        // 2nd step render component 
        render(<Header title='Todo List' />);
        // 3rd step find element or reaching to the element which we want to interact with it
        const headingElement = screen.getByText(/Todo List/i);
        // 4th step is missing here because we are not interacting with headingElement component
        // 5th step checking result using assertion that everything is as expected
        expect(headingElement).toBeInTheDocument();
    });

});

// // testing getByRole 
// // role means html compoents with user going to interact like- heading (h1,h2,h3, etc.), paragraph (p tag) 
// test('Should render same text as passed in props using getByRole', () => { 
//     render(<Header title = 'Todo List' />);
//     const headingElement = screen.getByRole("heading", {name: "Todo List"});
//     expect(headingElement).toBeInTheDocument();
// }); 

// // symantic  getByTitle
// test('Should render same text as passed in props using getByTitle', () => { 
//     render(<Header title = 'Todo List test getByTitle' />);
//     const headingElement = screen.getByTitle("Heading");
//     expect(headingElement).toBeInTheDocument();
// });  

// // using getByTestId
// test('Should render same text as passed in props using getByTestId', () => { 
//     render(<Header title = 'Todo List test getByTitle' />);
//     const headingElement = screen.getByTestId("header-1");
//     expect(headingElement).toBeInTheDocument();
// });  

// // for asynchronoise task we should use findBy like - in api call 
// // it only work with async await
// test('Should render same text as passed in props using findBy', async () => { 
//     render(<Header title = 'my header' />);
//     const headingElement = await screen.findByText(/my header/i);
//     expect(headingElement).toBeInTheDocument();
// }); 

// // Query By 
// test('Should render same text as passed in props using getQuery by', async () => { 
//     render(<Header title = 'my header' />);
//     const headingElement = screen.queryByText(/dogs/i);
//     expect(headingElement).not.toBeInTheDocument(); 
// }); 

// // getAllByRole 
// // all menthod we should use for multiple elements. This method going to be return array of elements 
// test('Should render same text as passed in props using getAllByRole', async () => { 
//     render(<Header title = 'my header' />);
//     const headingElements = screen.getAllByRole('heading');
//     expect(headingElements.length).toBe(2); 
// }); 