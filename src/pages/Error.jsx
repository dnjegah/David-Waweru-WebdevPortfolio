import { useRouteError } from "react-router-dom";


function Error() {
    const error = useRouteError();
    console.error(error);
    
  return (
    <div>
      <h1>Error</h1>
      <p>Page not found.</p>
    </div>
  );
}

export default Error;