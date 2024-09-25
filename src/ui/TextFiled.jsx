function TextFiled({ label, name, value, onChange }) {
  return (
    <div>
      <label className="mb-1" htmlFor="phoneNumber">
        {label}
      </label>
      <input
        className="textField__input"
        type="text"
        id={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
    </div>
  );
}

export default TextFiled;
