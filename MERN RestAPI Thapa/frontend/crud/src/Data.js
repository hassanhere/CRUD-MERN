import React,{useState,useEffect} from 'react'
import Fetch from './Fetch'
import './Data.css'

function Data() {


const [data,setdata]=useState([])
const [id,set_id]=useState()
const [first_name,set_first_name]=useState("")
const [last_name,set_last_name]=useState("")
const [switch_effect,set_switch_effect]=useState(false)

const [date,set_date]=useState()
const [gender,set_gender]=useState()
const [rank,set_rank]=useState()

const [disabled,set_disabled]=useState("")

useEffect(()=>{
    fetchdata()
},[switch_effect])


async function fetchdata()
{
    await Fetch.getdata().then(res=>{
        setdata(res)
    })
    .catch((err)=>{console.log(err)})
}



function Editdata(a,b,c)
{
    set_disabled("input")
    set_first_name(a)
    set_last_name(b)
    set_id(c)
}

function updateinfo()
{

    const values={first_name,last_name,id}
    fetch("/update/"+id,
    {
        method:"PATCH",
        headers:
        {
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(values)
    }
    ).then(answer=>{answer.json().then(resp=>{console.log(resp)})})
    set_switch_effect(!switch_effect)
    set_first_name("")
    set_last_name("")
}















function deletedata(id)
{
    fetch("/delete/"+id,
    {
        method:"DELETE",
    }
    ).then(answer=>{answer.json().then(resp=>{console.log(resp)})})
    set_switch_effect(!switch_effect)

}















function handlechange(e)
{
    e.preventDefault()

    const res=fetch("/insert",
    {
        method:"POST",
        headers:
        {
            'Content-Type':'application/json'
        },
        body:JSON.stringify({first_name,last_name,gender,date,rank})
    }
    )
    const response=res.json()
    alert(response)

    set_switch_effect(!switch_effect)
    set_switch_effect(!switch_effect)
    set_switch_effect(!switch_effect)
    set_switch_effect(!switch_effect)
    set_switch_effect(!switch_effect)
    set_switch_effect(!switch_effect)
    set_switch_effect(!switch_effect)
    set_switch_effect(!switch_effect)
    set_switch_effect(!switch_effect)
    set_switch_effect(!switch_effect)
    set_switch_effect(!switch_effect)
    set_switch_effect(!switch_effect)


    set_first_name(null)
    set_last_name(null)
    set_rank(null)
    set_gender(null)
    set_date(null)
}









function inputchanges()
{
    if(disabled=="input"|| disabled=="")
    {
    set_disabled("update")
    set_first_name("")
    set_last_name("")
    }
}







  return (
    <div className='data'>
    
        <table>
        <tbody>
            <tr>

            <th>First Name</th>
            <th>Last Name</th>
            <th>Date</th>
            <th>Rank</th>
            <th>Gender</th>
            <th>Actions</th>
            </tr>

            {
                data?(data.map((val)=>(
                    <tr key={val._id}>
                        <td>{val.first_name}</td>
                        <td>{val.last_name}</td>
                        <td>{val.date.substring(0, 10).split('-').reverse().join('-')}</td>
                        <td>{val.rank}</td>
                        <td>{val.gender}</td>
                        <td><button style={{cursor:"pointer"}} onClick={()=>{Editdata(val.first_name,val.last_name,val._id)}}>EDIT</button>
                        <button onClick={()=>{deletedata(val._id)}}>DELETE</button></td>
                    </tr>
                ))):<></>
            }
            </tbody>
        </table>

        <hr/>
        <div className='update-form' style={{border:'1px solid green'}}>
        first name<input value={disabled=="update"?null:first_name} onChange={(e)=>{set_first_name(e.target.value)}}/>
        <br/>
        last name<input value={disabled=="update"?null:last_name} onChange={(e)=>{set_last_name(e.target.value)}}/>
        <br/>
        <button onClick={updateinfo}>Update</button>
        </div>

        <hr/>
        <hr/>
            <div className='input-form' style={{border:'1px solid red'}} onClick={inputchanges}>
        <form onSubmit={handlechange}>
        First name<input value={disabled=="input"?null:first_name} onChange={(e)=>{set_first_name(e.target.value)}} required/>
        <br/>
        Last name<input value={disabled=="input"?null:last_name} onChange={(e)=>{set_last_name(e.target.value)}} required/>
        <br/>
        Rank<input value={rank} type="number" onChange={(e)=>{set_rank(e.target.value)}} required/>
        <br/>
        Gender<input value={gender} onChange={(e)=>{set_gender(e.target.value)}} required/>
        <br/>
        Date<input value={date} type="date" onChange={(e)=>{set_date(e.target.value)}} required/>
        <br/>
        <button type='submit'>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Data