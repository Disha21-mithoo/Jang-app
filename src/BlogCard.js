import React from 'react';
import { dumplogs, isArrayEmpty } from './Utils'; 
import classes from './BlogCard.module.css';

const BlogCard = (props) => {
    dumplogs(props);
    
    return(
        <div className={classes.NewBlogCard}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>Like Count: <span className={classes.likeCount}>{props.likeCount}</span></p>
            <button onClick = {props.onLikeBtnClick}>Like</button>
        </div>
    )
}

export default BlogCard;