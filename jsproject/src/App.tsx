import {
  Box,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, {
  useEffect,
  useMemo,
  useState,
  useTransition,
  createContext,
} from "react";
import GridList from "./components/GridList";
import Header from "./components/Header";
import useGetAllCountries from "./hooks/useGetAllCountries";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryDetail from "./pages/CountryDetail";

import "./App.scss";

import CountryTable from "./components/CountryTable";

export const MainContext = createContext<{ countries: [] }>({ countries: [] });

const App = () => {
  const { countries, loading } = useGetAllCountries();
  const [data, setData] = useState<Array<any>>(countries ?? []);
  const [tempData, setTempData] = useState<Array<any>>([]);
  const [pending, startTransition] = useTransition();

  const searchCountry = (value: string) => {
    if (countries) {
      startTransition(() => {
        setData([
          ...tempData.filter(
            (e) =>
              e.name.common.toLowerCase().search(value.toLowerCase()) !== -1
          ),
        ]);
      });
    }
  };

  const continents = useMemo(() => {
    const continentList: Array<string> = [];

    countries?.forEach((item) => {
      if (!continentList.includes(item.continents[0])) {
        continentList.push(item.continents[0]);
      }
    });

    return continentList;
  }, [data]);

  useEffect(() => {
    if (!loading) {
      let result = countries?.slice(0, 8);

      setData([...(countries as [])]);
      setTempData([...(countries as [])]);
    }
  }, [loading]);

  const [country, setSearchCountry] = useState<string>("");

  return (
    <MainContext.Provider value={{ countries: countries as [] }}>
      <div className="container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/country/:name" element={<CountryDetail />} />
            <Route
              path="/"
              element={
                <Box
                  display={"flex"}
                  px="1rem"
                  flexDirection={"column"}
                  paddingTop="2rem"
                >
                  <Grid
                    container
                    marginBottom={"1rem"}
                    justifyContent="space-between"
                    paddingRight={"2rem"}
                  >
                    <Grid item xs={4}>
                      <TextField
                        size="small"
                        id="outlined-basic"
                        label="Search Country"
                        variant="outlined"
                        value={country}
                        fullWidth
                        onChange={(e) => {
                          searchCountry(e.target.value);
                          setSearchCountry(e.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <FormControl fullWidth variant="standard">
                        <InputLabel id="demo-simple-select-label" size="small">
                          Continent
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Age"
                          size="small"
                          defaultValue={"All"}
                          onChange={(e) => {
                            if (e.target.value === "All") {
                              setData([...(countries as [])]);
                            } else {
                              if (countries) {
                                let result = countries.filter(
                                  (item) =>
                                    item.continents[0] === e.target.value
                                );
                                setData([...result]);
                                setTempData([...result]);
                                setSearchCountry("");
                              }
                            }
                          }}
                        >
                          <MenuItem value="All">All</MenuItem>
                          {continents.map((item, index) => {
                            return (
                              <MenuItem key={String(index)} value={item}>
                                {item}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                  {pending ? (
                    <CircularProgress />
                  ) : (
                    <GridList loading={loading} data={data} />
                  )}
                </Box>
              }
            />
            <Route path="/table" element={<CountryTable />} />
          </Routes>
        </BrowserRouter>
      </div>
    </MainContext.Provider>
  );
};

export default App;
