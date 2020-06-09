import React from "react";

import { Paper, Typography } from "@material-ui/core";
const divStyle = {
  margin: "40px",
  Size: "100px",
};
const VideoDetail = ({ video }) => {
  if (!video) return <div className="loadbar">Search Above</div>;
  console.log(video);
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <React.Fragment>
      <Paper className="vidtitle" elevation={6} style={{ height: "50%" }}>
        <iframe
          frameBorder=""
          height="100%" //Size of video in the frame
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>

      {/* Description of video */}
      <body className="viddisplay">
        <Paper elevation={6} style={{ padding: "100px" }}>
          <Typography className="vidtitle" variant="h1">
            {video.snippet.title}
          </Typography>
          <Typography className="vidtitle" variant="h4">
            {video.snippet.channelTitle}
          </Typography>
        </Paper>
      </body>
    </React.Fragment>
  );
};

export default VideoDetail;
