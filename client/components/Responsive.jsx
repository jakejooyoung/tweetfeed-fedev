import React from "react";
import StackGrid from "react-stack-grid";

export default class Responsive extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      posts : [],
      hashtag:"",
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
      (post)=>(
        <div className="card tweet" key={post.id}>
          <div className="author">
            <div className="userName">
              {post.userName}{this.props.hashtag}
            </div>
            <div className="userHandle">
              @{post.userHandle}
            </div>
          </div>
          <div className="content">
            {post.content}
          </div>
        </div>),
      this
    );
  }
  getPosts() {
    const headers = new Headers();
    const init = {    method :  'GET'       ,
                    headers:   headers    ,
                    cache  :  'default'   }
    let query=this.props.hashtag?("/"+this.props.hashtag):"";
    let req = new Request('/internalApi/tweets'+query, init);
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