# Poprawiona wersja AR-APP

Ta wersja zostawia uruchamianie kamery tak jak w działającej wersji testowej.
Dodaje:
- wykrywanie dwóch zdjęć referencyjnych,
- przyciski: 360°, Przekrój, Eksploduj, Reset,
- komunikaty diagnostyczne.

## Bardzo ważne

Na GitHub muszą znaleźć się:
- `index.html`
- cały folder `assets`

Struktura repozytorium musi być dokładnie taka:

```
AR-APP/
├── index.html
└── assets/
    └── reference/
        ├── camera_reference.png
        └── screwdriver_reference.png
```

Nie może być tak:

```
AR-APP/
└── webar_ar_app_fixed_detection/
    ├── index.html
    └── assets/
```

## Jak podmienić

1. Rozpakuj ZIP.
2. W repozytorium GitHub `AR-APP` usuń stary `index.html`.
3. Wgraj nowy `index.html`.
4. Wgraj folder `assets`.
5. Kliknij `Commit changes`.
6. Poczekaj 1–2 minuty.
7. Otwórz: `https://aangelikaa1998.github.io/AR-APP/`

## Test

Po kliknięciu `Uruchom kamerę` kamera musi się otworzyć.
Następnie ustaw wydrukowane zdjęcie kamery albo śrubokręta tak, aby wypełniało przerywaną ramkę.
