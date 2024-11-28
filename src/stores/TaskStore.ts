import { action, makeAutoObservable, computed } from "mobx";

class Task {
    id: number;
    name: string;
    isCompleted: boolean;
    parent?: Task;
    children: Task[];

    constructor(id: number, name: string, parent?: Task) {
        this.id = id;
        this.name = name;
        this.isCompleted = false;
        this.parent = parent;
        this.children = [];
        makeAutoObservable(this, {
            toggle: action,
            allChildrenComplete: computed
        });
    }

    addSubTask(task: Task) {
        this.children.push(task);
        task.parent = this;
    }

    toggle() {
        this.isCompleted = !this.isCompleted;
        this.children.forEach(child => child.isCompleted = this.isCompleted)
    }

    get allChildrenComplete(): boolean {
        return this.children.every(child => child.isCompleted);
    }
}

class TaskStore {
    tasks: Task[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addTask(task: Task) {
        this.tasks.push(task);
    }
}

export const taskStore = new TaskStore();
export { Task };
