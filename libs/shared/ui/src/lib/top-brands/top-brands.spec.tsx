import { render } from '@testing-library/react';

import TopBrands from './top-brands';

describe('TopBrands', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TopBrands />);
    expect(baseElement).toBeTruthy();
  });
});
