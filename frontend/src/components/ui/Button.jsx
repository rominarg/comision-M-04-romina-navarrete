export function Button({ onClick, children }) {
  return (
    <button
      className="bg-neutral-950 px-4 py-1 rounded-md my-2 disabled:g-neutral-700"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
