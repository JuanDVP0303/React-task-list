import TodoList from "./TodoList"
import TodoItems from "./TodoList/TodoItems"
import Layout from "./Layout"
import { ToDoListRender } from "./TodoList/ToDoListRender"
function App() {
  return (
    <Layout>
      <TodoList>
        {(useToDoData) => {
          return <ToDoListRender useToDoData={useToDoData}>
          {(list, setList) => (
          list.map((task, i) => {
            return <TodoItems key={i} setList={setList} task={task}/>
          }))
        }
          </ToDoListRender>
        }}
        
      </TodoList>
    </Layout>
  )
}

export default App