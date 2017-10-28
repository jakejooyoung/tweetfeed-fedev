import React from "react";
import StackGrid from "react-stack-grid";

export default class Responsive extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      posts : []
    }
    this.getPosts = this.getPosts.bind(this);
  }
  componentDidMount() {
    this.getPosts();
  }
  render() {
    const center={
      "width": "90%",
      "margin": "0 auto"
    }
    // const yt=<iframe width="100%" height="100%" src="https://www.youtube.com/embed/JQ6wTmaEyL4" frameborder="0" allowfullscreen/>
    return (
      <StackGrid 
        columnWidth={400} 
        gutterWidth={40} 
        gutterHeight={20} 
        appearDelay={15}
        style={center}>
        {this.renderPosts()}
      </StackGrid>
    )
  }
  renderPosts(){
    var posts=this.state.posts;
    console.log(posts.length);

    var innerDivs=[];

    return posts.map(
      (post)=>(<div className="card" key={post.id}>{post.body}{post.title}</div>),
      this
    );
  }
  getPosts() {
    var headers = new Headers();
    var init = {    method :  'GET'       ,
                    headers:   headers    ,
                    cache  :  'default'   }
    var req = new Request('/externalApi/posts', init);
    fetch(req)
      .then(res => {
        if (res.status >= 400) {
          throw new Error("Bad response from server");
        }
        return res.json();
      })
      .then((jsonRes) => { 
        // TO-DO: change it so that api sends just array.
        // Currently sends ( posts : [  Array(3) ] )
        let array=Object.keys(jsonRes).map((key)=> jsonRes[key]);
        this.setState({ posts : array }) 
      })
      .catch(function(err){
        console.log("ERROR! " + err)
      });
  }
}