export default function Footer() {
  return (
    <footer className="text-center">
      <p className="text-gray-400 text-[14px] md:text-[16px] font-oregano mb-4">
        &copy; {`bálzz 2023 - ${new Date().getFullYear()} • I Think Yt Short Is Good.`}
      </p>
    </footer>
  )
}