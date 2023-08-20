import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContext from './context/DataContext'

const EditPost = () => {
  const {
    posts, handleEdit, editBody, setEditBody,
    editTitle, setEditTitle
  } = useContext(DataContext)
  const { id } = useParams()
  const post = posts.find(post => (post.id).toString() === id)
  console.log(id, posts, post)
  useEffect(() => {
    if(post){
      setEditTitle(post.title)
      setEditBody(post.body)
    }
  }, [])
  return (
    <main className="NewPost">
      { post &&
        <>
          <h2> Edit Post</h2>
          <form className="newPostForm" onSubmit={(e) => {e.preventDefault()}}>
            <label htmlFor="postTitle">Title:</label>
            <input id="postTitle"
              type="text"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)
            } />
            <label htmlFor="postBoby">Post:</label>
            <textarea id="postBody"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)
            } />
            <button type="submit" onClick={() => {
              if(editTitle)
              handleEdit(post.id)
            }}>Submit</button>
          </form>
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
    </main>
  )
}

export default EditPost