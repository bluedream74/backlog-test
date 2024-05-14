import Button from '@mui/material/Button';
import { Container } from '@mui/material';

export default function Navbar() {
  return (
    <div className="w-full shadow border-b bg-white">
      <div className='py-4 border-b-[1px]'>
        <Container fixed maxWidth={'xl'}>
          <Button
            id="basic-button"
            aria-controls={'basic-menu'}
            aria-haspopup="true"
            aria-expanded={'true'}
          >
            Projects
          </Button>
          <Button
            id="basic-button"
            aria-controls={'basic-menu'}
            aria-haspopup="true"
            aria-expanded={'true'}
          >
            Users
          </Button>
        </Container>
      </div>

    </div>
  );
}
