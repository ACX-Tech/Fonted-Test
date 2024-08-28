import { Button } from "@mui/material";

// eslint-disable-next-line react/prop-types
const UserButton = ({ title, variant, size, onClick }) => {
  return (
    <Button
      variant={variant || "contained"}
      size={size || "medium"}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default UserButton;
