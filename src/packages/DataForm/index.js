import React from 'react';

import {useFormik} from 'formik';
import DiscountMoneySpent from "../../helpers/discount/AmountSpent";
import DiscountFrequency from "../../helpers/discount/Frequency";
import DiscountMonths from "../../helpers/discount/MonthsOfCooperation";
import weightedAverage from "../../helpers/discount/DiscountsAverage";

const DataForm = ({submitFunction}) => {

    const handleDataSubmit = inputValues => {

        let discMoney = DiscountMoneySpent(inputValues.sales);
        let discFrequency = DiscountFrequency(inputValues.frequency);
        let discMonths = DiscountMonths(inputValues.cooperation);


        let discountValue = weightedAverage(
            discMoney.value,
            discFrequency.value,
            discMonths.value
        ).toFixed(2);

        const dataToExport = {
            company: inputValues.company,
            discMoney: discMoney,
            discFrequency: discFrequency,
            discMonths: discMonths,
            discount: discountValue
        }

       submitFunction(JSON.stringify(dataToExport));
    }

    const formik = useFormik({

        initialValues: {

            company: '',

            sales: '',

            cooperation: '',

            frequency: ''

        },

        onSubmit: values => {

            handleDataSubmit(values)

        },

    });

    return (

        <form onSubmit={formik.handleSubmit}>
        <p>
            <label htmlFor="company">Klient</label><br />

            <input

                id="company"

                name="company"

                type="text"

                onChange={formik.handleChange}

                value={formik.values.company}

            />
        </p>
        <p>
            <label htmlFor="sales">Wydane kwoty</label><br />

            <input

                id="sales"

                name="sales"

                type="number"

                onChange={formik.handleChange}

                value={formik.values.sales}

            />
        </p>
        <p>
            <label htmlFor="cooperation">Długość współpracy</label><br />

            <input

                id="cooperation"

                name="cooperation"

                type="number"

                onChange={formik.handleChange}

                value={formik.values.cooperation}

            />
        </p>
        <p>
           <label htmlFor="frequency">Częstotliwość współpracy</label><br />

            <input

                id="frequency"

                name="frequency"

                type="number"

                onChange={formik.handleChange}

                value={formik.values.frequency}

             />
        </p>
            <button type="submit">Submit</button>

        </form>

    );

};

export default DataForm