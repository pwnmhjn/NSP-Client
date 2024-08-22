/* eslint-disable react/prop-types */
function Toast({ title, message, cancelToast }) {
  if (title == "Success") {
    return (
      <div className="h-[65px] min-w-[400px] px-3 fixed top-6 right-1/3  bg-green-300  border-t-index-slate200 border-l-index-slate200 border-b-index-slate700 border-r-index-slate700  border-4 z-10 ">
        <button
          onClick={cancelToast}
          className="absolute  top-0 right-0 h-6 w-8 font-mono hover:text-lg  bg-transparent"
        >
          X
        </button>
        <div>
          <p className="font-bold underline-offset-4 text-green-800 underline text-lg  text-start">
            {title}
          </p>
          <p className="text-white text-center  font-medium">{message}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="h-[65px] min-w-[400px] px-3 fixed top-6 right-1/3  bg-red-300 border-t-index-slate200 border-l-index-slate200 border-b-index-slate700 border-r-index-slate700  border-4 z-10">
        <button
          onClick={cancelToast}
          className="absolute top-0 right-0 h-6 w-8 font-mono hover:text-lg  bg-transparent"
        >
          X
        </button>
        <div>
          <p className="font-bold underline-offset-4 text-red-800  underline text-lg  text-start">
            {title}
          </p>
          <p className="text-white text-center  font-medium">{message}</p>
        </div>
      </div>
    );
  }
}

export default Toast;
