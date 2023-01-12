import React from 'react';
import classNames from '@lib/classNames';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { SwiperRightAnimation, Icon } from '@components/atoms';
import { ClickAwayListener } from '@mui/material';
import { useRouter } from 'next/router';
export type props = {
  className?: string;
};
const Navbar: React.FC<props> = ({ className }) => {
  const router = useRouter();
  return (
    <Disclosure>
      {({ close }) => (
        <>
          <div className={classNames('h-32 flex items-center', className)}>
            <div className="flex justify-between w-full section-container">
              <Link href="/">
                <img className="w-auto h-8" src="/icons/logo.svg" />
              </Link>

              <div className="items-center hidden max-w-2xl space-x-3 text-lg font-bold text-center text-white md:flex">
                <Link href="/">Page d'accueil</Link>
                <Link href="/credits?step=1a">Crédits R&D (RS&DE) Éligibilité</Link>
                <Link href="/credits?step=1b">Crédits R&D (RS&DE) Calculateur</Link>
                <Link href="/subventions">Subventions Admissibilité</Link>
              </div>
              <Disclosure.Button className="md:hidden">
                <Icon name="menu" />
              </Disclosure.Button>
            </div>
          </div>
          <SwiperRightAnimation>
            <Disclosure.Panel>
              <ClickAwayListener onClickAway={() => close()}>
                <div className="h-screen max-w-[250px] bg-primary-500 py-10 px-5 dark:bg-dark-blue text-white font-bold z-50 fixed">
                  <div className="flex justify-end">
                    <Disclosure.Button>
                      <Icon name="close" />
                    </Disclosure.Button>
                  </div>

                  <div className="mt-10 ">
                    <Disclosure.Button onClick={() => router.push('/')}>
                    <img className="w-auto h-7" src="/icons/logo.svg" />
                    </Disclosure.Button>
                  </div>
                  <ul className="flex flex-col p-2 mt-10 space-y-8 text-sm list-disc">
                    <li>
                      <Disclosure.Button onClick={() => router.push('/')}>
                        <p className="text-left">Page d'accueil</p>
                      </Disclosure.Button>
                    </li>
                    <li>
                      <Disclosure.Button onClick={() => router.push('/credits?step=1a')}>
                        <p className="text-left">Crédits R&D (RS&DE) Éligibilité</p>
                      </Disclosure.Button>
                    </li>
                    <li>
                      <Disclosure.Button onClick={() => router.push('/credits?step=1b')}>
                        <p className="text-left">Crédits R&D (RS&DE) Calculateur</p>
                      </Disclosure.Button>
                    </li>
                    <li>
                      <Disclosure.Button onClick={() => router.push('/subventions')}>
                        <p className="text-left">Subventions </p>
                        <p>Admissibilité</p>
                      </Disclosure.Button>
                    </li>
                  </ul>
                </div>
              </ClickAwayListener>
            </Disclosure.Panel>
          </SwiperRightAnimation>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
