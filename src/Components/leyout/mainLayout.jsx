import { Box } from "@mui/material";

// eslint-disable-next-line react/prop-types
const MainLayout = ({ children }) => {
  return <Box sx={{ padding: "48px" }}>{children}</Box>;
};

export default MainLayout;
