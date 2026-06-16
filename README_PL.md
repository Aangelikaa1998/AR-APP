# AR Product Viewer — wersja pod GitHub Pages

To jest prosta aplikacja WebAR otwierana w Chrome/Safari przez adres WWW.
Nie wymaga Unity, Xcode, Android Studio, Netlify ani Vercel.

## Ważne

Aplikacja musi być otwierana przez HTTPS, np.:

https://twoj-login.github.io/ar-app/

Nie działa poprawnie przez lokalne otwarcie pliku:

file:///index.html

## Co jest w paczce

- `index.html` — główny plik aplikacji
- `app.js` — logika startu kamery i AR
- `style.css` — wygląd
- `assets/models/` — model 3D kamery
- `assets/references/` — dwa zdjęcia referencyjne: kamera i śrubokręt
- `assets/targets/` — tutaj należy wstawić `targets.mind`

## Jeden brakujący plik: targets.mind

Do automatycznego rozpoznawania zdjęć MindAR potrzebuje pliku:

assets/targets/targets.mind

Trzeba go wygenerować z dwóch obrazów:

1. `assets/references/camera_reference.png`
2. `assets/references/screwdriver_reference.png`

Kolejność obrazów musi być dokładnie taka:

1. kamera
2. śrubokręt

Dlaczego to ważne:

- targetIndex 0 = kamera
- targetIndex 1 = śrubokręt

## Jak opublikować na GitHub Pages

1. Załóż konto GitHub.
2. Utwórz nowe repozytorium, np. `ar-app`.
3. Rozpakuj ZIP.
4. Wgraj zawartość folderu do repozytorium.
5. Wejdź w `Settings` → `Pages`.
6. Ustaw:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
7. Zapisz.
8. Po chwili GitHub pokaże adres aplikacji.

Przykład:

https://twoj-login.github.io/ar-app/

## Jak testować na telefonie

1. Otwórz adres aplikacji w Chrome albo Safari.
2. Kliknij `Uruchom kamerę`.
3. Zezwól na dostęp do kamery.
4. Skieruj telefon na wydrukowane zdjęcie kamery albo śrubokręta.

## Uwaga o śrubokręcie

Zdjęcie śrubokręta ma mniej charakterystycznych punktów niż zdjęcie kamery, więc tracking może być mniej stabilny. Dla najlepszych wyników zdjęcie powinno mieć więcej szczegółów, kontrast i tło z charakterystycznymi elementami.
