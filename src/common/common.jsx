import React from 'react'

export const SubHeadingH1 = ({ ...props }) => {
  const { className, header,id } = props;
  return (
    <h1 className={className} id={id}>
      {header}
    </h1>
  )
}
export const SubHeadingH2 = ({ ...props }) => {
  const { className, header,id } = props;
  return (
    <h2 className={className} id={id}>
      {header}
    </h2>
  );
};


export const SubHeadingH3 = ({ ...props }) => {
  const { className, header,id } = props;
  return (
    <h3 className={className} id={id}>
      {header}
    </h3>
  );
};

export const SubHeadingH4 = ({ ...props }) => {
  const { className, header,id } = props;
  return (<h4 className={className} id={id}>
      {header}
    </h4>
  );
};


export const SubHeadingH5 = ({ ...props }) => {
  const { className, header,id } = props;
  return (
    <h5 className={className} id={id}>
      {header}
    </h5>
  );
};

export const SubHeadingH6 = ({ ...props }) => {
  const { className, header,id } = props;
  return (
    <h6 className={className} id={id}>
      {header}
    </h6>
  );
};

