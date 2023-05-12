
import {render, fireEvent, screen } from "@testing-library/react";
import Post from "../../PostComments";


describe("testando o componente de post", () => {
    test("Deve renderizar corretamente", () => {
        render(<Post />);
        expect(screen.getByText("Comentar")).toBeInTheDocument();
    });

    test("Deve renderizar o comentario", () => {
        render(<Post />);
        fireEvent.change(screen.getByTestId("comentario"), {
        target: {
            value: "Eu sou muito veloz",
        },
    });
    fireEvent.click(screen.getByTestId("btn-post"));
    expect(screen.getByText("Eu sou muito veloz")).toBeInTheDocument();
    });

    test("Deve renderizar o segundo comentario", () => {
    render(<Post />);
    fireEvent.change(screen.getByTestId("comentario"), {
        target: {
            value: "Eu sou imbativel",
        },
    });
    fireEvent.click(screen.getByTestId("btn-post"));
    expect(screen.getByText("Eu sou imbativel")).toBeInTheDocument();
    });
});