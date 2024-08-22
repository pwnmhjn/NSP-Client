/* eslint-disable react/prop-types */

function AdminInput({ inputName, inputText, type, handleBookInput }) {
  return (
    <span className="flex flex-col mt-3 ">
      <label
        htmlFor={inputName}
        className="h-6 w-fit font-mono text-sm px-2  border-2 font-bold text-center border-b-index-slate700  border-r-index-slate700 border-t-index-slate200 border-l-index-slate200 "
      >
        {inputText}
      </label>
      <input
        className="bg-black border-[3px] h-[35px] w-[350px] outline-none m-[2px]   text-white  border-t-index-slate700 border-l-index-slate700 border-b-index-slate200 border-r-index-slate200   text-center"
        type={type}
        name={inputName}
        id={inputName}
        onChange={handleBookInput}
      />
    </span>
  );
}

export default AdminInput;
