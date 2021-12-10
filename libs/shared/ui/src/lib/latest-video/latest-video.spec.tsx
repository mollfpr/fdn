import { render } from '@testing-library/react';

import LatestVideo from './latest-video';

describe('LatestVideo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LatestVideo />);
    expect(baseElement).toBeTruthy();
  });
});
