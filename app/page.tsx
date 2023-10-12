"use client"
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const generateRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const colorsName: string[] = Array(300)
    .fill(null)
    .map(() => generateRandomColor());

  const copyColor = (color: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(color).then(() => {
        toast.success(`Copied color: ${color}`);
      }).catch((error) => {
        console.error('Copy failed:', error);
        toast.error('Copy failed. Please try again.');
      });
    }
  };

  return (
    <main>
      <div className="flex flex-wrap gap-4 overflow-y-scroll max-h-screen p-4">
        <Toaster />
        {colorsName.map((c, index) => (
          <div
            onClick={() => copyColor(c)}
            style={{ backgroundColor: c }}
            key={index}
            className="color w-24 h-24 cursor-pointer flex items-center justify-center rounded-lg text-white text-lg"
          >
            <span>{c}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
