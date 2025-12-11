"use client";

import clsx from "clsx";

const Container = ({ classNameParent, className, children }) => {
  return (
    <section className={clsx(classNameParent, "px-4 sm:px-6 lg:px-8")}>
      <div className={clsx(className, "mx-auto max-w-[1400px]")}>
        {children}
      </div>
    </section>
  );
};

export default Container;
