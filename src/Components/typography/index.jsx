import { Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
const Headline = ({ title, fontWeight, fontSize, lineHeight, color }) => {
  return (
    <Typography
      sx={{
        fontWeight: fontWeight || 400,
        fontSize: fontSize || `16px`,
        lineHeight: lineHeight || "20px",
        color: color || "#262526",
      }}
    >
      {title}
    </Typography>
  );
};

export default Headline;
