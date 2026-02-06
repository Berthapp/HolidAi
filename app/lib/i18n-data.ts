export type Locale = "de" | "fr" | "it" | "rm";

type TranslationValues = Record<string, string | number>;

export const translations = {
  de: {
    languageLabel: "Sprache",
    languages: {
      de: "Deutsch",
      fr: "Französisch",
      it: "Italienisch",
      rm: "Rumantsch Grischun",
    },
    languagesShort: {
      de: "DE",
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
          "Diese Allgemeinen Geschäftsbedingungen regeln die Nutzung der HolidAI Plattform. Mit der Nutzung unserer Services erklärst du dich mit den folgenden Bedingungen einverstanden.",
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
        company: "HolidAI",
        address: "Musterstraße 1\n12345 Musterstadt\nDeutschland",
        contact:
          "Vertreten durch: Max Mustermann\nE-Mail: hallo@holidai.de\nTelefon: +49 123 456 789",
        responsibleTitle: "Verantwortlich für den Inhalt",
        responsibleBody:
          "Verantwortlich nach § 55 Abs. 2 RStV: Max Mustermann, Musterstraße 1, 12345 Musterstadt.",
        responsibleNote:
          "Hinweis: Bitte ersetze die Platzhalter durch die korrekten Angaben deines Unternehmens.",
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
      fr: "Français",
      it: "Italien",
      rm: "Rumantsch Grischun",
    },
    languagesShort: {
      de: "DE",
      fr: "FR",
      it: "IT",
      rm: "RM",
    },
  },
  it: {
    languageLabel: "Lingua",
    languages: {
      de: "Tedesco",
      fr: "Francese",
      it: "Italiano",
      rm: "Rumantsch Grischun",
    },
    languagesShort: {
      de: "DE",
      fr: "FR",
      it: "IT",
      rm: "RM",
    },
  },
  rm: {
    languageLabel: "Lingua",
    languages: {
      de: "Tudestg",
      fr: "Franzos",
      it: "Talian",
      rm: "Rumantsch Grischun",
    },
    languagesShort: {
      de: "DE",
      fr: "FR",
      it: "IT",
      rm: "RM",
    },
  },
  en: {
    languageLabel: "Language",
    languages: {
      de: "German",
      fr: "French",
      it: "Italian",
      rm: "Rumantsch Grischun",
    },
    languagesShort: {
      de: "DE",
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
          "These terms govern the use of the HolidAI platform. By using our services you agree to the following conditions.",
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
        company: "HolidAI",
        address: "Musterstraße 1\n12345 Musterstadt\nGermany",
        contact:
          "Represented by: Max Mustermann\nEmail: hallo@holidai.de\nPhone: +49 123 456 789",
        responsibleTitle: "Responsible for content",
        responsibleBody:
          "Responsible pursuant to § 55 Abs. 2 RStV: Max Mustermann, Musterstraße 1, 12345 Musterstadt.",
        responsibleNote:
          "Note: Please replace the placeholders with the correct company details.",
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

export const supportedLocales: Locale[] = ["de", "fr", "it", "rm"];

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
