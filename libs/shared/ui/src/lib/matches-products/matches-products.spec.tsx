import { render } from '@testing-library/react';

import MatchesProducts from './matches-products';

describe('MatchesProducts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MatchesProducts />);
    expect(baseElement).toBeTruthy();
  });
});
