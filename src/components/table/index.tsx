import React from "react"
import 'react-tabulator/lib/styles.css';
import { ReactTabulator } from 'react-tabulator';
import '../../../node_modules/tabulator-tables/dist/css/tabulator_modern.min.css';
import '../../../node_modules/tabulator-tables/dist/js/tabulator.min.js';
import 'font-awesome/css/font-awesome.min.css';




const TableComponent = ({data, columns, layout, options, events}:any) => {
    

    return (
        <ReactTabulator data={data} columns={columns} layout={layout} options={options} events={events} />
    )

    }

    export default TableComponent