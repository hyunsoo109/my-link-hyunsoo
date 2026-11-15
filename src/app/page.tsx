export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <div className="w-full max-w-sm rounded-2xl bg-white dark:bg-zinc-900 p-8 shadow-sm border border-zinc-200/80 dark:border-zinc-800 flex flex-col items-center text-center">
        {/* 프로필 아바타 (이니셜) */}
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 text-white font-semibold text-2xl shadow-sm mb-5 dark:from-zinc-100 dark:to-zinc-300 dark:text-zinc-900">
          조
        </div>

        {/* 이름 */}
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          조현수
        </h1>

        {/* 소개글 */}
        <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed break-keep">
          안녕하세요: 바이브 코딩을 배우고 있는 대학생입니다.
        </p>
      </div>
    </main>
  );
}
