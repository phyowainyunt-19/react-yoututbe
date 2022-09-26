import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail }) => {
  console.log(channelDetail)
  return (
    <Box
      sx={{ boxShadow: 'none', borderRadius: '20px' }}
    >
      {/* Click the link and go directly into the channel */}
      <Link to={`/channel/${channelDetail?.id?.channelIdf}`}>
        <CardContent
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}
        >
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: '50%', height: '180px', width: '180px'  
            }}
          />
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard