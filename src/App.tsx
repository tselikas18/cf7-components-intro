import ClassComponent from "./components/ClassComponent.tsx";
import FunctionalComponent from "./components/FunctionalComponent.tsx";
import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionComponentWithProps.tsx";
import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionComponentWithPropsType.tsx";

function App() {


  return (
    <>
        <ClassComponent/>
        <FunctionalComponent/>
        <ArrowFunctionalComponent/>
        <ArrowFunctionalComponentWithProps title="is arrow functional component with props"/>
        <ArrowFunctionalComponentWithPropsType title="is arrow functional component with props"
                                               description="this is desciptions"/>

    </>
  )
}

export default App
