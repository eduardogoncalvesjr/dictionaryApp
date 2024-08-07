import { ThreeDots } from 'react-loader-spinner';

export default function Loading() {
  return (
    <div className="flex justify-center">
      <ThreeDots
        visible
        height="80"
        width="80"
        color="rgb(192 132 252)"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={ {} }
        wrapperClass=""
      />
    </div>
  );
}
