import React from "react";

interface IProps {
  backgroundColor: string;
}

export const Wrapper: React.FC<IProps> = ({
                                            backgroundColor = "#eee",
                                            children
                                          }) => {
  return (
    <section
      css={{
        backgroundColor,
        padding: "0 1rem"
      }}
    >
      <div
        css={{
          maxWidth: "90rem",
          margin: "0 auto"
        }}
      >
        {children}
      </div>
    </section>
  );
};
