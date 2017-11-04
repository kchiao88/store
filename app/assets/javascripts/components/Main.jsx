class Main extends React.Component 
{ 
  constructor(props) {
    super(props);
    this.state = {search_term: "-"};
  }
  onChange(event) 
   {
    this.setState({search_term: event.target.value});
  }
  render() 
  {
    var javascript_side_json = this.props.data;
    var links = [];
    // var javascript_side_json = JSON.stringify(javascript_side_json);
    var javascript_side_json = JSON.parse(javascript_side_json);
    console.log(javascript_side_json);
    var str = this.state.search_term.toLowerCase();

    var list = Object.keys(javascript_side_json).filter(function(key) {
        var term = javascript_side_json[key]["title"].toLowerCase();
        if (term.indexOf(str) !== -1)
        {
          console.log(javascript_side_json[key]["title"]);
          links.push(javascript_side_json[key]);
          return javascript_side_json[key]["title"]
        }
    }).map(function(key) {
        return javascript_side_json[key]["title"];
    });
  
    
    console.log(list);
    console.log(links);
    
    console.log(links[0])
    var input_style = {
    	width:'100%',
    	margin: '0 auto'
    };
    return( 
      <div>
        <div style={input_style}>
              <input onChange={this.onChange.bind(this)} />
              <br/>
        </div>
        {list.map(function(a, index) {
             return (
                 <a href={"/products/" + String(links[index]["id"])} key={index}>
                      <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                          <img src={links[index]["pic"]}  />
                          <div className="caption">
                            <h3>{a}</h3>
                            <p>{links[index]["desc"]}</p>
                            <p>Price: ${links[index]["price"]}</p>
                          </div>
                        </div>
                      </div>
                 </a>
             );
         })}
      </div>
        );
  }
}