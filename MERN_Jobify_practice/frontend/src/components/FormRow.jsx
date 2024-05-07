const FormRow = ({ type, name, labelText, defaultValue }) => {
  return (
    <div className={'mt-10 w-full flex flex-col'}>
      <label htmlFor={name}>{labelText || name}</label>
      <input
        type={type}
        name={name}
        className={'border border-gray-200 bg-gray-100 px-3 py-1 rounded'}
        defaultValue={defaultValue || ''}
        required
      />
    </div>
  );
};

export default FormRow;
