import propTypes from "prop-types"
export const AddTask = ({ addToList, refTextArea, show, setShowAdd }) => {
  return (
    <section
      className={`${
        show ? "block" : "hidden"
      } absolute w-screen h-screen flex justify-center items-center after:content-[''] after:bg-[#0000006f] backdrop-blur-sm after:w-full after:h-full after:absolute`}
    >
      <div className="absolute z-10 bg-white w-[310px] md:min-w-[400px]  h-96 border rounded-lg border-blue-600 flex top-[15%] flex-col items-center shadow-xl">
        <h2 className="text-blue-900 font-bold text-2xl my-10">
          Set your task
        </h2>
        <div className="flex flex-col items-center w-full" ref={refTextArea}>
          <input
            
            className="border border-black rounded-lg max-h-36 w-[80%] mb-5 p-1 text-center"
            name=""
            id=""
            placeholder="Añade tu tarea"
          ></input>
          <textarea
            placeholder="Describe tu tarea"
            className="border border-black rounded-lg max-h-36 w-[80%] h-28 p-2 text-center"
            name=""
            id=""
          ></textarea>
        </div>
        <button
          className="p-2 border-2 text-blue-100  bg-blue-900 shadow-md shadow-blue-400 border-blue-900 rounded-lg mt-10"
          onClick={() => {
            addToList();
          }}
        >
          Add your task
        </button>
        <button className="absolute top-2 right-2" onClick={() => setShowAdd(false)}>
            <XCircle/>
        </button>
      </div>
    </section>
  );
};

AddTask.propTypes={
    addToList:propTypes.func,
    refTextArea:propTypes.object,
    show:propTypes.bool,
    setShowAdd:propTypes.func,
}


const XCircle = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-9 h-9"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};
