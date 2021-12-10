import { render } from '@testing-library/react';

import Mr2 from './mr-2';

describe('Mr2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Mr2 />);
    expect(baseElement).toBeTruthy();
  });
});
