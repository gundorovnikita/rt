import React, {useState,useEffect} from 'react'
import PostItem from './components/PostItem'
import Loader from './components/Loader'
import SortPost from './components/SortPost'

export default function Posts() {
	useEffect(()=>{
		getPosts()
	},[])
	const [posts,setPosts]=useState([])
	const [loading,setLoading]=useState(true)
	const [switcher, setSwitcher]=useState(false)
	const getPosts = async()=>{
		const data = await fetch('https://jsonplaceholder.typicode.com/posts')
		const posts = await data.json()
		setLoading(false)
		setPosts(posts)
	}
	const changeSwitch = ()=>{
		setSwitcher(!switcher)
	}
  return (
  	<div className="app">
	  	<h1>Posts</h1>
	  	<button onClick={changeSwitch}>switch</button>
	  	<br/>
		{loading && <Loader />}
		{switcher ? <SortPost posts={posts} key={posts.id}/> : 
			posts.map((post)=>{
	  			return <PostItem title={post.title} key={post.id}/>
	  		})
		}
  	</div>
  );
}

