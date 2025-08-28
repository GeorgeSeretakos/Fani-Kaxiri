export default function DateFilter({ setDateFilter }) {
  return (
    <div className="flex space-x-4 items-center bg-white p-4 rounded shadow">
      <label>
        From: <input type="date" onChange={(e) => setDateFilter(prev => ({ ...prev, from: e.target.value }))} />
      </label>
      <label>
        To: <input type="date" onChange={(e) => setDateFilter(prev => ({ ...prev, to: e.target.value }))} />
      </label>
    </div>
  );
}
