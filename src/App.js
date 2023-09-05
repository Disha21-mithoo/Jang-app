import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import BlogCard from './BlogCard';
import {isArrayEmpty } from './Utils'; 

// class based componenents instead of componenets based class
class App extends React.Component {
  state = {
    showBlogs : true,
  

  blogArr : [
    {
      id: 1,
      title: "Blog title 1",
      description: "ivaLOrem ipsum sam ivaLOrem ipsum sam ivaLOrem ipsum sam ivaLOrem ipsum sam",
      likeCount : 0
    },
    {
      id: 2,
      title: "Blog title 2",
      description: "ivaLOrem ipsum sam ivaLOrem ipsum sam ivaLOrem ipsum sam ivaLOrem ipsum sam",
      likeCount : 0
    },
    { 
      id: 3,
      title: "Blog title 3",
      description: "ivaLOrem ipsum sam ivaLOrem ipsum sam ivaLOrem ipsum sam ivaLOrem ipsum sam",
      likeCount : 0
    } 
  ]
}

  onLikeBtnClick = (pos) => {
    const updateBlogList = this.state.blogArr;
    const updateBlogObj = updateBlogList[pos];
    updateBlogObj.likeCount = updateBlogObj.likeCount + 1;
    updateBlogList[pos] = updateBlogObj;

    this.setState({blogArr: updateBlogList});
  }
 

  
  
  onHideButton = () => {
    //let updatedState = !this.state.showBlogs;
    this.setState((prevState, prevProps) => {
      return {showBlogs: !prevState.showBlogs}
    });
  }
  
  render() {

    const BlogCards = isArrayEmpty(this.state.blogArr) ? [] : this.state.blogArr.map((item, pos) => {
      return (
        <BlogCard 
        className= "Blog"
        key= {pos}
        title = {item.title}
        description = {item.description}
        likeCount = {item.likeCount}
        onLikeBtnClick = {() => this.onLikeBtnClick(pos)} />
      )
    });

    return (
      <div className="App">
      <button onClick={this.onHideButton}>{this.state.showBlogs ? 'Hide Blogs' : 'Show Blogs'}</button>
      {this.state.showBlogs ? BlogCards : null}
      </div>
    );
  }
}

export default App;






// function App() {
//   const blogArr = [
//     {
//       id: 1,
//       title: "Blog title 1",
//       description: "ivaLOrem ipsum sam ivaLOrem ipsum sam ivaLOrem ipsum sam ivaLOrem ipsum sam"
//     },
//     {
//       id: 2,
//       title: "Blog title 2",
//       description: "ivaLOrem ipsum sam ivaLOrem ipsum sam ivaLOrem ipsum sam ivaLOrem ipsum sam"
//     },
//     { 
//       id: 3,
//       title: "Blog title 3",
//       description: "ivaLOrem ipsum sam ivaLOrem ipsum sam ivaLOrem ipsum sam ivaLOrem ipsum sam"
//     }
  
    
//   ]
 

//   const BlogCards = isArrayEmpty(blogArr) ? [] : blogArr.map((item, pos) => {
//     return (
//       <BlogCard 
//       className= "Blog"
//       key= {pos}
//       title = {item.title}
//       description = {item.description} />
//     )
//   })
  
//   const onHideButton = () => {
//     alert("Button Clicked")
//   }

//   return (
//     <div className="App">
//     <button onClick={onHideButton}>Hide Button</button>
//     {BlogCards}
//     </div>
//   );
// }

// export default App;
