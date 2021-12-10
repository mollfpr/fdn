import { render } from '@testing-library/react';

import TopFrame from './top-frame';

describe('TopFrame', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TopFrame />);
    expect(baseElement).toBeTruthy();
  });
});
