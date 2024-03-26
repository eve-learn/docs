import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Image: any;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Book a lesson',
    Image: require('@site/static/img/book.png').default,
    description: (
      <>
        55 minute long lessons. No commission taken from teacher.
      </>
    ),
  },
  {
    title: 'Create Flash Cards, Activities, Courses, and Books',
    Image: require('@site/static/img/flash.png').default,
    description: (
      <>
        As you learn you can create flashcards, you can also create activities for specialized learning. Courses are comprised of multiple activity sets. Books can be uploaded and read with extra learning tools.
      </>
    ),
  },
  {
    title: 'Games and more',
    Image: require('@site/static/img/mcpractice.png').default,
    description: (
      <>
        Daily and multiplayer games are available. They can spice up the classroom experience by serving as a warm-up or custom interactive lesson.
      </>
    ),
  },
];

function Feature({title, Image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Image} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
