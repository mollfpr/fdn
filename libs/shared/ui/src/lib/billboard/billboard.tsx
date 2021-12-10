/* eslint-disable-next-line */
export interface BillboardProps {}

export function Billboard(props: BillboardProps) {
  return (
    <div
      className="w-full flex items-center justify-center bg-gray-300 border border-gray-600 text-2xl font-medium text-gray-600"
      style={{
        width: 970,
        height: 250,
      }}
    >
      Billboard 970x250
    </div>
  );
}

export default Billboard;
