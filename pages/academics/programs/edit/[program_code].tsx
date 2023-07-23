import { Typography } from '@mui/material';
import React from "react";
import dynamic from "next/dynamic";
import Breadcrumb from '../../../../src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../../src/components/container/PageContainer';
import DashboardCard from '../../../../src/components/shared/DashboardCard';
import { useRouter } from 'next/router'

const SurveyComponent = dynamic(() => import("../../../../src/components/survey"), {
    ssr: false,
  });

  
const Survey = ({forms, program_code}) => {
    const post_url = "/programs/update/" + program_code;
return(
<div>
  <PageContainer title="Edit Form Field" description="Edit entry fields with options like Designations, Languages etc. for using in dropdown and multi-select type fields.">
    <DashboardCard title="Edit Form Field">
        <Typography>Edit entry fields with options like Designations, Languages etc. for using in dropdown and multi-select type fields.</Typography>
    </DashboardCard>
            {forms.map(form => (
                <div key={form.form_details.form_slug}>
                  <SurveyComponent formSchema={form.form_details.form_schema} formValues={form.form_values} backUrl={post_url} />
                </div>
            ))}
    </PageContainer>
</div>
)}


export async function getServerSideProps(context) {
  const code = context.query.program_code;
  const url = process.env.API_ENDPOINT + '/programs/edit/' + code;
  const res = await fetch(url, {method: 'POST', headers: {'Content-Type': 'application/json'}});
  const forms = await res.json();
  return {
    props: {forms, code},
  };
}

export default Survey;
