import React from "react";

export const TabPanel = ({ children, color }: any) => {
  const [openTab, setOpenTab] = React.useState(0);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, {
              openTab: openTab,
              setOpenTab: setOpenTab,
              color: color,
              tabIndex: index,
              ...child.props,
            });
          })}
        </div>
      </div>
    </>
  );
};

export const TabHeader = (props: any) => {
  return (
    <ul
      className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
      role="tablist"
    >
      {React.Children.map(props.children, (child, index) => (
        <li
          key={index}
          className="mb-2 mr-2 last:mr-0 flex-50 md:flex-auto w-full md:w-auto text-center"
        >
          <a
            className={
              "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
              (props.openTab === index
                ? "text-white bg-" + props.color
                : "text-" + props.color + "-600 bg-white")
            }
            onClick={(e: { preventDefault: () => void }) => {
              e.preventDefault();
              props.setOpenTab(index);
            }}
            data-toggle="tab"
            href="#link1"
            role="tablist"
          >
            {child.props.children}
          </a>
        </li>
      ))}
    </ul>
  );
};
export const TabBody = (props: any) => (
  <div
    className={`relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded`}
  >
    <div className={`w-full ${props.className}`}>
      <div className={`tab-content tab-space  w-full ${props.className}`}>
        {React.Children.map(props.children, (child, index) =>
          index === props.openTab
            ? React.cloneElement(child, {
                openTab: props.openTab,
                setOpenTab: props.setOpenTab,
                color: props.color,
                tabIndex: index,
                ...child.props,
              })
            : null
        )}
      </div>
    </div>
  </div>
);
