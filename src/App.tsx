// import ClassComponent from "./components/ClassComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionComponentWithPropsType.tsx";
// import Layout from "./components/Layout.tsx";
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
// import HomePage from "./pages/HomePage.tsx";
import NameChangerPage from "./pages/NameChangerPage.tsx";
import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";
import UserPage from "./components/UserPage.tsx";
import RouterLayout from "./components/RouterLayout.tsx";
import ExamplesPage from "./pages/ExamplesPage.tsx";
import RouterExamplesLayout from "./components/RouterExamplesLayout.tsx";
import AutoRedirectPage from "./pages/AutoRedirectPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
// import FocusInput from "./components/FocusInput.tsx";
import UncontrolledInput from "./components/UncontrolledInput.tsx";

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
        {/*<Layout>*/}
          <Routes>

            {/*<Route path="/" element={<HomePage/>}/>*/}
            <Route element={<RouterLayout/>}>
              <Route index element={<UncontrolledInput/>}/>
            </Route>

            <Route path="name-changer" element={<NameChangerPage/>}/>

            <Route path="examples" element={<RouterExamplesLayout/>}>
              <Route index element={<ExamplesPage/>}/>
              <Route path="name-changer" element={<NameChangerPage/>}/>
              <Route path="online-status" element={<OnlineStatusPage/>}/>
              <Route path="auto-redirect" element={<AutoRedirectPage/>}/>
            </Route>

            <Route path="users/:userId" element={<UserPage/>}/>
            <Route path="users" element={<UserPage/>}/>
            {/*<Route path="files/*" element={<FilePage/>}/>*/}
            {/*<Route path="examples?/name-changer" element={<NameChangerPage/>}/>*/}
            <Route path="*" element={<NotFoundPage/>}/>

          </Routes>
        {/*</Layout>*/}
      </BrowserRouter>

    </>
  )
}

export default App
