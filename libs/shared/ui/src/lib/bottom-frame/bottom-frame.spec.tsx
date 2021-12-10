import { render } from '@testing-library/react';

import BottomFrame from './bottom-frame';

describe('BottomFrame', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BottomFrame />);
    expect(baseElement).toBeTruthy();
  });
});
