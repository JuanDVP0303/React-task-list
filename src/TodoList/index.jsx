import { useState, useRef } from "react";
import { useEffect } from "react";
import propTypes from "prop-types";
import Swal from "sweetalert2";


function TodoList({ children }) {
  const [toDoList, setToDoList] = useState(
    localStorage.getItem("todolist")
      ? JSON.parse(localStorage.getItem("todolist"))
      : []
  );
  const [toDoListToShow, setToDoListToShow] = useState([{}]);
  const [searchValue, setSearchValue] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [noResult, setNoResult] = useState(false);
  const refTextArea = useRef();
  const filterTaskRef = useRef();

  const useToDoData = () => {
    return {
      setShowAdd,
      showAdd,
      addToList,
      refTextArea,
      filterTaskRef,
      setSearchValue,
      noResult,
      toDoListToShow,
      toDoList,
      setToDoList,
    };
  };

  useEffect(() => {
    setToDoListToShow(toDoList);
    localStorage.setItem("todolist", JSON.stringify(toDoList));
  }, [toDoList]);

  useEffect(() => {
    if (searchValue.length == 0) {
      setToDoListToShow(toDoList);
      return;
    }
    setToDoListToShow(
      toDoList.filter((item) =>
        item.task.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
    if (
      toDoList.filter((item) =>
        item.task.toLowerCase().includes(searchValue.toLowerCase())
      ).length == 0
    ) {
      setNoResult(true);
    } else {
      setNoResult(false);
    }
  }, [searchValue, toDoList]);

  const addToList = () => {
    if (refTextArea.current.children[0].value == "") {
      Swal.fire({
        title: "Empty task!",
        text: "Write a task first!",
        color: "#1D3A8A",
        confirmButtonColor: "#1D3A8A",
      });
      return;
    }
    setToDoList([
      ...toDoList,
      {
        task: refTextArea.current.children[0].value,
        descriptionTask: refTextArea.current.children[1].value,
      },
    ]);
    refTextArea.current.children[0].value = "";
    refTextArea.current.children[1].value = "";
    setShowAdd(false);
  };

  return(
    <>
    {children(useToDoData)}
    </>
  )

}

TodoList.propTypes = {
  children: propTypes.func,
};







export default TodoList;
