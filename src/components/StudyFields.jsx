import React, { useState, useEffect } from "react";

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

const StudyFields = () => {
  const [field, setField] = useState("Condition");
  const [minRank, setMinRank] = useState(1);
  const [maxRank, setMaxRank] = useState(5);
  const [condition, setCondition] = useState("heart+attack");
  const [selectedFields, setSelectedFields] = useState(["BriefTitle"]);
  const [result, setResult] = useState("none");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [selectedFields]);

  const addFieldToList = () => {
    if (!selectedFields.includes(field)) {
      setSelectedFields([...selectedFields, field]);
    }
  };

  const removeFieldFromList = fieldToRemove => {
    const newArr = [...selectedFields];
    newArr.splice(selectedFields.indexOf(fieldToRemove), 1);
    setSelectedFields([...newArr]);
  };

  const fetchData = () => {
    setLoading(true);
    let conditionString = "";
    selectedFields.map(field => {
      if (selectedFields.length != selectedFields.indexOf(field) + 1) {
        conditionString = conditionString.concat(`${field}%2C`);
      } else {
        conditionString = conditionString.concat(`${field}`);
      }
    });
    const fetchUrl = `https://clinicaltrials.gov/api/query/study_fields?expr=${condition}&fields=${conditionString}&min_rnk=${minRank}&max_rnk=${maxRank}&fmt=json`;

    fetch(fetchUrl)
      .then(res => res.json())
      .then(res2 => {
        setResult(res2.StudyFieldsResponse.StudyFields);
        console.log(res2.StudyFieldsResponse.StudyFields);
      })
      .then(() => {
        setLoading(false);
      })
      .catch(err => console.log("error: ", err));
  };

  return (
    <div className="bodyWrapper">
      <h2>Study Fields</h2>
      <p>
        Returns values from selected API fields for a large set of study
        records. Select the fields returned using the fields parameter.
      </p>
      <form>
        <label>
          Start at rank
          <input
            type="minRank"
            name="minRank"
            value={minRank}
            onChange={e => setMinRank(e.target.value)}
          />
        </label>
        <br />
        <label>
          End at rank
          <input
            type="maxRank"
            name="maxRank"
            value={maxRank}
            onChange={e => setMaxRank(e.target.value)}
          />
        </label>
        <br />
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
          Fields :
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
        className="inputBtn"
        onClick={() => {
          addFieldToList();
        }}
      >
        Add field
      </button>
      <button
        style={{ marginLeft: "20px" }}
        className="fetchBtn"
        onClick={() => fetchData()}
      >
        Fetch
      </button>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "8px",
          borderTop: "1px solid grey",
          borderBottom: "1px solid grey"
        }}
      >
        <p style={{ margin: "0px" }}>Fetching fields:</p>
        {selectedFields.map(elem => {
          return (
            <div
              style={{
                padding: "8px",
                paddingTop: "4px",
                paddingBottom: "4px",
                margin: "4px",
                backgroundColor: "#3770cc",
                color: "white",
                borderRadius: "15px",
                cursor: "pointer"
              }}
              onClick={() => {
                removeFieldFromList(elem);
              }}
              key={elem}
            >
              <p style={{ margin: "0px" }}>{elem}</p>
            </div>
          );
        })}
      </div>

      {loading && <p>Loading...</p>}
      {result != "none" && (
        <table id="studies">
          <thead>
            <tr>
              <td>Rank</td>
              {selectedFields.map(e => {
                return <td>{e}</td>;
              })}
            </tr>
          </thead>
          <tbody>
            {result.map(study => {
              return (
                <tr key={study.BriefTitle}>
                  <td>{study.Rank}</td>
                  {selectedFields.map(e => {
                    if (study[e]) {
                      return (
                        <td>
                          {study[e].map(el => {
                            return <p style={{ margin: "2px" }}>{`${el}`}</p>;
                          })}
                        </td>
                      );
                    }
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudyFields;
