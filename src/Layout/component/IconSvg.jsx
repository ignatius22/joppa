import * as Icons from "assets/svg";
import React from "react";

const Icon = ({ name, ...rest }) => {
  const SelectedIcon = Icons[name];
  return SelectedIcon ? <SelectedIcon {...rest} /> : null;
};

export default Icon;
