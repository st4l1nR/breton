import React from 'react';
import { Title, Radio, TextField, Select } from '@components/atoms';
import { FooterStep } from '@components/molecules/indext';
import classNames from '@lib/classNames';
import { UseFormReturn, Controller } from 'react-hook-form';
import { CreditFormInput } from '@ctypes/local';
import { NumericFormat } from 'react-number-format';

export type props = {
  className?: string;
} & UseFormReturn<CreditFormInput>;

const Step1B: React.FC<props> = ({ className, register, formState: { errors }, control, watch }) => {
  const sourceOptions = [
    {
      name: 'Aucun',
      value: 'Aucun',
    },
    {
      name: 'PARI',
      value: 'PARI',
    },
    {
      name: 'CRSNG',
      value: 'CRSNG',
    },
    {
      name: 'TDDC',
      value: 'TDDC',
    },
    {
      name: 'Fonds stratégiques pour',
      value: 'Fonds stratégiques pour',
    },
    {
      name: 'l’innovation',
      value: 'l’innovation',
    },
    {
      name: 'MITACS',
      value: 'MITACS',
    },
    {
      name: 'Autre',
      value: 'Autre',
    },
  ];
  return (
    <div className={classNames('py-10 card px-14', className)}>
      <Title
        level="h6"
        text="Vous pouvez calculer ci-joint les montants de crédits RS&DE auxquels vous avez droit."
      />
      <div className="mt-12 flex flex-col space-y-8 divide-y">
        <div className="flex space-x-5 pb-5">
          <div className="circle"></div>
          <div className="w-full">
            <Title level="h5" text="Type de corporation" />
            <div className="mt-7 flex flex-col space-y-5">
              <Radio
                label="Société privée sous contrôle canadien (SPCC)"
                value="sppc"
                {...register('corporationType')}
              />
              <Radio label="Non-SPCC" value="non-sspc" {...register('corporationType')} />
            </div>
          </div>
        </div>
        <div className="flex space-x-5 pt-5">
          <div className="circle"></div>
          <div className="w-full">
            <Title
              level="h5"
              text="Total des salaires pour des activités de RS&DE (entrer des nombres entiers)"
            />
            <div className="mt-7">
              <div>
                <Controller
                  name="totalSalaries"
                  rules={{ required: 'Obligatore' }}
                  render={({ field: { onChange, value } }) => (
                    <NumericFormat
                      className="textfield-primary w-full max-w-md"
                      value={value}
                      fixedDecimalScale
                      allowNegative={false}
                      decimalScale={2}
                      thousandSeparator=","
                      onValueChange={(v) => {
                        onChange(v.floatValue);
                      }}
                      suffix="$"
                    />
                  )}
                  control={control}
                />
                {errors.totalSalaries && (
                  <p className="mt-1 ml-1 text-xs text-red-500 ">{errors.totalSalaries.message}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-5 pt-5">
          <div className="circle"></div>
          <div className="w-full">
            <Title level="h5" text="Matériaux utilisés pour la RS&DE  (entrer des nombres entiers)" />
            <div className="mt-7">
              <div>
                <Controller
                  name="totalMaterials"
                  rules={{ required: 'Obligatore' }}
                  render={({ field: { onChange, value } }) => (
                    <NumericFormat
                      className="textfield-primary w-full max-w-md"
                      value={value}
                      fixedDecimalScale
                      allowNegative={false}
                      decimalScale={2}
                      thousandSeparator=","
                      onValueChange={(v) => {
                        onChange(v.floatValue);
                      }}
                      suffix="$"
                    />
                  )}
                  control={control}
                />
                {errors.totalMaterials && (
                  <p className="mt-1 ml-1 text-xs text-red-500 ">{errors.totalMaterials.message}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-5 pt-5">
          <div className="circle"></div>
          <div className="w-full">
            <Title
              level="h5"
              text="Total sous-traitants (Canadiens) pour des travaux de RS&DE  (entrer des nombres entiers)"
            />
            <div className="mt-7">
              <div>
                <Controller
                  name="totalSubcontractors"
                  rules={{ required: 'Obligatore' }}
                  render={({ field: { onChange, value } }) => (
                    <NumericFormat
                      className="textfield-primary w-full max-w-md"
                      value={value}
                      fixedDecimalScale
                      allowNegative={false}
                      decimalScale={2}
                      thousandSeparator=","
                      onValueChange={(v) => {
                        onChange(v.floatValue);
                      }}
                      suffix="$"
                    />
                  )}
                  control={control}
                />
                {errors.totalSubcontractors && (
                  <p className="mt-1 ml-1 text-xs text-red-500 ">{errors.totalSubcontractors.message}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-5 pt-5">
          <div className="circle"></div>
          <div className="w-full">
            <Title level="h5" text="Source de financement" />
            <div className="mt-7">
              <Select
                className="max-w-md"
                options={sourceOptions}
                error={errors.sourceFunding?.message}
                {...register('sourceFunding', { required: 'Obligatoire' })}
              />
            </div>
          </div>
        </div>
        <div className="flex space-x-5 pt-5">
          <div className="circle"></div>
          <div className="w-full">
            <Title level="h5" text="Montant du financement (entrer des nombres entiers)" />
            <div className="mt-7">
              <div>
                <Controller
                  name="totalFunding"
                  rules={{ required: 'Obligatore' }}
                  render={({ field: { onChange, value } }) => (
                    <NumericFormat
                      className="textfield-primary w-full max-w-md"
                      value={value}
                      fixedDecimalScale
                      allowNegative={false}
                      decimalScale={2}
                      thousandSeparator=","
                      onValueChange={(v) => {
                        onChange(v.floatValue);
                      }}
                      suffix="$"
                    />
                  )}
                  control={control}
                />
                {errors.totalFunding && (
                  <p className="mt-1 ml-1 text-xs text-red-500 ">{errors.totalFunding.message}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <FooterStep className="pt-5" prev="1a" />
      </div>
    </div>
  );
};

export default Step1B;
