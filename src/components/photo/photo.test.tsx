import { render } from '@testing-library/react';

import { Photo } from './photo';

describe('components/Footer', () => {
  it('Компонент должен соответствовать снэпшоту', () => {
    const photoEl = render(<Photo />);

    expect(photoEl).toMatchSnapshot();
  });
});
