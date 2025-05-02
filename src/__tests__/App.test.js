import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    //Arrange
    render(<App />)
    //Act
    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact:false,
        level:1,
    })
    //Assert
    expect(topLevelHeading).toBeInTheDocument()
})
   
test("displays an image with alt text describing the content", () => {
    render(<App />)
    const image = screen.getByAltText(/photo of/i)
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute("src")
})

test("displays a second-level heading with the text About Me", () => {
    render(<App />)

    const subheading = screen.getByRole("heading", {
        name: /about me/i,
        level:2.
    })
    expect(subheading).toBeInTheDocument()
})

test("displays a paragraph with a short biography", () => {
    render(<App />)
    const bio = screen.getByText(/i am a/i, {selector: "p"})
    expect(bio).toBeInTheDocument()
})

test("has a GitHub link", () => {
    render(<App />)
    const gitLink = screen.getByRole("link", {name: /github/i})
    expect(gitLink).toBeInTheDocument()
    expect(gitLink).toHaveAttribute("href", expect.stringContaining("github.com"))
})

test("has a link to LinkedIn", () => {
    render(<App />);
    const linkedInLink = screen.getByRole("link", { name: /linkedin/i });
    expect(linkedInLink).toBeInTheDocument();
    expect(linkedInLink).toHaveAttribute("href", expect.stringContaining("linkedin.com"));
  });
