import React from 'react';

import FormField from '../../molecules/formField/FormField';
import Button from '../../atoms/button/Button';
import SubHeading from '../../atoms/subHeading/SubHeading';

import { properties } from '../../../assets/properties';

const AddCardSection = () => (
  <section>
    <SubHeading text={`Add`} />
    <form>
      <fieldset>
        {
          properties.addCardFormFields.map((item, index) => {
            return (
              <FormField
                label={item.label}
                type={item.type}
                min={item.min}
                max={item.max}
                id={item.id}
                key={index}
              />
            )      
          })
        }
        
      </fieldset>
      <Button 
        type={`button`}
        text={`Add`}
        onClick={() => alert('clicked')}
        />
    </form>
  </section>
)

export default AddCardSection;