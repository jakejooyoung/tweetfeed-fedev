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
  getPosts() {
    var headers = new Headers();
    var init = {    method :  'GET'       ,
                    headers:   headers    ,
                    cache  :  'default'   }

    var req = new Request('/api/posts', init);

    fetch(req)
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then((json) => { 
        var arr=Object.keys(json).map((key)=> json[key] );
        this.setState({ posts:arr }) 
      })
      .catch(function(error){
        console.log("ERROR! "+error)
      });
  }
  
  renderPosts(){
    var posts=this.state.posts;
    console.log(posts.length);
    console.log(posts[0]);

    var innerDivs=[];

    return posts.map(
      (post)=>(<div className="card" key={post.id}>{post.body}</div>),
      this
    );
  }
  render() {
    const center={
      "width": "90%",
      "margin": "0 auto"
    }
    
    return (
      <StackGrid columnWidth={150} style={center}>
        {this.renderPosts()}
      </StackGrid>
    )

    // return (
    //   <StackGrid
    //     columnWidth={150} style={center}
    //   >
          
    //     <div className="card" key="key1">Item 1</div>
    //     <div className="card" key="key2">Item 2</div>
    //     <div className="card" key="key3"> Item 3</div>
    //   </StackGrid>
    // );
  }
}