const InputGroup = ({ totalPage, episodeName, setId }) => {
  return (
    <div className='input-group mb-3'>
      <select
        className='form-select'
        onChange={(event) => setId(event.target.value)}
        id={episodeName}
      >
        {[...Array(totalPage).keys()].map((count) => {
          return (
            <option value={count + 1} key={count}>
              Episode - {count + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default InputGroup;
