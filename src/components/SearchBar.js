import React from "react";
import "./Components.css";
import { Paper, TextField } from "@material-ui/core";

class SearchBar extends React.Component {
  state = {
    searchTerm: "",
  };

  handleChange = (event) => this.setState({ searchTerm: event.target.value });

  handleSubmit = (event) => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;
    onFormSubmit(searchTerm); //refresher
    event.preventDefault(); //prevent default behavior of a browser refresh
  };

  render() {
    return (
      <body className="searchback">
        <Paper elevation={6} style={{ padding: "50px" }}>
          <form onSubmit={this.handleSubmit}>
            <TextField fullWidth label="Search" onChange={this.handleChange} />
          </form>
        </Paper>
      </body>
    );
  }
}

export default SearchBar;
