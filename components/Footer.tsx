import Github from "./GitHub";

export default function Footer() {
  return (
    <footer
      className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-10 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:space-y-0 sm:mb-0 mb-3 border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-gray-300">
      <div>
        Powered by{' '}
        <a
          href="https://github.com/faizanrauf6"
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:underline transition underline-offset-2 text-gray-700 dark:text-gray-300"
        >
          Creativeminds & Together AI
        </a>
      </div>
      <div>
        <a
          className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 shadow-md transition-colors hover:bg-gray-100 dark:bg-zinc-800 dark:text-white dark:border-gray-600 dark:hover:bg-zinc-700"
          href="https://github.com/faizanrauf6/boi-genie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
          <p>Star on GitHub</p>
        </a>
      </div>
    </footer>
  );
}
