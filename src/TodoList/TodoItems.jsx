import { useState } from "react";
import propTypes from "prop-types"


function TodoItems({ task, setList }) {
  const [isCompleted, setIsCompleted] = useState(false);
  {console.log(task)}

  return (
    <article className="flex justify-between items-center bg-gray-200 text-blue-700 font-bold shadow-md shadow-blue-600 rounded  w-[80%] my-5 p-5">
      <div className="flex flex-col items-center">
      <h2 className={`${isCompleted && "line-through"} text-xl text-center`}>{task.task}</h2>
      <p className="font-light text-sm  max-w-[200px]">{task.descriptionTask}</p>
      </div>
      <div className="flex justify-center">
        <button
          className="p-2 rounded-xl mr-5"
          onClick={() => {
            setIsCompleted(!isCompleted);
          }}
        >
          <Checked bg={isCompleted ? "bg-green-300" : "bg-gray-300"} />
        </button>
        <button
          className="text-xl"
          onClick={() =>
            setList((prev) => prev.filter((item) => item.task != task.task))
          }
        >
          <X/>
        </button>
      </div>
    </article>
  );
}

TodoItems.propTypes={
  task: propTypes.object,
  setList: propTypes.func
}

const Checked = ({ bg }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-9 h-9 ${bg} rounded-full p-2 hover:bg-green-300 hover:text-blue-900`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
};

const X = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-9 h-9 rounded-full p-2 bg-white hover:bg-blue-600 hover:text-white "
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

Checked.propTypes={
  bg: propTypes.string,
}

export default TodoItems;
