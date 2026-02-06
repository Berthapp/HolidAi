export type Locale = "de" | "en" | "fr" | "it" | "rm";

type TranslationValues = Record<string, string | number>;

export const translations = {
  de: {
    languageLabel: "Sprache",
    languages: {
      de: "Deutsch",
      en: "Englisch",
      fr: "Französisch",
      it: "Italienisch",
      rm: "Rätoromanisch",
    },
    languagesShort: {
      de: "DE",
      en: "EN",
      fr: "FR",
      it: "IT",
      rm: "RM",
    },
    footer: {
      tagline: "Smarter Urlaub planen · Schnell, klar, persönlich.",
      legalLabel: "Rechtliches",
      links: {
        impressum: "Impressum",
        datenschutz: "Datenschutz",
        agb: "AGB",
        copyright: "Copyright@2026",
      },
    },
    home: {
      badge: "KI-Reiseplanung",
      title: "Dein smarter Urlaub in wenigen Minuten.",
      subtitle:
        "Starte mit einem Ziel. Wir führen dich Schritt für Schritt zum perfekten Plan.",
      destinationLabel: "Wo möchtest du hin?",
      destinationPlaceholder: "z. B. Porto, Island, Thailand",
      startPlan: "Plan starten",
      errorDestination: "Bitte gib ein Ziel ein.",
      highlights: {
        ready: "In Minuten startklar.",
        personalized: "Personalisierter Plan.",
        transparent: "Transparent & klar.",
      },
    },
    plan: {
      stepLabel: "Schritt {current} von {total}",
      title: "Lass uns deinen Urlaub planen.",
      steps: {
        destination: "Ziel",
        duration: "Dauer",
        style: "Stil",
        budget: "Budget",
        travelers: "Reisende",
        season: "Saison",
      },
      destination: {
        label: "Destination",
        placeholder: "z. B. Marrakesch",
        hint: "Du kannst das Ziel später anpassen.",
      },
      duration: {
        choose: "Wähle eine Dauer",
        customLabel: "Oder eigene Dauer",
        customPlaceholder: "z. B. 10 Tage",
      },
      style: {
        question: "Welcher Reisestil passt zu dir?",
      },
      budget: {
        question: "Wie fühlt sich dein Budget an?",
      },
      travelers: {
        question: "Wer reist mit?",
      },
      season: {
        label: "Monat / Saison (optional)",
        placeholder: "z. B. Mai oder Herbst",
        hint: "Hilft uns bei Preisen & Wetter.",
      },
      buttons: {
        back: "Zurück",
        next: "Weiter",
        submit: "Plan erstellen",
        submitting: "Plane...",
      },
      errors: {
        selectOption: "Bitte wähle eine Option, bevor du weitergehst.",
        selectOptionFinish: "Bitte wähle eine Option, bevor du abschließt.",
        planFailed: "Plan konnte nicht erstellt werden.",
        unexpected: "Unerwarteter Fehler.",
      },
    },
    result: {
      emptyTitle: "Noch kein Plan vorhanden.",
      emptySubtitle: "Starte den Wizard, um deinen Reiseplan zu erhalten.",
      emptyCta: "Zum Planer",
      label: "Ergebnis",
      headline: "Dein {destination} Plan ist bereit.",
      basedOn: "Basierend auf {travelers} · {travelStyle} · {budget}",
      durationTitle: "Empfohlene Dauer: {duration}",
      durationNote:
        "Wir haben eine ausgewogene Mischung aus Highlights und Erholung eingeplant.",
      costTitle: "Kostenschätzung",
      costSubtitle: "Budget-Level: {budget}",
      itineraryTitle: "Itinerary-Outline",
      notesTitle: "Hinweise",
    },
    options: {
      duration: {
        duration_3_5: "3-5 Tage",
        duration_1_week: "1 Woche",
        duration_2_weeks: "2 Wochen",
        duration_3_plus_weeks: "3+ Wochen",
      },
      travelStyle: {
        Relax: "Relax",
        Nature: "Natur",
        City: "City",
        Family: "Family",
        Couple: "Couple",
        Backpacking: "Backpacking",
      },
      budget: {
        Low: "Low",
        Medium: "Medium",
        Comfort: "Comfort",
      },
      travelers: {
        Solo: "Solo",
        Couple: "Couple",
        "Family + kids": "Family + kids",
      },
    },
    legal: {
      kicker: "Rechtliches",
      agb: {
        title: "Allgemeine Geschäftsbedingungen (AGB)",
        intro:
          "Diese Allgemeinen Geschäftsbedingungen regeln die Nutzung der HolidAI Plattform. Anbieter: Enzo Berther, Privatperson, Sonnenbergstrasse 12, 7205 Zizers, Schweiz, info@holidai.ch. Mit der Nutzung unserer Services erklärst du dich mit den folgenden Bedingungen einverstanden.",
        servicesTitle: "Leistungen",
        servicesBody:
          "HolidAI stellt KI-gestützte Reisevorschläge bereit. Die bereitgestellten Informationen dienen der Orientierung und ersetzen keine verbindliche Buchungs- oder Rechtsberatung.",
        liabilityTitle: "Haftung & Gewährleistung",
        liabilityBody:
          "Wir haften nur für Schäden, die auf vorsätzlicher oder grob fahrlässiger Pflichtverletzung beruhen. Für die Aktualität der Inhalte übernehmen wir keine Gewähr.",
        liabilityNote:
          "Hinweis: Bitte ergänze deine spezifischen Bedingungen, Preise und Leistungsbeschreibungen.",
      },
      privacy: {
        title: "Datenschutzerklärung",
        intro:
          "Wir nehmen den Schutz deiner persönlichen Daten sehr ernst. Diese Erklärung informiert dich darüber, welche Daten beim Besuch von HolidAI verarbeitet werden und zu welchem Zweck.",
        contact:
          "Verantwortliche Stelle: HolidAI, Musterstraße 1, 12345 Musterstadt, Deutschland. Kontakt: hallo@holidai.de.",
        dataTitle: "Verarbeitete Daten",
        dataItems: [
          "Kontakt- und Inhaltsdaten, die du aktiv eingibst.",
          "Nutzungsdaten zur Sicherstellung der Website-Funktion.",
          "Server-Logfiles zur technischen Analyse und Sicherheit.",
        ],
        rightsTitle: "Deine Rechte",
        rightsBody:
          "Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie Datenübertragbarkeit. Außerdem kannst du der Verarbeitung widersprechen.",
        rightsNote:
          "Hinweis: Ergänze hier deine tatsächlichen Prozesse (z. B. Hosting, Tracking, Newsletter) und die dazugehörigen Informationen.",
      },
      imprint: {
        title: "Impressum",
        company: "Enzo Berther",
        address: "Privatperson\nSonnenbergstrasse 12\n7205 Zizers\nSchweiz",
        contact:
          "E-Mail: info@holidai.ch",
        responsibleTitle: "Verantwortlich für den Inhalt",
        responsibleBody:
          "Verantwortlich nach § 55 Abs. 2 RStV: Enzo Berther, Sonnenbergstrasse 12, 7205 Zizers, Schweiz.",
        responsibleNote:
          "Privatperson, Kontakt siehe oben.",
      },
      copyright: {
        title: "Copyright@2026",
        body:
          "© 2026 HolidAI. Alle Rechte vorbehalten. Inhalte, Design und Struktur dieser Website sind urheberrechtlich geschützt.",
        note:
          "Eine Verwendung außerhalb der gesetzlichen Schranken des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung.",
      },
    },
  },
  fr: {
    languageLabel: "Langue",
    languages: {
      de: "Allemand",
      en: "Anglais",
      fr: "Français",
      it: "Italien",
      rm: "Romanche",
    },
    languagesShort: {
      de: "DE",
      en: "EN",
      fr: "FR",
      it: "IT",
      rm: "RM",
    },
    footer: {
      tagline: "Planifiez des vacances plus intelligentes · Rapide, clair, personnel.",
      legalLabel: "Mentions légales",
      links: {
        impressum: "Mentions légales",
        datenschutz: "Confidentialité",
        agb: "Conditions",
        copyright: "Copyright@2026",
      },
    },
    home: {
      badge: "Planification de voyage par IA",
      title: "Vos vacances plus intelligentes en quelques minutes.",
      subtitle:
        "Commencez par une destination. Nous vous guidons pas à pas vers le plan parfait.",
      destinationLabel: "Où souhaitez-vous aller ?",
      destinationPlaceholder: "ex. Porto, Islande, Thailande",
      startPlan: "Commencer le plan",
      errorDestination: "Veuillez saisir une destination.",
      highlights: {
        ready: "Prêt en quelques minutes.",
        personalized: "Plan personnalisé.",
        transparent: "Transparent et clair.",
      },
    },
    plan: {
      stepLabel: "Étape {current} sur {total}",
      title: "Planifions vos vacances.",
      steps: {
        destination: "Destination",
        duration: "Durée",
        style: "Style",
        budget: "Budget",
        travelers: "Voyageurs",
        season: "Saison",
      },
      destination: {
        label: "Destination",
        placeholder: "ex. Marrakech",
        hint: "Vous pouvez ajuster la destination plus tard.",
      },
      duration: {
        choose: "Choisissez une durée",
        customLabel: "Ou votre propre durée",
        customPlaceholder: "ex. 10 jours",
      },
      style: {
        question: "Quel style de voyage vous convient ?",
      },
      budget: {
        question: "Comment se situe votre budget ?",
      },
      travelers: {
        question: "Qui voyage avec vous ?",
      },
      season: {
        label: "Mois / saison (optionnel)",
        placeholder: "ex. mai ou automne",
        hint: "Nous aide pour les prix et la météo.",
      },
      buttons: {
        back: "Retour",
        next: "Suivant",
        submit: "Créer le plan",
        submitting: "Planification...",
      },
      errors: {
        selectOption: "Veuillez choisir une option avant de continuer.",
        selectOptionFinish: "Veuillez choisir une option avant de terminer.",
        planFailed: "Le plan n'a pas pu être créé.",
        unexpected: "Erreur inattendue.",
      },
    },
    result: {
      emptyTitle: "Pas encore de plan.",
      emptySubtitle: "Lancez l'assistant pour obtenir votre plan de voyage.",
      emptyCta: "Aller au planificateur",
      label: "Résultat",
      headline: "Votre plan pour {destination} est prêt.",
      basedOn: "Basé sur {travelers} · {travelStyle} · {budget}",
      durationTitle: "Durée recommandée : {duration}",
      durationNote:
        "Nous avons prévu un mélange équilibré de points forts et de repos.",
      costTitle: "Estimation des coûts",
      costSubtitle: "Niveau de budget : {budget}",
      itineraryTitle: "Aperçu de l'itinéraire",
      notesTitle: "Notes",
    },
    options: {
      duration: {
        duration_3_5: "3-5 jours",
        duration_1_week: "1 semaine",
        duration_2_weeks: "2 semaines",
        duration_3_plus_weeks: "3+ semaines",
      },
      travelStyle: {
        Relax: "Détente",
        Nature: "Nature",
        City: "Ville",
        Family: "Famille",
        Couple: "Couple",
        Backpacking: "Sac à dos",
      },
      budget: {
        Low: "Faible",
        Medium: "Moyen",
        Comfort: "Confort",
      },
      travelers: {
        Solo: "Solo",
        Couple: "Couple",
        "Family + kids": "Famille + enfants",
      },
    },
    legal: {
      kicker: "Mentions légales",
      agb: {
        title: "Conditions générales (CGV)",
        intro:
          "Ces conditions générales régissent l'utilisation de la plateforme HolidAI. Fournisseur : Enzo Berther, Privatperson, Sonnenbergstrasse 12, 7205 Zizers, Suisse, info@holidai.ch. En utilisant nos services, vous acceptez les conditions suivantes.",
        servicesTitle: "Prestations",
        servicesBody:
          "HolidAI fournit des suggestions de voyage assistées par IA. Les informations fournies sont indicatives et ne remplacent pas des conseils de réservation ou juridiques contraignants.",
        liabilityTitle: "Responsabilité et garantie",
        liabilityBody:
          "Nous ne sommes responsables que des dommages causés par des manquements intentionnels ou par négligence grave. Nous ne garantissons pas l'actualité des contenus.",
        liabilityNote:
          "Note : Veuillez ajouter vos conditions spécifiques, vos tarifs et vos descriptions de service.",
      },
      privacy: {
        title: "Politique de confidentialité",
        intro:
          "Nous prenons la protection de vos données personnelles très au sérieux. Cette déclaration vous informe des données traitées lors de la visite de HolidAI et de leur finalité.",
        contact:
          "Entité responsable : HolidAI, Musterstraße 1, 12345 Musterstadt, Allemagne. Contact : hallo@holidai.de.",
        dataTitle: "Données traitées",
        dataItems: [
          "Données de contact et de contenu que vous saisissez activement.",
          "Données d'utilisation pour assurer la fonctionnalité du site.",
          "Fichiers journaux du serveur pour l'analyse technique et la sécurité.",
        ],
        rightsTitle: "Vos droits",
        rightsBody:
          "Vous avez à tout moment le droit d'accès, de rectification, de suppression, de limitation du traitement ainsi que de portabilité des données. Vous pouvez également vous opposer au traitement.",
        rightsNote:
          "Note : Ajoutez ici vos processus réels (par ex. hébergement, suivi, newsletter) et les informations associées.",
      },
      imprint: {
        title: "Mentions légales",
        company: "Enzo Berther",
        address: "Privatperson\nSonnenbergstrasse 12\n7205 Zizers\nSuisse",
        contact:
          "E-mail : info@holidai.ch",
        responsibleTitle: "Responsable du contenu",
        responsibleBody:
          "Responsable conformément au § 55 Abs. 2 RStV : Enzo Berther, Sonnenbergstrasse 12, 7205 Zizers, Suisse.",
        responsibleNote:
          "Privatperson, contact ci-dessus.",
      },
      copyright: {
        title: "Copyright@2026",
        body:
          "© 2026 HolidAI. Tous droits réservés. Le contenu, le design et la structure de ce site sont protégés par le droit d'auteur.",
        note:
          "Toute utilisation en dehors des limites légales du droit d'auteur nécessite une autorisation écrite préalable.",
      },
    },
  },
  it: {
    languageLabel: "Lingua",
    languages: {
      de: "Tedesco",
      en: "Inglese",
      fr: "Francese",
      it: "Italiano",
      rm: "Romancio",
    },
    languagesShort: {
      de: "DE",
      en: "EN",
      fr: "FR",
      it: "IT",
      rm: "RM",
    },
    footer: {
      tagline: "Pianifica vacanze smart · Veloce, chiaro, personale.",
      legalLabel: "Legale",
      links: {
        impressum: "Note legali",
        datenschutz: "Privacy",
        agb: "Termini",
        copyright: "Copyright@2026",
      },
    },
    home: {
      badge: "Pianificazione viaggi IA",
      title: "La tua vacanza smart in pochi minuti.",
      subtitle:
        "Inizia con una destinazione. Ti guidiamo passo dopo passo verso il piano perfetto.",
      destinationLabel: "Dove vuoi andare?",
      destinationPlaceholder: "es. Porto, Islanda, Thailandia",
      startPlan: "Avvia piano",
      errorDestination: "Inserisci una destinazione.",
      highlights: {
        ready: "Pronto in pochi minuti.",
        personalized: "Piano personalizzato.",
        transparent: "Trasparente e chiaro.",
      },
    },
    plan: {
      stepLabel: "Passo {current} di {total}",
      title: "Pianifichiamo la tua vacanza.",
      steps: {
        destination: "Destinazione",
        duration: "Durata",
        style: "Stile",
        budget: "Budget",
        travelers: "Viaggiatori",
        season: "Stagione",
      },
      destination: {
        label: "Destinazione",
        placeholder: "es. Marrakech",
        hint: "Puoi modificare la destinazione più tardi.",
      },
      duration: {
        choose: "Scegli una durata",
        customLabel: "Oppure inserisci una durata personalizzata",
        customPlaceholder: "es. 10 giorni",
      },
      style: {
        question: "Quale stile di viaggio fa per te?",
      },
      budget: {
        question: "Come ti sembra il budget?",
      },
      travelers: {
        question: "Chi viaggia con te?",
      },
      season: {
        label: "Mese / stagione (opzionale)",
        placeholder: "es. maggio o autunno",
        hint: "Ci aiuta con prezzi e meteo.",
      },
      buttons: {
        back: "Indietro",
        next: "Avanti",
        submit: "Crea piano",
        submitting: "Pianificazione...",
      },
      errors: {
        selectOption: "Seleziona un'opzione prima di continuare.",
        selectOptionFinish: "Seleziona un'opzione prima di terminare.",
        planFailed: "Impossibile creare il piano.",
        unexpected: "Errore imprevisto.",
      },
    },
    result: {
      emptyTitle: "Nessun piano ancora.",
      emptySubtitle: "Avvia il wizard per ottenere il tuo piano di viaggio.",
      emptyCta: "Vai al planner",
      label: "Risultato",
      headline: "Il tuo piano per {destination} è pronto.",
      basedOn: "Basato su {travelers} · {travelStyle} · {budget}",
      durationTitle: "Durata consigliata: {duration}",
      durationNote:
        "Abbiamo pianificato un mix equilibrato di highlights e relax.",
      costTitle: "Stima dei costi",
      costSubtitle: "Livello di budget: {budget}",
      itineraryTitle: "Schema itinerario",
      notesTitle: "Note",
    },
    options: {
      duration: {
        duration_3_5: "3-5 giorni",
        duration_1_week: "1 settimana",
        duration_2_weeks: "2 settimane",
        duration_3_plus_weeks: "3+ settimane",
      },
      travelStyle: {
        Relax: "Relax",
        Nature: "Natura",
        City: "Città",
        Family: "Famiglia",
        Couple: "Coppia",
        Backpacking: "Zaino in spalla",
      },
      budget: {
        Low: "Basso",
        Medium: "Medio",
        Comfort: "Comfort",
      },
      travelers: {
        Solo: "Solo",
        Couple: "Coppia",
        "Family + kids": "Famiglia + bambini",
      },
    },
    legal: {
      kicker: "Legale",
      agb: {
        title: "Termini e condizioni",
        intro:
          "Questi termini regolano l'utilizzo della piattaforma HolidAI. Fornitore: Enzo Berther, Privatperson, Sonnenbergstrasse 12, 7205 Zizers, Svizzera, info@holidai.ch. Utilizzando i nostri servizi accetti le seguenti condizioni.",
        servicesTitle: "Servizi",
        servicesBody:
          "HolidAI fornisce suggerimenti di viaggio assistiti dall'IA. Le informazioni offerte sono indicative e non sostituiscono consulenze vincolanti di prenotazione o legali.",
        liabilityTitle: "Responsabilità e garanzia",
        liabilityBody:
          "Siamo responsabili solo per danni causati da violazioni intenzionali o gravemente negligenti. Non garantiamo l'attualità dei contenuti.",
        liabilityNote:
          "Nota: aggiungi qui le tue condizioni specifiche, i prezzi e le descrizioni dei servizi.",
      },
      privacy: {
        title: "Informativa sulla privacy",
        intro:
          "Prendiamo molto sul serio la protezione dei tuoi dati personali. Questa informativa spiega quali dati vengono trattati quando visiti HolidAI e per quale scopo.",
        contact:
          "Titolare del trattamento: HolidAI, Musterstraße 1, 12345 Musterstadt, Germania. Contatto: hallo@holidai.de.",
        dataTitle: "Dati trattati",
        dataItems: [
          "Dati di contatto e contenuto che inserisci attivamente.",
          "Dati di utilizzo per garantire la funzionalità del sito.",
          "File di log del server per analisi tecnica e sicurezza.",
        ],
        rightsTitle: "I tuoi diritti",
        rightsBody:
          "Hai sempre il diritto di accesso, rettifica, cancellazione, limitazione del trattamento e portabilità dei dati. Puoi inoltre opporti al trattamento.",
        rightsNote:
          "Nota: aggiungi qui i tuoi processi reali (es. hosting, tracking, newsletter) e le informazioni correlate.",
      },
      imprint: {
        title: "Note legali",
        company: "Enzo Berther",
        address: "Privatperson\nSonnenbergstrasse 12\n7205 Zizers\nSvizzera",
        contact:
          "Email: info@holidai.ch",
        responsibleTitle: "Responsabile del contenuto",
        responsibleBody:
          "Responsabile ai sensi del § 55 Abs. 2 RStV: Enzo Berther, Sonnenbergstrasse 12, 7205 Zizers, Svizzera.",
        responsibleNote:
          "Privatperson, contatto indicato sopra.",
      },
      copyright: {
        title: "Copyright@2026",
        body:
          "© 2026 HolidAI. Tutti i diritti riservati. Contenuti, design e struttura di questo sito sono protetti dal diritto d'autore.",
        note:
          "Qualsiasi utilizzo al di fuori dei limiti di legge richiede un'autorizzazione scritta preventiva.",
      },
    },
  },
  rm: {
    languageLabel: "Lingua",
    languages: {
      de: "Tudestg",
      en: "Englais",
      fr: "Franzos",
      it: "Talian",
      rm: "Rumantsch Grischun",
    },
    languagesShort: {
      de: "DE",
      en: "EN",
      fr: "FR",
      it: "IT",
      rm: "RM",
    },
    footer: {
      tagline: "Planisar vacanzas pli intelligentas · Spert, cler, persunal.",
      legalLabel: "Legal",
      links: {
        impressum: "Impressum",
        datenschutz: "Protecziun da datas",
        agb: "Cundiziuns",
        copyright: "Copyright@2026",
      },
    },
    home: {
      badge: "Planisaziun da viadi cun IA",
      title: "Tia vacanza pli intelligenta en paucs minuts.",
      subtitle:
        "Cumenzai cun ina destinaziun. Nus ta guidain pass per pass vers il plan perfetg.",
      destinationLabel: "Nua vuls ti ir?",
      destinationPlaceholder: "p.ex. Porto, Islanda, Tailanda",
      startPlan: "Cumenzar il plan",
      errorDestination: "Endatescha per plaschair ina destinaziun.",
      highlights: {
        ready: "Pront en paucs minuts.",
        personalized: "Plan persunalisà.",
        transparent: "Transparent e cler.",
      },
    },
    plan: {
      stepLabel: "Pass {current} da {total}",
      title: "Lascha ans planisar tia vacanza.",
      steps: {
        destination: "Destinaziun",
        duration: "Durada",
        style: "Stil",
        budget: "Budget",
        travelers: "Viagiaturs",
        season: "Stagiun",
      },
      destination: {
        label: "Destinaziun",
        placeholder: "p.ex. Marrakech",
        hint: "Ti pos adattar la destinaziun pli tard.",
      },
      duration: {
        choose: "Tscherna ina durada",
        customLabel: "U ina durada persunala",
        customPlaceholder: "p.ex. 10 dis",
      },
      style: {
        question: "Tge stil da viadi ta convena?",
      },
      budget: {
        question: "Co ta para tes budget?",
      },
      travelers: {
        question: "Tgi viagia cun tai?",
      },
      season: {
        label: "Mais / stagiun (opziunala)",
        placeholder: "p.ex. matg u atun",
        hint: "Ans gida tar prets e l'aura.",
      },
      buttons: {
        back: "Enavos",
        next: "Enavant",
        submit: "Crear il plan",
        submitting: "Planisaziun...",
      },
      errors: {
        selectOption: "Tscherna per plaschair ina opziun avant che cuntinuar.",
        selectOptionFinish:
          "Tscherna per plaschair ina opziun avant che finir.",
        planFailed: "Il plan n'ha betg pudì vegnir creà.",
        unexpected: "Sbagl nunspetgà.",
      },
    },
    result: {
      emptyTitle: "Anc nagin plan.",
      emptySubtitle: "Lantscha l'assistent per survegnir tes plan da viadi.",
      emptyCta: "Tar il planisader",
      label: "Resultat",
      headline: "Tes plan per {destination} è pront.",
      basedOn: "Basà sin {travelers} · {travelStyle} · {budget}",
      durationTitle: "Durada recumandada: {duration}",
      durationNote:
        "Nus avain planisà ina maschaida equilibrada da highlights e ruaus.",
      costTitle: "Stimaziun da custs",
      costSubtitle: "Nivel da budget: {budget}",
      itineraryTitle: "Survista da l'itinerari",
      notesTitle: "Remartgas",
    },
    options: {
      duration: {
        duration_3_5: "3-5 dis",
        duration_1_week: "1 emna",
        duration_2_weeks: "2 emnas",
        duration_3_plus_weeks: "3+ emnas",
      },
      travelStyle: {
        Relax: "Relax",
        Nature: "Natura",
        City: "Citad",
        Family: "Famiglia",
        Couple: "Coppia",
        Backpacking: "Backpacking",
      },
      budget: {
        Low: "Bass",
        Medium: "Medi",
        Comfort: "Confort",
      },
      travelers: {
        Solo: "Solo",
        Couple: "Coppia",
        "Family + kids": "Famiglia + uffants",
      },
    },
    legal: {
      kicker: "Legal",
      agb: {
        title: "Cundiziuns generalas",
        intro:
          "Questas cundiziuns generalas reglan l'utilisaziun da la plattafurma HolidAI. Furnitur: Enzo Berther, Privatperson, Sonnenbergstrasse 12, 7205 Zizers, Svizra, info@holidai.ch. Cun utilisar noss servetschs acceptas ti las suandantas cundiziuns.",
        servicesTitle: "Prestaziuns",
        servicesBody:
          "HolidAI furnescha propostas da viadi sustegnidas cun IA. Las novitads servan sco orientaziun e na remplazzan betg cusseglaziuns giuridicas u reservaziuns liantas.",
        liabilityTitle: "Responsabilitad & garanzia",
        liabilityBody:
          "Nus essan mo responsabels per donns ch'èn causads d'in agir intenziunà u grevamain negligient. Nus na garantin betg l'actualitad dals cuntegns.",
        liabilityNote:
          "Infurmaziun: agiunta qua tias cundiziuns, prets e descripziuns da prestaziuns specificas.",
      },
      privacy: {
        title: "Decleraziun da protecziun da datas",
        intro:
          "Nus prendain fitg serius la protecziun da tias datas persunalas. Questa decleraziun ta infurmescha tge datas vegnan tractadas durant la visita da HolidAI e cun tge intent.",
        contact:
          "Post responsabel: HolidAI, Musterstraße 1, 12345 Musterstadt, Germania. Contact: hallo@holidai.de.",
        dataTitle: "Datas tractadas",
        dataItems: [
          "Datas da contact e da cuntegn che ti endateschas activamain.",
          "Datas d'utilisaziun per garantir la funcziun da la website.",
          "Logfiles dal server per analisa tecnica e segirezza.",
        ],
        rightsTitle: "Tes dretgs",
        rightsBody:
          "Ti has adina il dretg d'infurmaziun, rectificaziun, stizzar, limitar il tractament sco er transferibilitad da datas. Ti pos er far opposiziun al tractament.",
        rightsNote:
          "Infurmaziun: agiunta qua tes process effectivs (p.ex. hosting, tracking, newsletter) e las infurmaziuns relevantas.",
      },
      imprint: {
        title: "Impressum",
        company: "Enzo Berther",
        address: "Privatperson\nSonnenbergstrasse 12\n7205 Zizers\nSvizra",
        contact:
          "E-mail: info@holidai.ch",
        responsibleTitle: "Responsabel per il cuntegn",
        responsibleBody:
          "Responsabel tenor § 55 Abs. 2 RStV: Enzo Berther, Sonnenbergstrasse 12, 7205 Zizers, Svizra.",
        responsibleNote:
          "Privatperson, contact vesair survart.",
      },
      copyright: {
        title: "Copyright@2026",
        body:
          "© 2026 HolidAI. Tut ils dretgs reservads. Cuntegn, design e structura da questa website èn protegids dal dretg d'autur.",
        note:
          "In utilisaziun ordaifer las limitaziuns legalas dal dretg d'autur dovra in consentiment scrit prealabel.",
      },
    },
  },
  en: {
    languageLabel: "Language",
    languages: {
      de: "German",
      en: "English",
      fr: "French",
      it: "Italian",
      rm: "Romansh",
    },
    languagesShort: {
      de: "DE",
      en: "EN",
      fr: "FR",
      it: "IT",
      rm: "RM",
    },
    footer: {
      tagline: "Plan smarter vacations · Fast, clear, personal.",
      legalLabel: "Legal",
      links: {
        impressum: "Legal notice",
        datenschutz: "Privacy",
        agb: "Terms",
        copyright: "Copyright@2026",
      },
    },
    home: {
      badge: "AI Vacation Planning",
      title: "Your smarter vacation in minutes.",
      subtitle:
        "Start with a destination. We'll guide you step by step to the perfect plan.",
      destinationLabel: "Where do you want to go?",
      destinationPlaceholder: "e.g. Porto, Iceland, Thailand",
      startPlan: "Start planning",
      errorDestination: "Please enter a destination.",
      highlights: {
        ready: "Ready in minutes.",
        personalized: "Personalized plan.",
        transparent: "Transparent & clear.",
      },
    },
    plan: {
      stepLabel: "Step {current} of {total}",
      title: "Let's plan your vacation.",
      steps: {
        destination: "Destination",
        duration: "Duration",
        style: "Style",
        budget: "Budget",
        travelers: "Travelers",
        season: "Season",
      },
      destination: {
        label: "Destination",
        placeholder: "e.g. Marrakesh",
        hint: "You can adjust the destination later.",
      },
      duration: {
        choose: "Choose a duration",
        customLabel: "Or enter your own duration",
        customPlaceholder: "e.g. 10 days",
      },
      style: {
        question: "Which travel style fits you?",
      },
      budget: {
        question: "How does your budget feel?",
      },
      travelers: {
        question: "Who is traveling with you?",
      },
      season: {
        label: "Month / season (optional)",
        placeholder: "e.g. May or autumn",
        hint: "Helps us with prices & weather.",
      },
      buttons: {
        back: "Back",
        next: "Next",
        submit: "Create plan",
        submitting: "Planning...",
      },
      errors: {
        selectOption: "Please choose an option before continuing.",
        selectOptionFinish: "Please choose an option before finishing.",
        planFailed: "Plan could not be created.",
        unexpected: "Unexpected error.",
      },
    },
    result: {
      emptyTitle: "No plan yet.",
      emptySubtitle: "Start the wizard to get your travel plan.",
      emptyCta: "Go to planner",
      label: "Result",
      headline: "Your {destination} plan is ready.",
      basedOn: "Based on {travelers} · {travelStyle} · {budget}",
      durationTitle: "Recommended duration: {duration}",
      durationNote: "We planned a balanced mix of highlights and downtime.",
      costTitle: "Cost estimate",
      costSubtitle: "Budget level: {budget}",
      itineraryTitle: "Itinerary outline",
      notesTitle: "Notes",
    },
    options: {
      duration: {
        duration_3_5: "3-5 days",
        duration_1_week: "1 week",
        duration_2_weeks: "2 weeks",
        duration_3_plus_weeks: "3+ weeks",
      },
      travelStyle: {
        Relax: "Relax",
        Nature: "Nature",
        City: "City",
        Family: "Family",
        Couple: "Couple",
        Backpacking: "Backpacking",
      },
      budget: {
        Low: "Low",
        Medium: "Medium",
        Comfort: "Comfort",
      },
      travelers: {
        Solo: "Solo",
        Couple: "Couple",
        "Family + kids": "Family + kids",
      },
    },
    legal: {
      kicker: "Legal",
      agb: {
        title: "Terms & Conditions",
        intro:
          "These terms govern the use of the HolidAI platform. Provider: Enzo Berther, Privatperson, Sonnenbergstrasse 12, 7205 Zizers, Switzerland, info@holidai.ch. By using our services you agree to the following conditions.",
        servicesTitle: "Services",
        servicesBody:
          "HolidAI provides AI-assisted travel suggestions. The information provided is for orientation only and does not replace binding booking or legal advice.",
        liabilityTitle: "Liability & warranty",
        liabilityBody:
          "We are only liable for damages caused by intentional or grossly negligent breaches of duty. We do not guarantee the timeliness of content.",
        liabilityNote:
          "Note: Please add your specific terms, pricing, and service descriptions.",
      },
      privacy: {
        title: "Privacy policy",
        intro:
          "We take the protection of your personal data very seriously. This statement informs you about which data is processed when visiting HolidAI and for what purpose.",
        contact:
          "Responsible entity: HolidAI, Musterstraße 1, 12345 Musterstadt, Germany. Contact: hallo@holidai.de.",
        dataTitle: "Processed data",
        dataItems: [
          "Contact and content data you actively provide.",
          "Usage data to ensure website functionality.",
          "Server log files for technical analysis and security.",
        ],
        rightsTitle: "Your rights",
        rightsBody:
          "You always have the right to access, rectify, delete, restrict processing, and data portability. You can also object to processing.",
        rightsNote:
          "Note: Add your actual processes (e.g. hosting, tracking, newsletter) and related information here.",
      },
      imprint: {
        title: "Legal notice",
        company: "Enzo Berther",
        address: "Privatperson\nSonnenbergstrasse 12\n7205 Zizers\nSwitzerland",
        contact:
          "Email: info@holidai.ch",
        responsibleTitle: "Responsible for content",
        responsibleBody:
          "Responsible pursuant to § 55 Abs. 2 RStV: Enzo Berther, Sonnenbergstrasse 12, 7205 Zizers, Switzerland.",
        responsibleNote:
          "Privatperson, contact above.",
      },
      copyright: {
        title: "Copyright@2026",
        body:
          "© 2026 HolidAI. All rights reserved. Content, design, and structure of this website are protected by copyright.",
        note:
          "Any use outside statutory limits of copyright law requires prior written consent.",
      },
    },
  },
} as const;

