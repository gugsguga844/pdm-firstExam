import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import FormInput from '@/components/form/FormInput'; // ajuste o caminho conforme necessário
import { Colors, Spacing } from '@/consts/colors';

describe('FormInput Component', () => {
  it('Should render correctly with label', () => {
    const { getByText, getByPlaceholderText } = render(
      <FormInput label="Username" placeholder="Enter your username" />
    );

    // Verifica se o label é renderizado corretamente
    expect(getByText('Username')).toBeTruthy();

    // Verifica se o TextInput é renderizado corretamente
    expect(getByPlaceholderText('Enter your username')).toBeTruthy();
  });

  it('Should accept and display the value prop', () => {
    const { getByDisplayValue } = render(
      <FormInput value="test value" />
    );

    // Verifica se o valor é exibido corretamente
    expect(getByDisplayValue('test value')).toBeTruthy();
  });

  it('Should call onChangeText when text changes', () => {
    const handleChangeText = jest.fn();
    const { getByPlaceholderText } = render(
      <FormInput placeholder="Enter text" onChangeText={handleChangeText} />
    );

    const input = getByPlaceholderText('Enter text');

    // Dispara o evento de mudança de texto
    fireEvent.changeText(input, 'new text');

    // Verifica se a função de mudança de texto foi chamada com o valor correto
    expect(handleChangeText).toHaveBeenCalledWith('new text');
  });
});