const lg = 'lg';
const md = 'md';
const sm = 'sm';

/* eslint-disable-next-line */
export interface BottomFrameProps {}

export function BottomFrame(props: BottomFrameProps) {
  return (
    <div
      className="w-full flex items-center justify-center bg-gray-300 border border-gray-600 text-2xl font-medium text-gray-600"
      style={{
        width: 970,
        height: 50,
      }}
    >
      Bottom Frame 970x50, 468x60, 320x50
    </div>
  );
}

export default BottomFrame;
