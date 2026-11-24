# Book Finder

**Student:in:** John Melver Serna  
**Case:** LEG-06 / Book Finder  
**Live-URL:** Nicht verfügbar – Deployment aufgrund eines fehlgeschlagenen Uploads über WinSCP nicht abgeschlossen. 
**Public Repository:** https://github.com/jms-21/book-finder.git

## 1. Kurzbeschreibung

Book Finder ist eine einfache Webanwendung, mit der Benutzer nach Büchern anhand eines Titels oder eines Suchbegriffs suchen können. Die Anwendung verwendet die Open Library Search API, um Buchinformationen abzurufen und übersichtlich darzustellen.

## 2. Funktionsumfang

- Seite 1: Home – Suchfunktion und dynamische Anzeige der Buchergebnisse
- Seite 2: About – Informationen über das Projekt und die verwendete API
- Zentrale Nutzeraktion: Eingabe eines Suchbegriffs und Start der Suche über den Search-Button oder die Enter-Taste
- API-/JSON-Funktion: Abruf und Verarbeitung von Buchdaten über die Open Library Search API mit JavaScript fetch()
- Dynamische Benutzereingabe: Benutzer können eigene Buchtitel oder Keywords eingeben.
- Ergebnislimit: Benutzer können auswählen, ob 4, 8, 12 oder 20 Bücher angezeigt werden sollen.
- Dynamische Darstellung: Suchergebnisse werden als Buchkarten mit verfügbaren Informationen und Buchcovern dargestellt.

## 3. Verwendete Technologien

- HTML
- CSS
- JavaScript (Vanilla JS)
- Browser Fetch API
- Open Library Search API

## 4. API

**API:** Open Library Search API 
**Dokumentation:** https://openlibrary.org/dev/docs/api/search
**Endpoint(s):** https://openlibrary.org/search.json?q=javascript&limit=8

### Verwendete JSON-Felder

- numFound – Gesamtanzahl der gefundenen Bücher.
- docs – Array mit den einzelnen Suchergebnissen.
- title – Titel des Buches
- author_name – Autor oder Autoren des Buches.
- first_publish_year – Jahr der Erstveröffentlichung.
- edition_count – Anzahl der verfügbaren Ausgaben.
- cover_i – Kennung des Buchcovers, sofern vorhanden.

## 5. Bedienung

1. Die Home-Seite öffnen.
2. Einen Buchtitel oder Suchbegriff in das Suchfeld eingeben.
3. Das gewünschte Ergebnislimit auswählen (4, 8, 12 oder 20 Bücher).
4. Auf „Search“ klicken oder die Enter-Taste drücken.
5. Die angezeigten Buchkarten und verfügbaren Informationen ansehen. 

## 6. Projektstruktur

projekt/
├── index.html
├── about.html
├── styles.css
├── script.js
├── statusmatrix.csv
├── testprotokoll.csv
├── screenshots
└── README.md

## 7. Testing

Das vollständige Testprotokoll liegt im `testprotokoll.csv`.

Kurzstatus:
- PASS: 8 Tests
- FAIL: 0 Tests
- BLOCKED: 0 Tests

### Wichtigste getestete Risiken

- Erfolgreicher API-Abruf und Verarbeitung der JSON-Daten.
- Leere und sehr lange Suchbegriffe.
- Fehlende beziehungsweise nicht verfügbare Daten.
- Fehlerbehandlung bei unterbrochener Internetverbindung.
- Wiederherstellung der Suchfunktion nach einem Netzwerkfehler.
- Navigation zwischen den beiden HTML-Seiten.
- Bedienbarkeit mit Tastatur
- Verhalten bei einem absichtlich falsch gesetzten Navigationslink.

## 8. Known Issues

- Die Vollständigkeit der Buchinformationen hängt von den verfügbaren Daten der Open Library API ab.
- Nicht bei jedem Suchergebnis sind Autoren, Erscheinungsjahr, Ausgaben oder Buchcover verfügbar.
- Für die Suche wird eine aktive Internetverbindung benötigt.
- Die Relevanz und Vollständigkeit der Suchergebnisse hängen von der Open Library API ab.

## 9. Git / Entwicklungsverlauf

Mindestens fünf sinnvolle Commits zeigen den Entwicklungsprozess. Kurz zusammenfassen:

1. Projektstruktur erstellen
2. Grundlayout und Design hinzufügen
3. Open Library API und Suchfunktion integrieren
4. Suchergebnisse dynamisch anzeigen.
5. Ergebnislimit und Suchanzeige erweitern.

## 10. AI Coding

KI wurde unterstützend bei der Entwicklung und Fehlersuche eingesetzt. Dazu gehörten die Erklärung und Anpassung von HTML-, CSS- und JavaScript-Code sowie die schrittweise Integration der Open Library Search API.

Der erstellte Code wurde im Browser getestet und bei Bedarf angepasst. Die Funktionsweise der verwendeten Komponenten wurde während der Entwicklung nachvollzogen.

## 11. Deployment

Das Hochladen der finalen Version auf die Legacy-Subdomain hat leider nicht funktioniert. Der Upload über WinSCP konnte nicht erfolgreich abgeschlossen werden. Die dabei aufgetretene Fehlermeldung wurde als Screenshot im Ordner screenshots/ dokumentiert.

Ein abschließender Test der Live-Version war daher nicht möglich.