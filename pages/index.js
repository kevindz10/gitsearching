import Head from '../layout/Header';
import Body  from '../layout/body/Body'
import { Provider } from 'react-redux';
import configureStore from '../src/redux/store/configureStore';
import { PersistGate } from 'redux-persist/integration/react'

import {Spinner } from 'react-bootstrap';

const {store, persistor} = configureStore();

const Index = () => (
  <Provider store={store}>  
    <PersistGate loading={null} persistor={persistor}>
      <Head/>
      <Body/> 
    </PersistGate>      
  </Provider> 
)

export default Index
