export default function ServiceCard({ icon, title, description, bgColor }) {
  return (
    <div className={`${bgColor} rounded-lg shadow-md p-6 text-center`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="">{description}</p>
    </div>
  );
}
