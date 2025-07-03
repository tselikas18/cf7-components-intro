// import ClassComponent from "./components/ClassComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionComponentWithPropsType.tsx";
import Layout from "./components/Layout.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import CounterAdvancedWithCustomHook from "./components/CounterAdvancedWithCustomHook.tsx";
// import CounterWithReducer from "./components/CounterWithReducer.tsx";
// import Todo from "./components/Todo/Todo.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import Counter from "./components/Counter.tsx";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import ClassComponent from "./components/ClassComponent.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import OnlineStatus from "./components/OnlineStatus.tsx";
import {BrowserRouter, Routes, Route} from "react-router";
import HomePage from "./pages/HomePage.tsx";
import NameChangerPage from "./pages/NameChangerPage.tsx";
import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";
import UserPage from "./components/UserPage.tsx";

function App() {


  return (
    <>

        {/*<Layout>*/}
            {/*<FunctionalComponent/>*/}
            {/*<ClassComponent/>*/}
            {/*<FunctionalComponent/>*/}
            {/*<ArrowFunctionalComponent/>*/}
            {/*<ArrowFunctionalComponentWithProps title="is arrow functional component with props"/>*/}
            {/*<ArrowFunctionalComponentWithPropsType title="is arrow functional component with props"*/}
            {/*                                       description="this is description"/>*/}
            {/*<ClassComponentWithState/>*/}
            {/*<FunctionalComponentWithState/>*/}
            {/*<Counter/>*/}
            {/*<NameChanger/>*/}
            {/*<CounterWithMoreStates/>*/}
            {/*<CounterAdvanced/>*/}
            {/*<CounterWithCustomHook/>*/}
            {/*<CounterAdvancedWithCustomHook/>*/}
            {/*<CounterWithReducer/>*/}
            {/*<Todo/>*/}
            {/*<OnlineStatus/>*/}
        {/*</Layout>*/}

      <BrowserRouter>
        <Layout>
          <Routes>

            {/*<Route path="/" element={<HomePage/>}/>*/}
            <Route index element={<HomePage/>}/>
            <Route path="name-changer" element={<NameChangerPage/>}/>

            <Route path="examples?">
              <Route path="name-changer" element={<NameChangerPage/>}/>
              <Route path="online-status" element={<OnlineStatusPage/>}/>
            </Route>
            <Route path="users/:userId" element={<UserPage/>}/>
            {/*<Route path="examples?/name-changer" element={<NameChangerPage/>}/>*/}

          </Routes>
        </Layout>
      </BrowserRouter>

    </>
  )
}

export default App
