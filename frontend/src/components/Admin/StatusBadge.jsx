export default function StatusBadge({ status }) {
  const styles = {
    Pending: "bg-stone-200 text-stone-700",
    Processing: "bg-amber-100 text-amber-700",
    Shipped: "bg-blue-100 text-blue-700",
    Delivered: "bg-green-100 text-green-700",
    Cancelled: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
        styles[status] || "bg-stone-200 text-stone-700"
      }`}
    >
      {status}
    </span>
  );
}
