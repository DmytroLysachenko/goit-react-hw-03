import s from "./SearchBox.module.css";

export const SearchBox = ({ setSearchStr }) => {
  const handleChange = (e) => {
    setSearchStr(e.target.value.trim().toLowerCase());
  };
  return (
    <div className={s.wrapper}>
      <label className={s.label}>
        Find contacts by name:
        <input onChange={handleChange} type="text" className={s.input} />
      </label>
    </div>
  );
};
