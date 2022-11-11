import { Box, Grid, Pagination } from "@mui/material";
import React, { FC, useDeferredValue } from "react";
import CountryCard from "./Card";

const GridList: FC<{ data: Array<any>; loading: boolean }> = ({
  data,
  loading,
}) => {
  /*  const deferredData=useDeferredValue(data) */

  return (
    <>
      <Grid
        container
        /* justifyContent={"center"}
          alignItems="center" */
        rowGap={"50px"}
      >
        {loading ? (
          <p>Loading </p>
        ) : (
          data?.map((item) => {
            return (
              <Grid item xs={3} key={item.fifa} display={"flex"}>
                <CountryCard key={item.fifa} data={item} />
              </Grid>
            );
          })
        )}
      </Grid>
  
    </>
  );
};

export default GridList;
