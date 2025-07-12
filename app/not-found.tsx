import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { serviceItems } from '@/constants/sidebar';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-muted">
      <h1 className="text-6xl font-extrabold mb-4 text-red-600">404</h1>
      <p className="text-xl font-medium mb-2">Oops! The page youre looking for doesn’t exist.</p>
      <p className="text-muted-foreground mb-6">Maybe try one of these helpful services?</p>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl w-full mb-8">
        {serviceItems.slice(0, 6).map(({ name, route, icon: Icon }) => (
          <Link key={name} href={route}>
            <Card className="hover:shadow-lg transition-all hover:scale-[1.02]">
              <CardContent className="flex items-center gap-4 p-4">
                <Icon className="w-6 h-6 text-primary" />
                <span className="font-medium">{name}</span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <Button asChild>
        <Link href="/">Go to Homepage</Link>
      </Button>
    </div>
  );
}
