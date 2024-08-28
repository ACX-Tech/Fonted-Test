import { Box, TextField } from "@mui/material";
import Headline from "../typography";
import UserButton from "../button";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const UserHeader = ({ userId, setUserId }) => {
  const [data, setData] = useState("");
  return (
    <>
      <Box>
        <Box>
          <Headline
            title={"Case Investigation"}
            fontWeight={700}
            fontSize={`40px`}
            lineHeight={`40px`}
          />
        </Box>
        <Box>
          <Headline
            title={`Please enter the Case ID that you want to investigate and
                 we will gather all the data you needed and suggest a decision for it.
                  Don’t forget to mention was it correct or not. `}
            fontWeight={600}
            color={"#4F4F50"}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <TextField
            size={"medium"}
            placeholder="Case ID"
            maxRows={4}
            defaultValue={userId}
            value={data}
            onChange={(e) => {
              setData(e.target.value);
            }}
          />
          <UserButton
            title={"Check"}
            onClick={() => {
              setUserId(data);
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default UserHeader;
