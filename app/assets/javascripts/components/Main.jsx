class Main extends React.Component 
{ 
  constructor(props) {
    super(props);
    this.state = {search_term: ""};
  }
  onChange(event) 
   {
    this.setState({search_term: event.target.value});
    console.log(this.state.search_term)
  }
  render() 
  {
      var search_term = "";
      var item = "";
      if (this.props.id == 1)
      {
          search_term = <input onChange={this.onChange.bind(this)} />;
      }
      if (this.props.title.indexOf(this.state.search_term) !== -1)
      {
          item = <Item title = {this.props.title} />;
      }
    return( 
      <div>
        {search_term}
        {item}
      </div>
        );
  }
}