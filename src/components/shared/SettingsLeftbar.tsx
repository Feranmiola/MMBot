import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SettingsLeftbar = () => {

    function useActive(path: string) {
        const location = useLocation();
        let isActive = location.pathname === path;
         return isActive ? 'bg-[#F4F3FF] transition ease-in-out text-[#6938EF] ml02 text-center p-2 rounded-[4px]' : '';
      }

      const links = [
        { label: 'Add Wallets', path: '/addwallets' },
        { label: 'Transfer Funds', path: '/transferfunds' },
        { label: 'Swap Rate', path: '/swaprate' },
        { label: 'Volume Wallets', path: '/volumewallets' },
        { label: 'Swap Range', path: '/swaprange' },
      ];

  return (
    <div>
        <div className="flex flex-col space-y-4 ml-4">
            {links.map((link) => (
                <Link
                key={link.path}
                to={link.path}
                className={`text-[16px] hover:text-[#6938EF] hover:scale-110 transition ease-in-out font-bold ${useActive(link.path)}`}
                >
                {link.label}
                </Link>
            ))}
        </div>
  </div>
  )
}

export default SettingsLeftbar