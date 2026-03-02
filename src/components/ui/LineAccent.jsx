const LineAccent = ({ center = false }) => (
  <div
    className={`h-0.75 w-14 rounded-sm bg-grad-1 my-4 ${center ? "mx-auto" : ""}`}
  />
);

export default LineAccent;