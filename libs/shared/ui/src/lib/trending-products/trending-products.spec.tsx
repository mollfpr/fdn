import { render } from '@testing-library/react';

import TrendingProducts from './trending-products';

describe('TrendingProducts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TrendingProducts />);
    expect(baseElement).toBeTruthy();
  });
});
