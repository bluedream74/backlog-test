import Button from '@mui/material/Button';
import { Container, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const goPage = (url: string) => {
    handleClose();
    setTimeout(() => {
      navigate(url);
    }, 50);
  }

  return (
    <div className="w-full shadow border-b bg-white">
      <div className='py-4 border-b-[1px]'>
        <Container fixed maxWidth={'xl'}>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            Projects
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={() => { goPage('/projects') }}>View All</MenuItem>
            {/* <MenuItem onClick={() => { goPage('/projects/new') }}>New Project</MenuItem> */}
          </Menu>
        </Container>
      </div>

    </div>
  );
}
