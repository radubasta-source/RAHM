export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-900">
        Dashboard Flotă
      </h1>

      <p className="mt-4 text-gray-600">
        Aplicație pentru gestionarea șoferilor, mașinilor și reviziilor.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <a href="/drivers" className="rounded-xl bg-white p-6 shadow block">
  <h2 className="text-lg font-semibold text-gray-700">Șoferi</h2>
  <p className="mt-2 text-3xl font-bold text-gray-900">1</p>
  <p className="mt-2 text-sm text-gray-500">Vezi lista șoferilor</p>
</a>
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-lg font-semibold text-gray-700">Mașini</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900">0</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-lg font-semibold text-gray-700">Revizii</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900">0</p>
        </div>
      </div>
    </main>
  );
}