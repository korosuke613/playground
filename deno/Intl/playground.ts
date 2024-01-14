//
// Intl.Collator
//
const collator = {
  de: ["Z", "a", "z", "ä"].sort(new Intl.Collator("de").compare),
  sv: ["Z", "a", "z", "ä"].sort(new Intl.Collator("sv").compare),
  upper: ["Z", "a", "z", "ä"].sort(
    new Intl.Collator("de", { caseFirst: "upper" }).compare,
  ),
};

//
// Intl.DateTimeFormat
//
const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
const dateTimeFormat = {
  "raw": date,
  "en-US": new Intl.DateTimeFormat("en-US").format(date),
  "unsupported": new Intl.DateTimeFormat(["ban", "ja-JP"]).format(date), // if no locale is supported, it will fallback to ja-JP
};

//
// Intl.DisplayNames
//
const regionNamesInEnglish = new Intl.DisplayNames(["en"], { type: "region" });
const regionNamesInTraditionalChinese = new Intl.DisplayNames(["zh-Hant"], {
  type: "region",
});
const regionNamesInJapanese = new Intl.DisplayNames(["ja"], { type: "region" });
const displayNames = {
  "en-call-us": regionNamesInEnglish.of("US"),
  "cn-call-us": regionNamesInTraditionalChinese.of("US"),
  "ja-call-us": regionNamesInJapanese.of("US"),
};

//
// Intl.ListFormat
//
const vehicles = ["Motorcycle", "Bus", "Car"];
const formatter = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});
const formatter2 = new Intl.ListFormat("de", {
  style: "short",
  type: "disjunction",
});
const formatter3 = new Intl.ListFormat("en", { style: "narrow", type: "unit" });
const formatter4 = new Intl.ListFormat("ja", {
  style: "long",
  type: "conjunction",
});
const listFormat = {
  "en-long-conjunction": formatter.format(vehicles),
  "de-short-disjunction": formatter2.format(vehicles),
  "en-narrow-unit": formatter3.format(vehicles),
  "ja-narrow-unit": formatter4.format(vehicles),
};

//
// Intl.Locale
//
const korean = new Intl.Locale("ko", {
  script: "Kore",
  region: "KR",
  hourCycle: "h23",
  calendar: "gregory",
});
const japanese = new Intl.Locale("ja-Jpan-JP-u-ca-japanese-hc-h12");
const locale = {
  baseName: {
    "korean": korean.baseName,
    "japanese": japanese.baseName,
  },
  hourCycle: {
    "korean": korean.hourCycle,
    "japanese": japanese.hourCycle,
  },
};

//
// Intl.NumberFormat
//
const number = 123456.789;
const numberFormat = {
  "de-DE": new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(
    number,
  ),
  "ja-JP": new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
  }).format(
    number,
  ),
  "en-IN": new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 })
    .format(
      number,
    ),
};

//
// Intl.PluralRules
//
const pr = new Intl.PluralRules("en-US", { type: "ordinal" });
const formatOrdinals = (n: number) => {
  const rule = pr.select(n);
  const suffixes = new Map([
    ["one", "st"],
    ["two", "nd"],
    ["few", "rd"],
    ["other", "th"],
  ]);
  const suffix = suffixes.get(rule);
  return `${n}${suffix}`;
};
const pluralRules = {
  ordinal: {
    one: pr.select(1),
    two: pr.select(2),
    three: pr.select(3),
    four: pr.select(4),
  },
  suffix: {
    one: formatOrdinals(1),
    two: formatOrdinals(2),
    three: formatOrdinals(3),
    four: formatOrdinals(4),
  },
};

//
// Intl.RelativeTimeFormat
//
const rtfEn = new Intl.RelativeTimeFormat("en", {
  localeMatcher: "best fit",
  numeric: "auto",
  style: "long",
});
const rtfJa = new Intl.RelativeTimeFormat("ja", {
  localeMatcher: "best fit",
  numeric: "auto",
  style: "long",
});
const relativeTimeFormat = {
  en: {
    past: rtfEn.format(-1, "day"),
    now: rtfEn.format(0, "day"),
    future: rtfEn.format(1, "day"),
    moreFuture: rtfEn.format(2, "day"),
    moremoreFuture: rtfEn.format(10, "day"),
  },
  ja: {
    past: rtfJa.format(-1, "day"),
    now: rtfJa.format(0, "day"),
    future: rtfJa.format(1, "day"),
    moreFuture: rtfJa.format(2, "day"),
    moremoreFuture: rtfJa.format(10, "day"),
  },
};

//
// Intl.Segmenter
//
const segmenterJa = new Intl.Segmenter("ja", { granularity: "word" });
const string1 = "JavaScriptは、ちょっと分かる。";
const iterator1 = segmenterJa.segment(string1)[Symbol.iterator]();
const segmentsArray = Array.from(iterator1, (segment) => segment.segment);
const segmenter = {
  ja: segmentsArray,
};

//
// Intl.getCanonicalLocales
//
const getCanonicalLocales = {
  "EN-US": Intl.getCanonicalLocales("EN-US"),
  "EN-US_Fr": Intl.getCanonicalLocales(["EN-US", "Fr"]),
};
try {
  Intl.getCanonicalLocales("EN_US");
} catch (err: any) {
  getCanonicalLocales["EN_US"] = err.toString();
}

//
// Intl.supportedValuesOf
//
const supportedValuesOf = {
  calendar: Intl.supportedValuesOf("calendar"),
  collation: Intl.supportedValuesOf("collation"),
  currency: Intl.supportedValuesOf("currency"),
  numberingSystem: Intl.supportedValuesOf("numberingSystem"),
  timeZone: [...Intl.supportedValuesOf("timeZone").slice(0, 10), "..."],
  unit: Intl.supportedValuesOf("unit"),
};

//
// Output
//
console.log(
  {
    "Intl.Collator": collator,
    "Intl.DateTimeFormat": dateTimeFormat,
    "Intl.DisplayNames": displayNames,
    "Intl.ListFormat": listFormat,
    "Intl.Locale": locale,
    "Intl.NumberFormat": numberFormat,
    "Intl.PluralRules": pluralRules,
    "Intl.RelativeTimeFormat": relativeTimeFormat,
    "Intl.Segmenter": segmenter,
    "Intl.getCanonicalLocales": getCanonicalLocales,
    "Intl.supportedValuesOf": supportedValuesOf,
  },
);
