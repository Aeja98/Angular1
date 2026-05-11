# Konverterings-App

En webbplats skapad med Angular där användaren kan konvertera värden mellan olika enheter.

https://angularconverter.netlify.app/

## Funktioner

- Startsida med information om uppgiften
- Bild på startsidan
- Navigationsmeny med Angular Router
- Undersida för enhetsomvandling
- Konvertering mellan meter och fot
- Konvertering mellan celsius och fahrenheit
- Extra konvertering mellan centimeter och inches
- Toggle-knappar för att välja konverteringsriktning
- Resultat visas med en återanvändbar resultatbox-komponent
- Undersida som beskriver arbetsprocess och slutsatser
- Responsiv layout för olika skärmstorlekar

## Tekniker

Projektet är byggt med:

- Angular
- TypeScript
- HTML
- SCSS
- Angular Router
- Angular Forms / `ngModel`
- Komponentbaserad struktur

## Sidor

Webbplatsen består av tre huvudsidor:

- **Hem** – startsida med kort information om uppgiften och en bild
- **Omvandlare** – sida där användaren kan konvertera värden mellan olika enheter
- **Om projektet** – sida som beskriver hur arbetet har genomförts och vilka slutsatser som dragits

## Komponenter

Projektet använder flera Angular-komponenter, bland annat:

- `HomeComponent`
- `ConverterComponent`
- `AboutComponent`
- `FooterComponent`
- `ResultBoxComponent`

`ResultBoxComponent` används på omvandlarsidan för att visa resultatet av konverteringarna.

## Filstruktur
```
Angular1/
├── public/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── converter/
│   │   │   └── result-box/
│   │   ├── home/
│   │   ├── shared/
│   │   │   └── footer/
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.ts
│   │   └── app.routes.ts
│   ├── assets/
│   │   ├── fonts/
│   │   └── images/
│   ├── styles/
│   │   ├── _fonts.scss
│   │   └── _theme.scss
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── angular.json
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```
