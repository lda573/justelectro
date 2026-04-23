import { Injectable } from '@angular/core';
import { ServiceDto } from '../../../shared/models/service.models';

const buildService = (
  slug: string,
  title: string,
  icon: string,
  shortDescription: string,
  overrides: Partial<ServiceDto> = {}
): ServiceDto => ({
  slug, title, icon, shortDescription,
  image: 'assets/images/service-img-1.jpg',
  fullDescription: '',
  fullDescriptionExtra: '',
  whyChooseDescription: '',
  whyChoosePoints: [],
  whyChooseVideoUrl: 'https://www.youtube.com/watch?v=Y-x0efG1seA',
  whyChooseVideoImage: 'assets/images/service-why-choose-img.jpg',
  benefits: [],
  strategyImage: 'assets/images/service-strategy-img.jpg',
  strategyTitle: '',
  strategyDescription: '',
  strategyDescriptionExtra: '',
  strategyPoints: [],
  faqs: [],
  ...overrides,
});

@Injectable({ providedIn: 'root' })
export class ServicesDataService {
  private services: ServiceDto[] = [

    buildService(
      'instalatii-electrice',
      'instalații electrice',
      'assets/images/icon-services-1.svg',
      'Proiectare, execuție și certificare instalații electrice pentru rezidențial, comercial și industrial.',
      {
        image: 'assets/images/project-1.jpg',
        fullDescription: 'Oferim servicii complete de instalații electrice, de la proiectare până la certificare finală. Echipa noastră de electricieni autorizați ANRE execută lucrări de înaltă calitate pentru locuințe, birouri, spații comerciale și obiective industriale, respectând toate normativele și standardele în vigoare.',
        fullDescriptionExtra: 'Fiecare proiect este tratat individual, cu soluții adaptate nevoilor specifice ale clientului. Punem accent pe siguranță, durabilitate și eficiență energetică în toate lucrările pe care le executăm.',
        whyChooseDescription: 'Cu ani de experiență în domeniu și o echipă de specialiști autorizați, suntem partenerul de încredere pentru orice tip de instalație electrică. Lucrăm cu materiale certificate și respectăm toate normativele în vigoare.',
        whyChoosePoints: [
          'Electricieni autorizați ANRE',
          'Materiale certificate conform EN',
          'Documentație tehnică completă',
          'Garanție extinsă pentru lucrări',
        ],
        benefits: [
          { icon: 'assets/images/icon-service-benefit-1.svg', title: 'proiectare profesională', description: 'Proiectăm instalațiile respectând toate normativele și cerințele specifice ale obiectivului.' },
          { icon: 'assets/images/icon-service-benefit-2.svg', title: 'tablouri electrice', description: 'Montăm și cablăm tablouri electrice principale și secundare pentru orice tip de clădire.' },
          { icon: 'assets/images/icon-service-benefit-3.svg', title: 'priză și iluminat', description: 'Instalăm sisteme complete de priză, iluminat general și de siguranță.' },
          { icon: 'assets/images/icon-service-benefit-4.svg', title: 'certificare ANRE', description: 'Emitem toate documentele necesare certificării instalației conform legislației.' },
          { icon: 'assets/images/icon-service-benefit-5.svg', title: 'siguranță garantată', description: 'Toate lucrările sunt executate respectând normele de protecție și siguranță electrică.' },
          { icon: 'assets/images/icon-service-benefit-6.svg', title: 'eficiență energetică', description: 'Proiectăm instalații optimizate pentru consum redus și costuri minime de operare.' },
          { icon: 'assets/images/icon-service-benefit-7.svg', title: 'intervenție rapidă', description: 'Echipă mobilă disponibilă pentru urgențe electrice în timp scurt.' },
          { icon: 'assets/images/icon-service-benefit-8.svg', title: 'suport post-execuție', description: 'Oferim asistență tehnică și service după finalizarea lucrărilor.' },
        ],
        strategyTitle: 'Cum abordăm o instalație electrică',
        strategyDescription: 'Procesul nostru începe cu o evaluare detaliată a obiectivului și a nevoilor clientului. Elaborăm proiectul tehnic, selectăm materialele optime și planificăm execuția pentru a minimiza orice disconfort.',
        strategyDescriptionExtra: 'La finalizare, efectuăm toate testele și verificările necesare, emitem documentația de certificare și instruim clientul privind utilizarea corectă a instalației.',
        strategyPoints: [
          'Evaluare și proiectare tehnică',
          'Montare tablouri și trasee electrice',
          'Instalare prize, întrerupătoare și iluminat',
          'Testare, verificare și certificare ANRE',
        ],
        faqs: [
          { question: 'Este necesară autorizarea lucrărilor electrice?', answer: 'Da, conform legislației, lucrările de instalații electrice trebuie executate de electricieni autorizați ANRE și certificate printr-un proces verificare. Noi ne ocupăm de tot procesul.' },
          { question: 'Cât durează o instalație electrică completă?', answer: 'Durata depinde de complexitatea obiectivului. O locuință standard (3-4 camere) necesită în medie 3-5 zile lucrătoare pentru execuție completă.' },
          { question: 'Oferiți garanție pentru instalațiile executate?', answer: 'Da, oferim garanție de minimum 2 ani pentru toate lucrările de instalații electrice, conform legislației în vigoare.' },
          { question: 'Puteți moderniza o instalație electrică veche?', answer: 'Da, efectuăm și lucrări de modernizare și reabilitare a instalațiilor electrice existente, inclusiv înlocuirea tablourilor electrice și a traseelor degradate.' },
          { question: 'Ce documente primiți la finalizarea lucrării?', answer: 'La finalizare primiți: procesul verbal de recepție, declarația de conformitate, schema electrică actualizată și certificatul de verificare ANRE.' },
        ],
      }
    ),

    buildService(
      'sisteme-fotovoltaice',
      'sisteme fotovoltaice',
      'assets/images/icon-services-2.svg',
      'Instalare panouri solare, sisteme on-grid și off-grid, monitorizare și mentenanță.',
      {
        image: 'assets/images/project-2.jpg',
        fullDescription: 'Proiectăm și instalăm sisteme fotovoltaice complete pentru locuințe, firme și ferme agricole. De la evaluarea inițială a amplasamentului și a consumului energetic, până la punerea în funcțiune și racordarea la rețeaua electrică, ne ocupăm de fiecare detaliu.',
        fullDescriptionExtra: 'Lucrăm cu echipamente de la producători de top, garantând performanță maximă și durabilitate pe termen lung. Fiecare sistem este proiectat personalizat pentru a maximiza producția de energie și a reduce facturile la minimum.',
        whyChooseDescription: 'Suntem specializați în sisteme fotovoltaice rezidențiale și comerciale, cu zeci de instalații finalizate. Echipa noastră asigură o instalare profesională și un suport complet pe toată durata de viață a sistemului.',
        whyChoosePoints: [
          'Evaluare gratuită a amplasamentului',
          'Sisteme on-grid și off-grid',
          'Monitorizare online inclusă',
          'Mentenanță și service periodic',
        ],
        benefits: [
          { icon: 'assets/images/icon-service-benefit-1.svg', title: 'reducere facturi', description: 'Sistemele fotovoltaice reduc semnificativ sau elimină complet facturile la energie electrică.' },
          { icon: 'assets/images/icon-service-benefit-2.svg', title: 'panouri premium', description: 'Folosim panouri fotovoltaice de la producători certificați cu eficiență ridicată.' },
          { icon: 'assets/images/icon-service-benefit-3.svg', title: 'sistem on-grid', description: 'Vânzarea surplusului de energie înapoi în rețea prin contracte de prosumator.' },
          { icon: 'assets/images/icon-service-benefit-4.svg', title: 'sistem off-grid', description: 'Independență totală față de rețeaua electrică cu stocare în baterii.' },
          { icon: 'assets/images/icon-service-benefit-5.svg', title: 'monitorizare online', description: 'Urmărești producția și consumul în timp real din aplicație mobilă.' },
          { icon: 'assets/images/icon-service-benefit-6.svg', title: 'investiție rentabilă', description: 'Recuperarea investiției în 5-7 ani, cu durată de viață a sistemului de 25+ ani.' },
          { icon: 'assets/images/icon-service-benefit-7.svg', title: 'impact zero emisii', description: 'Contribui activ la reducerea emisiilor de CO2 și protecția mediului.' },
          { icon: 'assets/images/icon-service-benefit-8.svg', title: 'mentenanță periodică', description: 'Servicii de curățare panouri, verificare sistem și înlocuire componente.' },
        ],
        strategyTitle: 'Procesul de instalare sistem fotovoltaic',
        strategyDescription: 'Începem cu o analiză a consumului energetic și o vizită la fața locului pentru evaluarea acoperișului și a orientării optime. Pe baza acestor date elaborăm proiectul tehnic și oferta financiară detaliată.',
        strategyDescriptionExtra: 'Instalarea propriu-zisă durează 1-3 zile în funcție de dimensiunea sistemului, urmată de racordarea la rețea și configurarea sistemului de monitorizare.',
        strategyPoints: [
          'Evaluare consum și amplasament',
          'Proiectare și dimensionare sistem',
          'Instalare panouri și invertor',
          'Racordare rețea și monitorizare',
        ],
        faqs: [
          { question: 'Câți kW are nevoie o casă obișnuită?', answer: 'O locuință standard cu un consum de 300-400 kWh/lună are nevoie de un sistem de 3-5 kWp. Calculăm exact în urma analizei consumului real.' },
          { question: 'Pot accesa finanțare nerambursabilă?', answer: 'Da, există programe de finanțare prin Casa Verde Fotovoltaice și alte fonduri europene. Vă ajutăm cu toată documentația necesară.' },
          { question: 'Funcționează sistemul pe timp de noros?', answer: 'Da, panourile fotovoltaice produc energie și pe timp noros, dar la un randament redus față de zilele însorite.' },
          { question: 'Ce se întâmplă cu energia produsă în exces?', answer: 'Într-un sistem on-grid, surplusul este injectat în rețea și compensat pe factură. Într-un sistem cu baterii, este stocat pentru utilizare nocturnă.' },
          { question: 'Cât durează instalarea?', answer: 'Un sistem rezidențial de 5-10 kWp se instalează în 1-2 zile. Racordarea la rețea prin distribuitorul local durează suplimentar 2-6 săptămâni.' },
        ],
      }
    ),

    buildService(
      'statii-incarcare-auto',
      'stații de încărcare auto',
      'assets/images/icon-services-3.svg',
      'Instalare profesională stații de încărcare pentru vehicule electrice, acasă sau la birou.',
      {
        image: 'assets/images/project-3.jpg',
        fullDescription: 'Instalăm stații de încărcare pentru vehicule electrice (EV) în locuințe, parcări rezidențiale, clădiri de birouri, centre comerciale și parcări publice. Oferim soluții pentru orice putere de încărcare, de la stații de nivel 2 (AC) până la stații rapide DC.',
        fullDescriptionExtra: 'Înainte de instalare, verificăm capacitatea instalației electrice existente și, dacă este necesar, o dimensionăm corespunzător. Asigurăm compatibilitatea cu toate tipurile de vehicule electrice de pe piață.',
        whyChooseDescription: 'Pe măsură ce mobilitatea electrică se extinde rapid, o stație de încărcare acasă sau la birou devine esențială. Noi oferim soluții complete, de la selecția echipamentului potrivit până la instalarea și punerea în funcțiune.',
        whyChoosePoints: [
          'Toate tipurile de stații și conectori',
          'Verificare și upgrade instalație electrică',
          'Compatibilitate toate mărcile EV',
          'Integrare cu sisteme smart home',
        ],
        benefits: [
          { icon: 'assets/images/icon-service-benefit-1.svg', title: 'încărcare acasă', description: 'Stații de 7.4 kW sau 11 kW pentru încărcare nocturnă comodă și eficientă.' },
          { icon: 'assets/images/icon-service-benefit-2.svg', title: 'încărcare comercială', description: 'Soluții pentru parcări, hoteluri, centre comerciale și birouri.' },
          { icon: 'assets/images/icon-service-benefit-3.svg', title: 'toate conectoarele', description: 'Tip 2 (Mennekes), CHAdeMO, CCS Combo — compatibil cu toate vehiculele.' },
          { icon: 'assets/images/icon-service-benefit-4.svg', title: 'management energie', description: 'Sisteme de load management pentru optimizarea consumului electric.' },
          { icon: 'assets/images/icon-service-benefit-5.svg', title: 'integrare solar', description: 'Combinăm stația de încărcare cu sistemul fotovoltaic pentru cost zero/km.' },
          { icon: 'assets/images/icon-service-benefit-6.svg', title: 'monitorizare app', description: 'Controlezi și monitorizezi stația de pe telefonul mobil.' },
          { icon: 'assets/images/icon-service-benefit-7.svg', title: 'instalare rapidă', description: 'Instalăm o stație rezidențială în câteva ore, cu minimum de disconfort.' },
          { icon: 'assets/images/icon-service-benefit-8.svg', title: 'service inclus', description: 'Garanție și service post-instalare pentru funcționare fără probleme.' },
        ],
        strategyTitle: 'Cum instalăm o stație de încărcare',
        strategyDescription: 'Procesul începe cu evaluarea instalației electrice existente și stabilirea puterii optime pentru stație. Recomandăm tipul de stație potrivit în funcție de vehiculul dvs. și obiceiurile de utilizare.',
        strategyDescriptionExtra: 'Instalarea include toate lucrările electrice necesare, montarea stației și configurarea aplicației mobile de monitorizare și control.',
        strategyPoints: [
          'Evaluare instalație și consum',
          'Selecție stație și putere optimă',
          'Instalare electrică și montaj stație',
          'Configurare și punere în funcțiune',
        ],
        faqs: [
          { question: 'Ce putere are nevoie o stație de acasă?', answer: 'Pentru uz rezidențial, o stație de 7.4 kW (monofazat) sau 11 kW (trifazat) este suficientă pentru a încărca complet orice vehicul electric pe parcursul nopții.' },
          { question: 'Pot instala o stație în apartament / bloc?', answer: 'Da, se poate instala în parcarea unui bloc sau garaj privat. Este necesară acordul asociației de proprietari și un branșament electric dedicat.' },
          { question: 'Sunt stațiile compatibile cu toate mașinile electrice?', answer: 'Da, stațiile cu conector Tip 2 sunt compatibile cu toate vehiculele electrice și hibride plug-in comercializate în Europa.' },
          { question: 'Cât costă curentul pentru o încărcare completă?', answer: 'La tariful casnic (~0.80 lei/kWh), o încărcare completă a unui vehicul cu baterie de 60 kWh costă aproximativ 48 lei, față de 150-200 lei combustibil echivalent.' },
          { question: 'Există subvenții pentru stații de încărcare?', answer: 'Da, există programe de finanțare atât pentru persoane fizice cât și juridice. Vă informăm despre opțiunile disponibile la momentul solicitării.' },
        ],
      }
    ),

    buildService(
      'detectie-incendiu',
      'detecție incendiu',
      'assets/images/icon-services-4.svg',
      'Sisteme convenționale și adresabile, detectoare, centrală și semnalizare incendiu.',
      {
        image: 'assets/images/project-4.jpg',
        fullDescription: 'Proiectăm, instalăm și punem în funcțiune sisteme complete de detecție și semnalizare a incendiilor, conform normativului P118/3 și standardelor SR EN 54. Acoperim orice tip de obiectiv: locuințe, birouri, depozite, unități de producție și clădiri publice.',
        fullDescriptionExtra: 'Toate sistemele sunt avizate ISU și însoțite de documentație tehnică completă. Oferim și contracte de mentenanță periodică pentru menținerea funcționalității sistemului conform legislației.',
        whyChooseDescription: 'Siguranța la incendiu nu este opțională. Un sistem de detecție corect proiectat și instalat poate salva vieți și proteja proprietatea. Noi oferim soluții complete, de la proiectare până la mentenanță.',
        whyChoosePoints: [
          'Proiectare avizată ISU',
          'Sisteme convenționale și adresabile',
          'Echipamente certificate EN 54',
          'Mentenanță și verificare periodică',
        ],
        benefits: [
          { icon: 'assets/images/icon-service-benefit-1.svg', title: 'sistem convențional', description: 'Soluție economică pentru spații mici și medii, cu zone de detecție grupate.' },
          { icon: 'assets/images/icon-service-benefit-2.svg', title: 'sistem adresabil', description: 'Identificare exactă a detectorului care a intrat în alarma, ideal pentru clădiri mari.' },
          { icon: 'assets/images/icon-service-benefit-3.svg', title: 'detectoare de fum', description: 'Detectoare optice și ionizare pentru detecție rapidă a fumului în faza incipientă.' },
          { icon: 'assets/images/icon-service-benefit-4.svg', title: 'detectoare de căldură', description: 'Detectoare termice pentru bucătării, garaje și spații cu praf sau aburi.' },
          { icon: 'assets/images/icon-service-benefit-5.svg', title: 'detectoare de flacără', description: 'Detectoare UV/IR pentru depozite de combustibili și zone cu risc ridicat.' },
          { icon: 'assets/images/icon-service-benefit-6.svg', title: 'centrală de semnalizare', description: 'Centrale inteligente cu afișaj grafic, jurnalizare și interfețe de comunicație.' },
          { icon: 'assets/images/icon-service-benefit-7.svg', title: 'semnalizare sonoră/vizuală', description: 'Sirene, flash-uri și difuzoare pentru avertizare rapidă a persoanelor.' },
          { icon: 'assets/images/icon-service-benefit-8.svg', title: 'integrare BMS', description: 'Integrarea cu sistemele de management al clădirii pentru răspuns automatizat.' },
        ],
        strategyTitle: 'Proiectare și instalare sistem detecție incendiu',
        strategyDescription: 'Începem cu analiza planurilor obiectivului și evaluarea riscurilor specifice. Proiectăm amplasarea optimă a detectoarelor și a componentelor sistemului conform normativului P118/3.',
        strategyDescriptionExtra: 'După instalare, efectuăm verificarea completă a sistemului, instruim personalul și emitem documentele necesare obținerii avizului ISU.',
        strategyPoints: [
          'Proiectare și calcul necesár detectoare',
          'Instalare centrală și detectoare',
          'Cablare și conectare sistem',
          'Testare, avizare ISU și instruire personal',
        ],
        faqs: [
          { question: 'Este obligatorie instalarea unui sistem de detecție incendiu?', answer: 'Conform legislației, sistemele de detecție sunt obligatorii pentru clădiri publice, hoteluri, spitale, clădiri de birouri și orice spațiu cu risc ridicat. Pentru locuințe nu este obligatoriu, dar este puternic recomandat.' },
          { question: 'Care este diferența între un sistem convențional și unul adresabil?', answer: 'Un sistem convențional identifică zona în care a apărut alarma. Un sistem adresabil identifică exact detectorul care a intrat în alarma, permițând localizarea precisă a incendiului.' },
          { question: 'Cât de des trebuie verificat sistemul?', answer: 'Conform normativelor, sistemele de detecție trebuie verificate semestrial de o firmă autorizată. Oferim contracte de mentenanță periodică.' },
          { question: 'Sistemul poate fi integrat cu alte sisteme de siguranță?', answer: 'Da, sistemele moderne de detecție incendiu pot fi integrate cu controlul accesului, CCTV, sistemele de stingere și BMS-ul clădirii.' },
          { question: 'Cât durează instalarea unui sistem?', answer: 'Pentru un birou mediu (500-1000 mp) instalarea durează 2-4 zile. Pentru obiective mai mari, durata se stabilește după vizita tehnică.' },
        ],
      }
    ),

    buildService(
      'stingere-incendiu',
      'stingere incendiu',
      'assets/images/icon-services-5.svg',
      'Sisteme sprinklere, hidranți interiori și exteriori, sisteme automate de stingere.',
      {
        image: 'assets/images/project-5.jpg',
        fullDescription: 'Instalăm sisteme complete de stingere a incendiilor pentru toate categoriile de clădiri și riscuri. De la sisteme simple cu hidranți interiori, până la instalații complexe cu sprinklere și sisteme automate cu gaze inerte sau spumă, acoperim toate scenariile.',
        fullDescriptionExtra: 'Toate lucrările sunt executate conform normativului P118/2, cu avizul ISU și însoțite de documentație tehnică completă. Colaborăm cu proiectanți autorizați pentru obținerea tuturor avizelor necesare.',
        whyChooseDescription: 'Sistemele de stingere a incendiilor reprezintă ultima linie de apărare în protejarea vieților și proprietăților. Experiența noastră garantează proiectarea și execuția corectă a oricărui tip de sistem.',
        whyChoosePoints: [
          'Execuție conform P118/2',
          'Avizare ISU asigurată',
          'Toate tipurile de sisteme',
          'Teste hidrostatice și funcționale',
        ],
        benefits: [
          { icon: 'assets/images/icon-service-benefit-1.svg', title: 'sprinklere', description: 'Sisteme automate de stingere cu apă, activare individuală la temperatura de declanșare.' },
          { icon: 'assets/images/icon-service-benefit-2.svg', title: 'hidranți interiori', description: 'Posturi de incendiu interioare cu furtun și robinet, obligatorii în multe tipuri de clădiri.' },
          { icon: 'assets/images/icon-service-benefit-3.svg', title: 'hidranți exteriori', description: 'Hidranți subterani și supraterani pentru alimentarea autospecialelor de pompieri.' },
          { icon: 'assets/images/icon-service-benefit-4.svg', title: 'sisteme cu gaze', description: 'Stingere cu gaze inerte (argon, azot, CO2) pentru săli server și arhive.' },
          { icon: 'assets/images/icon-service-benefit-5.svg', title: 'sisteme cu spumă', description: 'Sisteme cu spumă pentru depozite de lichide inflamabile și parcări.' },
          { icon: 'assets/images/icon-service-benefit-6.svg', title: 'stații de pompare', description: 'Instalăm stații de pompare dedicate cu pompe principale și de rezervă.' },
          { icon: 'assets/images/icon-service-benefit-7.svg', title: 'rezervoare de apă', description: 'Dimensionăm și instalăm rezervoare de incendiu conform normativelor.' },
          { icon: 'assets/images/icon-service-benefit-8.svg', title: 'mentenanță sistem', description: 'Verificări periodice, teste de presiune și înlocuire componente uzate.' },
        ],
        strategyTitle: 'Execuție sistem stingere incendiu',
        strategyDescription: 'Procesul debutează cu analiza riscurilor și stabilirea tipului de sistem adecvat. Elaborăm proiectul tehnic în colaborare cu proiectanți autorizați și obținem avizele necesare de la ISU.',
        strategyDescriptionExtra: 'Execuția include toate lucrările de instalare, testele hidrostatice și funcționale, după care se realizează recepția finală cu reprezentanți ISU.',
        strategyPoints: [
          'Proiectare și avizare ISU',
          'Instalare rețea de conducte',
          'Montare echipamente și capete sprinkler',
          'Teste hidrostatice și recepție ISU',
        ],
        faqs: [
          { question: 'Ce clădiri necesită obligatoriu sisteme de sprinklere?', answer: 'Conform normativului P118/2, sprinklerele sunt obligatorii în centre comerciale, hoteluri cu mai mult de 4 etaje, depozite mari, parcări subterane și alte categorii de clădiri cu risc ridicat.' },
          { question: 'Un sprinkler se activează la fum sau la căldură?', answer: 'Sprinklerele se activează la căldură (nu la fum), când temperatura din zona ampulei de sticlă atinge valoarea de declanșare (68°C în mod standard). Se activează individual, nu toate deodată.' },
          { question: 'Cât de des trebuie verificat sistemul de stingere?', answer: 'Sistemele de stingere trebuie verificate semestrial, cu teste complete anuale și verificare ISU periodică conform legislației.' },
          { question: 'Poate fi instalat un sistem de stingere în clădiri existente?', answer: 'Da, instalăm sisteme de stingere și în clădiri existente, adaptând traseele la structura construcției. Evaluăm fezabilitatea în urma vizitei tehnice.' },
          { question: 'Care este durata medie de execuție?', answer: 'Durata variază în funcție de suprafața și complexitatea obiectivului. Un depozit mediu (1000-3000 mp) necesită de obicei 2-4 săptămâni de execuție.' },
        ],
      }
    ),

    buildService(
      'desfumare',
      'desfumare',
      'assets/images/icon-services-6.svg',
      'Sisteme naturale și mecanice de desfumare, execuție și testare conform normativelor.',
      {
        image: 'assets/images/project-6.jpg',
        fullDescription: 'Proiectăm și executăm sisteme de desfumare naturală și mecanică pentru toate categoriile de clădiri, conform normativului P118/3 și standardelor europene EN 12101. Sistemele de desfumare sunt esențiale pentru evacuarea în siguranță a persoanelor și facilitarea intervenției pompierilor.',
        fullDescriptionExtra: 'Oferim soluții complete: de la trape și ferestre de desfumare, până la sisteme mecanice complexe cu ventilatoare de extracție fum și aport de aer proaspăt. Toate sistemele sunt testate și certificate conform legislației.',
        whyChooseDescription: 'Un sistem de desfumare corect proiectat crește semnificativ șansele de evacuare în caz de incendiu prin menținerea unui strat de aer curat la nivelul solului. Noi garantăm conformitatea cu toate normativele aplicabile.',
        whyChoosePoints: [
          'Conform P118/3 și EN 12101',
          'Sisteme naturale și mecanice',
          'Avizare ISU asigurată',
          'Testare completă la recepție',
        ],
        benefits: [
          { icon: 'assets/images/icon-service-benefit-1.svg', title: 'desfumare naturală', description: 'Trape și ferestre de desfumare acționate termic sau manual pentru clădiri cu acoperiș.' },
          { icon: 'assets/images/icon-service-benefit-2.svg', title: 'desfumare mecanică', description: 'Ventilatoare de extracție fum la temperaturi înalte (400°C/2h sau 600°C/2h).' },
          { icon: 'assets/images/icon-service-benefit-3.svg', title: 'aport aer proaspăt', description: 'Sisteme de introducere aer proaspăt pentru compensarea extracției și protecția căilor de evacuare.' },
          { icon: 'assets/images/icon-service-benefit-4.svg', title: 'compartimentare fum', description: 'Perdele de fum și clapete antifoc pentru limitarea propagării fumului în clădire.' },
          { icon: 'assets/images/icon-service-benefit-5.svg', title: 'automatizare sistem', description: 'Centrală de comandă cu activare automată la semnalul sistemului de detecție incendiu.' },
          { icon: 'assets/images/icon-service-benefit-6.svg', title: 'scări și holuri', description: 'Presuprizare scări și holuri pentru menținerea acestora libere de fum în caz de evacuare.' },
          { icon: 'assets/images/icon-service-benefit-7.svg', title: 'parcări subterane', description: 'Sisteme de ventilație și desfumare dedicate pentru parcări subterane și semi-îngropate.' },
          { icon: 'assets/images/icon-service-benefit-8.svg', title: 'testare și certificare', description: 'Testare completă a sistemului și emiterea documentelor de certificare conform normativelor.' },
        ],
        strategyTitle: 'Proiectare și execuție sistem desfumare',
        strategyDescription: 'Proiectarea unui sistem de desfumare necesită calcule specifice privind volumul de fum, suprafețele de extracție și debitele de aer necesare. Colaborăm cu proiectanți specializați pentru a asigura conformitatea cu normativele.',
        strategyDescriptionExtra: 'Execuția cuprinde montarea tuturor echipamentelor, cablarea sistemului de comandă și integrarea cu sistemul de detecție incendiu, urmată de testarea completă și recepția cu ISU.',
        strategyPoints: [
          'Proiectare și calcule desfumare',
          'Instalare echipamente extracție și aport aer',
          'Centrală comandă și automatizare',
          'Testare funcțională și recepție ISU',
        ],
        faqs: [
          { question: 'Ce clădiri necesită sistem de desfumare?', answer: 'Sistemele de desfumare sunt obligatorii pentru clădiri înalte, centre comerciale, parcări subterane, atrii, holuri mari și orice spațiu în care acumularea de fum poate împiedica evacuarea.' },
          { question: 'Care este diferența între desfumare naturală și mecanică?', answer: 'Desfumarea naturală utilizează trape sau ferestre care se deschid automat, permițând fumului să iasă prin convecție naturală. Desfumarea mecanică folosește ventilatoare pentru extracția forțată a fumului, eficientă și în spații fără luminator.' },
          { question: 'Sistemul de desfumare se activează automat?', answer: 'Da, sistemul este integrat cu centrala de detecție incendiu și se activează automat la semnalul de alarma. Poate fi activat și manual de la butoane de comandă amplasate strategic.' },
          { question: 'Cât de des trebuie testat sistemul de desfumare?', answer: 'Conform normativelor, sistemele de desfumare trebuie testate semestrial și verificate anual de o firmă autorizată. Noi oferim contracte de mentenanță periodică.' },
          { question: 'Poate fi integrat cu alte sisteme din clădire?', answer: 'Da, sistemul de desfumare se integrează cu detecția incendiu, controlul accesului (deblocare uși de evacuare), ascensoarele (coborâre la parter) și BMS-ul clădirii.' },
        ],
      }
    ),

  ];

  getAll(): ServiceDto[] {
    return this.services;
  }

  getBySlug(slug: string): ServiceDto | undefined {
    return this.services.find((s) => s.slug === slug);
  }
}
