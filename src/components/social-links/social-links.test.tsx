import { render, screen } from '@testing-library/react';

import { SocialLinks } from './social-links';

describe('components/Footer', () => {
  it('Компонент должен соответствовать снэпшоту', () => {
    const socialLinksEl = render(<SocialLinks />);

    expect(socialLinksEl).toMatchSnapshot();
  });

  it('У компонента должно быть 6 иконок', async () => {
    render(<SocialLinks />);

    const socialLinksElements = await screen.findAllByTestId('social-link');

    expect(socialLinksElements).toHaveLength(5);
  });
});
