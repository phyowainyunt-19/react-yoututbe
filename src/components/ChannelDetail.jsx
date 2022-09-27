import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/system";

import { Videos, ChannelCard } from './';
import { fetchApi } from '../utils/fetchApi'

const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null);
  const { id } = useParams();

  console.log(channelDetail)
  // fetch data and set ChannelDetail page
  useEffect(() => {
    fetchApi(`channels?part="snippet"&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));
  }, [id])


  return (
    <div>{id}</div>
  )
}

export default ChannelDetail