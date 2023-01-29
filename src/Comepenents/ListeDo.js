import React from 'react'
import { useState } from 'react'
import { useContext } from 'react';
import { FirstCon } from '../Mcontext/Context';
import Tache from './Tache'
import './Style.css'




export default function ListeDo() {
  const { Tasks, Task, setTask, addTask, removeTask, Changer } = useContext(FirstCon)
  return (
    <div id='diva'>
      <h1>Application ToDo :</h1>
      <form>
        <input type="text" id='adb2' value={Task}
          onChange={(e) => { setTask(e.target.value) }} />
        <input type="button" id='adb' onClick={addTask} value="Ajouter" />
      </form>
      <br></br>
      <ul>
        {
          Tasks.map((t) => {
            return <li key={t.id}><Tache delf={() => { removeTask(t.id) }} done={Changer} txt={t} /></li>
          })
        }
      </ul>
    </div>
  )
}
