import {useEffect} from "react";

const HomePage = () => {

  useEffect(() => {
    document.title = "HomePage"
  }, []);

  return (
      <>
        <h1 className="text-bold text-2xl text-center mt-8">Home Page</h1>
      </>
  )
}

export default HomePage