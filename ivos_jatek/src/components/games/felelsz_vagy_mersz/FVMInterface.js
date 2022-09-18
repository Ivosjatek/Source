import { useHistory } from "react-router-dom";

const FVMInterface = () => {
  const history = useHistory();

  const okCkilckHandler = () => {
    history.push("/felelsz_vagy_mersz");
  };

  const exitClickHandler = () => {
    history.push("/menu");
  };

  return (
    <div>
      <div>
        <button onClick={exitClickHandler}>X</button>
      </div>
      <div>Cím</div>
      <div>Szabályzat</div>
      <div>Leírás</div>
      <div>Nehézségi szint</div>
      <div>
        <button onClick={okCkilckHandler}>Ok</button>
      </div>
    </div>
  );
};

export default FVMInterface;
