
export default function Footer() {
  return (
    <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3">
      <div>
        Powered by{' '}
        <a
          href="https://github.com/faizanrauf6"
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:underline transition underline-offset-2"
        >
          Creativeminds & Together AI
        </a>
      </div>
    </footer>
  );
}
