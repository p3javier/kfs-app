import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";
import HdkLogo from "../hdk.svg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > svg": {
        margin: theme.spacing(2),
      },
    },
  })
);

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <HdkLogo />
    </SvgIcon>
  );
}

export default function SvgIconsColor() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HomeIcon />
    </div>
  );
}
