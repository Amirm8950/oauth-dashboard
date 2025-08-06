/* ------------------------------------------------------------------
   Simple spinner component │ Coder: Amir Mehdi Memari
   ------------------------------------------------------------------ */
export default function Loader() {
  return (
    <div className="flex items-center justify-center py-10">
      <span className="animate-spin h-8 w-8 border-4 rounded-full border-blue-400 border-t-transparent" />
    </div>
  );
}
