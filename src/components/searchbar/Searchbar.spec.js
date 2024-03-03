import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Searchbar from "./Searchbar";
import { Provider } from "react-redux";
import { store } from '../../redux/store';
import "@testing-library/jest-dom"

describe("Layout", ()=> {
    it("has input item", ()=> {
        const {container} =render(<Provider store={store}>
            <Searchbar />
        </Provider>)
        const input =container.querySelector('input')
        expect(input).toBeInTheDocument();

    });
    it("displays search in the placeholder", ()=> {
        const {container} =render(<Provider store={store}>
            <Searchbar />
        </Provider>)
        const input =container.querySelector('input')
        expect(input.placeholder).toBe("Search...")

    })
})