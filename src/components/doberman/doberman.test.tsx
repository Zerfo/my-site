import { render } from '@testing-library/react';

import { Doberman } from './doberman';

describe('components/Footer', () => {
  it('Компонент должен соответствовать снэпшоту', () => {
    const dobermanEl = render(<Doberman />);

    expect(dobermanEl).toMatchSnapshot();
  });
});
