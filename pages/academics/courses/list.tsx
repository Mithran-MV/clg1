import { Typography } from '@mui/material';
import React from "react";
import dynamic from "next/dynamic";
import Breadcrumb from '../../../src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../src/components/container/PageContainer';
import DashboardCard from '../../../src/components/shared/DashboardCard';

const TableComponent = dynamic(() => import("../../../src/components/table"), {
    ssr: true,
  });

    const columns = [
        { title: "Course code", field: "course_code", headerFilter:"input"},
        { title: "Course name", field: "course_name", headerFilter:"input" },
        { title: "Course slug", field: "course_slug", headerFilter:"input" },
        { title:"",formatter:"link",
            formatterParams:{
                label:"edit",
                urlPrefix:"http://localhost:4000/courses/list",
                urlField:"entity_id",
            }
        },
    ];

    const table = ({data}:any) => {
            
            return(
                <TableComponent data={data} columns={columns} layout={"fitDataTable"} options={{ pagination: 'true', paginationCounter:'rows', paginationSize: 20}}/>
            )
        }

        export async function getServerSideProps(context) {
    
            const url = process.env.API_ENDPOINT + '/courses/list';
            const res = await fetch(url, {method: 'GET', headers: {'Content-Type': 'application/json','Cookie':context.req.headers.cookie}});
            var data = await res.json();
            return {
                props: {data},
            };
        }


        export default table;