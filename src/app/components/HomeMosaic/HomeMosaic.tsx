import React from "react";
import {
  Theme,
  createStyles,
  makeStyles,
  useTheme,
} from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import MainBanner from "../../images/hdk-main.webp";
import Cubos from "../../images/cubos-para.jpg";
import AppOffer from "../../images/app-offer.jpg";
import SecondOffer from "../../images/sobrada.jpg";

export default function MosaicGirdList() {
  const theme = useTheme();
  const sizeOverSm = useMediaQuery(theme.breakpoints.up("sm"));
  let rowNumber: number | undefined;
  let colsNumber: number | undefined;
  if (sizeOverSm) {
    rowNumber = 3;
    colsNumber = 1;
  } else {
    rowNumber = 2;
    colsNumber = 3;
  }
  return (
    <GridList cellHeight={250} cols={3}>
      <GridListTile cols={3} rows={rowNumber}>
        <img src={MainBanner} alt="main-banner" />
      </GridListTile>
      <GridListTile cols={colsNumber} rows={2}>
        <img src={Cubos} alt="offer-banner" />
      </GridListTile>
      <GridListTile cols={colsNumber} rows={2}>
        <img src={AppOffer} alt="offer-banner" />
      </GridListTile>
      <GridListTile cols={colsNumber} rows={2}>
        <img src={SecondOffer} alt="offer-banner" />
      </GridListTile>
    </GridList>
  );
}
