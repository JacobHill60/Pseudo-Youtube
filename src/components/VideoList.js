import React from "react";
import { Grid } from "@material-ui/core";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const listofVideos = videos.map((video, id) => (
    <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />
  ));

  return (
    <Grid className="vidlist" container spacing={5}>
      {listofVideos}
    </Grid>
  );
};

export default VideoList;
