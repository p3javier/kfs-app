import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";
//@ts-ignore TypeScript is ignored in the below line because it doesn't support ?component syntax.
import HdkLogo from "../hdk.svg?component";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > svg": {
        overflow: "none",
        marginTop: theme.spacing(8),
      },
    },
    centerSmallMargin: {
      "& > svg": {
        overflow: "none",
        marginTop: theme.spacing(2),
        marginLeft: "auto",
        marginRight: "auto",
        display: "block",
      },
    },
    centerDefaultMargin: {
      "& > svg": {
        overflow: "none",
        marginTop: theme.spacing(8),
        marginLeft: "auto",
        marginRight: "auto",
        display: "block",
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

type IconType = {
  position?: "left" | "center" | "right";
  size?: 50 | 100 | 200 | 250;
  margin?: "small" | "medium";
};

export default function SvgIconsColor(props?: IconType) {
  const classes = useStyles();

  let componentClass = classes.root;

  const iconSize = props?.size || 200;

  if (props?.position === "center") {
    if (props?.margin === "small") {
      componentClass = classes.centerSmallMargin;
    } else {
      componentClass = classes.centerDefaultMargin;
    }
  }

  return (
    <div className={componentClass}>
      <HomeIcon style={{ fontSize: iconSize }} />
    </div>
  );
}
