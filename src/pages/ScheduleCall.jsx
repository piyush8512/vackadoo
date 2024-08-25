import React, { useEffect } from "react";

const ScheduleCall = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-white h-screen">
      <div
        className="calendly-inline-widget pt-14"
        data-url="https://calendly.com/vackadoo/30min?background_color=efefef&text_color=111111&primary_color=1d1e1e"
        style={{ minWidth: "420px", height: "700px" }}
      ></div>
    </div>
  );
};

export default ScheduleCall;
