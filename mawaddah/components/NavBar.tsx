import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
  const navigate = useNavigate();

  const navigateClickTo = (page: string) => {
    navigate(page);
  };
  const navigateClickToUrl = (url: string) => {
    window.open(url, '_blank');
  };
  return (
    <div className="w-auto px-10">
      {' '}
      <Menubar className="flex justify-between m-10 bg-white">
        <div>
          <MenubarMenu>
            <MenubarTrigger>mawaddah</MenubarTrigger>
            <MenubarContent>
              <MenubarItem onClick={() => navigateClickTo('/about-us')}>
                What is Mawadddah?
              </MenubarItem>
              <MenubarItem
                onClick={() =>
                  navigateClickToUrl(
                    'https://www.rahmaa.org/resources/100-questions-by-imam-magid/',
                  )
                }
              >
                100 Crucial Questions
              </MenubarItem>
              <MenubarItem>Inspiration</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </div>

        <div className="flex">
          <MenubarMenu>
            <MenubarTrigger>Pricing</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Free Tier</MenubarItem>
              <MenubarItem>Premium</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger onClick={() => navigateClickTo('/about-us')}>
              About Us
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Login</MenubarTrigger>
          </MenubarMenu>
        </div>
      </Menubar>
    </div>
  );
};

export default NavBar;
