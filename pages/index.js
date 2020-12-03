import Head from '../layout/Header';
import Body  from '../layout/body/Body'
import { Provider } from 'react-redux';
import getStore from '../src/redux/store/getStore';
import {Spinner } from 'react-bootstrap';

const { store } = getStore();

const Index = () => (
  <Provider store={store}>   
    <Head/>
    <Body/>      
  </Provider> 
)

export default Index
