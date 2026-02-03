import { NavLink as RouterNavLink } from "react-router-dom";
import React, { forwardRef } from "react";

/**
 * NavLink wrapper that supports active and pending CSS classes.
 *
 * Props:
 * - className: base class(es)
 * - activeClassName: class(es) when route is active
 * - pendingClassName: class(es) when route is pending
 * - to: route target
 */
const NavLink = forwardRef(
  ({ className = "", activeClassName = "", pendingClassName = "", to, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) => {
          let classes = className;
          if (isActive) classes += ` ${activeClassName}`;
          if (isPending) classes += ` ${pendingClassName}`;
          return classes.trim();
        }}
        {...props}
      />
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };