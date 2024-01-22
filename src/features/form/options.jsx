import IconCheck from "../../assets/shared/icon-check.svg";

export const GetCategoryOptions = (newIconCheckedObj) => {
  const { feature, UI, UX, enhancement, bug } = newIconCheckedObj;
  return [
    {
      value: "feature",
      label: (
        <>
          <div className="select-label">
            <span>Feature</span>
            {feature && <img src={IconCheck} />}
          </div>
        </>
      ),
    },
    {
      value: "UI",
      label: (
        <>
          <div className="select-label">
            <span>UI</span>
            {UI && <img src={IconCheck} />}
          </div>
        </>
      ),
    },
    {
      value: "UX",
      label: (
        <>
          <div className="select-label">
            <span>UX</span>
            {}
            {UX && <img src={IconCheck} />}
          </div>
        </>
      ),
    },
    {
      value: "enhancement",
      label: (
        <>
          <div className="select-label">
            <span>Enhancement</span>
            {enhancement && <img src={IconCheck} />}
          </div>
        </>
      ),
    },
    {
      value: "bug",
      label: (
        <>
          <div className="select-label">
            <span>Bug</span>
            {bug && <img src={IconCheck} />}
          </div>
        </>
      ),
    },
  ];
};

export const GetStatusOptions = (newIconCheckedObj) => {
  const { suggestion, planned, live } = newIconCheckedObj;
  return [
    {
      value: "planned",
      label: (
        <>
          <div className="select-label">
            <span>Planned</span>
            {planned && <img src={IconCheck} />}
          </div>
        </>
      ),
    },
    {
      value: "suggestion",
      label: (
        <>
          <div className="select-label">
            <span>Suggestion</span>
            {suggestion && <img src={IconCheck} />}
          </div>
        </>
      ),
    },
    {
      value: "in-progress",
      label: (
        <>
          <div className="select-label">
            <span>In-Progress</span>
            {}
            {newIconCheckedObj["in-progress"] && <img src={IconCheck} />}
          </div>
        </>
      ),
    },
    {
      value: "live",
      label: (
        <>
          <div className="select-label">
            <span>Live</span>
            {live && <img src={IconCheck} />}
          </div>
        </>
      ),
    },
  ];
};
