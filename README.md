# Book Finder

**Student:in:** John Melver Serna  
**Case:** LEG-06 / Book Finder  
**Live-URL:** [https://...]  
**Public Repository:** https://github.com/jms-21/book-finder.git

## 1. Kurzbeschreibung

Book Finder ist eine einfache Webanwendung, mit der Benutzer nach Büchern anhand eines Titels oder eines Suchbegriffs suchen können. Die Anwendung verwendet die Open Library Search API, um Buchinformationen abzurufen und übersichtlich darzustellen.

## 2. Funktionsumfang

- Seite 1: Home – Suchfunktion und dynamische Anzeige der Buchergebnisse
- Seite 2: About – Informationen über das Projekt und die verwendete API
- zentrale Nutzeraktion: Eingabe eines Suchbegriffs und Start der Suche über den Search-Button oder die Enter-Taste
- API-/JSON-Funktion: Abruf und Verarbeitung von Buchdaten über die Open Library Search API mit JavaScript fetch()
- Add-on / dynamische Benutzereingabe: Benutzer können eigene Buchtitel oder Keywords eingeben.

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

- `...`
- `...`
- `...`

## 5. Bedienung

1. Die Home-Seite öffnen
2. Einen Buchtitel oder Suchbegriff in das Suchfeld eingeben
3. Auf „Search“ klicken oder die Enter-Taste drücken
4. 

## 6. Projektstruktur

projekt/
├── index.html
├── about.html
├── styles.css
├── script.js
├── testprotokoll.csv
└── README.md

## 7. Testing

Das vollständige Testprotokoll liegt unter `[Dateiname/Pfad]`.

Kurzstatus:
- PASS: ...
- FAIL: ...
- BLOCKED: ...

### Wichtigste getestete Risiken

- ...
- ...
- ...

## 8. Known Issues

- [Bewusst belassener oder noch offener Fehler]
- [Einschränkung der API / Rate-Limit / fehlende Daten]

## 9. Git / Entwicklungsverlauf

Mindestens fünf sinnvolle Commits zeigen den Entwicklungsprozess. Kurz zusammenfassen:

1. Projektstruktur erstellen
2. Grundlayout und Design hinzufügen
3. Open Library API und Suchfunktion integrieren
4. ...
5. ...

## 10. AI Coding

KI wurde unterstützend bei der Entwicklung und Fehlersuche eingesetzt. Dazu gehörten die Erklärung und Anpassung von HTML-, CSS- und JavaScript-Code sowie die schrittweise Integration der Open Library Search API.

Der erstellte Code wurde im Browser getestet und bei Bedarf angepasst. Die Funktionsweise der verwendeten Komponenten wurde während der Entwicklung nachvollzogen.

## 11. Deployment

Wie wurde die finale Version auf die Legacy-Subdomain hochgeladen? Wurde der Kernprozess danach auf der Live-URL erneut getestet?
