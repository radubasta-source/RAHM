export default function DriversPage() {
  const drivers = [
    {
      id: 1,
      name: "Ion Popescu",
      phone: "07xxxxxxxx",
      license: "B, C, E",
      status: "Activ",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Șoferi</h1>
          <p className="mt-2 text-gray-600">
            Lista șoferilor înregistrați în flotă.
          </p>
        </div>

        <button className="rounded-lg bg-gray-900 px-4 py-2 text-white">
          Adaugă șofer
        </button>
      </div>

      <div className="mt-8 overflow-hidden rounded-xl bg-white shadow">
        <table className="w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4">Nume</th>
              <th className="p-4">Telefon</th>
              <th className="p-4">Permis</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {drivers.map((driver) => (
              <tr key={driver.id} className="border-t">
                <td className="p-4">{driver.name}</td>
                <td className="p-4">{driver.phone}</td>
                <td className="p-4">{driver.license}</td>
                <td className="p-4">{driver.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}