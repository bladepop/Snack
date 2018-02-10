/**
 *
 * Asynchronously loads the component for ChannelView
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
