import pt from './default.json';
import en from './default.en.json';

import authPt from "../../components/auth/locales/default.json";
import authEn from "../../components/auth/locales/default.en.json";

import compPt from "../../components/locales/default.json";
import compEn from "../../components/locales/default.en.json";


pt['pt-BR'].auth = authPt['pt-BR'];
pt['pt-BR'].comp = compPt['pt-BR'];

en['en'].comp = compEn['en'];
en['en'].auth = authEn['en'];

export {
    pt,
    en,
};