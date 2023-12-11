import Image from 'next/image';
import MagicLogo from 'public/images/magic/magic.svg';

const AppHeader = () => {
  return (
    <div className="app-header-container">
      <Image src={MagicLogo} alt="magic-logo" className="magic-logo" />
      <h3 className="demo-sub-header">Demo</h3>
    </div>
  );
};

export default AppHeader;
