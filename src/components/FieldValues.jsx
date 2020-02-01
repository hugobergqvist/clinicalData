import React, { useState } from "react";

const fields = [
  "Acronym",
  "AgreementOtherDetails",
  "AgreementPISponsorEmployee",
  "AgreementRestrictionType",
  "AgreementRestrictiveAgreement",
  "ArmGroupDescription",
  "ArmGroupInterventionName",
  "ArmGroupLabel",
  "ArmGroupType",
  "AvailIPDComment",
  "AvailIPDId",
  "AvailIPDType",
  "AvailIPDURL",
  "BaselineCategoryTitle",
  "BaselineClassDenomCountGroupId",
  "BaselineClassDenomCountValue",
  "BaselineClassDenomUnits",
  "BaselineClassTitle",
  "BaselineDenomCountGroupId",
  "BaselineDenomCountValue",
  "BaselineDenomUnits",
  "BaselineGroupDescription",
  "BaselineGroupId",
  "BaselineGroupTitle",
  "BaselineMeasureCalculatePct",
  "BaselineMeasureDenomCountGroupId",
  "BaselineMeasureDenomCountValue",
  "BaselineMeasureDenomUnits",
  "BaselineMeasureDenomUnitsSelected",
  "BaselineMeasureDescription",
  "BaselineMeasureDispersionType",
  "BaselineMeasureParamType",
  "BaselineMeasurePopulationDescription",
  "BaselineMeasureTitle",
  "BaselineMeasureUnitOfMeasure",
  "BaselineMeasurementComment",
  "BaselineMeasurementGroupId",
  "BaselineMeasurementLowerLimit",
  "BaselineMeasurementSpread",
  "BaselineMeasurementUpperLimit",
  "BaselineMeasurementValue",
  "BaselinePopulationDescription",
  "BaselineTypeUnitsAnalyzed",
  "BioSpecDescription",
  "BioSpecRetention",
  "BriefSummary",
  "BriefTitle",
  "CentralContactEMail",
  "CentralContactName",
  "CentralContactPhone",
  "CentralContactPhoneExt",
  "CentralContactRole",
  "CollaboratorClass",
  "CollaboratorName",
  "CompletionDate",
  "CompletionDateType",
  "Condition",
  "ConditionAncestorId",
  "ConditionAncestorTerm",
  "ConditionBrowseBranchAbbrev",
  "ConditionBrowseBranchName",
  "ConditionBrowseLeafAsFound",
  "ConditionBrowseLeafId",
  "ConditionBrowseLeafName",
  "ConditionBrowseLeafRelevance",
  "ConditionMeshId",
  "ConditionMeshTerm",
  "DelayedPosting",
  "DesignAllocation",
  "DesignInterventionModel",
  "DesignInterventionModelDescription",
  "DesignMasking",
  "DesignMaskingDescription",
  "DesignObservationalModel",
  "DesignPrimaryPurpose",
  "DesignTimePerspective",
  "DesignWhoMasked",
  "DetailedDescription",
  "DispFirstPostDate",
  "DispFirstPostDateType",
  "DispFirstSubmitDate",
  "DispFirstSubmitQCDate",
  "EligibilityCriteria",
  "EnrollmentCount",
  "EnrollmentType",
  "EventGroupDeathsNumAffected",
  "EventGroupDeathsNumAtRisk",
  "EventGroupDescription",
  "EventGroupId",
  "EventGroupOtherNumAffected",
  "EventGroupOtherNumAtRisk",
  "EventGroupSeriousNumAffected",
  "EventGroupSeriousNumAtRisk",
  "EventGroupTitle",
  "EventsDescription",
  "EventsFrequencyThreshold",
  "EventsTimeFrame",
  "ExpAccTypeIndividual",
  "ExpAccTypeIntermediate",
  "ExpAccTypeTreatment",
  "ExpandedAccessNCTId",
  "ExpandedAccessStatusForNCTId",
  "FlowAchievementComment",
  "FlowAchievementGroupId",
  "FlowAchievementNumSubjects",
  "FlowAchievementNumUnits",
  "FlowDropWithdrawComment",
  "FlowDropWithdrawType",
  "FlowGroupDescription",
  "FlowGroupId",
  "FlowGroupTitle",
  "FlowMilestoneComment",
  "FlowMilestoneType",
  "FlowPeriodTitle",
  "FlowPreAssignmentDetails",
  "FlowReasonComment",
  "FlowReasonGroupId",
  "FlowReasonNumSubjects",
  "FlowReasonNumUnits",
  "FlowRecruitmentDetails",
  "FlowTypeUnitsAnalyzed",
  "Gender",
  "GenderBased",
  "GenderDescription",
  "HasExpandedAccess",
  "HealthyVolunteers",
  "IPDSharing",
  "IPDSharingAccessCriteria",
  "IPDSharingDescription",
  "IPDSharingInfoType",
  "IPDSharingTimeFrame",
  "IPDSharingURL",
  "InterventionAncestorId",
  "InterventionAncestorTerm",
  "InterventionArmGroupLabel",
  "InterventionBrowseBranchAbbrev",
  "InterventionBrowseBranchName",
  "InterventionBrowseLeafAsFound",
  "InterventionBrowseLeafId",
  "InterventionBrowseLeafName",
  "InterventionBrowseLeafRelevance",
  "InterventionDescription",
  "InterventionMeshId",
  "InterventionMeshTerm",
  "InterventionName",
  "InterventionOtherName",
  "InterventionType",
  "IsFDARegulatedDevice",
  "IsFDARegulatedDrug",
  "IsPPSD",
  "IsUSExport",
  "IsUnapprovedDevice",
  "Keyword",
  "LargeDocDate",
  "LargeDocFilename",
  "LargeDocHasICF",
  "LargeDocHasProtocol",
  "LargeDocHasSAP",
  "LargeDocLabel",
  "LargeDocTypeAbbrev",
  "LargeDocUploadDate",
  "LastKnownStatus",
  "LastUpdatePostDate",
  "LastUpdatePostDateType",
  "LastUpdateSubmitDate",
  "LeadSponsorClass",
  "LeadSponsorName",
  "LocationCity",
  "LocationContactEMail",
  "LocationContactName",
  "LocationContactPhone",
  "LocationContactPhoneExt",
  "LocationContactRole",
  "LocationCountry",
  "LocationFacility",
  "LocationState",
  "LocationStatus",
  "LocationZip",
  "MaximumAge",
  "MinimumAge",
  "NCTId",
  "NCTIdAlias",
  "OfficialTitle",
  "OrgClass",
  "OrgFullName",
  "OrgStudyId",
  "OrgStudyIdDomain",
  "OrgStudyIdLink",
  "OrgStudyIdType",
  "OtherEventAssessmentType",
  "OtherEventNotes",
  "OtherEventOrganSystem",
  "OtherEventSourceVocabulary",
  "OtherEventStatsGroupId",
  "OtherEventStatsNumAffected",
  "OtherEventStatsNumAtRisk",
  "OtherEventStatsNumEvents",
  "OtherEventTerm",
  "OtherOutcomeDescription",
  "OtherOutcomeMeasure",
  "OtherOutcomeTimeFrame",
  "OutcomeAnalysisCILowerLimit",
  "OutcomeAnalysisCILowerLimitComment",
  "OutcomeAnalysisCINumSides",
  "OutcomeAnalysisCIPctValue",
  "OutcomeAnalysisCIUpperLimit",
  "OutcomeAnalysisCIUpperLimitComment",
  "OutcomeAnalysisDispersionType",
  "OutcomeAnalysisDispersionValue",
  "OutcomeAnalysisEstimateComment",
  "OutcomeAnalysisGroupDescription",
  "OutcomeAnalysisGroupId",
  "OutcomeAnalysisNonInferiorityComment",
  "OutcomeAnalysisNonInferiorityType",
  "OutcomeAnalysisOtherAnalysisDescription",
  "OutcomeAnalysisPValue",
  "OutcomeAnalysisPValueComment",
  "OutcomeAnalysisParamType",
  "OutcomeAnalysisParamValue",
  "OutcomeAnalysisStatisticalComment",
  "OutcomeAnalysisStatisticalMethod",
  "OutcomeAnalysisTestedNonInferiority",
  "OutcomeCategoryTitle",
  "OutcomeClassDenomCountGroupId",
  "OutcomeClassDenomCountValue",
  "OutcomeClassDenomUnits",
  "OutcomeClassTitle",
  "OutcomeDenomCountGroupId",
  "OutcomeDenomCountValue",
  "OutcomeDenomUnits",
  "OutcomeGroupDescription",
  "OutcomeGroupId",
  "OutcomeGroupTitle",
  "OutcomeMeasureAnticipatedPostingDate",
  "OutcomeMeasureCalculatePct",
  "OutcomeMeasureDenomUnitsSelected",
  "OutcomeMeasureDescription",
  "OutcomeMeasureDispersionType",
  "OutcomeMeasureParamType",
  "OutcomeMeasurePopulationDescription",
  "OutcomeMeasureReportingStatus",
  "OutcomeMeasureTimeFrame",
  "OutcomeMeasureTitle",
  "OutcomeMeasureType",
  "OutcomeMeasureTypeUnitsAnalyzed",
  "OutcomeMeasureUnitOfMeasure",
  "OutcomeMeasurementComment",
  "OutcomeMeasurementGroupId",
  "OutcomeMeasurementLowerLimit",
  "OutcomeMeasurementSpread",
  "OutcomeMeasurementUpperLimit",
  "OutcomeMeasurementValue",
  "OverallOfficialAffiliation",
  "OverallOfficialName",
  "OverallOfficialRole",
  "OverallStatus",
  "OversightHasDMC",
  "PatientRegistry",
  "Phase",
  "PointOfContactEMail",
  "PointOfContactOrganization",
  "PointOfContactPhone",
  "PointOfContactPhoneExt",
  "PointOfContactTitle",
  "PrimaryCompletionDate",
  "PrimaryCompletionDateType",
  "PrimaryOutcomeDescription",
  "PrimaryOutcomeMeasure",
  "PrimaryOutcomeTimeFrame",
  "ReferenceCitation",
  "ReferencePMID",
  "ReferenceType",
  "RemovedCountry",
  "ResponsiblePartyInvestigatorAffiliation",
  "ResponsiblePartyInvestigatorFullName",
  "ResponsiblePartyInvestigatorTitle",
  "ResponsiblePartyOldNameTitle",
  "ResponsiblePartyOldOrganization",
  "ResponsiblePartyType",
  "ResultsFirstPostDate",
  "ResultsFirstPostDateType",
  "ResultsFirstSubmitDate",
  "ResultsFirstSubmitQCDate",
  "RetractionPMID",
  "RetractionSource",
  "SamplingMethod",
  "SecondaryId",
  "SecondaryIdDomain",
  "SecondaryIdLink",
  "SecondaryIdType",
  "SecondaryOutcomeDescription",
  "SecondaryOutcomeMeasure",
  "SecondaryOutcomeTimeFrame",
  "SeeAlsoLinkLabel",
  "SeeAlsoLinkURL",
  "SeriousEventAssessmentType",
  "SeriousEventNotes",
  "SeriousEventOrganSystem",
  "SeriousEventSourceVocabulary",
  "SeriousEventStatsGroupId",
  "SeriousEventStatsNumAffected",
  "SeriousEventStatsNumAtRisk",
  "SeriousEventStatsNumEvents",
  "SeriousEventTerm",
  "StartDate",
  "StartDateType",
  "StatusVerifiedDate",
  "StdAge",
  "StudyFirstPostDate",
  "StudyFirstPostDateType",
  "StudyFirstSubmitDate",
  "StudyFirstSubmitQCDate",
  "StudyPopulation",
  "StudyType",
  "TargetDuration",
  "UnpostedEventDate",
  "UnpostedEventType",
  "UnpostedResponsibleParty",
  "VersionHolder",
  "WhyStopped"
];

