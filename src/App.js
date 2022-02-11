import './App.css';
import UseStateHook from './components/UseStateHook';
import UseEffectHook from './components/UseEffectHook';
import UseMemoHook from './components/UseMemoHook';
import UseCallbackHook from './components/UseCallbackHook';
import UseRefHook from './components/UseRefHook';
import WithoutUseContextHook from './components/WithoutUseContextHook';
import WithUseContextHook from './components/WithUseContextHook';
import IntroPage from './components/IntroPage';

function App() {
  return (
   <div className='container-fluid'>
     <IntroPage />
     {/* <UseStateHook /> */}
     {/* <UseEffectHook /> */}
     {/* <WithoutUseContextHook />
      <WithUseContextHook /> */}
     {/* <UseMemoHook /> */}
     {/* <UseCallbackHook /> */}
     {/* <UseRefHook /> */}
     </div>
  );
}

export default App;
