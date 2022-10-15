import { NativeBaseProvider } from 'native-base'
import Header from './components/layout/Header';
import AppStack from './components/stacks/AppStack';


export default function App() {
  return (

    <NativeBaseProvider>
      {/* <Header /> */}
      <AppStack />
    </NativeBaseProvider>
  );
}

