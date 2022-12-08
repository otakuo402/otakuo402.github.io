import React, { useState } from "react";
import ReactMarkdown from 'react-markdown';

function BlogPages(props) {

    const file_name = `${props.post}.md`;
    const [post, setPost] = useState('');

    import(`../markdown/${file_name}`)
        .then(res => {
            fetch(res.default)
                .then((res) => res.text())
                .then(res => setPost(res));
        })
        .catch(err => console.log(err));

    return (
        <ReactMarkdown children={post} /> 
    )
}

export default BlogPages
