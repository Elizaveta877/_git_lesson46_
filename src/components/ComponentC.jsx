import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/appSlice";

function ComponentC() {
  const user = useSelector((state) => state.app.user);
  const theme = useSelector((state) => state.app.theme);

  const dispatch = useDispatch();

  return (
    <div style={{ marginLeft: "40px" }}>
      <h4>Component C</h4>
      <p>
        Користувач: <strong>{user}</strong>
      </p>
      <p>
        Поточна тема: <strong>{theme}</strong>
      </p>

      <button style={{backgroundColor: theme === 'light' ? '#fff' : '#555', 
    color: theme === 'light' ? '#000' : '#fff'}} onClick={() => dispatch(toggleTheme())}>Змінити тему</button>
    </div>
  );
}

export default ComponentC;