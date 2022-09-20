import './styles.css';

import { Component } from 'react';

//  import {PostCard} from './components/PostCard/index.jsx';
import {TextInput}from'../../components/TextInput/index.jsx'
import {PostFull}from '../../components/Posts/index'
import {loadPost} from '../../functions/load-post'
import { LoadMoreButton } from '../../components/Button/LoadMore';


class Home extends Component{
  state = {
    post: [],
    allPosts: [],
    page: 0,
    postPerPage: 2,
    searchValue:''
  }

  
  // após a montagem do componente
  async componentDidMount(){
    await this.loadPosts()

}

    componentDidUpdate(){
      console.log(this.props['teste'])
      
    }


  loadPosts = async ()=>{
    const {page,postPerPage} = this.state;
   const postAndPhotos = await loadPost()
   this.setState({
     post:postAndPhotos.slice(page,postPerPage),
     allPosts:postAndPhotos,
  })
  }

  loadMorePosts=()=>{
    const {page,postPerPage,allPosts,post} = this.state;
   
   const nextPage = page + postPerPage;
   const nextPost = allPosts.slice(nextPage,nextPage + postPerPage)
    post.push(...nextPost)

    this.setState({post,page:nextPage})

  }


  hendleChange = (e)=> {
    const { value } = e.target
    this.setState({searchValue:value})
  }
 
  render(){

      const {post,page,postPerPage,allPosts,searchValue} = this.state;
      const noMorePost = page + postPerPage>=allPosts.length
      
      const filterPost = !!searchValue ?
       allPosts.filter(post=>{
         return post.title.toLowerCase().includes(
           searchValue.toLowerCase()
           )
       })
       : post;

    return(
      
       <section className='container'>
              <div className='search-container'>
                  {!!searchValue&&(<h1>Search: {searchValue}</h1>)}
                
                    <TextInput 
                    searchValue={searchValue} 
                    hendleChange={this.hendleChange}
                    />
              </div>
          
                {filterPost.length>0&&(
                <PostFull post={filterPost}/>
                )}
                
                {filterPost.length===0&&(
                <h1>Post Não Encontrado</h1>
                )}
                
              <div className='btn-container'>
                  {!searchValue &&(
                  <LoadMoreButton 
                  text='Load Posts' 
                  clicando={this.loadMorePosts}
                  disabled={noMorePost}
                  />
                  )}

              </div>
        
        </section>
 
    
)
    
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default Home;
