import { render } from '@testing-library/react';

import Billboard from './billboard';

describe('Billboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Billboard />);
    expect(baseElement).toBeTruthy();
  });
});
