import { useRouteError } from "react-router-dom";
import "./Error.scss";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="error">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default Error;
