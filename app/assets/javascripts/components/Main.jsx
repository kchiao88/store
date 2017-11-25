class Video extends React.Component
{
  
  render()
  {
    let val;
    if(this.props.type === "title")
    {
      val = <div><h3>{ this.props.title } </h3><p>{this.props.links[this.props.index]["desc"]}</p></div>;
    }
    else
    {
      val = <div><h3>{ this.props.links[this.props.index]["title"] } </h3><p>{this.props.links[this.props.index]["desc"]}</p></div>;
    }
    return(
      <a href={"/products/" + String(this.props.links[this.props.index]["id"])} key={this.props.index}>
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
              <img src={this.props.links[this.props.index]["pic"]}  />
                <div className="caption">
                      { val }
                      <p>Price: ${this.props.links[this.props.index]["price"]}</p>
                      </div>
                  </div>
                </div>
            </a>
      );
  }
}

class Main extends React.Component 
{ 
  constructor(props) {
    super(props);
    this.state = {search_term: ""}; //if you want to hide the results intially, this.state = {search_term: "-"};
  }
  onChange(event) 
   {
    this.setState({search_term: event.target.value});
  }
  search(type)
  {
    var javascript_side_json = this.props.data;
    var links = [];
    // var javascript_side_json = JSON.stringify(javascript_side_json);
    var javascript_side_json = JSON.parse(javascript_side_json);
    console.log(javascript_side_json);
    var str = this.state.search_term.toLowerCase();

    var list = Object.keys(javascript_side_json).filter(function(key) {
        var term = javascript_side_json[key][type].toLowerCase();
        if (term.indexOf(str) !== -1)
        {
          console.log(javascript_side_json[key][type]);
          links.push(javascript_side_json[key]);
          return javascript_side_json[key][type]
        }
    }).map(function(key) {
        return javascript_side_json[key][type];
    });
  
    return [list,links]; 
  }
  render() 
  {

    list = [this.search("title")[0], this.search("desc")[0]];
    links = [this.search("title")[1], this.search("desc")[1]];
    if(this.state.search_term === "")
    {
      list[1] = [];
    }
    console.log("testing", list[0]);
    /*
    console.log(list);
    console.log(links);
    
    console.log(links[0])  
    */
    var input_style = {
    	width:'100%',
    	margin: '0 auto'
    };
    
    let divh1;
    if(list[0].length > 1 )
    {
      let divh1 = { width: "100%", minHeight: "200px"};
    }
    else
    {
      let divh1 = { width: "100%"};
    }
    
    /*
    if(list[0].length > 1 )
    {
      var title_h1 = <h1 style={{ textAlign: "left"}}> Title </h1>;
    }
    else
    {
      var title_h1;
    }
    if( list[1].length > 1  )
    {
        var desc_h1 = <h1 style={{ textAlign: "left"}}> Description </h1>;
    }
    else
    {
      var desc_h1;
    }
    */
    return( 
      <div>
        <div style={input_style}>
              <input onChange={this.onChange.bind(this)} />
              <br/>
        </div>
        <h1 style={{ textAlign: "left"}}> Title </h1>
        <div style={ divh1 }>
        {list[0].map(function(a, index) {
             return (
                 <div>
                      <Video title={a} links={links[0]} index={index} type={"title"}/>
                 </div>
             );
         })}
      </div>
      <h1 style={{ textAlign: "left", width: "30%"}}> Description </h1>
        <div style={{ width: "100%"}}>
        {list[1].map(function(a, index) {
             return (
                 <div>
                      <Video title={ a } links={links[1]} index={index} type={"desc"} />
                 </div>
             );
         })}
        </div>
      </div>
        );
  }
}