import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import Calculator from '../Calculator';

describe('Calculator', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
