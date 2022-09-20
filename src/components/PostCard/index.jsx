import './styles.css'

export const PostCard = ({id,cover,title,body})=>
    
  ( 
   
             <div className='post'>
                
                 <img src={cover} alt={title}/>
                 <div  className='post-card'>
                     <h2> {title}</h2>
                     <p>{body}</p>
                 </div>
             </div> 
   );
   


