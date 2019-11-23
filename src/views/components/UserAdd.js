import React,{useRef} from 'react'

export default function UserAdd({newUser}){
	const userName = useRef()
	function sendNewUser(){
		const usernameValue = userName.current.value
		userName.current.value=''
		if (usernameValue.trim()){
			return newUser(usernameValue)
		}
		
	}
	return(
		<div>
			<input type="text" ref={userName}/>
			<button onClick={sendNewUser}>submit</button>
		</div>
	)
}