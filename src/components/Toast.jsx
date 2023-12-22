import { useState, useEffect } from "react";
import "./toast.css";
const Toast = ({ message }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 3000);
    }
  }, [message]);
  if (!visible) {
    return null;
  }

  return (
    <div className="toastr">
      <p>{message}</p>
    </div>
  );
};

export default Toast;
