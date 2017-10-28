import React from "react";

export default class Article extends React.Component {
  constructor(props) {
    super(props);
      this.state={
        "article" : "",
      }
      this.getArticle = this.getArticle.bind(this);
  }
  componentDidMount() {
    this.getArticle();
  }
  render() {
    return (
      <div className="articleContainer"> 
        {this.renderArticle()} 
      </div>
    );
  }
  renderArticle(){
    var article=this.state.article;
    return (
      <div className="article">
        <h5>{article}</h5>
      </div>
    )
  }
  //Example of making an api call to a localhost server.
  getArticle() {
      var headers = new Headers();
      var init = {    method :  'GET'       ,
                      headers:   headers    ,
                      cache  :  'default'   }
      var req = new Request('/internalApi/articles/'+this.props.articleId, init);
      fetch(req)
        .then(res => {
          if (res.status >= 400) {
            throw new Error("Bad response from server");
          }
          return res.text();
        })
        .then(textRes => {
          this.setState({ 
            "article" : textRes 
          }) 
        })
        .catch(function(err){
          console.log("ERROR! " + err)
        });
    }
}
Article.defaultProps={
  articleId:1,
}