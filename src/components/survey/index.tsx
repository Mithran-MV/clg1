import React from "react"
import * as Survey from "survey-react" // import surveyjs
import PageContainer from '../container/PageContainer';
import { Grid, Typography, Box, Breadcrumbs, Theme } from "@mui/material";

// Modern theme
import "survey-react/modern.min.css"
// import 'survey-react/survey.min.css';

interface SurveyType {
    formSchema: object
    formValues: object | null
    backUrl: string
}

interface SurveyResult {
  formResults: object 
  backUrlLink: string
}

const SurveyComponent = ({formSchema, formValues, backUrl}:SurveyType) => {
  Survey.StylesManager.applyTheme("modern")
  const survey = new Survey.Model(formSchema)
  survey.data = formValues
  
survey.onComplete.add(function(survey) {
    saveSurvey({formResults: survey.data, backUrlLink: backUrl})
})

survey.onCurrentPageChanged.add(function(survey) {
  console.log("page_changed")
  saveSurvey({formResults: survey.data, backUrlLink: backUrl})
})

  return (
    <PageContainer>
      <Survey.Survey model={survey} />
    </PageContainer>
  )
}



const saveSurvey = async ({formResults, backUrlLink}:SurveyResult) => {
  const url =  'http://64.227.138.229:4000' + backUrlLink
  console.log(url)
  console.log(formResults)
  const res = await fetch(url, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(formResults)});
  console.log(res)
}


export default SurveyComponent