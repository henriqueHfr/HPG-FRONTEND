import styles from '@/components/CardSignIn/CardSignIn.module.css'
import Link from 'next/link';

type ParagraphLinkType = {
  texto_principal: string;
  texto_link: string;
  rota: string;
}

export default function ParagraphLink({texto_principal, texto_link, rota}: ParagraphLinkType) {
  return (
    <p>
      {texto_principal}
      <Link href={rota} className={styles.accoun_link}>
        {texto_link}
      </Link>
    </p>
  );
}
