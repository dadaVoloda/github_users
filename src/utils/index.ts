export const formatNumber = (num: number): string | number => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num;
};

type PluralizeStr = 'подписчик' | 'подписка' | 'репозиторий';
export const pluralize = (n: number, str: PluralizeStr): string => {
  const map: Record<PluralizeStr, string[]> = {
    подписчик: ['подписчик', 'подписчика', 'подписчиков'],
    подписка: ['подписка', 'подписки', 'подписок'],
    репозиторий: ['репозиторий', 'репозитория', 'репозиториев'],
  };

  if (n >= 1000) return map[str][2];
  if (n % 10 === 1 && n % 100 !== 11) return map[str][0];
  if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) return map[str][1];
  else return map[str][2];
};
