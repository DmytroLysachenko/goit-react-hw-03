import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css";

export const Contact = ({ name, number, id, deleteContact }) => {
  const handleDelete = () => {
    deleteContact((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <li className={s.item}>
      <div className={s.wrapper}>
        <p>
          <IoPerson /> {name}
        </p>
        <p>
          <FaPhoneAlt /> {number}
        </p>
      </div>
      <button onClick={handleDelete} className={s.button}>
        Delete
      </button>
    </li>
  );
};
