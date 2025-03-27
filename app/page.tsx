import BigButton from "./bigButton";

export default function Home() {
    return (
      <main className="p-6 flex flex-col items-center font-sans">
        <h1 className="text-3xl font-bold mb-4">Vinzent war da.</h1>
        <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300">
          Klick mich!
        </button>
        <BigButton />
      </main>
    );
  }
