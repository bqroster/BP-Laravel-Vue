/* eslint no-undef: 0 */
/* eslint import/no-unresolved: 0 */
/* eslint import/extensions: 0 */

import { mount } from '@vue/test-utils';
import ExampleComponent from '../components/ExampleComponent';

describe('ExampleComponent component feature test', () => {
  test('ExampleComponent should be mounted correctly', () => {
    const wrapper = mount(ExampleComponent);
    expect(wrapper.element).toMatchSnapshot();
  });
});
