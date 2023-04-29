import { styled, TextField as MuiTextField } from "@mui/material";
import { Colors } from "../../../constants/pallete";

interface Props {
  maxWidth?: string
}

export const TextField = styled(MuiTextField)(({maxWidth}:Props) => ({
  width: "100%",
  backgroundColor: "transparent",
  borderRadius: "4px",
  maxWidth: maxWidth || "auto",
  "& .MuiInputBase-input": {
    color: "black",
    
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: Colors.PRETTY_CREAM,
      borderRadius: "4px",
      borderWidth: "1px",
    },
    "&:hover fieldset": {
      borderColor: Colors.NEON_YELLOW,
    },
    "&.Mui-focused fieldset": {
      borderColor: Colors.BLACKISH,
    },
  },
}));
