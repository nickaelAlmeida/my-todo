import { ReactNode } from 'react';
import { SafeAreaView, Container, Header } from './styles';

export function Page ({ children }: { children: ReactNode }) {
  return (
    <SafeAreaView>
      <Header />
      <Container>
        {children}
      </Container>
    </SafeAreaView>
  );
}
