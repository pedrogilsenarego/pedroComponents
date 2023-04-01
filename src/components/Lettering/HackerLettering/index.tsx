import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import "./index.css";

interface Props {
  message?: string;
}

const HackerLettering = ({ message = "The men that killed his mother" }: Props) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVXWYZ0123456789+-";
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
  const [stopEffect, setStopEffect] = useState<boolean>(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newRandomNumbers = message.split("").map(() => {
        return Math.floor(Math.random() * 37);
      });
      setRandomNumbers(newRandomNumbers);
    }, 50);
    return () => clearInterval(intervalId);
  }, [message]);



  return (
    <Box display="flex" onMouseEnter={() => setStopEffect(true)} onMouseLeave={() => setStopEffect(false)}>
      {message.split("").map((item, pos) => {
        return (
          <span key={pos} className="hacker-lettering__char-wrapper">
            {item === " " ? (
              "\u00A0"
            ) : (
              <Typography
                color="white"
                fontSize="3rem"
                fontWeight={800}

                style={{ textTransform: "uppercase", opacity: stopEffect ? 1 : 0.6 }}
              >
                {stopEffect ? item : letters[randomNumbers[pos]]}
              </Typography>
            )}
          </span>
        );
      })}
    </Box>
  );
};

export default HackerLettering;
