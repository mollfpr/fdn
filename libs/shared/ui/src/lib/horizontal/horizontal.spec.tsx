import { render } from '@testing-library/react';

import Horizontal from './horizontal';

describe('Horizontal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Horizontal />);
    expect(baseElement).toBeTruthy();
  });
});
