import React from 'react';

import {useFormik} from 'formik';


const DataForm = ({submitFunction}) => {

    const handleDataSubmit = inputValues => {
        submitFunction(JSON.stringify(inputValues));
    }

    const formik = useFormik({

        initialValues: {

            company: '',

            sales: '',

            cooperation: '',

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

                type="text"

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
            <button type="submit">Submit</button>

        </form>

    );

};

export default DataForm