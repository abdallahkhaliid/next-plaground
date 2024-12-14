import Spinner from "../_components/Spinner";

export default function loading() {
  return (
    <div className="grid items-center justify-center h-screen">
      <Spinner />;
      <p className="text-xl bg-primary-200">Loading cabin data...</p>
    </div>
  );
}
