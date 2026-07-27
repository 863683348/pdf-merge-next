export type Lang = 'zh' | 'en';

export type Dict = Record<string, string>;

export interface DictMap {
  zh: Dict;
  en: Dict;
}
