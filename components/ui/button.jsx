import React from "react";

export function Button({
  children,
  className = "",
  asChild = false,
  ...props
}) {
  if (asChild) {
    const child = React.Children.only(children);
    return React.cloneElement(child, {
      className: `${className} ${child.props.className || ""}`,
      ...props,
    });
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
