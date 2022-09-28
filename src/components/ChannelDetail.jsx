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
    <Box>
      
    </Box>
  )
}

export default ChannelDetail