# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Niels Aling

  #### Je startniveau:
  Blauw of rood 

  #### Je focus:
  Ik wil de focus leggen op responsive design
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  http://www.apple.com

  #### Screenshot(s) van de eerste pagina (small screen): 
  Airpods  
  <img src="readme-images/airpods.png" width="375px" alt="Apple pagina AirPods">
  <img src="readme-images/airpods2.png" width="375px" alt="Apple pagina AirPods">

  #### Screenshot(s) van de tweede pagina (small screen):
  Accessories  
  <img src="readme-images/accessories.png" width="375px" alt="Apple pagina Accessories">
  <img src="readme-images/accessories2.png" width="375px" alt="Apple pagina Accessories">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 1e werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:

  #### Screenreader
  <!-- Hier korte omschrijving (met indien nodig afbeeldingen) -->
  Van een screenreader op apple wordt het daadwerkelijk helemaal gek. Het is super onduidelijk wat je moet doen. De muis geeft niet aan waar je op staat en hij leest continu mijn menubalk voor, niet de website.

  <!-- Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen) -->
  Ik weet niet hoe dit werkt, maar dit moet beter gemaakt worden.

  #### Muis en Toetsenbord 
  <!-- Hier korte omschrijving (met indien nodig afbeeldingen) -->
  De website is niet goed "tab-baar". Hij schokt door de website heen en je moet op meerdere knoppen (ctrl, option shift) klikken om iets te kunnen selecteren. 

 <img src="readme-images/zondermuis.png" width="375px" alt="slechte website">


  <!-- Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen) -->


  #### Motoriek (shocks, elastiekjes)
  <!-- Hier korte omschrijving (met indien nodig afbeeldingen) -->
  besturen met shocks is nog redelijk te doen. De knoppen zijn groot genoeg om ze aan te kunnen klikken. Typen daarin tegen is lastiger.
  
  <video controls width="250">
    <source src="readme-images/motoriektest2.mp4"
            type="video/mp4">
</video>

  <!-- Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen) -->


  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
  <!-- Hier korte omschrijving (met indien nodig afbeeldingen) -->
  1.  Met de Blur/Glate bril kun je bijna niks lezen op de website. Je ziet wel wat vlakken en alleen de grote titels met contrast. 

  2. de website heeft geen dark/light mode
  3. kleurenblindheid:
  - Protanopia is goed zichtbaar
  - Deuteranopia is praktisch het zelfde als Protanopia
  - Tritanopia ziet er eigenlijk veel gezelliger uit, contrast is nog steeds duidelijk.
  <img src="readme-images/kleurenblind1.png" width="375px" alt="Forced Colors">

  - Ook met achromatopsia (grijs) is er nog steeds een duidelijk contrast, alleen sommiige foto's en video's zijn iets minder duidelijk zichbaar. 
  <img src="readme-images/grijsbeeld.png" width="375px" alt="Forced Colors">


  <!-- Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen) -->
  1. Wanneer je "forced colors" aan zet zie je wel iets meer, dus het zou opgelost kunnen worden met fellere kleuren, grotere letters en meer contrast.
  <img src="readme-images/forcedcolors.png" width="375px" alt="Forced Colors">

  2. Er kan een dark/light mode gemaakt worden.
  3. De video's en foto's zouden een groter contrast functie of uberhaupt meer contrast moeten krijgen.
  
</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 2e werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/breakdown1.png" width="375px" alt="breakdown van bovenkant pagina">

  <img src="readme-images/breakdown2.png" width="375px" alt="breakdown van midden pagina">

  <img src="readme-images/breakdown3.png" width="375px" alt="breakdown van de footer">

  ### dynamisch deel (bijv menu): 
  <img src="readme-images/breakdown4.png" width="375px" alt="breakdown van menu">

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van nog een dynamisch deel">

</details>


