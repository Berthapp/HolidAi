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
        travelMode: "Anreise",
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
      travelMode: {
        question: "Wie möchtest du reisen?",
        customLabel: "Oder eigene Angabe",
        customPlaceholder: "z. B. Campervan oder Nachtzug",
      },
      style: {
        question: "Welcher Reisestil passt zu dir?",
        hint: "Wähle bis zu 3 Reisestile aus.",
      },
      budget: {
        question: "Wie sieht ihr Budget aus?",
        customLabel: "Budget angeben",
        customPlaceholder: "z. B. 2500",
        customHint: "Gib einen Betrag in CHF an.",
      },
      travelers: {
        question: "Wer reist mit?",
        customLabel: "Oder eigene Angabe",
        customPlaceholder: "z. B. 2 Erwachsene, 1 Kind (2 Jahre)",
        childrenLabel: "Wie viele Kinder reisen mit?",
        childrenPlaceholder: "z. B. 2",
        childrenHint: "Wir berücksichtigen die Anzahl für Budget & Programm.",
        friendsLabel: "Wie viele Freunde reisen mit?",
        friendsPlaceholder: "z. B. 4",
        friendsHint: "Wir berücksichtigen die Gruppengrösse im Plan.",
      },
      loading: {
        title: "Reiseplan läuft",
        subtitle: "Wir stellen deinen Urlaub zusammen.",
        messages: [
          "Wir recherchieren die Destination und die beste Reisezeit.",
          "Wir suchen Highlights und familienfreundliche Orte.",
          "Wir bauen eine Route mit passenden Tagesideen.",
        ],
      },
      season: {
        question: "Welche Saison passt dir?",
        label: "Monat / Saison (optional)",
        placeholder: "z. B. Mai oder Herbst",
        hint: "Hilft uns bei Preisen & Wetter.",
        summer: "Sommer",
        winter: "Winter",
        spring: "Frühling",
        autumn: "Herbst",
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
        recaptchaUnavailable:
          "reCAPTCHA ist aktuell nicht verfügbar. Bitte versuche es später erneut.",
        recaptchaFailed:
          "reCAPTCHA-Prüfung fehlgeschlagen. Bitte versuche es erneut.",
        unexpected: "Unerwarteter Fehler.",
      },
    },
    result: {
      emptyTitle: "Noch kein Plan vorhanden.",
      emptySubtitle: "Starte den Wizard, um deinen Reiseplan zu erhalten.",
      emptyCta: "Zum Planer",
      label: "Ergebnis",
      headline: "Dein {destination} Plan ist bereit.",
      basedOn: "Basierend auf {summary}",
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
        Relax: "Entspannung",
        Nature: "Natur",
        City: "Stadt",
        Flexible: "Flexibel",
        Backpacking: "Rucksackreise",
        FamilyFriendly: "Familienfreundlich",
        Shopping: "Shopping",
        Roadtrip: "Roadtrip",
        Wellness: "Wellness",
        Budget: "Budget",
        Luxury: "Luxus",
        Sustainable: "Nachhaltig",
        Adventure: "Abenteuer",
      },
      budget: {
        Low: "Niedrig",
        Medium: "Mittel",
        Comfort: "Komfort",
        Custom: "Budget angeben",
      },
      travelers: {
        Solo: "Allein",
        Couple: "Paar",
        "Family + kids": "Familie + Kinder",
        Friends: "Freunde",
      },
      travelMode: {
        Car: "Auto",
        Train: "Zug",
        Flight: "Flugzeug",
        Ferry: "Fähre",
        Other: "Sonstiges",
      },
    },
    legal: {
      kicker: "Rechtliches",
      agb: {
        title: "Allgemeine Geschäftsbedingungen (AGB)",
        intro:
          "Diese Allgemeinen Geschäftsbedingungen regeln die Nutzung der HolidAI Plattform (holidai.ch). Anbieter: Enzo Berther, Privatperson, Sonnenbergstrasse 12, 7205 Zizers, Schweiz, info@holidai.ch. HolidAI ist kein Reiseveranstalter und vermittelt keine Buchungen.",
        servicesTitle: "Leistungen",
        servicesBody:
          "HolidAI erstellt KI-gestützte Reiseideen und -pläne auf Basis deiner Angaben. Die Inhalte dienen der Information; verbindliche Buchungen erfolgen ausschliesslich über Dritte.",
        liabilityTitle: "Haftung & Gewährleistung",
        liabilityBody:
          "Wir haften nur für Schäden aus vorsätzlicher oder grob fahrlässiger Pflichtverletzung. Für Inhalte externer Links, die Verfügbarkeit von Drittanbietern oder Preis- und Leistungsangaben übernehmen wir keine Gewähr.",
        liabilityNote:
          "Es gilt Schweizer Recht. Gerichtsstand ist – soweit zulässig – Zizers (Schweiz). Wir können diese AGB bei Bedarf aktualisieren; es gilt die jeweils aktuelle Version auf der Website.",
      },
      privacy: {
        title: "Datenschutzerklärung",
        intro:
          "Wir behandeln deine Personendaten gemäss dem Schweizer Datenschutzgesetz (DSG). Diese Erklärung informiert dich über Zweck, Umfang und Empfänger der Bearbeitung.",
        contact:
          "Verantwortliche Stelle: Enzo Berther (HolidAI), Sonnenbergstrasse 12, 7205 Zizers, Schweiz. Kontakt: info@holidai.ch.",
        dataTitle: "Verarbeitete Daten",
        dataItems: [
          "Angaben, die du im Planer eingibst (z. B. Reiseziel, Dauer, Präferenzen, Freitext).",
          "Nutzungs- und Zugriffsdaten (z. B. IP-Adresse, Geräte- und Browserinformationen) sowie Server-Logfiles.",
          "Cookies zur Speicherung deiner Einwilligung (Consent).",
          "Webanalyse via Google Analytics (nur mit Einwilligung).",
          "Schutz vor Missbrauch durch Google reCAPTCHA.",
          "Hosting der Website über Vercel (Vercel Inc.) und Domain-Hosting über Hostpoint AG (Schweiz).",
        ],
        aiTitle: "Einsatz von KI-Diensten",
        aiBody:
          "Zur Erstellung von Reisevorschlägen nutzen wir je nach Konfiguration einen KI-Dienst (z. B. OpenAI, Anthropic oder Google). Deine Eingaben werden an den jeweiligen Anbieter übermittelt. Daten können dabei in Länder ausserhalb der Schweiz/EWR übertragen werden; wir stützen uns auf anerkannte Garantien wie Standardvertragsklauseln.",
        rightsTitle: "Deine Rechte",
        rightsBody:
          "Du hast das Recht auf Auskunft, Herausgabe, Berichtigung, Löschung und Widerspruch. Zudem kannst du die Einschränkung der Bearbeitung verlangen.",
        rightsNote:
          "Für Anfragen zu deinen Rechten kontaktiere uns bitte unter info@holidai.ch.",
      },
      imprint: {
        title: "Impressum",
        company: "Enzo Berther",
        address: "Privatperson\nSonnenbergstrasse 12\n7205 Zizers\nSchweiz",
        contact:
          "E-Mail: info@holidai.ch",
        responsibleTitle: "Verantwortlich für den Inhalt",
        responsibleBody:
          "Verantwortlich für den Inhalt: Enzo Berther, Sonnenbergstrasse 12, 7205 Zizers, Schweiz.",
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
        travelMode: "Transport",
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
      travelMode: {
        question: "Comment souhaitez-vous voyager ?",
        customLabel: "Ou saisie libre",
        customPlaceholder: "ex. van aménagé ou train de nuit",
      },
      style: {
        question: "Quel style de voyage vous convient ?",
        hint: "Choisissez jusqu'à 3 styles de voyage.",
      },
      budget: {
        question: "À quoi ressemble votre budget ?",
        customLabel: "Indiquer un budget",
        customPlaceholder: "p. ex. 2500",
        customHint: "Saisissez un montant en CHF.",
      },
      travelers: {
        question: "Qui voyage avec vous ?",
        customLabel: "Ou saisie libre",
        customPlaceholder: "p. ex. 2 adultes, 1 enfant (2 ans)",
        childrenLabel: "Combien d'enfants voyagent avec vous ?",
        childrenPlaceholder: "p. ex. 2",
        childrenHint: "Nous en tenons compte pour le budget et le programme.",
        friendsLabel: "Combien d'amis voyagent avec vous ?",
        friendsPlaceholder: "p. ex. 4",
        friendsHint: "Nous prenons en compte la taille du groupe.",
      },
      loading: {
        title: "Planification en cours",
        subtitle: "Nous préparons votre itinéraire.",
        messages: [
          "Nous recherchons la destination et la meilleure période.",
          "Nous cherchons des incontournables et des lieux adaptés aux familles.",
          "Nous construisons un itinéraire avec des idées de journées.",
        ],
      },
      season: {
        question: "Quelle saison préférez-vous ?",
        label: "Mois / saison (optionnel)",
        placeholder: "ex. mai ou automne",
        hint: "Nous aide pour les prix et la météo.",
        summer: "Été",
        winter: "Hiver",
        spring: "Printemps",
        autumn: "Automne",
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
        recaptchaUnavailable:
          "reCAPTCHA n'est pas disponible pour le moment. Veuillez réessayer plus tard.",
        recaptchaFailed:
          "La vérification reCAPTCHA a échoué. Veuillez réessayer.",
        unexpected: "Erreur inattendue.",
      },
    },
    result: {
      emptyTitle: "Pas encore de plan.",
      emptySubtitle: "Lancez l'assistant pour obtenir votre plan de voyage.",
      emptyCta: "Aller au planificateur",
      label: "Résultat",
      headline: "Votre plan pour {destination} est prêt.",
      basedOn: "Basé sur {summary}",
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
        Flexible: "Flexibel",
        Backpacking: "Sac à dos",
        FamilyFriendly: "Familial",
        Shopping: "Shopping",
        Roadtrip: "Road trip",
        Wellness: "Bien-être",
        Budget: "Budget",
        Luxury: "Luxe",
        Sustainable: "Durable",
        Adventure: "Aventure",
      },
      budget: {
        Low: "Faible",
        Medium: "Moyen",
        Comfort: "Confort",
        Custom: "Indiquer un budget",
      },
      travelers: {
        Solo: "Solo",
        Couple: "Couple",
        "Family + kids": "Famille + enfants",
        Friends: "Amis",
      },
      travelMode: {
        Car: "Voiture",
        Train: "Train",
        Flight: "Avion",
        Ferry: "Ferry",
        Other: "Autre",
      },
    },
    legal: {
      kicker: "Mentions légales",
      agb: {
        title: "Conditions générales (CGV)",
        intro:
          "Ces conditions régissent l'utilisation de la plateforme HolidAI (holidai.ch). Fournisseur : Enzo Berther, Privatperson, Sonnenbergstrasse 12, 7205 Zizers, Suisse, info@holidai.ch. HolidAI n'est pas un voyagiste et ne réalise pas de réservations.",
        servicesTitle: "Prestations",
        servicesBody:
          "HolidAI fournit des idées et des plans de voyage assistés par IA à partir de vos saisies. Les contenus sont informatifs ; les réservations se font exclusivement auprès de tiers.",
        liabilityTitle: "Responsabilité et garantie",
        liabilityBody:
          "Nous ne répondons que des dommages causés par une faute intentionnelle ou une négligence grave. Aucune garantie pour les liens externes, la disponibilité des tiers ou les indications de prix et prestations.",
        liabilityNote:
          "Le droit suisse s'applique. Le for juridique est Zizers (Suisse), dans la mesure permise. Nous pouvons mettre à jour ces conditions ; la version en ligne fait foi.",
      },
      privacy: {
        title: "Politique de confidentialité",
        intro:
          "Nous traitons vos données personnelles conformément à la loi fédérale suisse sur la protection des données (LPD). Cette déclaration explique la finalité, l'étendue et les destinataires du traitement.",
        contact:
          "Entité responsable : Enzo Berther (HolidAI), Sonnenbergstrasse 12, 7205 Zizers, Suisse. Contact : info@holidai.ch.",
        dataTitle: "Données traitées",
        dataItems: [
          "Informations saisies dans le planificateur (par ex. destination, durée, préférences, texte libre).",
          "Données d'utilisation et d'accès (par ex. adresse IP, informations sur l'appareil et le navigateur) ainsi que journaux serveur.",
          "Cookies pour mémoriser votre consentement.",
          "Analyse d'audience via Google Analytics (uniquement avec consentement).",
          "Protection contre les abus via Google reCAPTCHA.",
          "Hébergement du site via Vercel (Vercel Inc.) et du domaine via Hostpoint AG (Suisse).",
        ],
        aiTitle: "Utilisation de services d'IA",
        aiBody:
          "Pour générer des suggestions de voyage, nous utilisons selon la configuration un service d'IA (par ex. OpenAI, Anthropic ou Google). Vos saisies sont transmises au prestataire concerné. Des transferts de données hors Suisse/EEE peuvent avoir lieu ; nous nous appuyons sur des garanties reconnues telles que les clauses contractuelles types.",
        rightsTitle: "Vos droits",
        rightsBody:
          "Vous disposez d'un droit d'accès, de remise d'une copie, de rectification, d'effacement et d'opposition. Vous pouvez également demander la limitation du traitement.",
        rightsNote:
          "Pour toute demande relative à vos droits, contactez-nous à info@holidai.ch.",
      },
      imprint: {
        title: "Mentions légales",
        company: "Enzo Berther",
        address: "Privatperson\nSonnenbergstrasse 12\n7205 Zizers\nSuisse",
        contact:
          "E-mail : info@holidai.ch",
        responsibleTitle: "Responsable du contenu",
        responsibleBody:
          "Responsable du contenu : Enzo Berther, Sonnenbergstrasse 12, 7205 Zizers, Suisse.",
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
        travelMode: "Trasporto",
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
      travelMode: {
        question: "Come vuoi viaggiare?",
        customLabel: "Oppure inserisci il tuo mezzo",
        customPlaceholder: "es. camper o treno notturno",
      },
      style: {
        question: "Quale stile di viaggio fa per te?",
        hint: "Seleziona fino a 3 stili di viaggio.",
      },
      budget: {
        question: "Qual è il tuo budget?",
        customLabel: "Indica un budget",
        customPlaceholder: "es. 2500",
        customHint: "Inserisci un importo in CHF.",
      },
      travelers: {
        question: "Chi viaggia con te?",
        customLabel: "Oppure inserisci liberamente",
        customPlaceholder: "es. 2 adulti, 1 bambino (2 anni)",
        childrenLabel: "Quanti bambini viaggiano con te?",
        childrenPlaceholder: "es. 2",
        childrenHint: "Lo consideriamo per budget e programma.",
        friendsLabel: "Quanti amici viaggiano con te?",
        friendsPlaceholder: "es. 4",
        friendsHint: "Consideriamo la dimensione del gruppo nel piano.",
      },
      loading: {
        title: "Pianificazione in corso",
        subtitle: "Stiamo preparando il tuo viaggio.",
        messages: [
          "Stiamo cercando la destinazione e il periodo migliore.",
          "Selezioniamo attrazioni e luoghi adatti alle famiglie.",
          "Costruiamo un itinerario con idee giornaliere.",
        ],
      },
      season: {
        question: "Quale stagione preferisci?",
        label: "Mese / stagione (opzionale)",
        placeholder: "es. maggio o autunno",
        hint: "Ci aiuta con prezzi e meteo.",
        summer: "Estate",
        winter: "Inverno",
        spring: "Primavera",
        autumn: "Autunno",
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
        recaptchaUnavailable:
          "reCAPTCHA non è disponibile al momento. Riprova più tardi.",
        recaptchaFailed:
          "La verifica reCAPTCHA non è riuscita. Riprova.",
        unexpected: "Errore imprevisto.",
      },
    },
    result: {
      emptyTitle: "Nessun piano ancora.",
      emptySubtitle: "Avvia il wizard per ottenere il tuo piano di viaggio.",
      emptyCta: "Vai al planner",
      label: "Risultato",
      headline: "Il tuo piano per {destination} è pronto.",
      basedOn: "Basato su {summary}",
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
        Flexible: "Flessibile",
        Backpacking: "Zaino in spalla",
        FamilyFriendly: "Adatto alle famiglie",
        Shopping: "Shopping",
        Roadtrip: "Road trip",
        Wellness: "Benessere",
        Budget: "Budget",
        Luxury: "Lusso",
        Sustainable: "Sostenibile",
        Adventure: "Avventura",
      },
      budget: {
        Low: "Basso",
        Medium: "Medio",
        Comfort: "Comfort",
        Custom: "Indica un budget",
      },
      travelers: {
        Solo: "Solo",
        Couple: "Coppia",
        "Family + kids": "Famiglia + bambini",
        Friends: "Amici",
      },
      travelMode: {
        Car: "Auto",
        Train: "Treno",
        Flight: "Aereo",
        Ferry: "Traghetto",
        Other: "Altro",
      },
    },
    legal: {
      kicker: "Legale",
      agb: {
        title: "Termini e condizioni",
        intro:
          "Questi termini regolano l'utilizzo della piattaforma HolidAI (holidai.ch). Fornitore: Enzo Berther, Privatperson, Sonnenbergstrasse 12, 7205 Zizers, Svizzera, info@holidai.ch. HolidAI non è un tour operator e non effettua prenotazioni.",
        servicesTitle: "Servizi",
        servicesBody:
          "HolidAI fornisce idee e piani di viaggio assistiti dall'IA sulla base dei tuoi input. I contenuti sono informativi; le prenotazioni avvengono esclusivamente tramite terzi.",
        liabilityTitle: "Responsabilità e garanzia",
        liabilityBody:
          "Rispondiamo solo per danni causati da violazioni intenzionali o da grave negligenza. Nessuna garanzia per link esterni, disponibilità dei terzi o indicazioni di prezzo e prestazioni.",
        liabilityNote:
          "Si applica il diritto svizzero. Il foro competente è Zizers (Svizzera), nei limiti consentiti. Possiamo aggiornare questi termini; fa fede la versione più recente sul sito.",
      },
      privacy: {
        title: "Informativa sulla privacy",
        intro:
          "Trattiamo i tuoi dati personali in conformità con la Legge federale svizzera sulla protezione dei dati (LPD). Questa informativa spiega finalità, ambito e destinatari del trattamento.",
        contact:
          "Titolare del trattamento: Enzo Berther (HolidAI), Sonnenbergstrasse 12, 7205 Zizers, Svizzera. Contatto: info@holidai.ch.",
        dataTitle: "Dati trattati",
        dataItems: [
          "Informazioni inserite nel planner (ad es. destinazione, durata, preferenze, testo libero).",
          "Dati di utilizzo e accesso (ad es. indirizzo IP, informazioni su dispositivo e browser) e log del server.",
          "Cookie per memorizzare il consenso.",
          "Analisi del traffico tramite Google Analytics (solo con consenso).",
          "Protezione da abusi tramite Google reCAPTCHA.",
          "Hosting del sito tramite Vercel (Vercel Inc.) e dominio tramite Hostpoint AG (Svizzera).",
        ],
        aiTitle: "Uso di servizi di IA",
        aiBody:
          "Per generare suggerimenti di viaggio utilizziamo, a seconda della configurazione, un servizio di IA (ad es. OpenAI, Anthropic o Google). I tuoi input vengono trasmessi al relativo fornitore. I dati possono essere trasferiti fuori dalla Svizzera/SEE; ci basiamo su garanzie riconosciute come le clausole contrattuali standard.",
        rightsTitle: "I tuoi diritti",
        rightsBody:
          "Hai il diritto di accesso, di ottenere una copia, di rettifica, di cancellazione e di opposizione. Puoi inoltre richiedere la limitazione del trattamento.",
        rightsNote:
          "Per richieste relative ai tuoi diritti, contattaci a info@holidai.ch.",
      },
      imprint: {
        title: "Note legali",
        company: "Enzo Berther",
        address: "Privatperson\nSonnenbergstrasse 12\n7205 Zizers\nSvizzera",
        contact:
          "Email: info@holidai.ch",
        responsibleTitle: "Responsabile del contenuto",
        responsibleBody:
          "Responsabile del contenuto: Enzo Berther, Sonnenbergstrasse 12, 7205 Zizers, Svizzera.",
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
        travelMode: "Viadi",
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
      travelMode: {
        question: "Co vuls ti viagiar?",
        customLabel: "U ina atgna indicaziun",
        customPlaceholder: "p.ex. camper u tren da notg",
      },
      style: {
        question: "Tge stil da viadi ta convena?",
        hint: "Tscherna fin a 3 stils da viadi.",
      },
      budget: {
        question: "Co vesa tes budget ora?",
        customLabel: "Inditgar in budget",
        customPlaceholder: "p.ex. 2500",
        customHint: "Endatescha ina summa en CHF.",
      },
      travelers: {
        question: "Tgi viagia cun tai?",
        customLabel: "U ina atgna indicaziun",
        customPlaceholder: "p.ex. 2 persunas creschidas, 1 uffant (2 onns)",
        childrenLabel: "Dumbraziuns d'uffants che viagian cun tai?",
        childrenPlaceholder: "p.ex. 2",
        childrenHint: "Nus resguardain quai per budget e program.",
        friendsLabel: "Quants amis viagian cun tai?",
        friendsPlaceholder: "p.ex. 4",
        friendsHint: "Nus resguardain la grondezza dal grup.",
      },
      loading: {
        title: "Planisaziun en curs",
        subtitle: "Nus tschentain ensemen tia vacanza.",
        messages: [
          "Nus tschertgain la destinaziun ed il meglier temp.",
          "Nus tschertgain highlights e lieus adattads per famiglias.",
          "Nus construin ina ruta cun novitads per mintga di.",
        ],
      },
      season: {
        question: "Tge stagiun ta stat bain?",
        label: "Mais / stagiun (opziunala)",
        placeholder: "p.ex. matg u atun",
        hint: "Ans gida tar prets e l'aura.",
        summer: "Stad",
        winter: "Enviern",
        spring: "Primavaira",
        autumn: "Atun",
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
        recaptchaUnavailable:
          "reCAPTCHA n'è betg disponibel il mument. Emprova pli tard.",
        recaptchaFailed:
          "La verificaziun reCAPTCHA n'è betg reussida. Emprova anc ina giada.",
        unexpected: "Sbagl nunspetgà.",
      },
    },
    result: {
      emptyTitle: "Anc nagin plan.",
      emptySubtitle: "Lantscha l'assistent per survegnir tes plan da viadi.",
      emptyCta: "Tar il planisader",
      label: "Resultat",
      headline: "Tes plan per {destination} è pront.",
      basedOn: "Basà sin {summary}",
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
        Flexible: "Flexibel",
        Backpacking: "Backpacking",
        FamilyFriendly: "Adattà a famiglias",
        Shopping: "Shopping",
        Roadtrip: "Roadtrip",
        Wellness: "Wellness",
        Budget: "Budget",
        Luxury: "Luxus",
        Sustainable: "Sustegnibel",
        Adventure: "Aventura",
      },
      budget: {
        Low: "Bass",
        Medium: "Medi",
        Comfort: "Confort",
        Custom: "Inditgar in budget",
      },
      travelers: {
        Solo: "Solo",
        Couple: "Coppia",
        "Family + kids": "Famiglia + uffants",
        Friends: "Amis",
      },
      travelMode: {
        Car: "Auto",
        Train: "Tren",
        Flight: "Avion",
        Ferry: "Ferry",
        Other: "Auter",
      },
    },
    legal: {
      kicker: "Legal",
      agb: {
        title: "Cundiziuns generalas",
        intro:
          "Questas cundiziuns reglan l'utilisaziun da la plattafurma HolidAI (holidai.ch). Furnitur: Enzo Berther, Privatperson, Sonnenbergstrasse 12, 7205 Zizers, Svizra, info@holidai.ch. HolidAI n'è betg in organisatur da viadis e na fa naginas reservaziuns.",
        servicesTitle: "Prestaziuns",
        servicesBody:
          "HolidAI furnescha novitads ed ideas da viadi sustegnidas cun IA sin basa da tias indicaziuns. Ils cuntegns servan sco infurmaziun; reservaziuns vegnan fatgas mo tar terzs.",
        liabilityTitle: "Responsabilitad & garanzia",
        liabilityBody:
          "Nus essan mo responsabels per donns ch'èn causads d'in agir intenziunà u grevamain negligient. Nagin'assicuranza per links externs, la disponibladad da terzs u indicaziuns da prets e prestaziuns.",
        liabilityNote:
          "I vala il dretg svizzer. Gerichtsstand è – uschè lunsch sco lubì – Zizers (Svizra). Nus pudain actualisar questas cundiziuns; vala la versiun actuala sin la website.",
      },
      privacy: {
        title: "Decleraziun da protecziun da datas",
        intro:
          "Nus tractain tias datas persunalas tenor la lescha federala svizra davart la protecziun da datas (LPD). Questa decleraziun explitgescha intent, extent e destinataris dal tractament.",
        contact:
          "Post responsabel: Enzo Berther (HolidAI), Sonnenbergstrasse 12, 7205 Zizers, Svizra. Contact: info@holidai.ch.",
        dataTitle: "Datas tractadas",
        dataItems: [
          "Infurmaziuns che ti endateschas en il planner (p.ex. destinaziun, durada, preferenzas, text liber).",
          "Datas d'utilisaziun e d'access (p.ex. adressa IP, infurmaziuns davart apparat e browser) e logfiles dal server.",
          "Cookies per memorisar il consentiment.",
          "Analisa via Google Analytics (mo cun consentiment).",
          "Protecziun cunter abus tras Google reCAPTCHA.",
          "Hosting da la website via Vercel (Vercel Inc.) e da la domain via Hostpoint AG (Svizra).",
        ],
        aiTitle: "Utilisaziun da servetschs d'IA",
        aiBody:
          "Per generar propostas da viadi utilisain nus tenor la configuraziun in servetsch d'IA (p.ex. OpenAI, Anthropic u Google). Tias indicaziuns vegnan transmittidas al furnitur respectiv. Datas pon vegnir transferidas ordaifer Svizra/SEE; nus ans basain sin garanzias renconuschidas sco clausulas contractuala standard.",
        rightsTitle: "Tes dretgs",
        rightsBody:
          "Ti has il dretg d'infurmaziun, da survegnir ina copia, da rectificaziun, da stizzar e d'opposiziun. Ti pos era dumandar ina limitaziun dal tractament.",
        rightsNote:
          "Per dumondas davart tes dretgs ans contactescha per plaschair sin info@holidai.ch.",
      },
      imprint: {
        title: "Impressum",
        company: "Enzo Berther",
        address: "Privatperson\nSonnenbergstrasse 12\n7205 Zizers\nSvizra",
        contact:
          "E-mail: info@holidai.ch",
        responsibleTitle: "Responsabel per il cuntegn",
        responsibleBody:
          "Responsabel per il cuntegn: Enzo Berther, Sonnenbergstrasse 12, 7205 Zizers, Svizra.",
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
        travelMode: "Transport",
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
      travelMode: {
        question: "How would you like to travel?",
        customLabel: "Or enter your own",
        customPlaceholder: "e.g. camper van or night train",
      },
      style: {
        question: "Which travel style fits you?",
        hint: "Select up to 3 travel styles.",
      },
      budget: {
        question: "What does your budget look like?",
        customLabel: "Enter a budget",
        customPlaceholder: "e.g. 2500",
        customHint: "Enter an amount in CHF.",
      },
      travelers: {
        question: "Who is traveling with you?",
        customLabel: "Or enter your own",
        customPlaceholder: "e.g. 2 adults, 1 child (age 2)",
        childrenLabel: "How many kids are traveling with you?",
        childrenPlaceholder: "e.g. 2",
        childrenHint: "We factor this into budget and activities.",
        friendsLabel: "How many friends are traveling with you?",
        friendsPlaceholder: "e.g. 4",
        friendsHint: "We factor the group size into the plan.",
      },
      loading: {
        title: "Planning in progress",
        subtitle: "We're putting your trip together.",
        messages: [
          "Researching the destination and best timing.",
          "Looking up highlights and family-friendly spots.",
          "Building a route with daily ideas.",
        ],
      },
      season: {
        question: "Which season suits you?",
        label: "Month / season (optional)",
        placeholder: "e.g. May or autumn",
        hint: "Helps us with prices & weather.",
        summer: "Summer",
        winter: "Winter",
        spring: "Spring",
        autumn: "Autumn",
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
        recaptchaUnavailable:
          "reCAPTCHA is currently unavailable. Please try again later.",
        recaptchaFailed: "reCAPTCHA verification failed. Please try again.",
        unexpected: "Unexpected error.",
      },
    },
    result: {
      emptyTitle: "No plan yet.",
      emptySubtitle: "Start the wizard to get your travel plan.",
      emptyCta: "Go to planner",
      label: "Result",
      headline: "Your {destination} plan is ready.",
      basedOn: "Based on {summary}",
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
        Flexible: "Flexible",
        Backpacking: "Backpacking",
        FamilyFriendly: "Family-friendly",
        Shopping: "Shopping",
        Roadtrip: "Road trip",
        Wellness: "Wellness",
        Budget: "Budget",
        Luxury: "Luxury",
        Sustainable: "Sustainable",
        Adventure: "Adventure",
      },
      budget: {
        Low: "Low",
        Medium: "Medium",
        Comfort: "Comfort",
        Custom: "Enter a budget",
      },
      travelers: {
        Solo: "Solo",
        Couple: "Couple",
        "Family + kids": "Family + kids",
        Friends: "Friends",
      },
      travelMode: {
        Car: "Car",
        Train: "Train",
        Flight: "Flight",
        Ferry: "Ferry",
        Other: "Other",
      },
    },
    legal: {
      kicker: "Legal",
      agb: {
        title: "Terms & Conditions",
        intro:
          "These terms govern the use of the HolidAI platform (holidai.ch). Provider: Enzo Berther, Privatperson, Sonnenbergstrasse 12, 7205 Zizers, Switzerland, info@holidai.ch. HolidAI is not a tour operator and does not broker bookings.",
        servicesTitle: "Services",
        servicesBody:
          "HolidAI provides AI-assisted travel ideas and plans based on your inputs. The content is informational; bookings are made exclusively with third parties.",
        liabilityTitle: "Liability & warranty",
        liabilityBody:
          "We are only liable for damages caused by intentional or grossly negligent breaches of duty. We provide no warranty for external links, third-party availability, or price and service details.",
        liabilityNote:
          "Swiss law applies. The place of jurisdiction is Zizers (Switzerland), where permitted. We may update these terms; the current version on the website applies.",
      },
      privacy: {
        title: "Privacy policy",
        intro:
          "We process personal data in accordance with the Swiss Federal Act on Data Protection (FADP). This statement explains the purpose, scope, and recipients of processing.",
        contact:
          "Responsible entity: Enzo Berther (HolidAI), Sonnenbergstrasse 12, 7205 Zizers, Switzerland. Contact: info@holidai.ch.",
        dataTitle: "Processed data",
        dataItems: [
          "Information you enter in the planner (e.g. destination, duration, preferences, free text).",
          "Usage and access data (e.g. IP address, device and browser information) and server log files.",
          "Cookies to store your consent status.",
          "Web analytics via Google Analytics (only with consent).",
          "Abuse protection via Google reCAPTCHA.",
          "Website hosting via Vercel (Vercel Inc.) and domain hosting via Hostpoint AG (Switzerland).",
        ],
        aiTitle: "Use of AI services",
        aiBody:
          "To generate travel suggestions, we use an AI service depending on configuration (e.g. OpenAI, Anthropic, or Google). Your inputs are transmitted to the respective provider. Data may be transferred outside Switzerland/EEA; we rely on recognized safeguards such as standard contractual clauses.",
        rightsTitle: "Your rights",
        rightsBody:
          "You have the right to access, obtain a copy, rectify, delete, and object. You can also request a restriction of processing.",
        rightsNote:
          "For requests regarding your rights, please contact us at info@holidai.ch.",
      },
      imprint: {
        title: "Legal notice",
        company: "Enzo Berther",
        address: "Privatperson\nSonnenbergstrasse 12\n7205 Zizers\nSwitzerland",
        contact:
          "Email: info@holidai.ch",
        responsibleTitle: "Responsible for content",
        responsibleBody:
          "Responsible for content: Enzo Berther, Sonnenbergstrasse 12, 7205 Zizers, Switzerland.",
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

export type TranslationTree = typeof translations.de;

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
  category: "duration" | "travelStyle" | "budget" | "travelers" | "travelMode",
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
