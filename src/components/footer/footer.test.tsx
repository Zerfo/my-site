import { render, screen } from '@testing-library/react';

import { Footer } from './footer';

describe('components/Footer', () => {
  it('Компонент должен соответствовать снэпшоту', () => {
    const footerEl = render(<Footer />);

    expect(footerEl).toMatchSnapshot();
  });

  it('Компонент должен иметь все элементы', async () => {
    render(<Footer />);

    const mailLinkEl = await screen.findAllByTestId('footer-mail-link');
    const copyrightEl = await screen.findAllByTestId('footer-copyright');

    expect(mailLinkEl).toHaveLength(1);
    expect(copyrightEl).toHaveLength(1);
  });

  it('Текст электронной почты должен соответствовать', async () => {
    render(<Footer />);

    const mailLinkEl = await screen.queryAllByText('nikolay.smekalin@gmail.com');

    expect(mailLinkEl).toHaveLength(1);
  });

  it('Текст авторских прав должен соответствовать', async () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();
    const copyrightEl = await screen.queryAllByText(`© Николай Смекалин 2021-${currentYear}`);

    expect(copyrightEl).toHaveLength(1);
  });
});
