export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <div className="w-full max-w-sm rounded-2xl bg-white dark:bg-zinc-900 p-8 shadow-sm border border-zinc-200/80 dark:border-zinc-800 flex flex-col items-center text-center">
        {/* 프로필 사진 */}
        <div className="relative h-24 w-24 mb-5 overflow-hidden rounded-full shadow-md border-2 border-zinc-200 dark:border-zinc-700">
          <img
            src={`${basePath}/profile.jpg`}
            alt="조현수 프로필"
            className="h-full w-full object-cover"
          />
        </div>

        {/* 이름 */}
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          조현수
        </h1>

        {/* 소개글 */}
        <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed break-keep">
          기술로 일상의 문제를 해결하고 가치 있는 경험을 만드는 개발자 조현수입니다. 새로운 기술을 빠르게 탐구하고, 사용자 중심의 서비스를 구현하는 것을 좋아합니다.
        </p>

        {/* 링크 버튼 목록 */}
        <div className="mt-6 flex flex-col w-full gap-3">
          <a
            href="https://www.instagram.com/gustn_1o9/?hl=ko"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white font-medium text-sm shadow hover:opacity-90 active:scale-[0.99] transition-all"
          >
            {/* Instagram SVG Icon */}
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </main>
  );
}
