import { Box } from "@mui/material";

// eslint-disable-next-line react/prop-types
const UserCardLayout = ({ children }) => {
  return (
    <Box
      sx={{
        padding: `20px`,
      }}
    >
      {children}
    </Box>
  );
};

export default UserCardLayout;
