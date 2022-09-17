import { render } from '@testing-library/react';

import { Content } from './content';

describe('components/Footer', () => {
  it('Компонент должен соответствовать снэпшоту', () => {
    const contentEl = render(<Content />);

    expect(contentEl).toMatchSnapshot();
  });
});
