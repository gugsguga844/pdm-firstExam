import React from 'react';
import { render, screen } from "@testing-library/react-native";
import FormButton from "@/components/form/FormButton";

describe("FormButton", () => {
    it("Should render title prop correctly", () => {
        render(<FormButton title='Hora de Acelerar' testID="oi" />);
        expect(screen.getByText('Hora de Acelerar')).toBeTruthy();
    })

    it("Should render the image and it's style", () => {
        const { getByTestId } = render(<FormButton title='Hora de Acelerar' testID="oi" />);
        const imageElement = getByTestId('button-image');
        expect(imageElement).toBeTruthy();
        expect(imageElement.props.style).toMatchObject({
            width: 80,
            height: 80,
        })
    });
})