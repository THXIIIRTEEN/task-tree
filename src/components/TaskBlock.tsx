import { useRef, useState, useEffect } from "react";
import { Task } from "../stores/TaskStore";
import { observer } from "mobx-react-lite";
import { autorun } from 'mobx';
import '../styles/styles.scss'

interface TaskBlockProps {
    task: Task;
}

const TaskBlock: React.FC<TaskBlockProps> = ({ task }) => {

    const [subTaskTitle, setSubTaskTitle] = useState(""); 
    const [ checked, setChecked ] = useState<boolean>(task.isCompleted);

    const addSubTask = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!subTaskInput.current) {
            return;
        }

        if (subTaskTitle.trim()) {
            const newSubTask = new Task(Date.now(), subTaskTitle, task);
            task.addSubTask(newSubTask);
            setSubTaskTitle("");
            subTaskInput.current.value = "";
        } else {
            alert("Введите название задачи");
        }
    };

    const handleCheckboxChange = () => {
        task.toggle();
        setChecked(!checked);
        console.log(task)
    };

    useEffect(() => {
        const dispose = autorun(() => {
            if (task.allChildrenComplete && task.children.length > 0) {
                task.isCompleted = true;
            }
            if (!task.allChildrenComplete && task.children.length > 0) {
                task.isCompleted = false;
            }
            setChecked(task.isCompleted);
        });

        return () => {
            dispose();
        };
    }, [task]);

    const subTaskInput = useRef<HTMLInputElement>(null);

    return (
        <div className="task-block">
            <div className="task-block__name">
                <input className="task-block__checkbox" type="checkbox" checked={checked || task.isCompleted} onChange={handleCheckboxChange}/>
                <label>{task.name}</label>
            </div>
            <form onSubmit={(event) => addSubTask(event)}>
                <input ref={subTaskInput} type="text" placeholder="Введите название подзадачи" onChange={(e) => setSubTaskTitle(e.target.value)}/>
                <button type="submit">Добавить</button>
            </form>
            {task.children.map((subTask, index) => (
                <ol key={index}><TaskBlock key={subTask.id} task={subTask} /></ol>
            ))}
        </div>
    );
};

export default observer(TaskBlock);
