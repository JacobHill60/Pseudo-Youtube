// Jacob Hill
//dependencies: axios & materialUI
import "./App.css";
import React from "react";
import { Grid } from "@material-ui/core";

import { SearchBar, VideoDetail, VideoList } from "./components";
import youtube from "./api/youtube";
//import SearchButton from "./components/SearchButton";

class App extends React.Component {
  state = {
    videos: [], //array of videos
    selectedVideo: null,
  };
  //response;

  /*
  BEST EXAMPLE OF PROPS PASSING
onVideoSelect, passing this to our VideoList
where it is passed to VideoItem

*/

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 10,
        key: "AIzaSyAlxGUdCZJvaLjDj1E7yP-ykQoXRiiwalI",
        q: searchTerm,
      },
    });
    //console.log(response.data.items);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[2],
    });
  };
  //Can delete <SearchBar /> and it will get rid of searchbar component without issue
  //(onFormSubmit) Specifies a trigger that will fire when a response is submitted to the form.

  /*
  Material Ui organizes stuff on the page
  */
  render() {
    const { videos, selectedVideo } = this.state;
    return (
      <body className="wholeback">
        <Grid justify="center" container spacing={10}>
          <Grid item xs={12}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <h1 className="header">Jacob Hill: YouTube Player</h1>
                <h3 className="item">
                  {" "}
                  {"Refresh to return to loading screen"}
                </h3>
                <SearchBar onFormSubmit={this.handleSubmit} />
              </Grid>
              <Grid item xs={8}>
                <VideoDetail video={selectedVideo} />
              </Grid>
              <Grid item xs={4}>
                <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </body>
    );
  }
}

export default App;