## Mini Symposium (week 2)
<details>
  <summary>Aantekeningen Mini Symposium</summary>
  
  Websites voor accesability check
  - https://webaim.org
  - https://www.htmhell.dev

  ### Testen met "Tab" en "Enter"
  - Kun je overal komen met tab
  - Let op focus styling (kan je zien waar je bent)
  - Kun je snel door content heen "tabben"

  Elementen die kunnen helpen bij Tab/Enter:
  - Gebruik "skip link" tussen content in
  - geef de focus styling een duidelijke kleur

  ### Testen met een screen reader.
  - Is alles wat gezegd wordt logisch 
  - Hebben alle elementen een placeholder 
  - Is alles semantisch correct in de HTML
  - Check links met dubbele namen 
  - De volgorde in de html moet kloppen 

  Elementen die kunnen helpen bij screenreaders:
  - Button role geeft waarde aan een knop 
  - Geef Iframes een title 
  - Span in een link zetten zodat de screen reader dat leest 
  - Zet headings boven plaatjes en pas aan met css.
  - remove bullitpoints waar nodig.


  ###  Samenvatting Manuel:
  Om je website gemakkelijk al veel toegankelijker te maken kun je meteen in de HTML al 
  een aantal aapassingen doen. Let op dat je semantisch correcte HTML schrijft. 
  Test vroeg op tab/enter en met een screenreader. 

  ###  Samenvatting Eric:
  Toegankelijkheid zit hem in de kleinste dingen. Soms heb je niet eens door dat je iets
  ontwerpt dat voor veel mensen niet toegankelijk is. Bijvoorbeeld de collegezaal waar we
  in zaten. Het helpt om goed met mensen met een beperking te praten om te kijken naar de behoeften
  van de persoon in plaats van uitgaan van aannamens en daar je ontwerp op baseren. 
  Onderzoek is key. 



</details>



## Voortgang 1 (week 2)

<details>
  <summary>uitwerking van 1e voortgang</summary>

  ### Stand van zaken
  Over het algemeen ging het maken van de html best wel vloeiend. 
  Dit kwam grotendeels door van te voren een breakdown schets te maken. Daarnaast heb ik de website van Apple geinspecteerd in Google om te kijken hoe zij dat deden en of ik dat logisch vond. 
  Ik probeerde hierbij divjes en spans te vermijden en zelf een logische structuur op te zetten.

  <img src="readme-images/screen_header.png" width="375px" alt="screenshot van header html">
  <img src="readme-images/screen_main_nav.png" width="375px" alt="screenshot van main nav html">
  <img src="readme-images/screen_video.png" width="375px" alt="screenshot van video html">
  <img src="readme-images/screen_section.png" width="375px" alt="screenshot van section html">
  <img src="readme-images/screen_footer.png" width="375px" alt="screenshot van footer html">


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Opzoeken hoe een tabel werkt
  - Op bepaalde plekken kunnen elementen nog in een article 
  - Footer heeft 2 sections ipv een footer in de main
  - Kijken naar andere opties dan ul
  - summary element W3Schools voor uitklapbare elementen 

</details>


## Voortgang 2 (week 3)

