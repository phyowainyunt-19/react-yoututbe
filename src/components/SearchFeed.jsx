import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

import { useParams } from 'react-router-dom';
import { fetchApi } from '../utils/fetchApi';
import { Videos } from './'

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    // return search results 
    fetchApi(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items));
  }, [searchTerm])

  return (
    <Box p={2} minHeight="95vh">
      <Typography variant="h4" fontWeight={900}  color="white" mb={3} ml={{ sm: "100px"}}>
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px', md: '125px' } }}/>
        {<Videos videos={videos} />}
      </Box>
    </Box>
  )
}

export default SearchFeed 