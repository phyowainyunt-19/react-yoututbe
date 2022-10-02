import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { CheckCircle } from "@mui/icons-material";

import { Videos } from './';
import { fetchApi } from "../utils/fetchApi";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null)
  const { id } = useParams();

  /**
   * fetch video detail data | return the only first video
   * fetch similar videos
   */
  useEffect(() => {
    fetchApi(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]));

    fetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items));
  }, [id]);

  // console.log(videos);

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        {/* Left side of the page | actual viewing the video */}
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2} >
              {videoDetail?.snippet?.title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: '#fff' }} py={1} px={2}>
              <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                <Typography variant={{ sm: 'subtitle2', md: 'h6' }} fontWeight="bold" color="#fff">
                  {videoDetail?.snippet?.channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                </Typography>
              </Link>
              {/* viewCount & likeCount */}
              <Stack direction="row" gap="20px" justifyContent="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        {/* Right side of the page | showing related videos */}
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center">
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail