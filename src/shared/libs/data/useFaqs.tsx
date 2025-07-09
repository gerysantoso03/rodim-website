import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';

type Faqs = {
  title: string;
  content: ReactNode;
};

export function useFaqs(): Faqs[] {
  const t = useTranslations('FAQPage');

  return [
    {
      title: t('faqQuestion1'),
      content: (
        <>
          <p>{t('faqAnswer1')}</p>
          <p>{t('faqAnswer2')}</p>
        </>
      ),
    },
    {
      title: t('faqQuestion2'),
      content: (
        <p>
          {t.rich('faqAnswer3', {
            solve: (chunks) => <span className="font-bold">{chunks}</span>,
          })}
        </p>
      ),
    },
    {
      title: t('faqQuestion3'),
      content: <p>{t('faqAnswer4')}</p>,
    },
    {
      title: t('faqQuestion4'),
      content: (
        <p>
          {t.rich('faqAnswer5', {
            automatic: (chunks) => <span className="font-bold">{chunks}</span>,
            touchless: (chunks) => <span className="font-bold">{chunks}</span>,
          })}
        </p>
      ),
    },
    {
      title: t('faqQuestion5'),
      content: (
        <p>
          {t.rich('faqAnswer6', {
            rodim: (chunks) => <span className="font-bold">{chunks}</span>,
          })}
        </p>
      ),
    },
    {
      title: t('faqQuestion6'),
      content: (
        <>
          <p>
            {t.rich('faqAnswer7', {
              rodim: (chunks) => <span className="font-bold">{chunks}</span>,
              poly: (chunks) => <span className="font-bold">{chunks}</span>,
              selfhealing: (chunks) => (
                <span className="font-bold">{chunks}</span>
              ),
            })}
          </p>
          <p>{t('faqAnswer8')}</p>
        </>
      ),
    },
    {
      title: t('faqQuestion7'),
      content: (
        <ul className="list-disc pl-6 flex flex-col gap-6">
          <li>
            {t.rich('faqAnswer9', {
              rodim1: (chunks) => <span className="font-bold">{chunks}</span>,
            })}
          </li>
          <li>
            {t.rich('faqAnswer10', {
              rodim2: (chunks) => <span className="font-bold">{chunks}</span>,
            })}
          </li>
          <li>
            {t.rich('faqAnswer11', {
              rodim3: (chunks) => <span className="font-bold">{chunks}</span>,
            })}
          </li>
          <li>
            {t.rich('faqAnswer12', {
              rodim4: (chunks) => <span className="font-bold">{chunks}</span>,
            })}
          </li>
          <li>
            {t.rich('faqAnswer13', {
              rodim5: (chunks) => <span className="font-bold">{chunks}</span>,
            })}
          </li>
        </ul>
      ),
    },
  ];
}
