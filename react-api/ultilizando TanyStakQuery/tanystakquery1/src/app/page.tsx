'use client'

import { apiGetComments, apiGetPosts, apiGetUsers } from "@/utils/querys"
import { useState } from "react"

const Page = () => {

  const [filterComments, setFilterComments] = useState('')
  const [selectPage, setSelectPage] = useState('search')
  const posts = apiGetPosts()
  const users = apiGetUsers()
  const comments = apiGetComments()

  const filteredComents = comments.data?.filter(item =>
    Object.values(item).some(value =>
      String(value).toLocaleLowerCase().includes(filterComments.toLocaleLowerCase())
    )
  );



  return (
    <div>

      <div>
        <button onClick={e => setSelectPage('search')}>search</button>  <button onClick={e => setSelectPage('comments')}>comments</button>  <button onClick={e => setSelectPage('users')}>users</button>  <button onClick={e => setSelectPage('posts')}>posts</button>



      </div>



      {selectPage === 'search' && (
        <div>
          <input type="text" onChange={e => setFilterComments(e.target.value)} />
          {filterComments !== '' ? (
            filteredComents && filteredComents.length > 0 ? (
              <ul>
                {filteredComents.map(item => (
                  <li key={item.id}>{item.id}-{item.email}-{item.name}-{item.body}</li>
                ))}
              </ul>
            ) : (
              <p>Não há comentários</p>
            )
          ) : (
            ''
          )}
        </div>
      )}


      {selectPage === 'comments' && (
        <div>
          {comments.data &&
            <ul>
              {comments.data.map(item =>
                <li> {item.email}</li>
              )}

            </ul>



          }
        </div>
      )}

      {posts.isLoading && 'carregando...'}
      {!posts.isLoading &&

        (posts.isFetching && 'recarregando')

      }




      {selectPage === 'users' && (
        <div>
          {users.data &&
            <ul>
              {users.data.map(item => (
                <li>{item.name}</li>

              ))}

            </ul>

          }

        </div>

      )}

      {selectPage === 'posts' && (
        <div>
          {posts.data &&
            <ul>
              {posts.data.map(item => (
                <li>{item.title}</li>
              ))}

            </ul>
          }
        </div>
      )}

    </div>



  )
}
export default Page