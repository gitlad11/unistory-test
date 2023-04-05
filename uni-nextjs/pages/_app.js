import '../styles/globals.css'
import '../styles/login.css'
import '../styles/button.css'
import '../styles/loader.css'
import '../styles/main.css'
import 'react-notifications/lib/notifications.css';
import '../styles/modal.css'

import { Provider } from 'react-redux';
import store from '../store/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  ) 
}

export default MyApp