<details>
  <summary>uitwerking van 2e voortgang</summary>

  ### Stand van zaken 
  Ik heb het grootste deel van de feedback van vorige week verwerkt, maar ben nog niet toegekomen aan het opzoeken van hoe een een tabel werkt en andere vormen van een ul. Ik heb verder gewerkt aan een nieuwe section (compare) waar ik veel aan het experimenteren was met grid in CSS.

  ### Screenshots van css .compare 
  <img src="readme-images/screen_compare_css1.png" width="375px" alt="screenshot 1 van css class compare">
  <img src="readme-images/screen_compare_css2.png" width="375px" alt="screenshot 2 van css class compare">
  <img src="readme-images/screen_compare_css3.png" width="375px" alt="screenshot 3 van css class compare">


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Samen hebben we gekeken naar mijn grid waar iets fout ging met de margin
  - Ook hebben we samen gekeken naar hoe mijn uitklapbare menu in elkaar steekt 
  - Voor de footer details en summary gebruiken 
  - Goed op weg verder

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 8e werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

  #### Screenreader
  De screenreader werkte op zich best wel goed. Het was nogal uitvogelen hoe je hem bestuurt, maar met een beetje oefening las hij best wel duidelijk voor wat er op de pagina stond. Ik moet nog beter onderzoeken hoe je hem eventueel automatisch op engels kan zetten (omdat mijn website in het Engels is en in het Nederlands wordt voorgelezen). Daarnaast leest hij vaak iets te veel details voor zoals het ">" tekentje als "groter dan":

  <img src="readme-images/SR_1.png" width="375px" alt="screenshot van Screenreader 1">
  <img src="readme-images/SR_2.png" width="375px" alt="screenshot van Screenreader 1">

  #### Muis en Toetsenbord 
  Tab gaat soepel door de website heen langs alle linkjes. Het enige probleem is dat hi niet het menu overslaat als je daar niet in gaat.

  <img src="readme-images/screen_tab.png" width="375px" alt="screenshot van tab test">


  #### Motoriek (shocks, elastiekjes)
  Met je vingers aan elkaar gebonden kom je redelijk goed door de website heen een aantal dingen zijn makkelijker toagenkelijk doordat ze scrollbaar zijn i.p.v op een knop drukken. Je kunt ook scrollen met je pijltjes, die zijn alleen een beetje klein. Gelukkig kun je ook de spatiebalk gebruiken om grote delen te scrollen.  


  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
  Qua visuele beperkingen is er nog niks veranderd, omdat ik de pagina nogal letterlijk heb nagemaakt.
  Ik ga nog wel een dark/light mode toevoegen als ik tijd over heb qua kleurenblindheid is alles wel duidelijk leesbaar.

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerking van 3e voortgang</summary>

  ### Stand van zaken
  Het uitwerken van mijn eerste pagina ging goed. Voor mobiel zag hij er erg netjes uit, maar voor responsive moet er nog het een en ander gebeuren. Ook ben ik begonnen aan mijn tweede pagina, waar ik nogal in de knoop begin te raken. Ik heb toch voor de homepage gekozen, waardoor mijn CSS nu een beetje rommelig is. Wanneer ik 1 ding aanpas doet hij het ergens anders ook dus ik moet heel goed gaan kijken naar hoe ik bepaalde selectoren ga gebruiken. 

  ### Screenshots van Airpods Pagina

  <img src="readme-images/Airpods_1.png" width="375px" alt="screenshot van Airpods page 1">
  <img src="readme-images/Airpods_2.png" width="375px" alt="screenshot van Airpods page 2">
  <img src="readme-images/Airpods_3.png" width="375px" alt="screenshot van Airpods page 3">



  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Voor de homepage de background images met @media aanpassen als het scherm groter word. (Spelen met background-size)
  - Voor het menu 2 verschillende versies maken voor kleinen groot scherm. (display: none);
  - Tab menu overslaan als hij dicht is: aria labels opzoeken
  - de container van de video centreren (.vidContainer : max-width + margin-auto)
  - Stream now button margin met pixels oplossen 
  Tekst naar boven duwen 

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerking van eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  Voor de opdracht heb ik de Apple website gekozen en dan specifiek voor de homepage en de Airpods page. Eerst ging ik voor de Airpods page en de Asseccoires page, maar dit heb ik in een later stadium toch omgegooid omdat ik de pagina's te veel op elkaar ond lijken. 

  ## Home page 
  <img src="readme-images/home_top.png" width="375px" alt="Screen home top">
  <img src="readme-images/home_footer.png" width="375px" alt="Screen home footer">
  <img src="readme-images/apple_menu.png" width="375px" alt="Mobile menu">

  ## Home page responsive 
  <img src="readme-images/home_responsive.png" width="375px" alt="Screen home top responsive">
  <img src="readme-images/home_footer_responsive.png" width="375px" alt="Screen home footer responsive">

  ## Airpods page

  <img src="readme-images/airpods_top.png" width="375px" alt="Screen Airpods top">
  <img src="readme-images/airpods_main.png" width="375px" alt="Screen Airpods main">
  <img src="readme-images/airpods_grid.png" width="375px" alt="Screen Airpods grid">
  <img src="readme-images/airpods_footer.png" width="375px" alt="Screen Airpods footer">

  ## Airpods page responsive
  <img src="readme-images/airpods_top_responsive.png" width="375px" alt="Screen Airpods top responsive">
  <img src="readme-images/airpods_main_responsive.png" width="375px" alt="Screen Airpods main responsive">
  <img src="readme-images/airpods_footer_responsive.png" width="375px" alt="Screen Airpods footer responsive">


  ### Dit ging goed/Heb ik geleerd: 
  Ik heb geleerd met display grid en positioneren te werken, animaties en uitklapbare menu's te maken en met details/summary te werken. Ik ben veel bezig geweest met background-images en begrijp nu veel beter wanneer wat kunt toepassen, zoals background-size en background-position. 

  <img src="readme-images/airpods_grid.png" width="375px" alt="screen van Airpods grid">
  <img src="readme-images/details.png" width="375px" alt="screen van details">
  

  ### Dit was lastig/Is niet gelukt:
  Ik vond het heel erg lastig om met meerdere pagina's een duidelijke structuur te houden in mijn CSS. Het is dan ook niet helemaal gelukt om alles heel netjes gestructureerd te krijgen. Daarnaast was het soms lastig om grids te maken van elementen waar ook een titel boven staat, hier ben ik uiteindelijk wel uitgekomen.

  Het is me door de tijd niet gelukt om het laatste deel van de footer mooi responsive te maken. Ook de transition van de navigatie achtergrond van grijs naar zwart heb ik niet meer uit kunnen proberen. De video van de Airpods Pro kon ik niet aan komen dus hier heb ik een frame geplaatst i.p.v. een video.
  Ik vind de animatie van het menu nog niet heel erg mooi hoe het scaled en de styling van de footer navigatie (met details en summary) omzetten naar dat hij altijd open blijft staan heb ik nog niet uitgebreid naar kunnen kijken.

  Ook een stuk Javascript waarbij je als het ware kunt scrollen met een knop tussen elementen heb ik niet toegevoegd en je kunt niet "rond" scrollen maar alleen maar van links naar rechts.

  Als laatste heb ik niet meer de mogelijkheid gehad om een dark/light mode toe te voegen en er voor te zorgen dat met het tabben hij de linkjes in een verborgen menu overslaat.

  <img src="readme-images/home_footer_responsive.png" width="375px" alt="screen home footer">
  <img src="readme-images/airpods_main.png" width="375px" alt="screen Airpods main">
  <img src="readme-images/airpods_top_responsive.png" width="375px" alt="screen airpods video">
  <img src="readme-images/home_footer_responsive.png" width="375px" alt="screen home footer">




</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

  1. Hoe krijg je Apple's lettertype: 
  https://www.geeksforgeeks.org/how-to-add-apples-new-san-francisco-font-on-a-webpage-using-css/
  
  2. Hoe werkt background image ook al weer:
  https://www.w3schools.com/cssref/pr_background-image.asp

  3. Image extractor:
  https://extract.pics/

  4. details & summary met Robert:
  https://codepen.io/robertspier/pen/NWMapEM

  5. uitklapbaar menu met Robert:
  https://codepen.io/robertspier/pen/PoeJpVO

  6. How to full screen mobile menu:
  https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_overlay

  7. search bar maken:
  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input

  8. Background Image centreren:
  https://www.w3schools.com/cssref/pr_background-position.asp

  9. Plaatje veranderen van menu Icon:
  https://techfunda.com/howto/444/changing-of-images


</details>