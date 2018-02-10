/**
 *
 * Asynchronously loads the component for MessageComposer
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
