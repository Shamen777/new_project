import React from 'react';
import {useParams} from 'react-router';
import Query from '../query/query';
import BLOG_CARD_QUERY from '../queries/blog/blogCard';

const ProductCard = () =>{
    let { id } = useParams();

    return(
        <Query query={BLOG_CARD_QUERY} id={id}>
            {({data : {blog} }) =>{
                return (
                    <div className="blog_card_intro">
                        <img src={'http://localhost:1337' + blog.img.url} alt="img"></img>
                        <h3 className='title'>{blog.name}</h3>
                        <p>{blog.description}</p>
                    </div>
                )
            }}
        </Query>
        
    )
}

export default ProductCard;