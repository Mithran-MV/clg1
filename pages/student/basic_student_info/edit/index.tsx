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

   
const Survey = ({forms}) => {
  const post_url = "/basic_student_info/update/" + forms[0].user_id;
return(
<div>
<PageContainer title="Edit student info" description="Edit student basic info scuh as address,phone number,etc.">
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
console.log("inside getServerSideProps");
const url =  'https://dev.teamvlog.in/basic_student_info/student_edit';
console.log(url);
const res = await fetch(url, {method: 'POST', headers: {'Content-Type': 'application/json', 'Cookie':context.req.headers.cookie}});
const forms = await res.json();
return {
  props: {forms},
};
}

export default Survey;
