import { useLanguage } from '../contexts/LanguageContext';
import { GLOSSARY, GlossaryItem } from '../constants';
import { GLOSSARY_FR } from '../data/glossaryTranslations';
import { OPERATIONS_DATA_FR, MATH_CONCEPTS_DATA_FR, OperationItem } from '../data/operationsTranslations';

export type { OperationItem };

export const useTranslatedGlossary = (): GlossaryItem[] => {
  const { language } = useLanguage();
  return language === 'fr' ? GLOSSARY_FR : GLOSSARY;
};

// Helper to get translated operations data
export const useTranslatedOperations = (operationsData: OperationItem[], mathData: OperationItem[]) => {
  const { language } = useLanguage();
  if (language === 'fr') {
    return {
      operations: OPERATIONS_DATA_FR,
      math: MATH_CONCEPTS_DATA_FR
    };
  }
  return {
    operations: operationsData,
    math: mathData
  };
};
