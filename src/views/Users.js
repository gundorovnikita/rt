import React,{useState,useEffect} from 'react'
import UserItem from './components/UserItem'
import UserAdd from './components/UserAdd'
import Loader from './components/Loader'

export default function Users() {
	useEffect(()=>{
		getUsers()
	},[])
	const [users,setUsers]=useState([])
	const [loading,setLoading]=useState(true)
	const getUsers = async()=>{
		const data = await fetch('https://jsonplaceholder.typicode.com/users')
		const users = await data.json()
		setLoading(false)
		setUsers(users)
	}
	function addnewUser(prop){
		setUsers(users.concat({
			name:prop,
			id:users.length+1
		}))
	}

	return(
		<div>
			<h1>Users</h1>
			<UserAdd newUser={addnewUser}/>
			<br/>
			{loading && <Loader />}
			{users.map((user)=>{
				return <UserItem user={user} key={user.id}/>
			})}
		</div>
	);
}
