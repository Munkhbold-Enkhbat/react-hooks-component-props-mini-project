import React from "react";
import Article from "./Article";

function ArticleList(props) {
  console.log('ArticleList articles:', props.articles)
  const renderArticles = props.articles.map(({id, title, date, preview}) => {
    return <Article key={id} title={title} date={date} preview={preview}/>
  })
  
 return(
  <main>
    {renderArticles}
  </main>
 )
}

export default ArticleList;