import * as ReactModule from "react";

const Bar = ({ runtimeProps }) => {
  const { React = ReactModule } = runtimeProps;

  // for escaping pre-rendering error
  if (!React) {
    return "<Bar /> server component doesn't work due to missing React instance";
  }

  const id = React.useId();
  const cre = React.createElement;

  return cre(
    "div",
    null,
    cre("label", { htmlFor: `${id}-name` }, "Enter your id : "),
    cre("input", {
      id: `${id}-name`,
      type: "text",
      placeholder: String(id).slice(1, -1),
      style: { paddding: "5px" },
    })
  );
};

export default Bar;
