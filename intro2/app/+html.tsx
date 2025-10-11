import { ScrollViewStyleReset } from 'expo-router/html';

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <ScrollViewStyleReset />
        <style dangerouslySetInnerHTML={{ __html: responsiveBackground }} />
      </head>
      <body>
        <div>Hola mundo</div>
        {children}
      </body>
    </html>
  );
}

const responsiveBackground = `
body {
  background-color: #180a0aff;
}
@media (prefers-color-scheme: dark) {
  body {
    background-color: #000;
  }
}`;
