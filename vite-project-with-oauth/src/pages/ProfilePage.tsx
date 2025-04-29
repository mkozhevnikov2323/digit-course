import { Typography, Container } from '@mui/material';

export default function ProfilePage() {
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <div>
      <Container>
        <Typography variant="h4">Profile Page</Typography>
        <Typography>Имя: {user.name}</Typography>
      </Container>
    </div>
  );
}
