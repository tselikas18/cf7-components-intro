import {useState, useEffect} from "react";

const OnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handler =() => setIsOnline(navigator.onLine);

    window.addEventListener("online", handler);
    window.addEventListener("offline", handler);

    return () => {
      window.removeEventListener("online", handler);
      window.addEventListener("offline", handler);
    }
  }, [])


  return (
      <>
        <div className={`text-white text-center mt-12 mx-4 p-4 rounded ${isOnline ? 'bg-green-500' : 'bg-cf-dark-red'}`}>
          { isOnline ? "You are Online!" : "You are Offline!" }
        </div>
      </>
  )
}

export default OnlineStatus;