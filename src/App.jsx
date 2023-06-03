import Container from 'components/Container/Container';
import Navigation from 'components/Navigation/Navigation';
import UserRoutes from 'UserRoutes';

function App() {
  return (
    <Container>
      <Navigation />
      <UserRoutes />
    </Container>
  );
}

export default App;
