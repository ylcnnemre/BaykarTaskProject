import React, { useContext, useMemo } from "react";
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from "@mui/x-data-grid-generator";
import {
  DataGrid,
  GridColumns,
  GridRowsProp,
  GridToolbar,
  GridToolbarExport,
  GridToolbarContainer
} from "@mui/x-data-grid";
import { MainContext } from "../App";
import { DataGridPremium } from "@mui/x-data-grid-premium";

const CountryTable = () => {
  const { countries } = useContext(MainContext);

  const tableData = useMemo(() => {
    if (countries) {
      return countries.map<{
        id: number;
        name: string;
        currency: string;
        capital: string;
        region: string;
        code : string;
      }>((item: any, index: any) => {
        let result;
        let currencyKey
        if (item.currencies) {
         currencyKey = Object.keys(item?.currencies)[0];

          result = item.currencies[currencyKey].name;
        }

        return {
          id: index,
          capital: item.capital ? item.capital[0] : "",
          currency: result + ` (${currencyKey})`,
          name: item.name.common,
          region: item.continents,
          code : item.fifa 
        };
      });
    }
    return [];
  }, [countries]);





  return (
    <div style={{ height: "100%", width: "100%", padding: "2rem" }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        experimentalFeatures={{ newEditingApi: true }}
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
};

export default CountryTable;

const columns: GridColumns = [
  {
    field: "id",
    headerName: "id",
    editable: false,
    type: "string",
    align: "left",
    headerAlign: "left",
  },
  {
    field: "name",
    headerName: "Name",
    type: "string",
    editable: true,
    flex: 1,
  },
  {
    field: "currency",
    headerName: "Currency",
    editable: true,
    flex: 1,
  },
  {
    field: "capital",
    headerName: "Capital",
    type: "string",
    editable: true,
    flex: 1,
  },
  {
    field: "region",
    headerName: "Region",
    type: "string",
    editable: true,
    flex: 1,
  },
  {
    field: "code",
    headerName: "Country Code",
    type: "string",
    editable: true,
    flex: 1,
  },
];
