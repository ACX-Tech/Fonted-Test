import { Box } from "@mui/material";
import UserHeader from "../Components/userHeader";
import { useState } from "react";
import Loading from "../Components/loader";
import useFetch from "../Hooks/useFetch";
import UserCardLayout from "../Components/leyout/indx";
import UserCard from "../Components/userCard";
import Headline from "../Components/typography";

const UserPage = () => {
  const [userId, setUserId] = useState("912345678");
  const { data, loading, error } = useFetch(
    !!userId,
    `https://goruen.proxy.beeceptor.com/cases/${userId}`,
  );

  return (
    <Box>
      <UserHeader userId={userId} setUserId={setUserId} />
      {error && (
        <Box
          sx={{
            color: "red",
          }}
        >
          Something went wrong
        </Box>
      )}

      {loading ? (
        <Loading />
      ) : (
        <>
          {data && data?.CaseDetails?.RelatedCases.length && (
            <UserCardLayout>
              <Headline
                title={"CASE DETAILS"}
                fontWeight={700}
                fontSize={`18px`}
                color={"#262526"}
              />
              <UserCard
                data={data?.CaseDetails?.RelatedCases}
                TableRowData={Object.keys(data?.CaseDetails?.RelatedCases[0])}
              />
            </UserCardLayout>
          )}

          {data && data?.CaseDetails?.Comments.length && (
            <>
              <UserCardLayout>
                <Headline
                  title={"COMMENTS"}
                  fontWeight={700}
                  fontSize={`18px`}
                  color={"#262526"}
                />
                <UserCard
                  data={data?.CaseDetails?.Comments}
                  TableRowData={Object.keys(
                    data?.CaseDetails?.Comments[0],
                  ).reverse()}
                />
              </UserCardLayout>
            </>
          )}
          {data && data?.CaseDetails?.JIRATickets.length && (
            <>
              <UserCardLayout>
                <Box>
                  <Headline
                    title={"JIRA TICKET"}
                    fontWeight={700}
                    fontSize={`18px`}
                    color={"#262526"}
                  />
                </Box>
                <UserCard
                  data={data?.CaseDetails?.JIRATickets}
                  TableRowData={["Id", "Title", "Status", "Date"]}
                />
              </UserCardLayout>
            </>
          )}
        </>
      )}
    </Box>
  );
};
export default UserPage;
