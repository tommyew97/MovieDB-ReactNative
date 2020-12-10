# Prosjekt 4
Denne appen er en filmdatabase som er basert på prosjekt 3. Man kan søke etter filmer og 
se alle filmene som ligger i databasen. Videre kan man filtrere disse filmene etter sjanger,
 og man kan også sortere dem i stigende eller synkende rekkefølge etter tittel. Ved å gå inn på en film kan man se en beskrivelse av den.
 
## Stack
Det er brukt React Native med TypeScript som er initialisert med expo som frontend i appen. I backend er det brukt Django og Axios brukes som REST api.
Databasen ligger på VM, men kan også kjøres lokalt.

### Frontend
Redux er brukt for state management.
Andre viktige tredjepartsbiblioteker er:
- React Navigation for navigering mellom skjermer
- ScrollView for scrolling
- Axios for å gjøre REST-requests

### Backend
Backend er laget i Django.
For å håndtere REST-requests har vi hovedsakelig vært avhengige av django_rest_framework.
Andre viktige biblioteker er:
- django_cors_headers for å fikse Cross-Origin Requests 
- django_extensions for å kjøre script som legger til filmer i databasen
- django_filters for å bruke filters i REST-queries

## Funksjonalitet
### Søk, filtrering og sortering
Ved søk, filtrering og sortering kunne det meste av logikk gjenbrukes fra prosjekt 3. Det er brukt Redux til state og Axios for å fetche data som passer med søkene som er gjort.
Søkebaren finner man på start-siden, og den gir forslag automatisk når man begynner å skrive uten at man trenger å trykke på søkeknappen. Filtrering og sortering har fått sin egen side,
da det ikke er så god plass på en mobil-skjerm. På filtreringssiden kan man filtrere på sjangere, hvis man velger flere vil man få opp alle filmene som har mist en av de valgte sjangerene.
For sortering kan man velge stigende eller synkende rekkefølge på titler ved å trykke på en av pilene.

### Navigering
For å navigere rundt i appen er det brukt React Navigation. For å sette opp rutene er det laget en egen fil for at App-filen ikke skulle bli for uoversiktlig. Dette gjorde det også lettere å få riktig typer på params.
Headeren til React Navigation er tatt vekk da det brøt med designet til appen.

### Pagination
Det er valgt å bruke samme løsning for paginering som vi brukte i prosjekt 3. Hovedforskjellen er at muligheten for å gå til en spesifikk side er fjernet, da det tar mye plass på en smal skjerm.
Istedet er det brukt knapper for forrige og neste side.

## Design
Appen tar i bruk vanlige react-native komponenter, i tillegg til enkelte andre biblioteker som react-native-elements. Disse er stylet med stylesheets som ligger i samme fil. Flex-egenskapene
 er brukt flittig både i horisontal og vertikal retning.

## Hvordan kjøre prosjektet (VM)
- Klon prosjektet
### Frontend
- Naviger til frontend-mappen.
- Kjør npm install
- Kjør npm start

## Hvordan kjøre prosjektet (Lokalt)
- Klon prosjektet
### Frontend
- Naviger til frontend-mappen.
- Endre export const config til dev i api/axiosREST.js
- Kjør npm install
- Kjør npm start

### Backend
- Naviger til backend-mappen
- Installer nødvendige biblioteker ved å bruke pip install -r requirements.txt
- Kjør python manage.py runserver 0.0.0.0:8000 for å starte server
- Påse at ip-adressen til maskinen din ligger under "ALLOWED_HOSTS" i backend/settings.py, hvis ikke må den legges til

## Testing
Appen er end-to-end testet manuelt for både iOS og Android. Ved testing av Android er det brukt en emulator av Google Pixel 4 gjennom Android Studio.
Ved testing av iOS er det brukt en fysisk iPhone 11 enhet. Testingen har bekreftet at de forskjellige funksjonene fungerer og designet oppfører seg som tiltenkt på de forskjellige operativsystemene. 
