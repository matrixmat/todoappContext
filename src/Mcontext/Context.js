import React, { createContext } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export const FirstCon = createContext();



export default function ContextP({ children }) {
    //declaration des states:
    const [Tasks, setTasks] = useState([
        { id: uuidv4(), nom: 'read', done: false },
        { id: uuidv4(), nom: 'sport', done: false },
        { id: uuidv4(), nom: 'play', done: false }
    ])

    const [Task, setTask] = useState('');


    const addTask = () => {
        let ntask = [...Tasks];
        let nTask = {};
        nTask.id = uuidv4();
        nTask.nom = Task;
        ntask.push(nTask);
        setTasks(ntask);
        setTask('');
    }

    const removeTask = (idp) => {
        let nTask = Tasks.filter((t) => {
            return t.id != idp
        })

        setTasks(nTask);
    }
    const Changer = (id) => {
        let arr = Tasks.map((e) => {
            if (e.id === id) {
                e.done = !e.done;

            }
            return e
        })
        setTasks(arr)
    }
    return (
        <FirstCon.Provider value={{ Tasks: Tasks, Task: Task, setTask: setTask, addTask: addTask, removeTask: removeTask, Changer: Changer }}>
            {children}
        </FirstCon.Provider>
    )
}
