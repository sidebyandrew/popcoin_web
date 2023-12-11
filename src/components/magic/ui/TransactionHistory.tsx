import { getBlockExplorer } from '@/utils/networks';
import Image from 'next/image';
import Link from 'public/images/magic/link.svg';

const TransactionHistory = () => {
  const publicAddress = localStorage.getItem('user');

  return (
    <a
      className="action-button"
      href={getBlockExplorer(publicAddress as string)}
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex items-center justify-center">
        Transaction History{' '}
        <Image src={Link} alt="link-icon" className="ml-[3px]" />
      </div>
    </a>
  );
};

export default TransactionHistory;
