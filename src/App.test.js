import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza botões corretamente', () => {
  render(<App />);
  const encryptButton = screen.getByRole('button', {name: 'Encrypt'});
  const decryptButton = screen.getByRole('button', {name: 'Decrypt'});
  expect(encryptButton).toBeInTheDocument();
  expect(decryptButton).toBeInTheDocument();
});

test('Label é renderizada corretamente', () => {
  render(<App />);
  const label = screen.getByText('Word:');
  expect(label).toBeInTheDocument();
});

test('Header com mensagem do codigo encryptado é renderizadas', () => {
  render(<App />);
  const label = screen.getByRole('heading', {level: 5});
  expect(label).toBeInTheDocument();
});