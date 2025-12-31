import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, fetchUser } from "../redux/appSlice";

function ComponentC() {
  const { user, theme, status, error } = useSelector((state) => state.app);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchUser(1));
  }, [dispatch]);

  return (
    <div style={{ marginLeft: "40px" }}>
      <h4>Component C</h4>

      {status === "loading" && <p>Завантаження даних...</p>}
      {status === "failed" && <p style={{ color: "red" }}>Помилка: {error}</p>}
      
      {status === "succeeded" && (
        <p>
          Користувач з API: <strong>{user}</strong>
        </p>
      )}

      <p>Поточна тема: <strong>{theme}</strong></p>

      <div style={{ display: 'flex', gap: '10px' }}>
        <button 
          style={{
            backgroundColor: theme === 'light' ? '#fff' : '#555', 
            color: theme === 'light' ? '#000' : '#fff'
          }} 
          onClick={() => dispatch(toggleTheme())}
        >
          Змінити тему
        </button>

        <button onClick={() => dispatch(fetchUser(Math.floor(Math.random() * 10) + 1))}>
          Випадковий користувач
        </button>
      </div>
    </div>
  );
}

export default ComponentC;