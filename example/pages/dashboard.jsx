import Link from 'next/link';

// We can use a simple variable reference when
// we do not required React Life Cycle events.
const Dashboard = () => {
  return (
    <Link href="/">
      <a>Home</a>
    </Link>
  )
}

export default Dashboard;