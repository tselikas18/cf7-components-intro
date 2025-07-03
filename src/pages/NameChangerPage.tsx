import NameChanger from "../components/NameChanger";
import {useEffect} from "react";

const NameChangerPage = () => {

  useEffect(() => {
    document.title = "Name Changer";
  }, []);

  return (
      <>
        <NameChanger/>
      </>
  )
};

export default NameChangerPage;