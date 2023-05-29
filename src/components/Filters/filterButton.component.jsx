const FilterButton = ({ name, index, items, setPageNumber, task }) => {
  return (
    <div>
      <style >
        {`
        .radioBtn:checked + label {
            background-color: #0b5ed7,
            color: white
        }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>
      <div className="form-check">
        <input
          className="form-check-input radioBtn"
          type="radio"
          name={name}
          id={`${name}-${index}`}
          onClick={() => {
            setPageNumber(1);
            task(items);
          }}
        />
        <label className="btn btn-outline-primary" htmlFor={`${name}-${index}`}>
          {items}
        </label>
      </div>
    </div>
  );
};
export default FilterButton;
