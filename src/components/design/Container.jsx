"use client";

import clsx from "clsx";

const Container = ({ classNameParent, className, children, ...props }) => {
  return (
    <section
      className={clsx(classNameParent, "px-4 sm:px-6 lg:px-8")}
      {...props}
    >
      <div className={clsx(className, "mx-auto max-w-[1400px]")}>
        {children}
      </div>
    </section>
  );
};

export default Container;
