import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContext from './context/DataContext'

const PostPage = () => {
  const {posts, handleDelete} = useContext(DataContext)
  const { id } = useParams()
  const post = posts.find(post => (post.id).toString() === id)
  console.log(id)
  return (
    <main className="PostPage">
      <article className="post">
        {post &&
          <>
            <h2>{post.title}</h2>
            <p className="postDate">
              {post.datetime}
            </p>
            <p className="postBody">
              {post.body}
            </p>
            <Link to={`/edit/${post.id}`}>
              <button className="editButton">
                  Edit Post
              </button>
            </Link>
            <button className="deleteButton" onClick={ () =>
              handleDelete(post.id)}>
                Delete Post
            </button>
          </>
        }
        {!post && 
          <main>
            <h2>Post not found</h2>
            <p>Just a blocker. Come on visit our</p>
            <Link to="/">
              <p>home page</p>
            </Link>
        </main>
        }
      </article>
    </main>
  )
}

export default PostPage