export const supportedLocales: Locale[] = ["de", "en", "fr", "it", "rm"];

export const durationOptionKeys = [
  "duration_3_5",
  "duration_1_week",
  "duration_2_weeks",
  "duration_3_plus_weeks",
] as const;

export type DurationOptionKey = (typeof durationOptionKeys)[number];

const durationOptionKeySet = new Set(durationOptionKeys);

const getNestedValue = (obj: Record<string, unknown>, path: string) => {
  return path.split(".").reduce<unknown>((current, key) => {
    if (current && typeof current === "object" && key in current) {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
};

export const formatMessage = (message: string, values?: TranslationValues) => {
  if (!values) return message;
  return message.replace(/\{(\w+)\}/g, (match, key) => {
    if (key in values) {
      return String(values[key]);
    }
    return match;
  });
};

export const translateOption = (
  locale: Locale,
  category: "duration" | "travelStyle" | "budget" | "travelers",
  value: string
) => {
  const message = getNestedValue(
    translations[locale].options[category] as Record<string, unknown>,
    value
  );
  if (typeof message === "string") {
    return message;
  }
  const fallbackMessage = getNestedValue(
    translations.de.options[category] as Record<string, unknown>,
    value
  );
  return typeof fallbackMessage === "string" ? fallbackMessage : value;
};

export const resolveDurationLabel = (locale: Locale, value: string) => {
  if (durationOptionKeySet.has(value as DurationOptionKey)) {
    return translateOption(locale, "duration", value);
  }
  return value;
};

export const getTranslations = (locale: Locale) => translations[locale];
