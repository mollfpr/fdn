import { render } from '@testing-library/react';

import PopularGroupCard from './popular-group-card';

describe('PopularGroupCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PopularGroupCard />);
    expect(baseElement).toBeTruthy();
  });
});
