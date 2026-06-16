[README_PL.md](https://github.com/user-attachments/files/28992579/README_PL.md)
# WebAR Product Viewer — wersja z rozpoznawaniem dwóch zdjęć

Ta wersja uruchamia kamerę i próbuje rozpoznać dwa konkretne obrazy referencyjne:

- `assets/reference/camera_reference.png`
- `assets/reference/screwdriver_reference.png`

Po wykryciu pokazuje panel z funkcjami:

- 360°
- Przekrój
- Eksploduj
- Reset

## Jak wrzucić na GitHub Pages

1. Rozpakuj ZIP.
2. W repozytorium GitHub `AR-APP` podmień plik `index.html`.
3. Wgraj folder `assets` do głównego katalogu repozytorium.
4. Kliknij `Commit changes`.
5. Poczekaj 1–2 minuty.
6. Otwórz:
   `https://aangelikaa1998.github.io/AR-APP/`

## Ważne

To jest proste rozpoznawanie dwóch konkretnych zdjęć przez porównanie obrazu z kamery z obrazami referencyjnymi. Działa najlepiej, gdy wydruk/zdjęcie:

- jest dobrze oświetlone,
- jest prawie na wprost,
- zajmuje większość ramki na ekranie.

Prawdziwe stabilne śledzenie AR przy różnych kątach wymaga biblioteki MindAR i pliku `targets.mind`.

## Przekrój i widok eksplodowany

Obecny model kamery jest jedną bryłą/siatką. Dlatego przekrój i widok eksplodowany są demonstracyjne. Aby działały profesjonalnie, potrzebne są osobne modele:

- `camera_section.gltf` — model z przekrojem,
- `camera_exploded.gltf` — model rozłożony na części,
- albo model z animacją.
