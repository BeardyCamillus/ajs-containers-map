import { error } from '../app';

test('Код ошибки существует', () => {
  expect(error.translate(404)).toBe('Not Found');
});

test('Неизвестный код ошибки', () => {
  expect(error.translate(601)).toBe('Unknown Error');
});