import React from 'react';
import classNames from '@lib/classNames';
import Navbar from './Navbar';
import { Button, Title, Icon } from '@components/atoms';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useRouter } from 'next/router';

export type props = {
  variant?: 'primary' | 'secondary' | 'third';
  className?: string;
};
const Hero: React.FC<props> = ({ className, variant }) => {
  const router = useRouter();
  const { step } = router.query;
  return (
    <div className={classNames('relative', className)}>
      <img
        className="absolute top-0 left-0 z-0 object-cover object-center w-full h-screen "
        src={variant == 'primary' ? '/images/hero.png' : '/images/jump-2.png'}
        alt=""
      />
      <div className="relative z-10 px-5 text-white">
        <Navbar />
        {variant == 'primary' ? (
          <div className="flex flex-col items-center max-w-4xl mx-auto mt-24 text-center ">
            <Title level="h1" text="Experts en crédits d’impôt R&D et subventions" />
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
              <Button
                className="my-12 sm:w-[500px]"
                label="Contactez-nous pour une rencontre gratuite"
                icon={<Icon className="text-white" name="arrow-right" />}
                iconPosition="right"
                size="large"
                fullWidth={true}
              />
            </Link>
          </div>
        ) : variant == 'secondary' ? (
          <div className="max-w-5xl mx-auto mt-24">
            <p className="text-base font-bold  sm:mt-14 sm:text-xl lg:text-3xl">
              Chaque année, plus de 20 000 entreprises canadiennes de toute taille et de tout secteur se
              partagent trois milliards de dollars en incitatifs fiscaux dans le cadre du programme fédéral de
              la RS&DE. Seulement 50% des entreprises qui y ont droit réclament des crédits RS&DE.{' '}
              {step == '1a'
                ? 'Remplissez le formulaire ci-joint pour savoir si votre projet se qualifie.'
                : step == '1b' &&
                  'Remplissez le formulaire ci-joint pour savoir quel montant vous sera remboursé.'}
            </p>
          </div>
        ) : (
          <div className="max-w-5xl p-5 mx-auto mt-8 text-base font-bold sm:mt-14 sm:text-xl lg:text-3xl">
            <p>
            Des centaines de programmes de subventions sont disponibles avec des montants allant de milliers à des millions de dollars. Remplissez le formulaire ci-joint pour savoir si votre projet se qualifie.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

Hero.defaultProps = {
  variant: 'primary',
};

export default Hero;
