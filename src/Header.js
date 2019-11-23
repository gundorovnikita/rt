import React from 'react'
import './styles/Header.css';
import {NavLink} from 'react-router-dom'

export default function Header(){
	return(
		<div className="app">
			<div className="header">
				<div className="container">
					<div className="header_button">
						<NavLink to="/" exact activeClassName="active" className="link" >Home</NavLink>
					</div>
					<div className="header_button">
						<NavLink to="/posts" activeClassName="active" className="link">posts</NavLink>
					</div>
					<div className="header_button">
						<NavLink to="/users" activeClassName="active" className="link">Users</NavLink>
					</div>
				</div>       
			</div>
	    </div>

	)
};
