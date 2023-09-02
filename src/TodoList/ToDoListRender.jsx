import { AddTask } from "./AddTask";
import propTypes from "prop-types"

export const ToDoListRender = ({children,useToDoData}) => {
    const {
        setShowAdd,
        showAdd,
        addToList,
        refTextArea,
        filterTaskRef,
        setSearchValue,
        noResult,
        toDoListToShow,
        setToDoList,
        toDoList,
      } = useToDoData()

return (
    <>
      <h1 className="font-bold text-3xl text-blue-800 text-center m-5">
        Welcome to your To Do List!
      </h1>
      <button
        className="md:absolute md:bottom-2 md:right-2  shadow-md hover:scale-125 transition-all shadow-blue-800 rounded-full"
        onClick={() => {
          setShowAdd(true);
        }}
      >
        <Plus />
      </button>
      <AddTask
        addToList={addToList}
        refTextArea={refTextArea}
        show={showAdd}
        setShowAdd={setShowAdd}
      />

      <div className="my-10 w-[80%] md:w-[50%]">
        <h2 className="text-center  text-xl text-blue-700 w-full ">
          Search your task
        </h2>
        <input
          className="w-full py-2  border-2 rounded-2xl  border-blue-200"
          ref={filterTaskRef}
          type="text"
          onChange={() => {
            setSearchValue(filterTaskRef.current.value);
          }}
        />
      </div>
      {noResult && toDoListToShow.length == 0 && (
        <span className="text-xl text-slate-900 font-light">
          Your task does not exist
        </span>
      )}
      {toDoList.length == 0 ? (
        <h2 className="font-bold text-2xl text-blue-500">
          Create your first task!
        </h2>
      ) : (
        <>
    {children(toDoListToShow, setToDoList)}
        </>
)}
    </>
  );
}


ToDoListRender.propTypes={
    useToDoData: propTypes.func,
    children:propTypes.func
}


const Plus = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-14 h-14 rounded-full p-2 bg-blue-400 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    );
  };