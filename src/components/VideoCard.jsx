import { Link } from "react-router-dom";
import { useState } from "react";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { demoThumbnailUrl, demoVideoTitle, demoVideoUrl, demoChannelTitle, demoChannelUrl } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  // console.log(videoId, snippet);
  // code reviewed
  return (
    <Card>
      <Link>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent
        sx={{ backgroundColor: '#1e1e1e', height: '106px' }}
      >

      </CardContent>
    </Card>
  )
}

export default VideoCard