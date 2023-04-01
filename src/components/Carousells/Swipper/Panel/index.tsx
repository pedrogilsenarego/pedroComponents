import { Box, Typography } from "@mui/material"
import React from "react";
import { Colors } from "../../../../constants/pallete";

interface Props {
  image: string
  title: string
  price: number
}
const Panel = ({ image, title, price }: Props) => {
  return (
    <>
      <Box
        className='image'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        style={{
          backgroundImage: `url(${image})`,
          boxShadow: "10px 2px 10px 10px #00000066",
        }}
      >
        <Typography
          style={{ marginTop: "100%" }}
          color={Colors.NEON_YELLOW}
        >
          {title}
        </Typography>
        <Typography color={Colors.NEON_YELLOW}>{price}</Typography>
      </Box>
    </>
  )
}

export default Panel