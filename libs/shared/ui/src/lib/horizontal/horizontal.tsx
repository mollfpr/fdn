/* eslint-disable-next-line */
export interface HorizontalProps {}

export function Horizontal(props: HorizontalProps) {
  return (
    <div
      className="w-full flex items-center justify-center bg-gray-300 border border-gray-600 text-2xl font-medium text-gray-600 text-center"
      style={{
        width: 970,
        height: 250,
      }}
    >
      Horizontal 970x250
      <br />
      (Internal campaign only)
    </div>
  );
}

export default Horizontal;
