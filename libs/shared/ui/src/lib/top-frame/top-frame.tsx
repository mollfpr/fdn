/* eslint-disable-next-line */
export interface TopFrameProps {}

export function TopFrame(props: TopFrameProps) {
  return (
    <div
      className="w-full flex items-center justify-center bg-gray-300 border border-gray-600 text-2xl font-medium text-gray-600"
      style={{
        maxWidth: 970,
        height: 50,
      }}
    >
      Top Frame 970x50
    </div>
  );
}

export default TopFrame;
