import { render } from '@testing-library/react';

import ReviewsSlider from './reviews-slider';

describe('ReviewsSlider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReviewsSlider />);
    expect(baseElement).toBeTruthy();
  });
});
