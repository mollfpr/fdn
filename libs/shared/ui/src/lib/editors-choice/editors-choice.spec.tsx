import { render } from '@testing-library/react';

import EditorsChoice from './editors-choice';

describe('EditorsChoice', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EditorsChoice />);
    expect(baseElement).toBeTruthy();
  });
});
