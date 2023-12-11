import Image from 'next/image';
import Loading from 'public/images/magic/loading.svg';

interface Props {
  onClick: () => void;
  disabled: boolean;
}

const ConnectButton = ({ onClick, disabled }: Props) => {
  return (
    <div className="text-center">
      <button className="connect-button" onClick={onClick} disabled={disabled}>
        {disabled ? (
          <div className="loading-container ">
            <Image className="loading" alt="loading" src={Loading} />
          </div>
        ) : (
          'Connect'
        )}
      </button>
    </div>
  );
};

export default ConnectButton;
