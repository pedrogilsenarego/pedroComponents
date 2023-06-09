import { Box, Typography } from "@mui/material";
import Button from "./Button";
import { useState, useEffect } from "react";

const images = [
  {
    mainImage:
      "https://www.indiewire.com/wp-content/uploads/2017/11/screen-shot-2017-11-16-at-1-08-00-pm.png?w=780",
    title: "Dark Hours",
  },
  {
    mainImage:
      "https://images.unsplash.com/photo-1476370648495-3533f64427a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRhcmt8ZW58MHx8MHx8&w=1000&q=80",
    title: "A Skull to tomorrow",
  },
  {
    mainImage:
      "https://cdn.pixabay.com/photo/2013/03/02/02/41/alley-89197__340.jpg",
    title: "The street where i was born",
  },
];


const VerticalCarousell = () => {
  const [index, setIndex] = useState<number>(0);
  const [hover, setHover] = useState<boolean>(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (index + 1 < images.length) setIndex(index + 1)
      else setIndex(0)

    }, 7000);
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);


  return (
    <>
      <Box
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{

          width: "100vw",
          height: "40vh",
          backgroundImage: `url(${images[index].mainImage})`,
          backgroundSize: hover ? "130%" : "110%",
          backgroundRepeat: "no-repeat",
          position: "relative",
          transition: "all 0.8s ease-in-out",
          backgroundPosition: "center center",
          cursor: "pointer",
        }}
      >

        <Typography
          fontSize='50px'
          color='whitesmoke'
          style={{
            position: "absolute",
            bottom: "7%",
            left: "5%",
            textTransform: "uppercase",
            transition: "opacity 0.8s ease-in-out",
            opacity: hover ? 1 : 0
          }}
        >
          {images[index].title}
        </Typography>


        <Box
          display='flex'
          flexDirection='column'
          rowGap={2}
          justifyContent='center'
          alignItems='center'
          style={{
            position: "absolute",

            right: "1.5%",
            bottom: "8%",
          }}
        >
          {images.map((item, pos) => {
            return <Button pos={pos} setIndex={setIndex} index={index} />;
          })}
        </Box>
      </Box>
    </>
  );
};

export default VerticalCarousell;
