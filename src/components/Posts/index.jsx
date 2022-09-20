
import './styles.css'

import {PostCard} from '../PostCard';

export const PostFull = ({post}) => (
<div className="post-full">

              {post.map(postt =>(
                <PostCard 
                   key={postt.id}
                   id={postt.id}
                   title={postt.title}
                   body={postt.body}
                   cover={postt.cover}
                   
                  />
                 
              ))}
              

        
          </div>
  )