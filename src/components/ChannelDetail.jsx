import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/system";

import { Videos, ChannelCard } from './';
import { fetchApi } from '../utils/fetchApi'

const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null);
  const [channelVideos, setChannelVideos] = useState([]);
  const { id } = useParams();

  // console.log(channelDetail, channelVideos)

  // fetch data and set ChannelDetail page
  useEffect(() => {
    fetchApi(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

    // fetch the videos from the channel
    fetchApi(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setChannelVideos(data?.items));
  }, [id])


  return (
    <Box minHeight="95vh">
      {/* For the gradient header */}
      <Box>
        <div style={{
          height: '300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex" justifyContent="center">
        <Box sx={{ mr: { sm: '100px', md: '125px' } }} />
        <Videos videos={channelVideos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail