import React from 'react'

export default function Task(props) {
  return (
    <div>
        <input type="text" id='ad' className={props.txt.done ?  'text':'' } readOnly value={props.txt.nom} />    
        <input type="button" id='sup' onClick={props.delf} value="Supprimer" />
        <input type="button" id='don' onClick={()=>props.done(props.txt.id)} value="Terminer"/>
    </div>
  )
}