const FieldValues = () => {
  const [field, setField] = useState("Condition");
  const [condition, setCondition] = useState("heart+attack");
  const [result, setResult] = useState("none");
  const [loading, setLoading] = useState(false);

  const fieldValuesUrl = `https://clinicaltrials.gov/api/query/field_values?expr=${condition}&field=${field}&fmt=json`;

  const fetchData = () => {
    setLoading(true);
    fetch(fieldValuesUrl)
      .then(res => res.json())
      .then(res2 => setResult(res2.FieldValuesResponse))
      .then(() => {
        setLoading(false);
      })
      .catch(err => console.log("error: ", err));

    console.log(result);
  };
  return (
    <div className="bodyWrapper">
      <h3>Field Values</h3>
      <p>
        Returns all values found in a single API field for a set of study
        records. Select the field values returned by using the field parameter.
      </p>
      <form>
        <label>
          Condition
          <input
            type="condition"
            name="condition"
            value={condition.replace("+", " ")}
            onChange={e => setCondition(e.target.value.replace(" ", "+"))}
          />
        </label>
        <br />
        <label>
          Field :
          <select value={field} onChange={e => setField(e.target.value)}>
            {fields.map(row => {
              return (
                <option key={row} value={row}>
                  {row}
                </option>
              );
            })}
          </select>
        </label>
      </form>
      <button
        className="fetchBtn"
        onClick={() => {
          fetchData();
        }}
      >
        fetch
      </button>
      {loading && <p>Loading...</p>}
      {result != "none" && (
        <React.Fragment>
          <p>{`Showing ${result.NUniqueValuesFound} results (NUniqueValuesFound)`}</p>
          <table id="studies">
            <thead>
              <tr>
                <td>{result.Field}</td>
              </tr>
            </thead>
            <tbody>
              {result.FieldValues.map(study => {
                return (
                  <tr key={study.FieldValue}>
                    <td>{study.FieldValue}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </React.Fragment>
      )}
    </div>
  );
};

export default FieldValues;
