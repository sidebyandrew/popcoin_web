import 'server-only';

const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  'en-US': () => import('./en.json').then((module) => module.default),
  'zh-CN': () => import('./zh-CN.json').then((module) => module.default),
  'zh-TW': () => import('./zh-TW.json').then((module) => module.default),
};

export const getDictionary = async (locale) =>
  dictionaries[locale] ? dictionaries[locale]() : dictionaries['en']();
