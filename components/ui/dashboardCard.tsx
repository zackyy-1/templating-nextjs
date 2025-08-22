// components/DashboardCards.js
export default function DashboardCards() {
  const cards = [
    {
      title: "Today Orders",
      value: "5,472",
      change: "+427",
      trend: "up",
      description: "Last week"
    },
    {
      title: "Today Earnings",
      value: "$7,589",
      change: "-453",
      trend: "down",
      description: "Last week"
    },
    {
      title: "Profit Gain",
      value: "$8,943",
      change: "+788",
      trend: "up",
      description: "Last week"
    },
    {
      title: "Total Earnings",
      value: "$57.2M",
      change: "-693",
      trend: "down",
      description: "Last week"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            {card.title}
          </h2>
          <p className="text-2xl font-bold text-gray-900 mb-2">
            {card.value}
          </p>
          <p className={`flex items-center ${card.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            {card.description} 
            <span className="ml-1">
              {card.trend === 'up' ? '▲' : '▼'} {card.change}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}