// components/Loading.tsx
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-zinc-900">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-black dark:border-zinc-700 dark:border-t-white" />
        {/* <p className="mt-4 text-gray-500 dark:text-gray-400">Loading...</p> */}
    </div>
  );
}
