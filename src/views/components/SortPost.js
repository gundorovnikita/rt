import React from 'react'
import PostItem from './PostItem'

export default function SortPost({posts}){

	const filterPosts = posts.filter(e=>e.userId===1)

	return(
		<div>
			{filterPosts.map((post)=>{
				return <PostItem title={post.title} key={post.id}/>
			})}
		</div>
	)
}