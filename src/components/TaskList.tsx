import { taskStore } from "../stores/TaskStore";
import { observer } from "mobx-react-lite";
import TaskBlock from "./TaskBlock";
import '../styles/styles.scss'

const TaskList: React.FC = () => {
    
    return (
        <>
            {
                taskStore.tasks.length > 0 &&
                <div className="task-list">
                    {   taskStore.tasks.map((task) => (
                        <TaskBlock key={task.id} task={task}/>
                        ))
                    }
                </div>
            }
        </>
    )
}

export default observer(TaskList);